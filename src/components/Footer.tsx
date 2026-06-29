import React from 'react';
import { useLanguage } from './LanguageContext';
import { Cpu, Mail, Globe, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('hero');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-black/5 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        
        {/* Left side branding logo */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-[#0891B2]" />
            <span className="text-base font-sans font-bold tracking-widest text-[#0F172A]">
              {language === 'ar' ? 'طاحون INTELLIGENCE' : language === 'it' ? 'INTELLIGENZA TAHOUN' : 'TAHOUN INTELLIGENCE'}
            </span>
          </div>
          <p className="text-[10px] font-mono tracking-widest text-slate-500 uppercase mt-1">
            {t.footer.tagline}
          </p>
        </div>

        {/* Middle Navigation area */}
        <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-500 font-mono">
          <a href="#ecosystems" className="hover:text-[#0F172A] transition-colors">{t.nav.ecosystems}</a>
          <a href="#solutions" className="hover:text-[#0F172A] transition-colors">{t.nav.solutions}</a>
          <a href="#academy" className="hover:text-[#0F172A] transition-colors">{t.nav.academy}</a>
          <a href="#founder" className="hover:text-[#0F172A] transition-colors">{t.nav.founder}</a>
          <a href="mailto:info@adamresearchcenter.net" className="hover:text-[#0F172A] transition-colors flex items-center gap-1.5 justify-center">
            <Mail className="w-3.5 h-3.5 text-[#4F46E5]" />
            <span>{language === 'ar' ? 'مركز الاستشارات' : language === 'it' ? 'Centro di Consulenza' : 'Consulting Center'}</span>
          </a>
        </div>

        {/* Right side copyright details */}
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-mono text-slate-500">
            {t.footer.copyright}
          </span>
          <button 
            onClick={handleScrollTop}
            className="w-8 h-8 rounded-full bg-slate-50 border border-black/5 flex items-center justify-center text-slate-500 hover:text-[#0F172A] hover:bg-black/5 transition-colors cursor-pointer shadow-sm"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
