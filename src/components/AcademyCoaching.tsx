import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { coursesData, mentorshipTracksData, Course, MentorshipTrack } from '../types';
import { Play, BookOpen, Clock, Layers, Flame, Award, HelpCircle, Check, ArrowRight, UserCheck, Compass, Sparkles } from 'lucide-react';

export const AcademyCoaching: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeCatalog, setActiveCatalog] = useState<'all' | 'selfPaced' | 'mentorship'>('all');
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);

  const courses = coursesData[language];
  const mentorship = mentorshipTracksData[language];

  const handleCatalogSwitch = (mode: 'all' | 'selfPaced' | 'mentorship') => {
    setActiveCatalog(mode);
    setSelectedCourseId(null);
  };

  return (
    <section id="academy" className="py-24 bg-white relative overflow-hidden border-t border-black/5">
      {/* Background radial glows */}
      <div className="absolute top-1/4 right-[10%] w-[350px] h-[350px] bg-[#0891B2]/5 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-[10%] w-[350px] h-[350px] bg-[#4F46E5]/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <span className="text-xs font-mono tracking-[0.2em] text-[#0891B2] uppercase font-bold">ACADEMIC HUB</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-medium tracking-tight text-[#0F172A] mt-1">
              {t.academy.sectionTitle}
            </h2>
            <p className="text-slate-500 mt-3 max-w-xl text-sm sm:text-base font-sans">
              {t.academy.sectionSubtitle}
            </p>
          </div>

          {/* Netflix Curved Segment Filter Tabs */}
          <div className="flex items-center rounded-full bg-black/5 border border-black/5 p-1 text-xs font-mono backdrop-blur-xl">
            <button
              onClick={() => handleCatalogSwitch('all')}
              className={`px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ${
                activeCatalog === 'all'
                  ? 'bg-white text-[#0F172A] font-semibold shadow-sm'
                  : 'text-slate-500 hover:text-[#0F172A]'
              }`}
            >
              {t.academy.all}
            </button>
            <button
              onClick={() => handleCatalogSwitch('selfPaced')}
              className={`px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ${
                activeCatalog === 'selfPaced'
                  ? 'bg-white text-[#0F172A] font-semibold shadow-sm'
                  : 'text-slate-500 hover:text-[#0F172A]'
              }`}
            >
              {t.academy.selfPaced}
            </button>
            <button
              onClick={() => handleCatalogSwitch('mentorship')}
              className={`px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ${
                activeCatalog === 'mentorship'
                  ? 'bg-white text-[#0F172A] font-semibold shadow-sm'
                  : 'text-slate-500 hover:text-[#0F172A]'
              }`}
            >
              {t.academy.mentorship}
            </button>
          </div>
        </div>

        {/* Netflix Catalog Carousel / Grid System */}
        
        {/* ROW 1: Self-Paced Courses Section */}
        {(activeCatalog === 'all' || activeCatalog === 'selfPaced') && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-6 bg-[#0891B2] rounded-full" />
              <h3 className="text-lg font-sans font-bold text-[#0F172A] uppercase tracking-wider">
                {t.academy.selfPaced}
              </h3>
              <span className="text-xs font-mono text-slate-500">
                {language === 'ar' ? `(${courses.length} وحدات)` : language === 'it' ? `(${courses.length} Moduli)` : `(${courses.length} Modules)`}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {courses.map((course) => {
                const isSelected = selectedCourseId === course.id;
                
                return (
                  <div
                    key={course.id}
                    className={`relative rounded-3xl bg-white border backdrop-blur-xl overflow-hidden cursor-pointer transition-all duration-300 transform ${
                      isSelected 
                        ? 'border-[#0891B2] bg-slate-50 shadow-xl shadow-[#0891B2]/5 translate-y-[-4px]' 
                        : 'border-black/5 hover:border-black/10 hover:bg-slate-50 shadow-sm hover:shadow-md'
                    }`}
                    onClick={() => setSelectedCourseId(isSelected ? null : course.id)}
                  >
                    {/* Immersive Card Top Banner */}
                    <div className="relative h-44 bg-slate-100 flex flex-col justify-between p-5 overflow-hidden">
                      {/* background pattern */}
                      <div className="absolute inset-0 bg-radial from-cyan-500/10 via-transparent to-transparent opacity-60" />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-200 via-transparent to-transparent opacity-40" />
                      
                      {/* top row badge info */}
                      <div className="flex justify-between items-center z-10 w-full">
                        <span className="text-[9px] font-mono tracking-widest text-[#0891B2] bg-cyan-50 px-2 py-0.5 rounded border border-[#0891B2]/30 uppercase font-semibold">
                          {t.academy[course.level as keyof typeof t.academy] || course.level}
                        </span>
                        <span className="text-[10px] font-mono text-slate-600 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {course.duration}
                        </span>
                      </div>

                      {/* course title */}
                      <h4 className="text-base font-sans font-bold text-[#0F172A] tracking-tight z-10 line-clamp-2">
                        {course.title}
                      </h4>
                    </div>

                    {/* Card details body */}
                    <div className="p-6 space-y-4">
                      {/* stats line */}
                      <div className="flex items-center justify-between text-xs font-mono text-slate-500 border-b border-black/5 pb-3">
                        <span className="flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-slate-400" />
                          {course.modules} {t.academy.modulesLabel}
                        </span>
                        <span className="text-[10px] text-[#0891B2] uppercase tracking-widest font-semibold">
                          {language === 'ar' ? 'نشط رقمياً' : language === 'it' ? 'Attivo Digitale' : 'Digital Active'}
                        </span>
                      </div>

                      {/* Course Outcomes (Previews 2 items, expands more when clicked) */}
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">
                          {t.academy.outcomesLabel}
                        </span>
                        {course.outcomes.slice(0, isSelected ? 4 : 2).map((out, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                            <Check className="w-3.5 h-3.5 text-[#0891B2] shrink-0 mt-0.5" />
                            <span>{out}</span>
                          </div>
                        ))}
                      </div>

                      {/* Immersive Action Path */}
                      <div className="pt-3 border-t border-black/5 space-y-1">
                        <span className="text-[10px] font-mono text-slate-500 uppercase block">
                          {t.academy.pathLabel}
                        </span>
                        <p className="text-[11px] font-sans text-slate-500 italic">
                          {course.path}
                        </p>
                      </div>

                      {/* Interactive Trigger Button */}
                      <button className="w-full py-2.5 rounded-xl border border-black/5 hover:border-[#0891B2]/50 hover:bg-[#0891B2]/5 text-xs font-mono text-slate-500 hover:text-[#0891B2] transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer shadow-sm">
                        <span>{isSelected ? (language === 'ar' ? 'طي المواصفات' : language === 'it' ? 'COMPRIMI SPECIFICHE' : 'COLLAPSE SPECIFICATIONS') : (language === 'ar' ? 'عرض المنهج كاملاً' : language === 'it' ? 'ESPANDI PROGRAMMA COMPLETO' : 'EXPAND FULL SYLLABUS')}</span>
                        <Play className="w-3 h-3 fill-current pl-0.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ROW 2: Mentorship Directory Section */}
        {(activeCatalog === 'all' || activeCatalog === 'mentorship') && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-6 bg-[#4F46E5] rounded-full" />
              <h3 className="text-lg font-sans font-bold text-[#0F172A] uppercase tracking-wider">
                {t.academy.mentorship}
              </h3>
              <span className="text-xs font-mono text-slate-500">
                {language === 'ar' ? `(${mentorship.length} مسارات نشطة)` : language === 'it' ? `(${mentorship.length} Percorsi Attivi)` : `(${mentorship.length} Active Tracks)`}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mentorship.map((track) => (
                <div
                  key={track.id}
                  className="rounded-3xl bg-white shadow-sm border border-black/5 p-6 hover:border-[#4F46E5]/40 hover:bg-slate-50 hover:shadow-md backdrop-blur-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Type badge rows */}
                    <div className="flex justify-between items-center bg-slate-50 border border-black/5 p-2 rounded-xl">
                      <span className="text-[10px] font-mono tracking-widest text-[#4F46E5] uppercase font-bold">
                        {track.type} {language === 'ar' ? 'مسار' : language === 'it' ? 'Percorso' : 'Track'}
                      </span>
                      <span className="text-xs font-mono text-slate-500 font-bold">
                        {track.duration}
                      </span>
                    </div>

                    <h4 className="text-base font-sans font-bold text-[#0F172A] tracking-tight leading-snug">
                      {track.title}
                    </h4>

                    {/* outcomes */}
                    <div className="space-y-2 pt-2 border-t border-black/5">
                      <span className="text-[10px] font-mono pr-1 text-slate-500 uppercase block">
                        {language === 'ar' ? 'المخرجات المضمنة' : language === 'it' ? 'Risultati Inclusi' : 'Included Deliverables'}
                      </span>
                      {track.outcomes.map((out, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] shrink-0 mt-1.5" />
                          <span>{out}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-black/5">
                    <a
                      href="#diagnostic"
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-[#4F46E5] to-[#0891B2] hover:opacity-95 text-white font-semibold text-xs font-mono text-center transition-all duration-300 flex items-center justify-center gap-1.5"
                      onClick={() => {
                        const el = document.getElementById('diagnostic');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <span>{language === 'ar' ? 'تقديم طلب قبول' : language === 'it' ? 'RICHIEDI AMMISSIONE' : 'APPLY FOR ADMISSION'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
