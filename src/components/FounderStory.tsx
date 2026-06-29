import React from "react";
import { useLanguage } from "./LanguageContext";
import {
  Cpu,
  Compass,
  BookOpen,
  Smile,
  Award,
  Globe,
  Quote,
} from "lucide-react";

export const FounderStory: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section
      id="founder"
      className="py-24 bg-white relative overflow-hidden border-t border-black/5"
    >
      {/* Background glow overlay */}
      <div className="absolute left-1/3 top-1/4 w-[400px] h-[400px] bg-[#4F46E5]/5 blur-[125px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Layout: Splitting between Image on Side and Context on Side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left / Top Page Column: Profile cinematic portrait (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              {/* Luxury surrounding borders */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#4F46E5] to-[#0891B2] opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />

              <div className="relative rounded-3xl overflow-hidden bg-slate-50 border border-black/5 backdrop-blur-xl p-2 shadow-sm">
                {/* Generated Founder Image */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src="https://i.postimg.cc/PJrQ8fPS/Tahoun-Live.png"
                    alt="Kareem Tahoun - Chief Architect & Founder"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Glassmorphic Profile Title banner */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md border border-black/5 p-4 rounded-xl flex justify-between items-center z-20 shadow-sm">
                    <div>
                      <span className="text-sm font-sans font-bold text-[#0F172A] block leading-tight">
                        {language === "ar" ? "كريم طاحون" : "Kareem Tahoun"}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 block tracking-wider uppercase mt-0.5">
                        {language === "ar"
                          ? "رئيس المعماريين للنظم"
                          : language === "it"
                            ? "Capo Architetto di Sistemi"
                            : "Chief Systems Architect"}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-100 border border-black/10 flex items-center justify-center text-[#0F172A]">
                      <Globe className="w-4 h-4 text-[#0891B2]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Minimalist Tech badge indicator floating on card corner */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#4F46E5] to-[#0891B2] text-white font-mono text-[9px] font-bold px-3 py-1.5 rounded-full shadow-lg shadow-indigo-900/30 tracking-widest uppercase">
                {t.founder.academicBadge}
              </div>
            </div>
          </div>

          {/* Right Page Column: Editorial text story columns (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div>
              <span className="text-xs font-mono tracking-[0.2em] text-[#0891B2] uppercase font-bold">
                THE ARCHITECT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-medium tracking-tight text-[#0F172A] mt-1 leading-tight">
                {t.founder.sectionTitle}
              </h2>
              <p className="text-sm text-slate-500 mt-3 italic font-sans max-w-xl">
                {t.founder.sectionSubtitle}
              </p>
            </div>

            {/* Founder Quote */}
            <div className="relative p-6 rounded-2xl bg-slate-50 border border-black/5 backdrop-blur-xl pl-14 rtl:pl-6 rtl:pr-14 my-6">
              <Quote className="absolute top-6 left-6 rtl:left-auto rtl:right-6 w-8 h-8 text-[#4F46E5]/35 transform -scale-x-100" />
              <p className="text-slate-800 text-sm sm:text-base font-sans leading-relaxed font-semibold">
                "{t.founder.founderQuote}"
              </p>
            </div>

            {/* Structured Pillars explaining the intellectual balance */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-black/5">
              {/* Point 1: Engineering */}
              <div className="space-y-2">
                <div className="flex items-center gap-2.5 text-[#0F172A]">
                  <div className="w-6 h-6 rounded bg-slate-50 border border-black/5 flex items-center justify-center text-[#0891B2]">
                    <Cpu className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-sm font-sans font-bold">
                    {t.founder.engineeringCore}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {t.founder.engineeringDesc}
                </p>
              </div>

              {/* Point 2: Social Sciences */}
              <div className="space-y-2">
                <div className="flex items-center gap-2.5 text-[#0F172A]">
                  <div className="w-6 h-6 rounded bg-slate-50 border border-black/5 flex items-center justify-center text-[#0891B2]">
                    <BookOpen className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-sm font-sans font-bold">
                    {t.founder.scienceCore}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {t.founder.scienceDesc}
                </p>
              </div>

              {/* Point 3: International Experience */}
              <div className="space-y-2">
                <div className="flex items-center gap-2.5 text-[#0F172A]">
                  <div className="w-6 h-6 rounded bg-slate-50 border border-black/5 flex items-center justify-center text-[#0891B2]">
                    <Globe className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-sm font-sans font-bold">
                    {t.founder.experienceCore}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {t.founder.experienceDesc}
                </p>
              </div>

              {/* Point 4: Human-Centered Design */}
              <div className="space-y-2">
                <div className="flex items-center gap-2.5 text-[#0F172A]">
                  <div className="w-6 h-6 rounded bg-slate-50 border border-black/5 flex items-center justify-center text-[#0891B2]">
                    <Smile className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-sm font-sans font-bold">
                    {t.founder.humanCentricCore}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {t.founder.humanCentricDesc}
                </p>
              </div>
            </div>

            {/* Extra Row: Lifestyle & Global Arbitrage */}
            <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100 flex gap-4 items-start shadow-sm">
              <Compass className="w-6 h-6 text-[#4F46E5] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-sans font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                  {t.founder.globalMobilityCore}
                </h4>
                <p className="text-[11px] text-slate-600 leading-relaxed font-sans">
                  {t.founder.globalMobilityDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
