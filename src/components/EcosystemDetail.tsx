import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { businessPillarsData } from '../types';
import { ArrowUpRight, CheckCircle2, Cpu, Globe, Rocket, Zap, Eye, Database, HelpCircle, GraduationCap } from 'lucide-react';

export const EcosystemDetail: React.FC = () => {
  const { language, t } = useLanguage();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const pillars = businessPillarsData[language];

  return (
    <section id="ecosystems" className="py-24 bg-white relative overflow-hidden">
      {/* Background soft lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#4F46E5]/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono tracking-[0.2em] text-[#0891B2] uppercase font-bold">
              {language === 'ar' ? 'ورشة الأنظمة' : language === 'it' ? 'WORKSHOP DEI SISTEMI' : 'SYSTEMS WORKSHOP'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-medium tracking-tight text-[#0F172A] mt-1">
              {t.pillars.sectionTitle}
            </h2>
            <p className="text-slate-600 mt-4 leading-relaxed font-sans text-base sm:text-lg">
              {t.pillars.sectionSubtitle}
            </p>
          </div>
        </div>

        {/* Three Large Eco Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ECOSYSTEM 1: BUSINESS GROWTH */}
          <div 
            className="group relative rounded-3xl bg-[#F8F9FA] backdrop-blur-xl border border-black/5 p-8 transition-all duration-500 hover:border-[#0891B2]/30 hover:shadow-xl hover:shadow-cyan-100 hover:scale-[1.01] flex flex-col justify-between"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div>
              {/* Card visual header */}
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-[#0891B2]/20 flex items-center justify-center text-[#0891B2]">
                  <Rocket className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-slate-500 bg-black/5 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {language === 'ar' ? 'النظام ٠١' : language === 'it' ? 'ECOSISTEMA 01' : 'ECOSYSTEM 01'}
                </span>
              </div>

              <h3 className="text-2xl font-sans font-semibold text-[#0F172A] tracking-tight mb-2 group-hover:text-[#0891B2] transition-colors">
                {pillars.growth.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-8">
                {pillars.growth.tagline}
              </p>

              {/* Items List */}
              <div className="space-y-4 border-t border-black/5 pt-6">
                {pillars.growth.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 font-sans leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-black/5">
              <a 
                href="#diagnostic" 
                className="flex items-center justify-between text-xs font-mono text-slate-500 hover:text-[#0891B2] transition-colors"
                onClick={() => {
                  const el = document.getElementById('diagnostic');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>{language === 'ar' ? 'هندسة هذا النظام' : language === 'it' ? 'PROGETTA QUESTO SISTEMA' : 'ENGINEER THIS SYSTEM'}</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* ECOSYSTEM 2: DIGITAL TRANSFORMATION */}
          <div 
            className="group relative lg:col-span-1 rounded-3xl bg-[#F8F9FA] backdrop-blur-xl border border-black/5 p-8 transition-all duration-500 hover:border-[#4F46E5]/40 hover:shadow-xl hover:shadow-indigo-100 hover:scale-[1.01] flex flex-col justify-between"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div>
              {/* Card visual header */}
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-[#4F46E5]/20 flex items-center justify-center text-[#4F46E5]">
                  <Cpu className="w-5 h-5 animate-pulse" />
                </div>
                <span className="text-[10px] font-mono text-[#4F46E5] bg-[#4F46E5]/10 px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold">
                  {language === 'ar' ? 'النظام ٠٢' : language === 'it' ? 'ECOSISTEMA 02' : 'ECOSYSTEM 02'}
                </span>
              </div>

              <h3 className="text-2xl font-sans font-semibold text-[#0F172A] tracking-tight mb-2 group-hover:text-[#4F46E5] transition-colors">
                {pillars.digital.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {pillars.digital.tagline}
              </p>

              {/* Items List */}
              <div className="space-y-3.5 border-t border-black/5 pt-5 mb-6">
                {pillars.digital.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#4F46E5] shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 font-sans leading-tight">{item}</span>
                  </div>
                ))}
              </div>

              {/* Featured Sub-Capability Box: Intelligence Systems */}
              {pillars.digital.featured && (
                <div className="mt-6 p-4 rounded-xl bg-white border border-black/5 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 blur-2xl rounded-full" />
                  <span className="text-[10px] font-mono tracking-wider text-[#4F46E5] uppercase font-semibold flex items-center gap-1.5 mb-2">
                    <Database className="w-3.5 h-3.5" />
                    {pillars.digital.featured}
                  </span>
                  <div className="grid grid-cols-1 gap-2">
                    {pillars.digital.featuredItems?.map((featItem, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#0891B2] shrink-0" />
                        <span className="text-[10px] text-slate-500 font-mono leading-none">{featItem}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-black/5">
              <a 
                href="#diagnostic" 
                className="flex items-center justify-between text-xs font-mono text-slate-500 hover:text-[#4F46E5] transition-colors"
                onClick={() => {
                  const el = document.getElementById('diagnostic');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>{language === 'ar' ? 'نشر أجهزة الذكاء' : language === 'it' ? 'IMPLEMENTA HARDWARE' : 'DEPLOY INTELLIGENCE HARDWARE'}</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* ECOSYSTEM 3: LEARNING & TRANSFORMATION */}
          <div 
            className="group relative rounded-3xl bg-[#F8F9FA] backdrop-blur-xl border border-black/5 p-8 transition-all duration-500 hover:border-[#0891B2]/30 hover:shadow-xl hover:shadow-cyan-100 hover:scale-[1.01] flex flex-col justify-between"
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div>
              {/* Card visual header */}
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-[#0891B2]/20 flex items-center justify-center text-[#0891B2]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-slate-500 bg-black/5 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {language === 'ar' ? 'النظام ٠٣' : language === 'it' ? 'ECOSISTEMA 03' : 'ECOSYSTEM 03'}
                </span>
              </div>

              <h3 className="text-2xl font-sans font-semibold text-[#0F172A] tracking-tight mb-2 group-hover:text-[#0891B2] transition-colors">
                {pillars.learning.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-8">
                {pillars.learning.tagline}
              </p>

              {/* Items List */}
              <div className="space-y-4 border-t border-black/5 pt-6">
                {pillars.learning.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 font-sans leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-black/5">
              <a 
                href="#academy" 
                className="flex items-center justify-between text-xs font-mono text-slate-500 hover:text-[#0891B2] transition-colors"
                onClick={() => {
                  const el = document.getElementById('academy');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>{language === 'ar' ? 'فتح خزانة المناهج' : language === 'it' ? 'APRI CATALOGO CORSI' : 'OPEN CURRICULUM VAULT'}</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
