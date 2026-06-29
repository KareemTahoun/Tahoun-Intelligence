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
    
    // Dynamic SEO Metadata Configuration
    const baseTitle = "Tahoun Intelligence : Intelligent Systems For Growth & Transformation";
    let desc = "Premium systemic growth and digital transformation architecture for businesses and professionals.";
    
    if (language === 'ar') {
      document.documentElement.dir = 'rtl';
      document.body.dir = 'rtl';
      document.body.style.fontFamily = '"Cairo", "Inter", sans-serif';
      desc = "بنية تحتية متقدمة للنمو المنهجي والتحول الرقمي للشركات والمحترفين.";
      document.title = "Tahoun Intelligence : أنظمة ذكية للنمو والتحول";
    } else if (language === 'it') {
      document.documentElement.dir = 'ltr';
      document.body.dir = 'ltr';
      document.body.style.fontFamily = '"Inter", sans-serif';
      desc = "Architettura premium di crescita sistemica e trasformazione digitale per aziende e professionisti.";
      document.title = "Tahoun Intelligence : Sistemi Intelligenti per Crescita e Trasformazione";
    } else {
      document.documentElement.dir = 'ltr';
      document.body.dir = 'ltr';
      document.body.style.fontFamily = '"Inter", sans-serif';
      document.title = baseTitle;
    }

    // Update Meta Tags dynamically
    const updateMetaTag = (selector: string, content: string) => {
      let el = document.querySelector(selector);
      if (el) el.setAttribute("content", content);
    };

    updateMetaTag('meta[name="description"]', desc);
    updateMetaTag('meta[property="og:title"]', document.title);
    updateMetaTag('meta[property="og:description"]', desc);
    updateMetaTag('meta[property="twitter:title"]', document.title);
    updateMetaTag('meta[property="twitter:description"]', desc);

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
