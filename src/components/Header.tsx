import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Menu, X, Cpu, Globe } from 'lucide-react';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t.nav.ecosystems, href: '#ecosystems' },
    { label: t.nav.solutions, href: '#solutions' },
    { label: t.nav.academy, href: '#academy' },
    { label: t.nav.whyUs, href: '#whyus' },
    { label: t.nav.founder, href: '#founder' },
    { label: t.nav.diagnostic, href: '#diagnostic' },
  ];

  const handleLanguageSwitch = (lang: 'en' | 'ar' | 'it') => {
    setLanguage(lang);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F8F9FA]/80 backdrop-blur-lg border-b border-black/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#4F46E5] to-[#0891B2] p-[1px] shadow-lg shadow-[#4F46E5]/10 transition-transform duration-500 group-hover:rotate-180">
              <div className="flex items-center justify-center w-full h-full rounded-full bg-white">
                <Cpu className="w-5 h-5 text-[#0891B2] group-hover:text-[#4F46E5] transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-r from-[#0F172A] to-slate-500 uppercase">
                {language === 'ar' ? 'طاحون' : 'TAHOUN'}
              </span>
              <span className="text-[10px] font-mono tracking-[0.4em] text-[#4F46E5] uppercase font-bold -mt-0.5">
                {language === 'ar' ? 'INTELLIGENCE' : language === 'it' ? 'INTELLIGENZA' : 'INTELLIGENCE'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2 items-center rtl:space-x-reverse">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-lg text-slate-600 hover:text-[#0F172A] text-xs lg:text-sm font-medium transition-all duration-200 hover:bg-black/[0.03] whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Area (Language Switcher + CTA Button) */}
          <div className="hidden md:flex items-center gap-6 rtl:flex-row-reverse">
            {/* EN | AR | IT elegant switcher */}
            <div className="flex items-center rounded-full bg-black/5 p-1 border border-black/10 font-mono text-xs">
              {(['en', 'ar', 'it'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLanguageSwitch(lang)}
                  className={`px-3 py-1 rounded-full transition-all duration-300 cursor-pointer ${
                    language === lang
                      ? 'bg-[#4F46E5] text-white shadow-md font-semibold'
                      : 'text-slate-600 hover:text-[#0F172A]'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            <a
              href="#diagnostic"
              className="relative group overflow-hidden px-4 lg:px-6 py-2.5 border border-black/10 rounded-full text-[10px] lg:text-[11px] tracking-widest uppercase text-[#0F172A] backdrop-blur-md hover:bg-[#0F172A] hover:text-white transition-all duration-300 whitespace-nowrap"
            >
              <span className="relative z-10 font-medium whitespace-nowrap">{t.nav.ctaButton}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-4">
            <div className="flex items-center rounded-full bg-black/5 p-0.5 border border-black/10 font-mono text-[10px]">
              {(['en', 'ar', 'it'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLanguageSwitch(lang)}
                  className={`px-2 py-0.5 rounded-full transition-all duration-300 ${
                    language === lang
                      ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold'
                      : 'text-slate-600'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-slate-600 hover:text-[#0F172A] hover:bg-black/5 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-black/5 px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-3 rounded-lg text-slate-600 hover:text-[#0F172A] text-base font-medium hover:bg-black/5"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 border-t border-black/5 flex flex-col gap-4">
            <a
              href="#diagnostic"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-[#4F46E5] to-[#0891B2] text-white font-semibold text-sm shadow-lg shadow-[#4F46E5]/45"
            >
              {t.nav.ctaButton}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
