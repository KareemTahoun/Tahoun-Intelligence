import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { industrySolutionsData } from '../types';
import { Stethoscope, Award, ShoppingBag, Rocket, Briefcase, ChevronRight, X, AlertTriangle, Cpu, TrendingUp } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Stethoscope,
  Award,
  ShoppingBag,
  Rocket,
  Briefcase
};

export const IndustrySolutions: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedSolutionIdx, setSelectedSolutionIdx] = useState<number | null>(0);

  const solutions = industrySolutionsData[language];

  return (
    <section id="solutions" className="py-24 bg-[#FAFAFA] relative overflow-hidden border-t border-black/5">
      {/* Background glow effects */}
      <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-[#0891B2]/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-[#4F46E5]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.2em] text-[#4F46E5] uppercase font-bold">
            {language === 'ar' ? 'التصنيف المؤسسي' : language === 'it' ? 'CLASSIFICAZIONE AZIENDALE' : 'ENTERPRISE CLASSIFICATION'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-medium tracking-tight text-[#0F172A] mt-1">
            {t.solutions.sectionTitle}
          </h2>
          <p className="text-slate-600 mt-4 leading-relaxed font-sans text-base sm:text-lg">
            {t.solutions.sectionSubtitle}
          </p>
        </div>

        {/* Dynamic Bento Solution Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Sectors Navigation Pane (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {solutions.map((sol, idx) => {
              const IconComp = iconMap[sol.iconName] || Briefcase;
              const isSelected = selectedSolutionIdx === idx;
              
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedSolutionIdx(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    isSelected 
                      ? 'bg-white shadow-sm border-[#4F46E5] shadow-[#4F46E5]/10 rtl:text-right' 
                      : 'bg-white/50 border-black/5 hover:border-black/10 hover:bg-white backdrop-blur-xl rtl:text-right'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-[#4F46E5] text-white' : 'bg-black/5 text-slate-500 group-hover:text-[#4F46E5]'
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className={`text-sm font-sans font-semibold transition-colors ${
                        isSelected ? 'text-[#0F172A]' : 'text-slate-600 group-hover:text-[#0F172A]'
                      }`}>
                        {sol.title}
                      </h4>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                        {language === 'ar' ? 'الوحدة النظامية' : language === 'it' ? 'Modulo di Sistema' : 'System Module'} {idx + 1}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    isSelected ? 'text-[#4F46E5] translate-x-1 rtl:-translate-x-1' : 'text-slate-400 group-hover:text-slate-600'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Specification Terminal View (7 cols) */}
          <div className="lg:col-span-7">
            {selectedSolutionIdx !== null && (
              <div className="rounded-3xl bg-white border border-black/5 backdrop-blur-xl overflow-hidden shadow-2xl shadow-slate-300/50 animate-fade-in relative min-h-[460px] flex flex-col justify-between">
                
                {/* Simulated Glass/Brushed Header */}
                <div className="px-6 py-4 bg-slate-50 backdrop-blur-md border-b border-black/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                    <span className="text-xs font-mono text-slate-500 ml-2 rtl:mr-2">
                      {language === 'ar' ? 'ملف-مواصفات-التدقيق.yaml' : language === 'it' ? 'specifiche-audit-sistema.yaml' : 'sys-audit-specifications.yaml'}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#0891B2] uppercase tracking-widest bg-cyan-50 px-2.5 py-0.5 rounded border border-[#0891B2]/20">
                    {language === 'ar' ? 'الحالة: متصل' : language === 'it' ? 'Stato: Connesso' : 'Live Status: Connected'}
                  </span>
                </div>

                <div className="p-6 sm:p-8 space-y-6">
                  {/* Current Active Title */}
                  <div className="border-b border-black/5 pb-4">
                    <span className="text-[10px] font-mono text-slate-500 tracking-wider uppercase block">
                      {language === 'ar' ? 'التصنيف المستهدف' : language === 'it' ? 'CLASSIFICAZIONE TARGET' : 'TARGET CLASSIFICATION'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-sans font-bold text-[#0F172A] mt-1">
                      {solutions[selectedSolutionIdx].title}
                    </h3>
                  </div>

                  {/* Specification Breakdown in 3 Pillars (Challenges, Systems, Outcomes) */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* Column 1: Challenges (Pain) */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-red-400 font-mono text-xs uppercase font-semibold">
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                        <span>{t.solutions.challengesLabel}</span>
                      </div>
                      <div className="space-y-3">
                        {solutions[selectedSolutionIdx].challenges.map((challenge, i) => (
                          <div key={i} className="text-xs text-slate-500 leading-relaxed font-sans border-l-2 border-red-500/30 pl-3 rtl:border-l-0 rtl:border-r-2 rtl:border-red-500/30 rtl:pl-0 rtl:pr-3">
                            {challenge}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Column 2: Systems (Solution Architecture) */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-[#4F46E5] font-mono text-xs uppercase font-semibold">
                        <Cpu className="w-4 h-4 text-[#4F46E5]" />
                        <span>{t.solutions.systemsLabel}</span>
                      </div>
                      <div className="space-y-3">
                        {solutions[selectedSolutionIdx].systems.map((system, i) => (
                          <div key={i} className="text-xs text-slate-700 leading-relaxed font-sans border-l-2 border-indigo-500/30 pl-3 rtl:border-l-0 rtl:border-r-2 rtl:border-indigo-500/30 rtl:pl-0 rtl:pr-3">
                            <strong>{system.split(' ')[0]}</strong> {system.substring(system.indexOf(' '))}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Column 3: Outcomes (Value Return) */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-[#0891B2] font-mono text-xs uppercase font-semibold">
                        <TrendingUp className="w-4 h-4 text-[#0891B2]" />
                        <span>{t.solutions.outcomesLabel}</span>
                      </div>
                      <div className="space-y-3">
                        {solutions[selectedSolutionIdx].outcomes.map((outcome, i) => (
                          <div key={i} className="text-xs text-slate-700 leading-relaxed font-sans border-l-2 border-emerald-500/30 pl-3 rtl:border-l-0 rtl:border-r-2 rtl:border-emerald-500/30 rtl:pl-0 rtl:pr-3">
                            {outcome}
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* Simulated Footer */}
                <div className="p-4 bg-slate-50 border-t border-black/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-500">
                  <span>
                    {language === 'ar' ? 'النشر معتمد: قابل للتوسع عالمياً' : language === 'it' ? 'Distribuzione Autorizzata: Scalabile Globalmente' : 'Authorized Deployment: Globally Scalable'}
                  </span>
                  <a 
                    href="#diagnostic" 
                    className="inline-flex items-center gap-1.5 text-cyan-400 hover:underline"
                    onClick={() => {
                      const el = document.getElementById('diagnostic');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span>
                      {language === 'ar' ? 'طلب ملف التشخيص' : language === 'it' ? 'Richiedi File Diagnostico' : 'Request Diagnostic File'}
                    </span>
                    <ChevronRight className="w-3 h-3" />
                  </a>
                </div>

              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
