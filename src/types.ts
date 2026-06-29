export type Language = 'en' | 'ar' | 'it';

export interface EcosystemPillar {
  title: string;
  tagline: string;
  items: string[];
  featured?: string;
  featuredItems?: string[];
}

export interface IndustrySolution {
  title: string;
  challenges: string[];
  systems: string[];
  outcomes: string[];
  iconName: string;
}

export interface Course {
  id: string;
  title: string;
  category: string;
  duration: string;
  level: string;
  modules: number;
  outcomes: string[];
  path: string;
}

export interface MentorshipTrack {
  id: string;
  title: string;
  type: '1:1' | 'Package' | 'Transformation';
  duration: string;
  outcomes: string[];
}

export interface LocalizationBundle {
  nav: {
    ecosystems: string;
    solutions: string;
    academy: string;
    whyUs: string;
    founder: string;
    diagnostic: string;
    ctaButton: string;
  };
  hero: {
    badge: string;
    headline: string;
    tagline: string;
    ctaExplore: string;
    ctaAudit: string;
    interactiveNotice: string;
  };
  pillars: {
    sectionTitle: string;
    sectionSubtitle: string;
    businessGrowth: string;
    growthTagline: string;
    digitalTransformation: string;
    digitalTagline: string;
    learningTransformation: string;
    learningTagline: string;
    featuredCapability: string;
  };
  solutions: {
    sectionTitle: string;
    sectionSubtitle: string;
    challengesLabel: string;
    systemsLabel: string;
    outcomesLabel: string;
  };
  academy: {
    sectionTitle: string;
    sectionSubtitle: string;
    all: string;
    selfPaced: string;
    mentorship: string;
    programs: string;
    durationLabel: string;
    levelLabel: string;
    modulesLabel: string;
    outcomesLabel: string;
    pathLabel: string;
    levelBeginner: string;
    levelIntermediate: string;
    levelAdvanced: string;
  };
  trust: {
    sectionTitle: string;
    sectionSubtitle: string;
    metricsTitle: string;
  };
  founder: {
    sectionTitle: string;
    sectionSubtitle: string;
    academicBadge: string;
    engineeringCore: string;
    engineeringDesc: string;
    scienceCore: string;
    scienceDesc: string;
    experienceCore: string;
    experienceDesc: string;
    humanCentricCore: string;
    humanCentricDesc: string;
    globalMobilityCore: string;
    globalMobilityDesc: string;
    founderQuote: string;
  };
  audit: {
    title: string;
    subtitle: string;
    businessLabel: string;
    selectPlaceholder: string;
    sizeLabel: string;
    challengeLabel: string;
    goalsLabel: string;
    goalsPlaceholder: string;
    learningInterest: string;
    digitalInterest: string;
    growthInterest: string;
    submitBtn: string;
    submitLoading: string;
    resultTitle: string;
    recommendationTitle: string;
    urgencyLabel: string;
    actionStepsLabel: string;
    potentialImpactLabel: string;
    relaunchBtn: string;
    growthIndexLabel: string;
    recommendedProgramLabel: string;
  };
  footer: {
    copyright: string;
    tagline: string;
  };
}

export const localization: Record<Language, LocalizationBundle> = {
  en: {
    nav: {
      ecosystems: "Ecosystems",
      solutions: "Solutions",
      academy: "Academy",
      whyUs: "Why TAHOUN",
      founder: "Founder",
      diagnostic: "Ecosystem Assessment",
      ctaButton: "Book Strategic Call"
    },
    hero: {
      badge: "TAHOUN INTELLIGENCE",
      headline: "Intelligent Systems For Growth & Transformation",
      tagline: "We build tailored architectural growth models, scalable digital infrastructure, and elite learning programs for international founders & organizations.",
      ctaExplore: "Explore Ecosystems",
      ctaAudit: "Calculate Growth Index",
      interactiveNotice: "Hover over the pillars to activate intelligence modules"
    },
    pillars: {
      sectionTitle: "We Build Intelligent Growth Systems",
      sectionSubtitle: "An interconnected ecosystem designed to optimize every dimension of corporate and human capability.",
      businessGrowth: "Business Growth",
      growthTagline: "Grow smarter. Attract better. Convert faster.",
      digitalTransformation: "Digital Transformation",
      digitalTagline: "Build smarter systems. Scale without chaos.",
      learningTransformation: "Learning & Transformation",
      learningTagline: "Learn, transform, and build a better version of yourself.",
      featuredCapability: "Featured Capability (Intelligence Systems)"
    },
    solutions: {
      sectionTitle: "Built Around Real Business Needs",
      sectionSubtitle: "Optimized architectures engineered to address distinct operational demands and unlock high-impact growth.",
      challengesLabel: "Challenges Encountered",
      systemsLabel: "Implemented Systems",
      outcomesLabel: "Target Outcomes"
    },
    academy: {
      sectionTitle: "Learn. Transform. Evolve.",
      sectionSubtitle: "A premium, Netflix-inspired curriculum built for modern entrepreneurs, visionaries, and digital professionals.",
      all: "All Curriculums",
      selfPaced: "Self-Paced Courses",
      mentorship: "Growth Mentorship",
      programs: "Elite Programs",
      durationLabel: "Duration",
      levelLabel: "Skill Horizon",
      modulesLabel: "Core Modules",
      outcomesLabel: "Transformation Capabilities",
      pathLabel: "Career Pathway",
      levelBeginner: "Foundational Focus",
      levelIntermediate: "Tactical Execution",
      levelAdvanced: "Master Strategy & Vision"
    },
    trust: {
      sectionTitle: "Why Businesses Trust Us",
      sectionSubtitle: "We replace abstract consulting concepts with engineered architectures that yield deterministic results.",
      metricsTitle: "Ecosystem Footprint & Impact Metrics"
    },
    founder: {
      sectionTitle: "Behind Every System Is Human Intelligence",
      sectionSubtitle: "Meet our founder, bridging technological excellence with deep human psychology and strategic execution.",
      academicBadge: "Founder & Chief Architect",
      engineeringCore: "Engineering Mindset",
      engineeringDesc: "Designing robust systems built on reliability, scientific rigor, logical workflows, and seamless technical integration.",
      scienceCore: "Social Sciences Foundation",
      scienceDesc: "Deep understanding of behavioral economics, high-performance psychology, decision dynamics, and human learning mechanics.",
      experienceCore: "Global Command",
      experienceDesc: "Decade of elite experience steering digital products and optimization programs with teams across London, Dubai, Cairo, and Rome.",
      humanCentricCore: "Human-Centered Thinking",
      humanCentricDesc: "Designing solutions through users' eyes, optimizing interface workflows to perfectly match deep emotional and structural needs.",
      globalMobilityCore: "Global Living & Mobility",
      globalMobilityDesc: "Advising family offices and modern professionals on lifestyle engineering, structural mobility, and cross-border arbitrage.",
      founderQuote: "We do not sell software, and we do not sell mentoring. We program predictable systems that convert abstract ambitions into structural realities."
    },
    audit: {
      title: "Interactive System Architect Diagnostic",
      subtitle: "Calibrate your organization's growth. Receive a real-time bespoke systems architectural growth blueprint powered by our proprietary diagnostic engine.",
      businessLabel: "Sector or Operational Category",
      selectPlaceholder: "Choose specialized sector...",
      sizeLabel: "Current Team Scale / Operations",
      challengeLabel: "Most Critical Roadblock",
      goalsLabel: "Primary Desired Growth Outcome",
      goalsPlaceholder: "Describe your expansion, tech debt, or capability objective...",
      learningInterest: "Interested in Learning Academy & Leadership Programs",
      digitalInterest: "Requires Custom Digital Infrastructure or AI Solutions",
      growthInterest: "Needs Performance Marketing & Sales System Engineering",
      submitBtn: "Run Ecosystem Diagnostic",
      submitLoading: "Processing inputs... Compiling growth architecture...",
      resultTitle: "Your custom Strategic Growth Blueprint",
      recommendationTitle: "Strategic Recommendation Brief",
      urgencyLabel: "Prioritization Urgency",
      actionStepsLabel: "Bespoke Action Steps",
      potentialImpactLabel: "Deterministic Impact",
      relaunchBtn: "Recalibrate Inputs",
      growthIndexLabel: "GROWTH EFFICIENCY INDEX",
      recommendedProgramLabel: "Bespoke Academic Recommendation"
    },
    footer: {
      copyright: "© 2026 TAHOUN Intelligence. All architectural and human growth rights reserved.",
      tagline: "Intelligent Systems For Growth & Transformation"
    }
  },
  ar: {
    nav: {
      ecosystems: "الأنظمة",
      solutions: "الحلول",
      academy: "الأكاديمية",
      whyUs: "لماذا طاحون",
      founder: "المؤسس",
      diagnostic: "تقييم مستوى النمو",
      ctaButton: "حجز جلسة استراتيجية"
    },
    hero: {
      badge: "طاحون INTELLIGENCE",
      headline: "أنظمة ذكية للنمو والتحول المؤسسي والشخصي",
      tagline: "نبني نماذج معمارية مخصصة للنمو، وبنية تحتية رقمية قابلة للتوسع، وبرامج تعليمية مميزة لنخبة من الرواد والمؤسسات العالمية.",
      ctaExplore: "استكشف الأنظمة الرئيسية",
      ctaAudit: "احسب مؤشر كفاءة النمو",
      interactiveNotice: "مرر المؤشر فوق الركائز لتنشيط وحدات الذكاء وتصفحها"
    },
    pillars: {
      sectionTitle: "نبني أنظمة نمو رقمية واستراتيجية بالغة الدقة",
      sectionSubtitle: "منظومة متكاملة ومترابطة مصممة لرفع كفاءة الأعمال والقدرة البشرية.",
      businessGrowth: "نمو الأعمال الاستراتيجي",
      growthTagline: "توسع أسرع، اجذب أفضل العملاء، وحول الفرص بدقة متناهية.",
      digitalTransformation: "التحول الرقمي المتكامل",
      digitalTagline: "شيد أنظمة رقمية ذكية. تخلص من الفوضى والتعقيد والجهد اليدوي.",
      learningTransformation: "التعليم العالي والتحول الإنساني",
      learningTagline: "تعلم، تفوق، وابنِ نسختك الأرقى طاقةً وخبرة واستقلالاً.",
      featuredCapability: "القدرات الفائقة (أنظمة اتخاذ القرار واستخراج البيانات بالذكاء الاصطناعي)"
    },
    solutions: {
      sectionTitle: "حلول صممت لأجل متطلبات السوق والنمو الواقعي",
      sectionSubtitle: "واجهات برمجية ونظم تشغيل متطورة مصممة خصيصاً للتعامل مع تحدياتك التشغيلية بكفاءة عالية.",
      challengesLabel: "العوائق والتحديات الحالية",
      systemsLabel: "الأنظمة التشغيلية المقترحة",
      outcomesLabel: "النتائج المحققة"
    },
    academy: {
      sectionTitle: "تعلّم. تحوّل. ارتقِ.",
      sectionSubtitle: "منصة تعليمية تقدم برامج متقدمة مصممة بنمط تفاعلي وعملي، ملهمة ومجهزة لرواد الأعمال والمحترفين الاستراتيجيين.",
      all: "جميع المسارات التعليمية",
      selfPaced: "برامج التعلم الذاتي",
      mentorship: "الإرشاد والتوجيه الاستراتيجي",
      programs: "برامج التحول الفائقة",
      durationLabel: "المدة الزمنية",
      levelLabel: "مستوى المهارة المستهدف",
      modulesLabel: "الوحدات التدريبية المباشرة",
      outcomesLabel: "القدرات المكتسبة",
      pathLabel: "المستقبل المهني والتقني",
      levelBeginner: "المرحلة التأسيسية الشاملة",
      levelIntermediate: "التنفيذ التكتيكي والمهاري",
      levelAdvanced: "التخطيط الاستراتيجي والرؤية القيادية"
    },
    trust: {
      sectionTitle: "لماذا يثق بنا كبار الشركاء؟",
      sectionSubtitle: "نستبدل النظريات الاستشارية العقيمة بهندسة تقنية وأنظمة برمجية تنتج مخرجات حتمية وقابلة للقياس.",
      metricsTitle: "إحصائيات التأثير والمنظومة"
    },
    founder: {
      sectionTitle: "خلف كل نظام ذكي.. عقل بشري يدرك أبعاد النمو",
      sectionSubtitle: "تعرف على مؤسس المنظومة، حيث تتلاقى العبقرية البرمجية والهندسية مع علم النفس التطبيقي لتطوير الأعمال والتحول العابر للقارات.",
      academicBadge: "المؤسس ومخطط المنظومة",
      engineeringCore: "العقلية الهندسية الصارمة",
      engineeringDesc: "بناء وتصميم برمجيات متينة، مبنية على التحليل الدقيق، وتدفقات العمل الفعالة، والاندماج التقني الأقصى.",
      scienceCore: "ركائز العلوم الإنسانية والاجتماعية",
      scienceDesc: "إلمام عميق بالاقتصاد السلوكي، وعلم نفس الأداء العالي، وكيفية اتخاذ القرارات والتعلم البشري المستقر.",
      experienceCore: "الخبرة الميدانية الدولية",
      experienceDesc: "عقد من القيادة الرقمية والبرمجية وإدارة حملات التوسع مع فرق عمل في لندن، دبي، القاهرة، وروما.",
      humanCentricCore: "التركيز على التجربة الإنسانية",
      humanCentricDesc: "تصميم واجهات وأنظمة مريحة تتفهم وتلبي الاحتياجات النفسية والمهام الهيكلية للمستخدم النهائي بشكل انسيابي.",
      globalMobilityCore: "الحياة الحرة والتنقل العالمي",
      globalMobilityDesc: "تقديم استشارات استراتيجية للمحترفين والمستثمرين لإعادة هندسة المعيشة والحصول على الإقامة والجنسيات العابرة للحدود.",
      founderQuote: "نحن لا نبيع برمجيات، ولا نبيع نصائح نظرية. نحن نبني محركات نمو رقمية دقيقة تحول الأمنيات والخطط المعلقة إلى واقع هيكلي مؤسسي صلب."
    },
    audit: {
      title: "أداة هندسة وتشخيص التقييم الذكي",
      subtitle: "قم بتحليل وتقييم كفاءة نمو منظمتك، واحصل فوراً على حل مخطط استراتيجي وأنظمة نمو رقمية مدعومة بمحرك التحليل الخاص بـ طاحون INTELLIGENCE.",
      businessLabel: "التصنيف التشغيلي للمؤسسة",
      selectPlaceholder: "اختر نوع النشاط...",
      sizeLabel: "حجم الفريق والعمليات حالياً",
      challengeLabel: "العائق الرئيسي الذي يواجهك اليوم",
      goalsLabel: "الهدف والنتيجة الاستراتيجية المرجوة",
      goalsPlaceholder: "اشرح الأهداف، التوسع، المشاكل التقنية أو التنظيمية التي تسعى لحلها...",
      learningInterest: "مهتم بالانضمام للأكاديمية وبرامج التوجيه الاستراتيجي والقيادي",
      digitalInterest: "بحاجة لبناء أنظمة رقمية مخصصة، برمجيات ذكية، أو حلول الذكاء الاصطناعي",
      growthInterest: "بحاجة لهندسة وتأسيس قنوات التسويق وبناء العوائد الفائقة وأنظمة المبيعات",
      submitBtn: "ابدأ تشخيص المنظومة",
      submitLoading: "جاري تحليل البيانات... توليد المخطط المعماري واستجابة الاستشارة...",
      resultTitle: "مخطط النمو والتحول الاستراتيجي الخاص بك",
      recommendationTitle: "ملخص التوجيه المعماري للنمو",
      urgencyLabel: "أهمية وسرعة الأولوية للتنفيذ",
      actionStepsLabel: "الخطوات البرمجية والتنفيذية الموصى بها",
      potentialImpactLabel: "التأثير المحقق الحتمي للأعمال",
      relaunchBtn: "إعادة تعيين وبدء فحص جديد",
      growthIndexLabel: "مؤشر كفاءة النمو والتشغيل",
      recommendedProgramLabel: "البرنامج الأكاديمي والقيادي المقترح"
    },
    footer: {
      copyright: "© 2026 طاحون INTELLIGENCE. جميع حقوق التطوير المعماري والنمو مكفولة.",
      tagline: "أنظمة ذكية وشاملة للتوسع والتحول الرقمي والإنساني"
    }
  },
  it: {
    nav: {
      ecosystems: "Ecosistemi",
      solutions: "Soluzioni",
      academy: "Accademia",
      whyUs: "Perché TAHOUN",
      founder: "Fondatore",
      diagnostic: "Valutazione della Crescita",
      ctaButton: "Prenota una sessione"
    },
    hero: {
      badge: "INTELLIGENZA TAHOUN",
      headline: "Sistemi Intelligenti Per Crescita & Trasformazione",
      tagline: "Sviluppiamo modelli architettonici di crescita su misura, infrastrutture digitali scalabili e percorsi di formazione d'élite per imprenditori e aziende globali.",
      ctaExplore: "Esplora gli Ecosistemi",
      ctaAudit: "Calcola Indice di Crescita",
      interactiveNotice: "Tieni premuto o passa il mouse sopra i pilastri per attivare i sistemi"
    },
    pillars: {
      sectionTitle: "Sviluppiamo Sistemi Intelligenti di Crescita",
      sectionSubtitle: "Un ecosistema integrato e interconnesso progettato per massimizzare e accelerare ogni dimensione dell'efficienza aziendale e umana.",
      businessGrowth: "Sviluppo del Business",
      growthTagline: "Cresci con intelligenza. Attira lead più qualificati. Converti rapidamente.",
      digitalTransformation: "Trasformazione Digitale",
      digitalTagline: "Disegna sistemi intelligenti. Scala senza alcuna complessità.",
      learningTransformation: "Formazione & Evoluzione",
      learningTagline: "Impara, trasformati ed evolve per esprimere stabilmente la tua versione migliore.",
      featuredCapability: "Specializzazione Esclusiva (Intelligence Systems - Sistemi di Decisione Autonomi)"
    },
    solutions: {
      sectionTitle: "Soluzioni Sviluppate su Reali Esigenze",
      sectionSubtitle: "Architetture premium create per rispondere e superare le sfide operative reali del mercato contemporaneo.",
      challengesLabel: "Sfide Identificate",
      systemsLabel: "Sistemi Integrati",
      outcomesLabel: "Risultati Misurabili"
    },
    academy: {
      sectionTitle: "Apprendi. Trasformati. Evolviti.",
      sectionSubtitle: "Un catalogo formativo ispirato alle esperienze digitali più evolutive, pre-ingegnerizzato per imprenditori ed accademici moderni.",
      all: "Tutti i Percorsi",
      selfPaced: "Corsi Autonomi",
      mentorship: "Mentorship Strategica",
      programs: "Programmi di Trasformazione",
      durationLabel: "Durata",
      levelLabel: "Orizzonte competenze",
      modulesLabel: "Moduli Didattici",
      outcomesLabel: "Capacità Acquisite",
      pathLabel: "Sviluppo di Carriera",
      levelBeginner: "Focus Fondamentale",
      levelIntermediate: "Esecuzione Tattica",
      levelAdvanced: "Visione & Strategia d'élite"
    },
    trust: {
      sectionTitle: "Perché le Aziende si Affidano a Noi",
      sectionSubtitle: "Sostituiamo concetti di consulenza astratti con architetture software stabili e flussi operativi deterministici.",
      metricsTitle: "Metrica d'Impatto e Presenza Globale"
    },
    founder: {
      sectionTitle: "Dietro i Sistemi Esiste una Profonda Intelligenza Umana",
      sectionSubtitle: "Conosci il nostro fondatore, promotore di un approccio che fonde rigore ingegneristico, discipline psicosociali e visione globale.",
      academicBadge: "Fondatore e Progettista dell'Ecosistema",
      engineeringCore: "Approccio Ingegneristico",
      engineeringDesc: "Progettazione di sistemi robusti e stabili basati su parametri misurabili, affidabilità tecnica e processi integrati senza attrito.",
      scienceCore: "Fondamenti di Scienze Sociali",
      scienceDesc: "Comprensione profonda di economia comportamentale, psicologia dell'altissimo rendimento e dinamiche di decisione umana.",
      experienceCore: "Esperienza Internazionale d'Élite",
      experienceDesc: "Oltre dieci anni spesi a disegnare piattaforme software e ottimizzare i profitti in città cardine come Londra, Dubai, Il Cairo e Roma.",
      humanCentricCore: "Progettazione Centrata sull'Umano",
      humanCentricDesc: "Costruzione di architetture digitali che mettono al primo posto l'esperienza dell'utente, allineando workflows ad alte risposte emotive.",
      globalMobilityCore: "Mobilità Globale",
      globalMobilityDesc: "Consulenza avanzata per professionisti moderni in materia di ottimizzazione dello stile di vita, residenze globali e arbitraggio regolamentare.",
      founderQuote: "Non vendiamo software generici, né pacchetti di coaching. Costruiamo sistemi matematici che trasformano intenzioni astratte in risultati strutturali."
    },
    audit: {
      title: "Diagnostica Architetturale dell'Ecosistema",
      subtitle: "Calcola online il coefficiente di crescita della tua impresa. Ricevi subito un report strategico su misura redatto dal nostro motore di diagnostica avanzato.",
      businessLabel: "Ambito di Operatività",
      selectPlaceholder: "Seleziona settore...",
      sizeLabel: "Dimensione Operativa / Membri Team",
      challengeLabel: "La Sfida Più Importante Oggi",
      goalsLabel: "Risultato Primario Desiderato",
      goalsPlaceholder: "Racconta l'espansione, la rimozione di ostacoli o l'automazione che miri a creare...",
      learningInterest: "Interessato ai percorsi dell'Accademia e Mentorship d'élite",
      digitalInterest: "Necessita di infrastruttura digitale personalizzata o intelligenza artificiale",
      growthInterest: "Necessita di sistemi di marketing strategico e canali di vendita automatizzati",
      submitBtn: "Genera Diagnostica Ecosistema",
      submitLoading: "Elaborazione dati... Generando mappa dei sistemi...",
      resultTitle: "Il Tuo Mappatore di Sistemi della Crescita",
      recommendationTitle: "Sintesi Strategica Raccomandata",
      urgencyLabel: "Urgenza di Attuazione",
      actionStepsLabel: "Step Operativi Consigliati",
      potentialImpactLabel: "Impatto Deterministico",
      relaunchBtn: "Ricalcola Parametri",
      growthIndexLabel: "INDICE DI EFFICIENZA DI CRESCITA",
      recommendedProgramLabel: "Programma Accademico Consigliato"
    },
    footer: {
      copyright: "© 2026 TAHOUN Intelligence. Tutti i diritti di crescita dedicati e registrati.",
      tagline: "Sistemi Intelligenti Per Crescita & Trasformazione"
    }
  }
};

export const businessPillarsData: Record<Language, Record<string, EcosystemPillar>> = {
  en: {
    growth: {
      title: "Business Growth",
      tagline: "Grow smarter. Attract better. Convert faster.",
      items: [
        "Growth Strategy Engineering",
        "Performance Marketing Systems",
        "Predictive Sales Pipeline Systems",
        "Corporate Brand & Authority Sculpting",
        "Content Intelligence Engines",
        "Global Community Architecture",
        "Unified Analytics & Profit Optimization"
      ]
    },
    digital: {
      title: "Digital Transformation",
      tagline: "Build smarter systems. Scale without chaos.",
      items: [
        "High-Fidelity Websites & Platforms",
        "Scalable Web & Mobile Ecosystems",
        "Custom ERP & Operations Middleware",
        "Decision Intelligence Dashboards",
        "Smart Automation Workflows"
      ],
      featured: "Intelligence Systems (Specialized Capability)",
      featuredItems: [
        "AI Research Systems & Fine-Tuning",
        "Structured Data Extraction Protocols",
        "Multi-Modal AI Knowledge Bases",
        "Automated Competitive Intelligence",
        "Strategic Document Intelligence Hubs",
        "Auto-Insight Generation Pipelines"
      ]
    },
    learning: {
      title: "Learning & Transformation",
      tagline: "Learn, transform, and build a better version of yourself",
      items: [
        "Self-Paced Strategic Curriculums",
        "1:1 Elite Mentorship Ecosystems",
        "Premium Growth Programs",
        "Cognitive Performance Coaching",
        "Human Development Foundations",
        "AI Mastery & Digital Power-Skills",
        "Global Living & International Arbitrage Advising"
      ]
    }
  },
  ar: {
    growth: {
      title: "نمو الأعمال الاستراتيجي",
      tagline: "توسع أسرع، اجذب أفضل العملاء، وحول الفرص بدقة متناهية.",
      items: [
        "هندسة استراتيجيات النمو المتكاملة",
        "أنظمة التسويق الرقمي عالي الأداء",
        "تصميم وبناء قنوات المبيعات المتطورة",
        "بناء وموضعة العلامات التجارية والسيادة السوقية",
        "محركات صناعة وهندسة المحتوى الذكي",
        "تأسيس وإدارة المجتمعات الرقمية العالمية",
        "مجموعات قياس وتتبع العوائد وتحسين الأرباح"
      ]
    },
    digital: {
      title: "التحول الرقمي المتكامل",
      tagline: "شيد أنظمة رقمية ذكية. تخلص من الفوضى والتعقيد والجهد اليدوي.",
      items: [
        "منصات ومواقع رقمية فائقة الفخامة للشركات",
        "تطبيقات الويب والأجهزة المحمولة متناهية المرونة",
        "أنظمة تشغيل الأعمال وإدارة الموارد المخصصة (ERP)",
        "لوحات ذكاء اتخاذ القرار والتحليلات المتطورة",
        "أتمتة سير العمل الرقمي الشامل وفصل المهام"
      ],
      featured: "أنظمة الاستخبارات واستخراج البيانات والذكاء الاصطناعي الخاص (ميزة حصرية)",
      featuredItems: [
        "أنظمة الأبحاث المتقدمة وتدريب النماذج الخاصة بك",
        "بروتوكولات استخراج وهيكلة البيانات المعقدة والمستندات",
        "قواعد المعرفة الذكية والبحث المعزز الدلالي",
        "أنظمة الرصد والمخابرات التنافسية الذكية في السوق",
        "بوابات المستندات والتحليل الذاتي فائق السرعة",
        "محركات التنبؤ المسبق وتوليد الرؤى التنفيذية الفورية"
      ]
    },
    learning: {
      title: "التعليم العالي والتحول الإنساني",
      tagline: "تعلم، تفوق، وابنِ نسختك الأرقى طاقةً وخبرة واستقلالاً.",
      items: [
        "مناهج رقمية متقدمة للتطوير الذاتي والتوسع",
        "جلسات التوجيه المباشر الفردي (1:1) للنخبة",
        "برامج التحول المتكامل للمحترفين ورواد الأعمال والمدراء",
        "إرشاد الأداء الذهني والتطور المعرفي الاستراتيجي",
        "أسس التطوير البشري وإدارك الذات والسيادة الشخصية",
        "مهارات استخدام الذكاء الاصطناعي وبناء الأصول الرقمية",
        "تخطيط المعيشة العالمية الذكية والإقامات الحرة والضرائب"
      ]
    }
  },
  it: {
    growth: {
      title: "Sviluppo del Business",
      tagline: "Cresci con intelligenza. Attira lead più qualificati. Converti rapidamente.",
      items: [
        "Ingegnerizzazione della Strategia di Growth",
        "Sistemi di Performance Marketing Avanzati",
        "Pipeline di Vendita Predittive Automatizzate",
        "Autorità di Brand e Posizionamento Strategico",
        "Motori di Content Intelligence Interconnessi",
        "Architettura di Community Globali",
        "Ottimizzazione Unificata delle Metriche di Profitto"
      ]
    },
    digital: {
      title: "Trasformazione Digitale",
      tagline: "Disegna sistemi intelligenti. Scala senza alcuna complessità.",
      items: [
        "Piattaforme e Siti Web d'élite di Alto Livello",
        "Sistemi e Applicazioni Mobile ad Alto Rendimento",
        "Gestioni ERP Personalizzate e Middleware di Flusso",
        "Dashboard Analitiche di Decision Intelligence",
        "Flussi di Lavoro e Automazione Intelligente dei Processi"
      ],
      featured: "Intelligence Systems (Sistemi di Intelligence Esclusivi)",
      featuredItems: [
        "Protocolli di Ricerca e Addestramento Modelli AI Proprietary",
        "Estrazione Strutturata di Dati Complessi automatizzata",
        "Knowledge Bases Semantiche per Team ad Alta Complessità",
        "Sistemi di Competitiva Economico-Analitica in Tempo Reale",
        "Sistemi Intelligenti di Analisi Documentaria Multilingua",
        "Pipeline di Generazione Automatica di Strategie Aziendali"
      ]
    },
    learning: {
      title: "Formazione & Evoluzione",
      tagline: "Impara, trasformati ed evolve per esprimere stabilmente la tua versione migliore.",
      items: [
        "Corsi Autonomi di Strategia e Crescita Digitale",
        "Mentorship Strategica Individuale 1:1 d'Élite",
        "Programmi d'Impatto per la Trasformazione Umana",
        "Coaching di Rendimento Cognitivo ed Esecutivo",
        "Metodologie Avanzate di Sviluppo e Strategia Personale",
        "Potenziamento delle Competenze Software e AI di Futuro",
        "Consulenza sulla Mobilità Internazionale e dell'Arbitraggio Fiscale"
      ]
    }
  }
};

export const industrySolutionsData: Record<Language, IndustrySolution[]> = {
  en: [
    {
      title: "Clinics & Medical Centers",
      challenges: [
        "Inefficient patient scheduling leading to high drop-offs",
        "Manual client management causing operational fatigue",
        "Under-optimized local and organic patient attraction systems"
      ],
      systems: [
        "Automated AI Scheduling & Triage Portals",
        "Digital Patient Lifecycle Systems (EHR Integrations)",
        "Performance Acquisition Funnels with Localized Geo-targeting"
      ],
      outcomes: [
        "40% drop in booking friction and administrative overload",
        "Sustainable, predictable month-on-month premium patient inflow",
        "Seamless, automated patient reminders decreasing overall no-shows"
      ],
      iconName: "Stethoscope"
    },
    {
      title: "Experts & Coaches",
      challenges: [
        "Trading hours directly for revenue, capping financial scale",
        "Relying on direct messages (DMs) to close premium consulting contracts",
        "Lack of high-authority brand ecosystems for global positioning"
      ],
      systems: [
        "High-Ticket Educational Ecosystem Productizations",
        "Automated Content Distribution & Capture Funnels",
        "Pre-qualified Strategic Discovery Booking Systems"
      ],
      outcomes: [
        "Liberation of founder time via scalable system architectures",
        "Deterministic qualified consult flow replacing manual hunting",
        "Global authority positioning enabling elite cross-border pricing"
      ],
      iconName: "Award"
    },
    {
      title: "E-commerce Brands",
      challenges: [
        "Skyrocketing acquisition costs eroding margin structures",
        "Low customer lifetime value (LTV) and weak repeat conversion loops",
        "Disconnected analytic pipelines blinding strategic spend decisions"
      ],
      systems: [
        "Algorithmic Performance Funnel Orchestrations",
        "Predictive Retention & Klaviyo/Email Automation Sequences",
        "Unified Business Intelligence Portals for accurate ROI attribution"
      ],
      outcomes: [
        "Stable customer acquisition margins and higher ad spend return",
        "Dynamic, automated trigger-flow funnels driving immediate repeat sales",
        "Real-time, granular insight into margin pathways per SKU"
      ],
      iconName: "ShoppingBag"
    },
    {
      title: "Startups & Scaleups",
      challenges: [
        "Messy tech stacks slowing down critical feature deployment",
        "Unclear product market validation leading to wasteful cash burn",
        "Fragmented databases leaving team data highly insulated"
      ],
      systems: [
        "Bespoke High-Reliability Tech Infrastructure Setup",
        "Custom Automated CRM & Internal Flow Connections",
        "Modular Microservice and AI Integrations"
      ],
      outcomes: [
        "Deterministic, fast operational tempo with clean technical design",
        "Centralized relational core streamlining immediate business reporting",
        "Immediate scaling bandwidth ready for next investment rounds"
      ],
      iconName: "Rocket"
    },
    {
      title: "Small & Medium Businesses",
      challenges: [
        "Extreme dependency on manual staff scheduling & spreadsheet tracking",
        "Brittle customer databases risking security and business continuity",
        "Struggling to modernize operation lines without breaking current flows"
      ],
      systems: [
        "Custom Operation Automation Dashboards",
        "Centralized Secure Client Registries & Cloud Repositories",
        "Graceful Legacy Workflow Modernization Overhaul"
      ],
      outcomes: [
        "Hundreds of manual work-hours saved every month across the team",
        "Robust, enterprise-grade cloud business storage and management",
        "Sustainable transition to digital tools with zero downtime"
      ],
      iconName: "Briefcase"
    }
  ],
  ar: [
    {
      title: "العيادات والمراكز الطبية والمستشفيات",
      challenges: [
        "فقدان فادح للمرضى بسبب بطء نظام حجز المواعيد التقليدي",
        "الاعتماد الكامل على الإدخال اليدوي المجهد وخدمة العملاء التقليدية",
        "ضعف فادح للقنوات الرقمية في جذب المرضى الباحثين محلياً"
      ],
      systems: [
        "البوابات الطبية الذكية للحجز الفوري وفرز الحالات الرقمي",
        "أنظمة أتمتة دورة حياة المريض (CRM طبي شامل)",
        "قنوات جذب المرضى المحسنة محلياً وجغرافياً بذكاء"
      ],
      outcomes: [
        "تخفيض كلفة العبء الإداري والاتصالات اليدوية بنسبة 40%",
        "تدفق مستدام للمرضى من ذوي الملاءة والمستويات الممتازة",
        "انخفاض حاد في نسب التغيب عن المواعيد عبر تنبيهات آلية منسقة"
      ],
      iconName: "Stethoscope"
    },
    {
      title: "الخبراء والاستشاريون وكبار صناع المعرفة",
      challenges: [
        "مقايضة الوقت بالمال مباشرة، مما يضع حداً أقصى للعوائد والطاقة",
        "الاعتماد على الرسائل المباشرة المجهدة لإبرام عقود الاستشارات الفاخرة",
        "افتقاد بنية رقمية تمثل العلامة بسلطة ومصداقية عالمية"
      ],
      systems: [
        "برمجيات وأكاديميات تعليمية عالية القيمة لتعبئة المعرفة ضمن أصول",
        "قنوات الأتمتة وجذب المهتمين وصناعة النفوذ المعرفي",
        "أنظمة تصفية الحجز المسبق لجلسات التشخيص الحصري بنقرة واحدة"
      ],
      outcomes: [
        "تحرير وقت الخبير بالبناء البرمجي الذكي للأصول المعرفية",
        "تأمين تدفق مستدام ومؤكد للعملاء المؤهلين تماماً للخدمات الفاخرة",
        "مستويات تسعير فائقة ومكانة دولية تعبر الحدود لتخاطب النخبة"
      ],
      iconName: "Award"
    },
    {
      title: "العلامات والمتاجر الإلكترونية الكبرى",
      challenges: [
        "الارتفاع الحاد في كلفة الاستحواذ الإعلاني وتآكل هوامش الربح",
        "ضعف قيم الاحتفاظ بالعملاء (LTV) وغياب حزم تكرار الشراء",
        "غياب لوحات تحليل أثر التكلفة ومعدل الإرجاع الإعلاني الدقيق"
      ],
      systems: [
        "هندسة قنوات الشراء الفائقة وإعادة الاستهداف الخوارزمي المتقدم",
        "تسلسلات تكرار الشراء الآلي عبر البريد والواتساب",
        "لوحات ذكاء الأعمال الموحدة لقياس وتقييم العائد لكل منتج بالتحليل"
      ],
      outcomes: [
        "استقرار كلفة الاستحواذ وزيادة ملحوظة لعوائد الإعلانات الفعالة",
        "خطوط تواصل مؤتمتة ذكية تحث العميل على الشراء المتكرر فوراً",
        "رؤية دقيقة لهوامش الربح اللحظية لكل صنف في المتجر"
      ],
      iconName: "ShoppingBag"
    },
    {
      title: "الشركات الناشئة سريعة النمو",
      challenges: [
        "البرمجيات الفوضوية والمتباينة تعيق تطوير الميزات الهامة",
        "معدلات استهلاك سیولة مالية غير مدروسة دون تأكيد ملاءمة السوق",
        "تشتت البيانات وقواعد العمل المتباعدة بين الأقسام التشغيلية"
      ],
      systems: [
        "تأسيس بنية تحتية برمجية عالية التحمل وموثوقة كلياً",
        "ربط مخصص مؤتمت لمنظومة المبيعات CRM والعمليات الداخلية",
        "دمج وإضافة الخدمات البرمجية الذكية وحلول جينوم الذكاء الاصطناعي"
      ],
      outcomes: [
        "وتيرة تشغيل مؤسسية دقيقة وهيكل برمجي منظم يبسط الصيانة",
        "توحيد قواعد البيانات لتقييم المخرجات وإدارتها بلحظات",
        "جاهزية كاملة لهيكل البنية التحتية لتلقي جولات الاستثمار"
      ],
      iconName: "Rocket"
    },
    {
      title: "الشركات الصغيرة والمتوسطة",
      challenges: [
        "اعتماد مفرط على الموظفين لمتابعة جداول وبيانات تائهة في ملفات قديمة",
        "قواعد بيانات عملاء هشة وغير مؤمنة تهدد بقاء واستقرار الأعمال",
        "صعوبات تحويل آلية العمل تقليدياً لنظم حديثة دون تعطيل الأرباح"
      ],
      systems: [
        "لوحات تشغيل وتتبع ذكية مصممة خصيصاً لأتمتة المهام اليومية",
        "سجلات أعمال مؤمنة وقواعد بيانات سحابية متقدمة للتخزين الفوري",
        "تحديث تدريجي مرن لأنظمة العمل القديمة دون تجميد الأداء"
      ],
      outcomes: [
        "توفير مئات ساعات العمل اليدوية الثمينة شهرياً لكامل الفريق",
        "حفظ وتأمين معلومات وسجلات الشركة والعملاء بهيكلية مشفرة مخصصة",
        "تحول سلس وجاذبية مطلقة للمنظومات الحديثة والأتمتة التلقائية"
      ],
      iconName: "Briefcase"
    }
  ],
  it: [
    {
      title: "Cliniche e Centri Medici",
      challenges: [
        "Pianificazione dei pazienti inefficiente con alto tasso di abbandono",
        "Gestione manuale che causa affaticamento operativo e colli di bottiglia",
        "Pessimo posizionamento e acquisizione geolocalizzata dei pazienti di valore"
      ],
      systems: [
        "Portale Medico Intelligente per Prenotazioni ed Accettazione 24/7",
        "Automazione del Ciclo di Vita del Paziente (CRM Medico)",
        "Canali di Acquisizione Pazienti con Geolocalizzazione Ottimizzata"
      ],
      outcomes: [
        "Riduzione del 40% del carico Amministrativo e Telefonico statico",
        "Afflusso costante e programmato di pazienti ad alto scontrino",
        "Promemoria automatici avanzati che azzerano quasi del tutto i no-shows"
      ],
      iconName: "Stethoscope"
    },
    {
      title: "Esperti e Consulenti",
      challenges: [
        "Scambio diretto di tempo per denaro, bloccando ogni fatturazione scalabile",
        "Dipendenza dalle conversazioni manuali in DM per chiudere contratti strategici",
        "Mancanza di ecosistemi digitali ad altissimo posizionamento internazionale"
      ],
      systems: [
        "Ingegnerizzazione della conoscenza in percorsi formativi altissimo valore",
        "Funnel automatici di distribuzione autoritaria e attrazione lead",
        "Sistemi di qualificazione e prenotazione sessioni strategiche"
      ],
      outcomes: [
        "Totale liberazione del tempo del fondatore tramite sistemi asincroni",
        "Flusso di consultazioni deterministico e ultra-qualificato",
        "Prezzi premium globali slegati dai vincoli territoriali locali"
      ],
      iconName: "Award"
    },
    {
      title: "Brand E-commerce",
      challenges: [
        "Costi di acquisizione pubblicitaria ad un punto critico per i margini",
        "Basso valore nel tempo del cliente (LTV) e acquisti ricorrenti quasi nulli",
        "Incapacità analitiche di tracciare con certezza l'ROI di ogni campagna"
      ],
      systems: [
        "Ottimizzazione algoritmica di canali ed imbuti di acquisizione",
        "Flussi automatizzati di e-mail marketing e retargeting predittivi",
        "Dashboard unificate di Business Intelligence per tracciamento ROI"
      ],
      outcomes: [
        "Margine di acquisizione cliente profittevole e ritorno pubblicitario stabile",
        "Flussi automatici intelligenti che raddoppiano i tassi di riacquisto",
        "Visione granulare immediata della marginalità netta per singolo SKU"
      ],
      iconName: "ShoppingBag"
    },
    {
      title: "Startup & Scaleup",
      challenges: [
        "Infrastruttura tecnologica caotica che rallenta lo sviluppo del prodotto",
        "Incertezze sulla validazione del mercato e rapido esaurimento fondi",
        "Basi dati frammentate e silos isolati tra i vari reparti aziendali"
      ],
      systems: [
        "Ingegnerizzazione dell'Architettura Software ad Altissima Affidabilità",
        "Sincronizzazione personalizzata tra CRM e processi operativi interni",
        "Integrazione modulare di servizi intelligenti e modelli di AI"
      ],
      outcomes: [
        "Velocità operativa raddoppiata con un codice pulito e manutenibile",
        "Database centralizzato per reportistica strategica istantanea",
        "Infrastruttura pronta a sostenere round di investimento senza attrito"
      ],
      iconName: "Rocket"
    },
    {
      title: "Piccole e Medie Imprese",
      challenges: [
        "Dipendenza totale da coordinamento manuale e fogli di calcolo isolati",
        "Flussi di dati clienti insicuri e soggetti a violazioni o perdite",
        "Difficoltà a digitalizzare le operazioni storiche senza fermare il business"
      ],
      systems: [
        "Pannelli di Automazione per il Coordinamento e Controllo dei Processi",
        "Registri e Storage Cloud ultra-sicuri e protetti per anagrafiche",
        "Modernizzazione progressiva dei flussi di lavoro legacy esistenti"
      ],
      outcomes: [
        "Centinaia di ore di lavoro manuale risparmiate ogni mese sul personale",
        "Certezza e crittografia enterprise per i segreti aziendali ed i clienti",
        "Transizione morbida, senza interruzione operative guidata da gestivi ideali"
      ],
      iconName: "Briefcase"
    }
  ]
};

export const coursesData: Record<Language, Course[]> = {
  en: [
    {
      id: "c1",
      title: "Systemic Growth Engine: Performance Architecture",
      category: "selfPaced",
      duration: "18 Hours",
      level: "levelIntermediate",
      modules: 9,
      outcomes: [
        "Construct reliable multi-variant traffic loops",
        "Formulate deterministic value-capture structures",
        "Deploy analytics with zero attribution blindspots"
      ],
      path: "High-Performance Growth Strategist & Digital Acquisition Leader"
    },
    {
      id: "c2",
      title: "Intelligence Integration: Fine-Tuning & Prompt Engineering",
      category: "selfPaced",
      duration: "24 Hours",
      level: "levelAdvanced",
      modules: 12,
      outcomes: [
        "Establish structured unstructured-data extraction layers",
        "Integrate semantic context loaders and vector-based knowledge bases",
        "Incorporate deterministic safety grids around custom AI applications"
      ],
      path: "Applied AI Solutions Architect & Enterprise Automation Engineer"
    },
    {
      id: "c3",
      title: "Human Decoupling: Scaling Without Enterprise Chaos",
      category: "selfPaced",
      duration: "15 Hours",
      level: "levelAdvanced",
      modules: 8,
      outcomes: [
        "Modernize legacy operating hierarchies into task-centered routines",
        "Calibrate modular team interfaces reducing cross-department coordination",
        "Build cloud-native business registries that securely preserve institutional knowledge"
      ],
      path: "Chief Operations Officer & Digital Systems Modernization Officer"
    }
  ],
  ar: [
    {
      id: "c1",
      title: "محرك النمو المنهجي: هندسة الأداء الرقمي المتكامل",
      category: "selfPaced",
      duration: "١٨ ساعة",
      level: "levelIntermediate",
      modules: 9,
      outcomes: [
        "بناء وتأمين قنوات حركة زوار متعددة القنوات وموثوقة",
        "صياغة لوحات جذب القيمة وتحرير التكلفة بكفاءة استباقية",
        "تأسيس وإطلاق تحليلات مرنة خالية من ثغرات تتبع المبيعات"
      ],
      path: "مخطط استراتيجيات النمو المتقدم وقائد المبيعات الرقمية"
    },
    {
      id: "c2",
      title: "تكامل الأنظمة الذكية: ضبط النماذج وهندسة الأوامر التطبيقية",
      category: "selfPaced",
      duration: "٢٤ ساعة",
      level: "levelAdvanced",
      modules: 12,
      outcomes: [
        "تأسيس وحدات برمجية فائقة لاستخراج وهيكلة البيانات غير المنظمة",
        "دمج قواعد المعرفة الدلالية المعززة بالبحث المتطور والناقل للبيانات",
        "صياغة جدران حماية صلبة وحتمية حول استخدامات وتطبيقات الذكاء الاصطناعي"
      ],
      path: "مهندس حلول ومخطط تطبيقات الذكاء الاصطناعي للمؤسسات"
    },
    {
      id: "c3",
      title: "هيكلة فك الارتباط البشري: التوسع التقني دون فوضى تشغيلية",
      category: "selfPaced",
      duration: "١٥ ساعة",
      level: "levelAdvanced",
      modules: 8,
      outcomes: [
        "تحديث الهياكل والأقسام التشغيلية الجامدة إلى مهام برمجية تلقائية",
        "صياغة واجهات تواصل واضحة تقلل الاجتماعات والتشتت الداخلي",
        "تشييد سجلات أعمال سحابية تحفظ المعرفة التاريخية والعملية للموظفين"
      ],
      path: "رئيس العمليات التشغيلية (COO) ومهندس تحديث النظم الرقمية"
    }
  ],
  it: [
    {
      id: "c1",
      title: "Systemic Growth Engine: Architettura del Rendimento",
      category: "selfPaced",
      duration: "18 Ore",
      level: "levelIntermediate",
      modules: 9,
      outcomes: [
        "Costruire flussi di acquisizione multi-canale stabili",
        "Formulare strutture di conversione e cattura del valore chiare",
        "Implementare sistemi di analytics privi di falsi positivi"
      ],
      path: "Growth Strategist e Leader della Conversione Digitale"
    },
    {
      id: "c2",
      title: "Intelligence Integration: Fine-Tuning & Ingegneria dei Prompt",
      category: "selfPaced",
      duration: "24 Ore",
      level: "levelAdvanced",
      modules: 12,
      outcomes: [
        "Creare software capaci di estrarre e strutturare dati complessi",
        "Integrazione di basi di conoscenza basate su vettori semantici",
        "Strutturare filtri di sicurezza stabili attorno ai flussi decisionali AI"
      ],
      path: "Architetto di Soluzioni AI Applicate & Enterprise Automation Engineer"
    },
    {
      id: "c3",
      title: "Human Decoupling: Scalare Senza Disordine Operativo",
      category: "selfPaced",
      duration: "15 Ore",
      level: "levelAdvanced",
      modules: 8,
      outcomes: [
        "Modernizzare le gerarchie storiche in processi dinamici compatti",
        "Massimizzare il focus dei team eliminando ore di riunione vuote",
        "Salvare i processi operativi del personale in registri aziendali sicuri"
      ],
      path: "Chief Operations Officer & Digital Systems Modernization Officer"
    }
  ]
};

export const mentorshipTracksData: Record<Language, MentorshipTrack[]> = {
  en: [
    {
      id: "m1",
      title: "1:1 Strategic Business Alignment Sessions",
      type: "1:1",
      duration: "On-Demand Hourly",
      outcomes: [
        "Surgical diagnostics of immediate tech bottlenecks",
        "Bespoke validation of custom growth proposals",
        "Unbiased technological advisory for major transitions"
      ]
    },
    {
      id: "m2",
      title: "Enterprise Transformation Intensive Package",
      type: "Package",
      duration: "3-Month Integration",
      outcomes: [
        "Continuous custom advisory and architecture planning",
        "Supervised infrastructure overhaul and staff alignment",
        "Dedicated system blueprint handovers with performance metrics"
      ]
    },
    {
      id: "m3",
      title: "Elite Lifestyle Arbitrage: Wealth & Mobility Track",
      type: "Transformation",
      duration: "Structured 6-Month Flow",
      outcomes: [
        "Tax optimization engineering with solid cross-border routes",
        "Legal secondary residency & citizenship structure advisory",
        "Bespoke lifestyle decoupling converting business systems to local buffers"
      ]
    }
  ],
  ar: [
    {
      id: "m1",
      title: "جلسات مخصصة (1:1) للتوفيق والمواءمة الاستراتيجية للأعمال",
      type: "1:1",
      duration: "ساعة مكثفة حسب الطلب",
      outcomes: [
        "تشخيص فوري وجراحي للمشاكل التقنية وقنوات المبيعات الحالية",
        "تحليل ومراجعة المقترحات والخطط لضمان التميز قبل الاستثمار",
        "توجيه حيادي واستشارات تكنولوجية دقيقة لاتخاذ خطوات آمنة"
      ]
    },
    {
      id: "m2",
      title: "حزمة التحول السريع وتحديث البنية للمؤسسات الكبرى",
      type: "Package",
      duration: "اندماج مخصص لمدة ٣ أشهر",
      outcomes: [
        "توجيه ومشاركة أسبوعية لتصميم وبناء بنية الأنظمة",
        "إشراف مباشر على إعادة هيكلة البرمجيات وتدريب الكفاءات المتاحة",
        "تسليم مخططات ومحركات الأتمتة المخصصة مع لوحات قياس واضحة"
      ]
    },
    {
      id: "m3",
      title: "مسار النخبة لتخطيط المعيشة والاستقلالية والسيولة العالمية",
      type: "Transformation",
      duration: "مسار هيكلي شامل لمده ٦ أشهر",
      outcomes: [
        "هندسة الضرائب القانونية وصياغة المسارات المالية الدولية الآمنة",
        "استشارات الحصول على الإقامة الثانية والمواطنة لمرونة الحركة",
        "بناء وتصميم نمط حياة حر يفصل تواجد الرائد عن قيود مكانه الجغرافي"
      ]
    }
  ],
  it: [
    {
      id: "m1",
      title: "Sessioni Individuali 1:1 di Allineamento Strategico",
      type: "1:1",
      duration: "Sessione singola oraria",
      outcomes: [
        "Diagnosi chirurgica dei blocchi tecnologici in essere",
        "Validazione focalizzata dei modelli di growth programmati",
        "Consulenza trasparente sulle complesse transizioni infrastrutturali"
      ]
    },
    {
      id: "m2",
      title: "Pacchetto Intensivo di Trasformazione Aziendale",
      type: "Package",
      duration: "Integrazione attiva di 3 mesi",
      outcomes: [
        "Pianificazione architetturale continua a stretto contatto con il fondatore",
        "Supervisione attiva sul rinnovo dell'infrastruttura e dei processi",
        "Rilascio di blueprint aziendali operativi con KPI pre-fissati"
      ]
    },
    {
      id: "m3",
      title: "Arbitraggio di Vita d'Élite: Patrimonio & Mobilità Regolamentare",
      type: "Transformation",
      duration: "Programma strutturato di 6 mesi",
      outcomes: [
        "Ingegneria fiscale legale con rotte territoriali stabili",
        "Consulenza avanzata su programmi di seconde residenze e passaporti d'élite",
        "Riconfigurazione dello stile di vita per slegarsi dai vincoli fisici geografici"
      ]
    }
  ]
};
