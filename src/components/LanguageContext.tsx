import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, LocalizationBundle, localization } from '../types';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: LocalizationBundle;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('tahoun_lang', lang);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('tahoun_lang') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'ar' || savedLang === 'it')) {
      setLanguageState(savedLang);
    }
  }, []);

  useEffect(() => {
    // Dynamic body typography alignment and direction handling
    document.documentElement.lang = language;
    if (language === 'ar') {
      document.documentElement.dir = 'rtl';
      document.body.dir = 'rtl';
      document.body.style.fontFamily = '"Cairo", "Inter", sans-serif';
    } else {
      document.documentElement.dir = 'ltr';
      document.body.dir = 'ltr';
      document.body.style.fontFamily = '"Inter", sans-serif';
    }
  }, [language]);

  const t = localization[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
