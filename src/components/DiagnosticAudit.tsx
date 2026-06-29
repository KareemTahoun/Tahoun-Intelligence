import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import {
  ArrowLeft,
  Send,
  Sparkles,
  CheckCircle,
  ShieldAlert,
  BookOpen,
  Layers,
  Zap,
  Calendar,
  RefreshCcw,
  MessageCircle,
  Mail,
} from "lucide-react";

export interface AuditResult {
  executiveSummary: string;
  strategicPillars: {
    pillar: string;
    urgency: "Critical" | "High" | "Medium";
    systemsToBuild: string[];
    actionSteps: string[];
  }[];
  growthIndex: number;
  potentialImpact: string;
  recommendedProgram: string;
}

export const DiagnosticAudit: React.FC = () => {
  const { language, t } = useLanguage();

  // Form State
  const [businessType, setBusinessType] = useState("");
  const [currentSize, setCurrentSize] = useState("");
  const [topChallenge, setTopChallenge] = useState("");
  const [goals, setGoals] = useState("");
  const [interestLearning, setInterestLearning] = useState(false);
  const [interestDigital, setInterestDigital] = useState(false);
  const [interestGrowth, setInterestGrowth] = useState(false);

  // Flow State
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [showInquiryForm, setShowInquiryForm] = useState(false);

  // Inquiry Contact State
  const [clientName, setClientName] = useState("");

  // Dropdown Lists based on language
  const sectorOptions = {
    en: [
      "Clinics & Medical Centers",
      "Experts & Private Advisors",
      "E-commerce Platforms",
      "Tech Startups",
      "Service-Based Businesses",
      "SME Enterprises",
    ],
    ar: [
      "العيادات والمراكز الطبية",
      "الاستشاريون وصناع المعرفة",
      "المتاجر الإلكترونية",
      "الشركات الناشئة التقنية",
      "الأعمال التجارية والخدمية",
      "الشركات المتوسطة والصغيرة",
    ],
    it: [
      "Cliniche e Centri Medici",
      "Consulenti ed Esperti",
      "Piattaforme E-commerce",
      "Startup Tecnologiche",
      "Aziende di Servizi",
      "PMI ed Imprese Locali",
    ],
  };

  const scaleOptions = {
    en: [
      "Solo Founder / Professional",
      "1 - 5 Team Members",
      "6 - 20 Operations Scale",
      "21 - 50 Active Seat",
      "50+ Enterprise Scale",
    ],
    ar: [
      "رائد عمل فردي / محترف مستقل",
      "من ١ إلى ٥ موظفين",
      "من ٦ إلى ٢٠ موظف وقاعدة تشغيل",
      "من ٢١ إلى ٥٠ موظف وعضو نشط",
      "أكثر من ٥٠ موظف (مستوى مؤسسي)",
    ],
    it: [
      "Imprenditore Individuale / Libero Prof.",
      "1 - 5 Membri del Team",
      "6 - 20 Dipendenti",
      "21 - 50 Membri Attivi",
      "Oltre 50 (Livello Enterprise)",
    ],
  };

  const challengeOptions = {
    en: [
      "Low client conversion and inefficient lead acquisition",
      "High operational dependency on founder time and manual work",
      "Messy technical stack, legacy models, and code debt",
      "Under-developed online authority or weak content retention loops",
      "Lack of clear cross-border legal or digital framework scaling",
    ],
    ar: [
      "ضعف معدلات تحويل العملاء وقنوات جذب المهتمين",
      "الاعتماد التشغيلي المفرط على وقت المؤسس والمهام اليدوية",
      "فوضى البرمجيات والأنظمة التقنية وتراكم الديون التقنية",
      "ضعف القنوات الرقمية والتواجد السيادي وبناء السمعة المعرفية",
      "غياب التخطيط القانوني والضرائب وهيكلة المعيشة الحرة العابرة للحدود",
    ],
    it: [
      "Basso tasso di conversione clienti e canali d'acquisizione deboli",
      "Dipendenza operativa critica dal tempo del fondatore e processi manuali",
      "Stack tecnologico frammentato, debito tecnico o sistemi legacy",
      "Autorità digitale da rafforzare e scarsa fidelizzazione clienti",
      "Assenza di ottimizzazione fiscale internazionale e mobilità globale",
    ],
  };

  const sectors = sectorOptions[language];
  const scales = scaleOptions[language];
  const challenges = challengeOptions[language];

  // Submit form handler
  const handleRunAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessType || !currentSize || !topChallenge) {
      setErrorMsg(
        language === "ar"
          ? "فضلاً، املأ جميع حقول التشخيص الإلزامية."
          : "Please select all primary diagnostic criteria.",
      );
      return;
    }

    setLoading(true);
    setErrorMsg("");
    setResult(null);

    try {
      const response = await fetch("/api/diagnose", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lang: language,
          businessType,
          currentSize,
          topChallenge,
          goals,
          needsLearning: interestLearning,
          needsDigital: interestDigital,
          needsGrowth: interestGrowth,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to compute system diagnostics.");
      }

      const data = await response.json();
      setResult(data);
    } catch (err: any) {
      setErrorMsg(
        language === "ar"
          ? "تعذر الوصول لمحرك التشخيص حالياً. تم إظهار حل افتراضي مؤقت."
          : "Diagnostic motor temporarily unreachable. Displaying responsive blueprint model.",
      );

      // Elegant Fallback in case backend is during compilation or network is delayed
      setResult({
        executiveSummary:
          language === "ar"
            ? `بناءً على تصنيفكم في قطاع (${businessType}) ومستوى فريقكم المستقر عند (${currentSize})، يتضح وجود فجوة في تدفق المخرجات التقنية نتيجة لـ (${topChallenge}). نوصي بتوليد محرك أتمتة شامل وفك الارتباط البشري لتخفيض الاعتمادية التشغيلية.`
            : `Following strategic analysis for your ${businessType} with scale ${currentSize}, the core technical roadblock generated by "${topChallenge}" requires direct modular restructuring. We advise deploying decentralized database clusters and semantic CRM workflows.`,
        strategicPillars: [
          {
            pillar:
              language === "ar"
                ? "هندسة نمو القنوات (Growth Pipelines)"
                : "Performance Growth Systems",
            urgency: "Critical",
            systemsToBuild: [
              language === "ar"
                ? "بوابة التصفية والحجز التلقائي المؤهلة للعملاء"
                : "Automated Prescreened Discovery Call System",
              language === "ar"
                ? "لوحة قياس ومعايرة الهامش الإعلاني الموحدة"
                : "Unified Margin Analytics Portal",
            ],
            actionSteps: [
              language === "ar"
                ? "فصل قنوات الإعلان وتوطين الاستهداف الجغرافي"
                : "Segment high-value organic traffic pipelines",
              language === "ar"
                ? "تأسيس استمارة تصفية دقيقة لتأهيل العملاء قبل حجز الاتصالات"
                : "Install multi-step diagnostic triage",
            ],
          },
          {
            pillar:
              language === "ar"
                ? "البنية الرقمية والتحول (Digital Architecture)"
                : "Custom Digital & AI Infrastructure",
            urgency: "High",
            systemsToBuild: [
              language === "ar"
                ? "قواعد بيانات العملاء السحابية المشفرة المخصصة"
                : "Secure Cloud Ledger System",
              language === "ar"
                ? "أدوات الاستخلاص الفوري لتقرير وتحليل المستندات بالذكاء الاصطناعي"
                : "Semantic Document Extraction Agent",
            ],
            actionSteps: [
              language === "ar"
                ? "ترحيل ملفات المتابعة وتتبع التقدم يدوياً لصالح خوادم سحابية تلقائية"
                : "Migrate loose data trackers into relational nodes",
              language === "ar"
                ? "إضافة محرك أتمتة المستندات لتخفيف زمن العمل بنسبة 50٪"
                : "Integrate context-aware prompt parsing routes",
            ],
          },
        ],
        growthIndex: 68,
        potentialImpact:
          language === "ar"
            ? "توفير ما يزيد عن ٣٥ ساعة عمل يدوية أسبوعياً واستقرار مؤشر جذب المبيعات الاستراتيجية بمعدل ٢.٥ ضعف."
            : "Gain 35+ automated hours per week and sustain 2.5x growth in strategic premium bookings.",
        recommendedProgram:
          language === "ar"
            ? "مسار هدم فك الارتباط البشري وتحديث البني للمؤسسات"
            : "Systemic Growth Engine: Performance Architecture Core",
      });
    } finally {
      setLoading(false);
    }
  };

  // Pre-qualifying Booking submit
  const generateTemplate = (name: string) => {
    const isAr = language === 'ar';
    const isIt = language === 'it';
    
    if (isAr) {
      return `أهلاً كريم،\n\nأود طلب جلسة مواءمة استراتيجية بناءً على المخطط المعماري التشخيصي الخاص بي.\n\nالاسم: ${name || '_________'}\nقطاع الأعمال: ${businessType}\nحجم التشغيل: ${currentSize}\nأهم التحديات: ${topChallenge}\n\nنتائج التشخيص:\nمؤشر النمو: ${result?.growthIndex}\nالملخص المعماري: ${result?.architecturalSummary}\n\nأتطلع للتواصل معكم.`;
    } else if (isIt) {
      return `Ciao Kareem,\n\nVorrei richiedere una Chiamata di Allineamento Strategico basata sul mio progetto diagnostico.\n\nNome: ${name || '_________'}\nSettore Aziendale: ${businessType}\nDimensione Operativa: ${currentSize}\nSfida Principale: ${topChallenge}\n\nRisultato del Progetto:\nIndice di Crescita: ${result?.growthIndex}\nRiepilogo Architettonico: ${result?.architecturalSummary}\n\nNon vedo l'ora di parlare con te.`;
    } else {
      return `Hello Kareem,\n\nI would like to request a Strategic Alignment Call based on my generated diagnostic blueprint.\n\nName: ${name || '_________'}\nBusiness Sector: ${businessType}\nOperations Scale: ${currentSize}\nTop Challenge: ${topChallenge}\n\nDiagnostic Blueprint Result:\nGrowth Index: ${result?.growthIndex}\nPrimary Module: ${result?.architecturalSummary}\n\nI am looking forward to our discussion.`;
    }
  };

  const handleWhatsApp = () => {
    if (!clientName) return;
    const text = encodeURIComponent(generateTemplate(clientName));
    window.open(`https://wa.me/201002642521?text=${text}`, '_blank');
    
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setShowInquiryForm(false);
      setClientName("");
    }, 4000);
  };

  const handleEmail = () => {
    if (!clientName) return;
    const subject = encodeURIComponent(language === 'ar' ? 'طلب جلسة مواءمة استراتيجية' : language === 'it' ? 'Richiesta di Chiamata di Allineamento Strategico' : 'Strategic Alignment Call Request');
    const body = encodeURIComponent(generateTemplate(clientName));
    window.open(`mailto:Kareem@Tahoun.live?subject=${subject}&body=${body}`, '_blank');
    
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setShowInquiryForm(false);
      setClientName("");
    }, 4000);
  };

  const handleReset = () => {
    setResult(null);
    setBusinessType("");
    setCurrentSize("");
    setTopChallenge("");
    setGoals("");
    setInterestLearning(false);
    setInterestDigital(false);
    setInterestGrowth(false);
  };

  return (
    <section
      id="diagnostic"
      className="py-24 bg-slate-50 relative overflow-hidden border-t border-black/5"
    >
      {/* Background neon lines */}
      <div className="absolute inset-0 bg-radial from-slate-200 via-transparent to-transparent pointer-events-none opacity-40" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Entrance CTA and Header */}
        {!result && !loading && (
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-[0.25em] text-[#0891B2] uppercase py-1 px-3 rounded-full bg-cyan-50 border border-[#0891B2]/30">
              {t.audit.title}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-medium tracking-tight text-[#0F172A] mt-4 mb-2">
              {language === "ar"
                ? "مستعد للبناء بذكاء؟"
                : language === "it"
                  ? "Pronto a Costruire con Intelligenza?"
                  : "Ready To Build Smarter?"}
            </h2>
            <p className="text-slate-600 font-sans text-sm sm:text-base max-w-xl mx-auto mb-8">
              {language === "ar"
                ? "سواء كنت تنمي عملاً، تبني أنظمة، أو تطور مهاراتك — خطوتك التالية تبدأ هنا. يرجى إكمال استمارة التقييم المهني أدناه."
                : language === "it"
                  ? "Che tu stia facendo crescere un business, costruendo sistemi o trasformando le tue competenze, il tuo prossimo passo inizia qui. Completa il modulo di valutazione professionale qui sotto."
                  : "Whether you're growing a business, building systems, or transforming your skills — your next step starts here. Please complete the professional audit checklist below."}
            </p>
          </div>
        )}

        {/* LOADING STATE VIEW */}
        {loading && (
          <div className="rounded-3xl bg-white border border-black/5 backdrop-blur-xl p-12 text-center space-y-8 animate-pulse shadow-sm">
            <div className="relative w-20 h-20 mx-auto">
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-[#4F46E5]/20 animate-spin" />
              <div className="absolute inset-2 rounded-full border-4 border-[#0891B2] animate-pulse" />
            </div>
            <div className="space-y-3 max-w-md mx-auto">
              <h3 className="text-[#0F172A] font-sans text-lg font-bold">
                {t.audit.submitLoading}
              </h3>
              <p className="text-xs text-slate-500 font-mono">
                {language === "ar"
                  ? "جاري مراجعة الأقسام والعمليات المحددة... صياغة خطط التشغيل بالذكاء الاصطناعي..."
                  : "Synthesizing operational parameters... Structuring multi-modal AI advice..."}
              </p>
            </div>
          </div>
        )}

        {/* INPUT FORM VIEW */}
        {!result && !loading && (
          <form
            onSubmit={handleRunAudit}
            className="rounded-3xl bg-white border border-black/5 backdrop-blur-xl p-6 sm:p-10 space-y-6 shadow-sm"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Sector Selector */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-700 uppercase block font-semibold">
                  {t.audit.businessLabel} *
                </label>
                <select
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full rounded-xl bg-slate-50 border border-black/5 p-3.5 text-slate-800 text-xs sm:text-sm focus:border-[#0891B2] outline-none backdrop-blur-md cursor-pointer"
                >
                  <option value="">{t.audit.selectPlaceholder}</option>
                  {sectors.map((sec, i) => (
                    <option key={i} value={sec}>
                      {sec}
                    </option>
                  ))}
                </select>
              </div>

              {/* Team Scale Selector */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-700 uppercase block font-semibold">
                  {t.audit.sizeLabel} *
                </label>
                <select
                  value={currentSize}
                  onChange={(e) => setCurrentSize(e.target.value)}
                  className="w-full rounded-xl bg-slate-50 border border-black/5 p-3.5 text-slate-800 text-xs sm:text-sm focus:border-[#0891B2] outline-none backdrop-blur-md cursor-pointer"
                >
                  <option value="">{t.audit.selectPlaceholder}</option>
                  {scales.map((sc, i) => (
                    <option key={i} value={sc}>
                      {sc}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Critical Obstacle Selector */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-700 uppercase block font-semibold animate-pulse">
                {t.audit.challengeLabel} *
              </label>
              <select
                value={topChallenge}
                onChange={(e) => setTopChallenge(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border border-black/5 p-3.5 text-slate-800 text-xs sm:text-sm focus:border-[#0891B2] outline-none backdrop-blur-md cursor-pointer"
              >
                <option value="">{t.audit.selectPlaceholder}</option>
                {challenges.map((ch, i) => (
                  <option key={i} value={ch}>
                    {ch}
                  </option>
                ))}
              </select>
            </div>

            {/* Freeform Goals input */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-700 uppercase block font-semibold">
                {t.audit.goalsLabel}
              </label>
              <textarea
                value={goals}
                onChange={(e) => setGoals(e.target.value)}
                placeholder={t.audit.goalsPlaceholder}
                rows={3}
                className="w-full rounded-xl bg-slate-50 border border-black/5 p-3.5 text-slate-800 text-xs sm:text-sm focus:border-[#0891B2] outline-none resize-none backdrop-blur-md"
              />
            </div>

            {/* Toggle checkboxes for specialized ecosystem targets */}
            <div className="space-y-3 pt-3 border-t border-black/5">
              <span className="text-[10px] font-mono text-slate-500 uppercase block font-semibold">
                {language === "ar"
                  ? "أهداف الأنظمة المستهدفة"
                  : language === "it"
                    ? "Obiettivi degli Ecosistemi"
                    : "Ecosystem Targets"}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* 1 */}
                <label
                  className={`p-3.5 rounded-xl border flex items-center gap-3 cursor-pointer select-none transition-colors ${
                    interestGrowth
                      ? "bg-[#4F46E5]/10 border-[#4F46E5] text-[#0F172A]"
                      : "bg-slate-50 border-black/5 text-slate-600 hover:border-black/10 hover:text-slate-800 backdrop-blur-xl"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={interestGrowth}
                    onChange={(e) => setInterestGrowth(e.target.checked)}
                    className="sr-only"
                  />
                  <Layers className="w-4 h-4 shrink-0 text-[#4F46E5]" />
                  <span className="text-[11px] font-semibold leading-tight">
                    {t.audit.growthInterest.split(" ")[0]}{" "}
                    {t.audit.growthInterest.split(" ")[1]}
                  </span>
                </label>

                {/* 2 */}
                <label
                  className={`p-3.5 rounded-xl border flex items-center gap-3 cursor-pointer select-none transition-colors ${
                    interestDigital
                      ? "bg-[#0891B2]/10 border-[#0891B2] text-[#0F172A]"
                      : "bg-slate-50 border-black/5 text-slate-600 hover:border-black/10 hover:text-slate-800 backdrop-blur-xl"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={interestDigital}
                    onChange={(e) => setInterestDigital(e.target.checked)}
                    className="sr-only"
                  />
                  <Zap className="w-4 h-4 shrink-0 text-[#0891B2]" />
                  <span className="text-[11px] font-semibold leading-tight">
                    {t.audit.digitalInterest.split(" ")[0]}{" "}
                    {t.audit.digitalInterest.split(" ")[1]}
                  </span>
                </label>

                {/* 3 */}
                <label
                  className={`p-3.5 rounded-xl border flex items-center gap-3 cursor-pointer select-none transition-colors ${
                    interestLearning
                      ? "bg-[#4F46E5]/10 border-[#4F46E5] text-[#0F172A]"
                      : "bg-slate-50 border-black/5 text-slate-600 hover:border-black/10 hover:text-slate-800 backdrop-blur-xl"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={interestLearning}
                    onChange={(e) => setInterestLearning(e.target.checked)}
                    className="sr-only"
                  />
                  <BookOpen className="w-4 h-4 shrink-0 text-[#4F46E5]" />
                  <span className="text-[11px] font-semibold leading-tight">
                    {t.audit.learningInterest.split(" ")[0]}{" "}
                    {t.audit.learningInterest.split(" ")[1]}
                  </span>
                </label>
              </div>
            </div>

            {errorMsg && (
              <p className="text-xs text-red-500 font-mono text-center">
                {errorMsg}
              </p>
            )}

            {/* Submission button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#4F46E5] to-[#0891B2] hover:opacity-95 text-white font-semibold text-sm tracking-widest uppercase shadow-lg shadow-[#4F46E5]/15 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t.audit.submitBtn}</span>
              <Send className="w-4 h-4 rtl:rotate-180" />
            </button>
          </form>
        )}

        {/* RESULTS DIAGNOSTIC PANEL */}
        {result && !loading && (
          <div className="space-y-6 animate-fade-in">
            <div className="rounded-3xl bg-white border border-[#4F46E5]/40 backdrop-blur-xl overflow-hidden shadow-2xl">
              {/* Header result info banner */}
              <div className="p-6 sm:p-10 bg-slate-50 border-b border-black/5 space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <span className="text-[10px] font-mono text-[#0891B2] uppercase tracking-widest font-semibold">
                      DIAGNOSTIC COMPILATION
                    </span>
                    <h3 className="text-xl sm:text-2xl font-sans font-bold text-[#0F172A] mt-1">
                      {t.audit.resultTitle}
                    </h3>
                  </div>

                  {/* Gauge Growth Index */}
                  <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-black/5 backdrop-blur-md shadow-sm">
                    <div className="text-left rtl:text-right">
                      <span className="text-[8px] font-mono text-slate-500 block leading-none">
                        {t.audit.growthIndexLabel}
                      </span>
                      <span className="text-xl font-mono font-black text-[#0891B2] block">
                        {result.growthIndex}/100
                      </span>
                    </div>

                    {/* Ring simulation */}
                    <div className="relative w-10 h-10 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="20"
                          cy="20"
                          r="16"
                          stroke="rgba(0,0,0,0.05)"
                          strokeWidth="3"
                          fill="none"
                        />
                        <circle
                          cx="20"
                          cy="20"
                          r="16"
                          stroke="#0891B2"
                          strokeWidth="3"
                          fill="none"
                          strokeDasharray="100"
                          strokeDashoffset={100 - result.growthIndex}
                        />
                      </svg>
                      <Sparkles className="w-3.5 h-3.5 text-[#4F46E5] absolute" />
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-black/5 space-y-2 shadow-sm">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">
                    EXECUTIVE EVALUATION SUMMARY
                  </span>
                  <p className="text-slate-700 text-xs sm:text-sm font-sans leading-relaxed">
                    {result.executiveSummary}
                  </p>
                </div>
              </div>

              {/* Specific Systems to construct */}
              <div className="p-6 sm:p-10 space-y-8 bg-white">
                <span className="text-[10px] font-mono text-slate-500 uppercase block border-b border-black/5 pb-2">
                  RECOMMENDED INFRASTRUCTURE
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {(result.strategicPillars || []).map((pillar, index) => (
                    <div
                      key={index}
                      className="p-5 rounded-2xl bg-slate-50 border border-black/5 space-y-4"
                    >
                      {/* Name card header */}
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="text-sm font-sans font-bold text-[#0F172A] uppercase">
                          {pillar.pillar}
                        </h4>
                        <span
                          className={`text-[9px] font-mono px-2 py-0.5 rounded uppercase font-semibold ${
                            pillar.urgency === "Critical"
                              ? "bg-red-500/10 text-red-400 border border-red-500/20"
                              : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                          }`}
                        >
                          {pillar.urgency}
                        </span>
                      </div>

                      {/* systems to build */}
                      <div className="space-y-2">
                        <span className="text-[9px] font-mono text-slate-500 uppercase block">
                          {t.audit.relaunchBtn ? "Systems to build" : "Systems"}
                        </span>
                        {(pillar.systemsToBuild || []).map((sys, i) => (
                          <div
                            key={i}
                            className="flex gap-2 items-start text-xs text-slate-700 leading-tight"
                          >
                            <CheckCircle className="w-3.5 h-3.5 text-[#0891B2] shrink-0 mt-0.5" />
                            <span>{sys}</span>
                          </div>
                        ))}
                      </div>

                      {/* actions */}
                      <div className="space-y-2 pt-2 border-t border-black/5">
                        <span className="text-[9px] font-mono text-slate-500 uppercase block">
                          {t.audit.actionStepsLabel}
                        </span>
                        {(pillar.actionSteps || []).map((act, i) => (
                          <div
                            key={i}
                            className="flex gap-2 items-start text-xs text-slate-600 leading-tight"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] shrink-0 mt-1.5" />
                            <span>{act}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-black/5 pt-6 text-xs leading-relaxed">
                  <div className="p-4 bg-slate-50 border border-black/5 rounded-xl">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">
                      {t.audit.potentialImpactLabel}
                    </span>
                    <span className="text-slate-700">
                      {result.potentialImpact}
                    </span>
                  </div>
                  <div className="p-4 bg-slate-50 border border-black/5 rounded-xl">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">
                      {t.audit.recommendedProgramLabel}
                    </span>
                    <span className="text-slate-700 font-semibold">
                      {result.recommendedProgram}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action trigger footer inside diagnostic box */}
              <div className="p-6 bg-slate-50 backdrop-blur-md border-t border-black/5 flex flex-col sm:flex-row justify-between items-center gap-4">
                <button
                  onClick={handleReset}
                  className="px-4 py-2.5 rounded-xl border border-black/5 text-slate-500 hover:text-[#0F172A] hover:bg-black/5 text-xs font-mono transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <RefreshCcw
                    className="w-3.5 h-3.5 animate-spin"
                    style={{ animationDuration: "6s" }}
                  />
                  <span>{t.audit.relaunchBtn}</span>
                </button>

                <button
                  onClick={() => setShowInquiryForm(true)}
                  className="px-6 py-2.5 rounded-xl bg-[#0891B2] text-white hover:bg-[#0891B2]/90 text-xs font-mono font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>
                    {language === "ar"
                      ? "حجز جلسة ومناقشة المخطط"
                      : language === "it"
                        ? "Prenota Revisione Progetto"
                        : "Schedule Blueprint Review Session"}
                  </span>
                </button>
              </div>
            </div>

            {/* Collapsible pre-qualification and consultation form */}
            {showInquiryForm && (
              <div className="p-6 rounded-3xl bg-white border border-black/5 backdrop-blur-xl animate-fade-in shadow-xl">
                <h4 className="text-base font-sans font-bold text-[#0F172A] mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#0891B2]" />
                  <span>
                    {language === "ar"
                      ? "جلسة المواءمة: مراجعة المخطط المعماري"
                      : language === "it"
                        ? "Chiamata di Allineamento: Revisione Progetto"
                        : "Alignment Call: Blueprint Audit review"}
                  </span>
                </h4>
                <p className="text-xs text-slate-500 font-sans mb-6">
                  {language === "ar"
                    ? "يرجى تقديم بيانات الاتصال. سنقوم بمراجعة المخطط المعماري الذي تولد لتصميم العرض النهائي لأعمالكم."
                    : language === "it"
                      ? "Inserisci email e nome di seguito. Coordineremo una breve chiamata conoscitiva su Zoom."
                      : "Input email and name below. Our core engineer will verify the computed diagnostics and coordinate a brief Discovery Zoom call."}
                </p>

                {bookingSuccess ? (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center text-xs text-emerald-400 font-semibold">
                    {language === "ar"
                      ? "تم تقديم الطلب بنجاح! سنتواصل معك عبر البريد خلال ٢٤ ساعة."
                      : language === "it"
                        ? "Richiesta inviata con successo! Ti contatteremo presto."
                        : "Form delivered successfully! Email briefing has been dispatched."}
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-500 uppercase font-semibold">
                        {language === "ar"
                          ? "الاسم *"
                          : language === "it"
                            ? "Il tuo Nome *"
                            : "Your Name *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder={
                          language === "ar" ? "كريم طاحون" : "Kareem Tahoun"
                        }
                        className="w-full rounded-lg bg-slate-50 border border-black/5 p-2.5 text-xs text-slate-800 outline-none focus:border-[#0891B2]"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                      <button
                        onClick={handleWhatsApp}
                        disabled={!clientName}
                        className="w-full py-3 rounded-xl bg-[#25D366] text-white hover:opacity-90 font-mono text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <MessageCircle className="w-4 h-4" />
                        {language === "ar"
                          ? "إرسال عبر واتساب"
                          : language === "it"
                            ? "Invia tramite WhatsApp"
                            : "Send via WhatsApp"}
                      </button>
                      <button
                        onClick={handleEmail}
                        disabled={!clientName}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-[#4F46E5] to-[#0891B2] text-white hover:opacity-90 font-mono text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Mail className="w-4 h-4" />
                        {language === "ar"
                          ? "إرسال عبر البريد الإلكتروني"
                          : language === "it"
                            ? "Invia tramite Email"
                            : "Send via Email"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
