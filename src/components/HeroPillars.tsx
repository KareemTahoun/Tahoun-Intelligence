import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { businessPillarsData } from "../types";
import {
  Play,
  Pause,
  ChevronRight,
  Sparkles,
  Volume2,
  Globe,
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";

export const HeroPillars: React.FC = () => {
  const { language, t } = useLanguage();
  const [activePillar, setActivePillar] = useState<
    "growth" | "digital" | "learning" | null
  >(null);
  const [isPlayingBrief, setIsPlayingBrief] = useState(false);
  const [briefSubIndex, setBriefSubIndex] = useState(0);

  const pillars = businessPillarsData[language];

  // Simulated founder briefing captions for English, Arabic, and Italian
  const simulatedCaptions = {
    en: [
      "Hello, I am Kareem Tahoun. Welcome to TAHOUN Intelligence.",
      "We replace speculative advisory scripts with robust, coded growth ecosystems.",
      "Our focus is Business Growth, Custom Software, and elite Personal Transformation.",
      "Explore our interactive portals below, and start your structural upgrade.",
    ],
    ar: [
      "أهلاً بكم، أنا كريم طاحون. مرحباً بكم في طاحون INTELLIGENCE.",
      "نحن هنا لنستبدل الكلمات الاستشارية الإنشائية بمحركات نمو برمجية حتمية وعملية.",
      "ينصب تركيزنا على ثلاثة ركائز: توسع الأعمال، والبرمجيات الخاصة، والتحول القيادي للنخبة.",
      "تصفح بواباتنا التفاعلية بالأسفل، وابدأ عملية الترقية الهيكلية لأعمالك اليوم.",
    ],
    it: [
      "Benvenuti, sono Kareem Tahoun. Benvenuti in TAHOUN Intelligence.",
      "Sostituiamo le solite consulenze astratte con ecosistemi di crescita reali e codificati.",
      "Ci focalizziamo su Sviluppo di Business, Software su misura ed Evoluzione d'élite.",
      "Esplorate i nostri portali interattivi e avviate la vostra trasformazione strutturale.",
    ],
  };

  const captions = simulatedCaptions[language];

  const handleNextCaption = () => {
    if (briefSubIndex < captions.length - 1) {
      setBriefSubIndex((prev) => prev + 1);
    } else {
      setIsPlayingBrief(false);
      setBriefSubIndex(0);
    }
  };

  const videoId = language === "ar" ? "U4bTXfwlM_I" : language === "it" ? "zVEmT16AGEo" : "jgylCFHR1qg";

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col items-center justify-center pt-8 pb-16 overflow-hidden bg-gradient-to-br from-[#F8F9FA] via-white to-[#F4F4F5]"
    >
      {/* Abstract Grid Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Cybernetic Accent Orbs */}
      <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex flex-col items-center text-center">
        {/* Elite Badge Header */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/[0.03] border border-black/5 text-xs text-[#4F46E5] font-mono tracking-widest uppercase mb-8">
          <Sparkles className="w-3.5 h-3.5 text-[#0891B2] animate-pulse" />
          {t.hero.badge}
        </div>

        {/* Premium Dynamic Headlines */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-sans font-medium tracking-tight text-[#0F172A] max-w-5xl leading-[1.1] mb-6">
          {t.hero.headline.includes("&") ? (
            <>
              {t.hero.headline.split("&")[0]}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4F46E5] via-[#0891B2] to-[#4F46E5]">
                & {t.hero.headline.split("&")[1]}
              </span>
            </>
          ) : language === "ar" ? (
            <>
              أنظمة ذكية للنمو
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4F46E5] via-[#0891B2] to-[#4F46E5]">
                {" "}
                والتحول المؤسسي والشخصي
              </span>
            </>
          ) : (
            t.hero.headline
          )}
        </h1>

        <p className="text-slate-600 text-lg sm:text-xl font-sans max-w-3xl leading-relaxed mb-12">
          {t.hero.tagline}
        </p>

        {/* Main Tri-Ecosystem Navigation Structure (Ecosystem Centerpiece) */}
        <div className="relative w-full max-w-5xl min-h-[580px] flex items-center justify-center mt-12 mb-16">
          {/* BACKGROUND BLUR DECORATIONS FROM DESIGN */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#4F46E5]/10 rounded-full blur-[130px]" />
            <div className="absolute top-1/4 left-1/4 w-[280px] h-[280px] bg-[#0891B2]/5 rounded-full blur-[100px]" />
          </div>

          {/* DESKTOP HIGH-FIDELITY ORBITING PILLARS LAYOUT */}
          <div className="hidden lg:block relative w-[450px] h-[450px] z-10">
            {/* CENTRAL PORTAL RING */}
            <div className="absolute inset-0 w-full h-full rounded-full border border-black/10 flex items-center justify-center p-4">
              <div className="absolute inset-0 rounded-full border-[0.5px] border-black/5 animate-pulse" />

              {/* Inner Intelligent Video Container */}
              <div className="w-full h-full rounded-full overflow-hidden bg-white border border-black/10 shadow-[0_0_50px_rgba(79,70,229,0.1)] flex items-center justify-center relative group">
                {isPlayingBrief ? (
                  <iframe
                    className="absolute inset-0 w-full h-full pointer-events-auto"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title="TAHOUN Intelligence Founder Briefing"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                      alt="Video Thumbnail"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <button
                      onClick={() => setIsPlayingBrief(true)}
                      className="relative z-10 w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
                    >
                      <Play className="w-8 h-8 fill-white text-white pl-1" />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* ORBITING PILLARS */}
            {/* Pillar 1: Business Growth (Top Left) */}
            <div
              className={`absolute top-0 -left-40 w-[240px] p-6 backdrop-blur-xl border rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 select-none cursor-pointer ${
                activePillar === "growth"
                  ? "bg-white/95 border-[#4F46E5] shadow-[#4F46E5]/10"
                  : "bg-white/50 border-black/10 hover:border-black/20"
              }`}
              onMouseEnter={() => setActivePillar("growth")}
              onMouseLeave={() => setActivePillar(null)}
              onClick={() => {
                const el = document.getElementById("ecosystems");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <p className="text-[#0891B2] text-[10px] font-bold tracking-widest uppercase mb-1">
                {language === "ar"
                  ? "الركيزة ٠١"
                  : language === "it"
                    ? "Pilastro 01"
                    : "Pillar 01"}
              </p>
              <h3 className="text-sm font-semibold mb-1 uppercase tracking-wider text-[#0F172A]">
                {pillars.growth.title}
              </h3>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                {pillars.growth.tagline}
              </p>
            </div>

            {/* Pillar 2: Digital Systems (Right) */}
            <div
              className={`absolute top-1/2 -right-48 -translate-y-1/2 w-[240px] p-6 backdrop-blur-xl border rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 select-none cursor-pointer ${
                activePillar === "digital"
                  ? "bg-white/95 border-[#0891B2] shadow-[#0891B2]/10"
                  : "bg-white/50 border-black/10 hover:border-black/20"
              }`}
              onMouseEnter={() => setActivePillar("digital")}
              onMouseLeave={() => setActivePillar(null)}
              onClick={() => {
                const el = document.getElementById("ecosystems");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <p className="text-[#0891B2] text-[10px] font-bold tracking-widest uppercase mb-1">
                {language === "ar"
                  ? "الركيزة ٠٢"
                  : language === "it"
                    ? "Pilastro 02"
                    : "Pillar 02"}
              </p>
              <h3 className="text-sm font-semibold mb-1 uppercase tracking-wider text-[#0F172A]">
                {pillars.digital.title}
              </h3>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                {pillars.digital.tagline}
              </p>
            </div>

            {/* Pillar 3: Learning & Potential (Bottom Left) */}
            <div
              className={`absolute -bottom-10 -left-20 w-[240px] p-6 backdrop-blur-xl border rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 select-none cursor-pointer ${
                activePillar === "learning"
                  ? "bg-white/95 border-[#4F46E5] shadow-[#4F46E5]/10"
                  : "bg-white/50 border-black/10 hover:border-black/20"
              }`}
              onMouseEnter={() => setActivePillar("learning")}
              onMouseLeave={() => setActivePillar(null)}
              onClick={() => {
                const el = document.getElementById("ecosystems");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <p className="text-[#0F172A] text-[10px] font-bold tracking-widest uppercase mb-1">
                {language === "ar"
                  ? "الركيزة ٠٣"
                  : language === "it"
                    ? "Pilastro 03"
                    : "Pillar 03"}
              </p>
              <h3 className="text-sm font-semibold mb-1 uppercase tracking-wider text-[#0F172A]">
                {pillars.learning.title}
              </h3>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                {pillars.learning.tagline}
              </p>
            </div>
          </div>

          {/* MOBILE RESPONSIVE LAYOUT FOR CENTRE PIECE */}
          <div className="lg:hidden flex flex-col items-center gap-10 w-full px-4 z-10">
            {/* Mini Center Ring */}
            <div className="relative w-[280px] h-[280px]">
              <div
                className="absolute inset-0 rounded-full border border-dashed border-[#0891B2]/20 animate-spin"
                style={{ animationDuration: "40s" }}
              />
              <div className="absolute inset-2 rounded-full border border-[#4F46E5]/15" />

              <div className="relative w-full h-full rounded-full overflow-hidden border border-black/10 p-1 bg-white">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white flex flex-col items-center justify-center group">
                  {isPlayingBrief ? (
                    <iframe
                      className="absolute inset-0 w-full h-full pointer-events-auto"
                      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                      title="TAHOUN Intelligence Founder Briefing"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <>
                      <img
                        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                        alt="Video Thumbnail"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      <button
                        onClick={() => setIsPlayingBrief(true)}
                        className="relative z-10 w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
                      >
                        <Play className="w-6 h-6 fill-white text-white pl-1" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Simple stacked items on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              {/* Pillar 1 */}
              <div className="p-5 rounded-2xl bg-white/60 border border-black/5 text-center">
                <span className="text-[10px] font-mono text-[#0891B2]">
                  {language === "ar"
                    ? "٠١. النمو"
                    : language === "it"
                      ? "01. CRESCITA"
                      : "01. GROWTH"}
                </span>
                <h4 className="text-xs font-sans font-bold text-[#0F172A] mt-1 mb-2">
                  {pillars.growth.title}
                </h4>
                <p className="text-[11px] text-slate-500">
                  {pillars.growth.tagline}
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="p-5 rounded-2xl bg-white/60 border border-black/5 text-center">
                <span className="text-[10px] font-mono text-[#0891B2]">
                  {language === "ar"
                    ? "٠٢. الرقمية"
                    : language === "it"
                      ? "02. DIGITALE"
                      : "02. DIGITAL"}
                </span>
                <h4 className="text-xs font-sans font-bold text-[#0F172A] mt-1 mb-2">
                  {pillars.digital.title}
                </h4>
                <p className="text-[11px] text-slate-500">
                  {pillars.digital.tagline}
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="p-5 rounded-2xl bg-white/60 border border-black/5 text-center">
                <span className="text-[10px] font-mono text-[#4F46E5]">
                  {language === "ar"
                    ? "٠٣. التعلم"
                    : language === "it"
                      ? "03. FORMAZIONE"
                      : "03. LEARNING"}
                </span>
                <h4 className="text-xs font-sans font-bold text-[#0F172A] mt-1 mb-2">
                  {pillars.learning.title}
                </h4>
                <p className="text-[11px] text-slate-500">
                  {pillars.learning.tagline}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Informational Guidance bar */}
        <p className="text-[11px] font-mono tracking-wider text-slate-500 uppercase flex items-center gap-2 mb-12">
          <Globe className="w-3.5 h-3.5 text-[#4F46E5] animate-spin-slow" />
          {t.hero.interactiveNotice}
        </p>

        {/* Dynamic Pillar Preview Overlay Box (Expands smoothly on desktop) */}
        {activePillar && (
          <div className="hidden lg:block w-full max-w-4xl p-6 rounded-2xl bg-white/80 border border-black/10 backdrop-blur-2xl text-left animate-fade-in mb-12 shadow-xl shadow-slate-200/50">
            <div className="flex gap-1.5 items-center mb-3">
              <div
                className={`w-2 h-2 rounded-full ${activePillar === "growth" ? "bg-[#0891B2]" : activePillar === "digital" ? "bg-[#0891B2]" : "bg-[#4F46E5]"}`}
              />
              <span className="text-xs font-mono tracking-widest uppercase text-slate-500">
                {language === "ar"
                  ? "الوحدة النشطة:"
                  : language === "it"
                    ? "Modulo Attivo:"
                    : "Active Module:"}{" "}
                {pillars[activePillar].title}
              </span>
            </div>
            <p className="text-sm font-sans text-slate-600 mb-4">
              {pillars[activePillar].tagline}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {pillars[activePillar].items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2 bg-black/5 rounded-lg border border-black/5"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0891B2]" />
                  <span className="text-xs text-slate-700 font-sans">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call To Action Row */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md">
          <a
            href="#ecosystems"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#0891B2] hover:opacity-95 text-white font-semibold text-sm tracking-wide shadow-lg shadow-[#4F46E5]/20 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2"
          >
            {t.hero.ctaExplore}
            <ArrowDown className="w-4 h-4 text-white" />
          </a>
          <a
            href="#diagnostic"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/50 border border-black/10 hover:bg-white/80 text-[#0F172A] font-semibold text-sm tracking-wide backdrop-blur-md transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2"
          >
            {t.hero.ctaAudit}
            <ArrowUpRight className="w-4 h-4 text-slate-500" />
          </a>
        </div>
      </div>
    </section>
  );
};
