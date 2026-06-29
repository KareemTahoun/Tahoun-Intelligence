import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { ShieldCheck, Cpu, Clock, Code, Award, Sparkles, TrendingUp, ChevronRight, Check } from 'lucide-react';

export const WhyTrustUs: React.FC = () => {
  const { t, language } = useLanguage();

  const metrics = [
    { value: '98%', label: language === 'ar' ? 'نسبة أتمتة الأنظمة' : language === 'it' ? 'Quoziente Automazione Sistemi' : 'Systems Automation Quotient', desc: language === 'ar' ? 'متوسط خفض التكاليف اليدوية' : language === 'it' ? 'Riduzione media dei costi manuali' : 'Average reduction in manual processing overhead across operational nodes' },
    { value: '4.8x', label: language === 'ar' ? 'تسريع إيرادات العملاء' : language === 'it' ? 'Accelerazione Ricavi Clienti' : 'Client Revenue Acceleration', desc: language === 'ar' ? 'مضاعف النمو بعد النشر' : language === 'it' ? 'Fattore di crescita medio dopo il rilascio' : 'Average growth factor recorded post-Performance-Pipeline deployment' },
    { value: '180M+', label: language === 'ar' ? 'سجلات هيكلية' : language === 'it' ? 'Record Strutturati Estratti' : 'Structured Records Extracted', desc: language === 'ar' ? 'البيانات المنظمة باستخدام الذكاء الاصطناعي' : language === 'it' ? 'Dati strutturati in modo impeccabile' : 'Semantic data structured flawlessly with customized multi-modal AI systems' },
    { value: '10+', label: language === 'ar' ? 'سنوات خبرة دولية' : language === 'it' ? 'Anni di Esperienza Globale' : 'Years International Experience', desc: language === 'ar' ? 'خبرة عالمية في الأسواق المتقدمة' : language === 'it' ? 'Navigazione globale' : 'Navigating technical and psychological boundaries in leading global capitals' }
  ];

  const valueFactors = [
    {
      title: language === 'ar' ? 'الأنظمة الذكية' : language === 'it' ? 'Sistemi Intelligenti' : 'Intelligent Systems',
      desc: language === 'ar' ? 'نبني أنظمة برمجية مستقلة ترسم المسارات المثلى بدون تدخل بشري.' : language === 'it' ? 'Costruiamo pipeline software autonome.' : 'We construct autonomous software pipelines that formulate optimal pathways, retrieve hidden indicators, and adapt to competitive trends without human assistance.',
      icon: Cpu,
      color: 'text-cyan-400'
    },
    {
      title: language === 'ar' ? 'تنفيذ سريع' : language === 'it' ? 'Esecuzione Rapida' : 'Fast Execution',
      desc: language === 'ar' ? 'أطر عمل مخصصة تضمن النشر في وقت قياسي.' : language === 'it' ? 'I nostri framework superano i ritardi.' : 'Our proprietary bootstrap frameworks and unified CJS packages bypass the usual boilerplate delays, deploying enterprise-ready models in record time.',
      icon: Clock,
      color: 'text-indigo-400'
    },
    {
      title: language === 'ar' ? 'سير عمل مدعوم بالذكاء' : language === 'it' ? 'Flussi di lavoro AI' : 'AI-Powered Workflows',
      desc: language === 'ar' ? 'نماذج تحليل متقدمة لدمج الوكلاء الأذكياء بمهارة.' : language === 'it' ? 'Sfruttiamo modelli di ragionamento avanzati.' : 'Leveraging next-gen reasoning models to integrate semantic database agents, neural triage portals, and real-time strategic intelligence nodes.',
      icon: Sparkles,
      color: 'text-cyan-400'
    },
    {
      title: language === 'ar' ? 'حلول مصممة خصيصاً' : language === 'it' ? 'Soluzioni su Misura' : 'Tailored Solutions',
      desc: language === 'ar' ? 'لا نعتمد الصناديق البرمجية الجاهزة، بل نبدأ بدراسة أهدافك.' : language === 'it' ? 'Rifiutiamo i software generici.' : 'We reject generic software boxes. We audit and map your physical business objectives before writing a single line of tailored code.',
      icon: ShieldCheck,
      color: 'text-indigo-400'
    },
    {
      title: language === 'ar' ? 'خبرة متعددة التخصصات' : language === 'it' ? 'Competenza Multidisciplinare' : 'Multi-Disciplinary Expertise',
      desc: language === 'ar' ? 'ربط الهندسة البرمجية مع الرؤى النفسية والتسويقية العميقة.' : language === 'it' ? 'Ingegneria unita alla psicologia.' : 'Bridges deep software engineering discipline with psychological insight, global regulatory models, and high-convert digital marketing.',
      icon: Code,
      color: 'text-cyan-400'
    },
    {
      title: language === 'ar' ? 'تجربة استثنائية' : language === 'it' ? 'Esperienza Premium' : 'Premium Experience',
      desc: language === 'ar' ? 'مخرجاتنا تحمل توقيعاً رقمياً فاخراً لتعزيز سلطتك الرقمية.' : language === 'it' ? 'Risultati di lusso.' : 'From architectural spacing to pristine bilingual RTL layouts, our outputs carry a luxury digital signature that elevates your authority globally.',
      icon: Award,
      color: 'text-indigo-400'
    }
  ];

  return (
    <section id="whyus" className="py-24 bg-slate-50 relative overflow-hidden border-t border-black/5">
      {/* Background decoration */}
      <div className="absolute right-1/4 top-1/2 w-[300px] h-[300px] bg-[#4F46E5]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-xs font-mono tracking-[0.2em] text-[#0891B2] uppercase font-bold">
            {language === 'ar' ? 'الفرق الحتمي' : language === 'it' ? 'LA DIFFERENZA DETERMINISTICA' : 'THE DETERMINISTIC DIFFERENCE'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-medium tracking-tight text-[#0F172A] mt-1">
            {t.trust.sectionTitle}
          </h2>
          <p className="text-slate-500 mt-4 leading-relaxed font-sans text-base sm:text-lg">
            {t.trust.sectionSubtitle}
          </p>
        </div>

        {/* 6 Value Factors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {valueFactors.map((factor, idx) => {
            const Icon = factor.icon;
            const updatedColor = factor.color.includes('cyan') ? 'text-[#0891B2]' : 'text-[#4F46E5]';
            return (
              <div 
                key={idx} 
                className="group p-8 rounded-3xl bg-white border border-black/5 shadow-sm backdrop-blur-xl hover:border-black/10 hover:bg-slate-50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl bg-slate-50 border border-black/5 flex items-center justify-center mb-6 ${updatedColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-sans font-semibold text-[#0F172A] mb-3 group-hover:text-black">
                    {factor.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {factor.desc}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-1 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                  <Check className="w-3.5 h-3.5 text-cyan-500 animate-pulse" />
                  <span>Fully Integrated</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Proof Metrics Banner */}
        <div className="rounded-3xl bg-white shadow-sm border border-black/5 backdrop-blur-xl p-8 sm:p-12 relative overflow-hidden">
          {/* subtle abstract grids */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* left taglines */}
            <div className="max-w-md text-center lg:text-left rtl:text-right">
              <span className="text-xs font-mono tracking-widest text-[#4F46E5] uppercase font-bold block mb-2">
                {language === 'ar' ? 'أداء موثق' : language === 'it' ? 'PRESTAZIONI VERIFICATE' : 'VERIFIED PERFORMANCE'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-sans font-bold text-[#0F172A] tracking-tight">
                {t.trust.metricsTitle}
              </h3>
              <p className="text-xs text-slate-600 font-sans leading-relaxed mt-3">
                {language === 'ar' ? 'تخضع عملياتنا لمعايير حسابية قابلة للقياس، مما يضمن تحقيق إنجازات موثوقة بعيداً عن العبارات الاستشارية العامة.' : language === 'it' ? 'Le nostre operazioni sono governate da parametri computazionali misurabili, garantendo traguardi affidabili rispetto alle dichiarazioni generali di consulenza.' : 'Our operations are governed by measurable computational parameters, assuring reliable milestones rather than general consulting statements.'}
              </p>
            </div>

            {/* right metrics cards */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full lg:max-w-2xl">
              {metrics.map((metric, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-black/5 flex flex-col justify-between">
                  <span className="text-3xl sm:text-4xl font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0891B2] to-[#4F46E5] tracking-tight block">
                    {metric.value}
                  </span>
                  <div className="mt-2 space-y-1">
                    <span className="text-[10px] font-mono font-bold text-slate-700 uppercase block leading-none">
                      {metric.label}
                    </span>
                    <span className="text-[9px] text-slate-500 font-sans block leading-tight">
                      {metric.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
