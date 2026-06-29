import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

// Lazily initialized Gemini GenAI client
let aiClient: GoogleGenAI | null = null;

function getGeminiClient() {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      console.warn("GEMINI_API_KEY is not defined. Falling back to structured algorithmic advice.");
      return null;
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // JSON parsing middleware
  app.use(express.json());

  // API Route: Custom system planning diagnostic
  app.post("/api/diagnose", async (req: express.Request, res: express.Response) => {
    try {
      const { 
        lang = 'en', 
        businessType = '', 
        currentSize = '', 
        topChallenge = '', 
        goals = '',
        needsLearning = false,
        needsDigital = false,
        needsGrowth = false
      } = req.body;

      const ai = getGeminiClient();

      if (!ai) {
        // High-Quality Algorithmic fallback if API key is not present
        return res.json(getFallbackData(lang, businessType, currentSize, topChallenge, goals));
      }

      // Explicit prompt directing the model to analyze and deliver strict JSON output in the user's selected language
      const systemInstruction = `You are a Chief Systems Architect and Brand Strategist for TAHOUN Intelligence.
Analyze the user's business context and construct a premium architectural growth strategy blueprint.
CRITICAL: You MUST write your entire response inside the key values in the exact native language requested by the user: language is: "${lang}" (can be 'en' for English, 'ar' for Arabic, or 'it' for Italian).
Never mix languages. If the language is 'ar', write 100% Arabic with proper prestigious corporate tone. If 'it', write 100% premium Italian.
Conform exactly to the requested JSON response schema.`;

      const prompt = `Construct an ecosystem strategic brief for:
Sector/Category: ${businessType}
Operations Size: ${currentSize}
Top Roadblock/Challenge: ${topChallenge}
User-defined Expansion Goals: ${goals || 'Scale operations and optimize revenue loops'}
Interests Checklist:
- Academy training requested: ${needsLearning}
- Custom software infrastructure requested: ${needsDigital}
- Sales and Growth systems requested: ${needsGrowth}

Formulate and populate:
1. Executive summary reflecting on their key challenges and describing the architectural solution.
2. Two major strategic pillars containing specialized, branded system modules to construct (e.g. Performance CRM, AI Dispatcher, Semantic Indexers) and specific sequential action items.
3. Logical 'growthIndex' calculation between 40 and 95 based on their current Technical/Operations scale vs complexity of goals.
4. Measurable, deterministic business impact.
5. Recommendation of one course from 'Systemic Growth Engine', 'Intelligence Integration', or 'Human Decoupling'.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          systemInstruction,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              executiveSummary: { type: Type.STRING, description: "A high-fidelity editorial assessment of the current state and transformation path." },
              strategicPillars: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    pillar: { type: Type.STRING, description: "The name of the strategic growth pillar." },
                    urgency: { type: Type.STRING, enum: ["Critical", "High", "Medium"], description: "The recommended priority speed." },
                    systemsToBuild: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING },
                      description: "List of custom digital or tactical systems to build."
                    },
                    actionSteps: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING },
                      description: "Chronological, actionable development steps."
                    }
                  }
                }
              },
              growthIndex: { type: Type.INTEGER, description: "An efficiency percentage number from 40 to 95." },
              potentialImpact: { type: Type.STRING, description: "Deterministic metrics-backed outcome expected." },
              recommendedProgram: { type: Type.STRING, description: " Branded TAHOUN Intelligence academy course to take." }
            },
            required: ["executiveSummary", "strategicPillars", "growthIndex", "potentialImpact", "recommendedProgram"]
          }
        }
      });

      const responseText = response.text;
      if (!responseText) {
        throw new Error("Empty response from strategic generator.");
      }

      const cleanJson = JSON.parse(responseText.trim());
      res.json(cleanJson);

    } catch (error: any) {
      // Diagnostic generator failed, silently fallback to high-quality algorithmic data
      const { 
        lang = 'en', 
        businessType = '', 
        currentSize = '', 
        topChallenge = '', 
        goals = ''
      } = req.body;
      return res.json(getFallbackData(lang, businessType, currentSize, topChallenge, goals));
    }
  });

  // Hot Reload Development Server setup versus Production Static files
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`TAHOUN Intelligence server running actively on http://0.0.0.0:${PORT}`);
  });
}

// Algorithmic High-Quality Fallbacks for secure localized previews
function getFallbackData(lang: string, sector: string, size: string, challenge: string, goals: string) {
  if (lang === 'ar') {
    return {
      executiveSummary: `تحليل أولي لقطاع (${sector}) بحجم عمليات (${size}). المشكلة الأساسية تنشأ من (${challenge}). نوصي فوراً بفك الارتباط البشري وهندسة البنية البرمجية لتسريع وتيرة التشغيل بنسبة 50٪ وتجنب الفوضى الإدارية. الأهداف المرجوة: ${goals || 'النمو الرقمي المتكامل.'}`,
      strategicPillars: [
        {
          pillar: "هندسة الأداء وتدفق العملاء (Growth Funnel Core)",
          urgency: "Critical",
          systemsToBuild: [
            "أنظمة قنوات جذب العملاء عالية الملاءة",
            "لوحة التوجيه والفرز الذكي للاستشارات"
          ],
          actionSteps: [
            "تحويل النوافذ التسويقية إلى استمارات تصفية مؤقتة ذكية",
            "ربط قنوات المبيعات بمركز إشعارات وقاعدة بيانات موحدة"
          ]
        },
        {
          pillar: "التحول الهيكلي والأتمتة (Information Automation)",
          urgency: "High",
          systemsToBuild: [
            "محرك استخلاص المستندات والفواتير السحابي للشركات",
            "نظام إدارة دورة حياة المستهلك المؤتمتة بالكامل"
          ],
          actionSteps: [
            "ترحيل السجلات المشتتة إلى مخزن سحابي مشفر",
            "إطلاق مهام المتابعة التلقائية وتغذية العملاء عبر الهاتف والبريد"
          ]
        }
      ],
      growthIndex: 64,
      potentialImpact: "توفير 40 ساعة عمل للمدراء أسبوعياً، مع تأمين تدفق مبيعات مستدام واستقرار تشغيلي دائم.",
      recommendedProgram: "محرك النمو المنهجي: هندسة الأداء الرقمي المتكامل"
    };
  } else if (lang === 'it') {
    return {
      executiveSummary: `Valutazione strategica iniziale per il settore ${sector} con scala operativa ${size}. L'attrito principale sorge da "${challenge}". Consigliamo di implementare sistemi asincroni e automatizzazioni ERP per svincolare il tempo del fondatore e scalare senza disordine amministrativo. Obiettivi impostati: ${goals || 'Sistemi di automazione digitale avanzati.'}`,
      strategicPillars: [
        {
          pillar: "Architettura di Conversione (Growth Acquisition)",
          urgency: "Critical",
          systemsToBuild: [
            "Sistema integrato di lead triage pre-qualificato",
            "Dashboard unificata delle metriche di profitto reale"
          ],
          actionSteps: [
            "Ingegnerizzare la struttura di cattura del valore sulla homepage",
            "Eliminare la dipendenza da risposte manuali nei messaggi privati"
          ]
        },
        {
          pillar: "Infrastruttura Digitale e Flussi (Digital Workflow)",
          urgency: "High",
          systemsToBuild: [
            "Modello di analisi ed estrazione semantica dei dati",
            "Connessioni API e pipeline di automazione CRM operative"
          ],
          actionSteps: [
            "Strutturare anagrafiche su database relazionali protetti",
            "Coordinare flussi informativi asincroni abbattendo le ore di riunione"
          ]
        }
      ],
      growthIndex: 72,
      potentialImpact: "Risparmio di oltre 35 ore lavorative settimanali e aumento del tasso di conversione lead qualificati.",
      recommendedProgram: "Systemic Growth Engine: Performance Architecture Core"
    };
  } else {
    return {
      executiveSummary: `Pre-diagnostic briefing for your ${sector} organization. Running at ${size}, the structural hurdle indicated by "${challenge}" necessitates a transition to decoupled software pipelines. This targets critical path optimization: ${goals || 'Streamscale operations and decrease tech debt.'}`,
      strategicPillars: [
        {
          pillar: "Performance Growth Funnel",
          urgency: "Critical",
          systemsToBuild: [
            "Pre-qualified customer pipeline acquisition maps",
            "Bespoke High-Ticket educational conversion portal"
          ],
          actionSteps: [
            "Install logical screen-outs in strategic inquiry paths",
            "Consolidate traffic sources directly into unified relational triggers"
          ]
        },
        {
          pillar: "Digital Systems & Custom Middleware",
          urgency: "High",
          systemsToBuild: [
            "Context-aware prompt extraction pipeline for document logs",
            "Relational CRM automations and automated follow-up matrices"
          ],
          actionSteps: [
            "Migrate dispersed sheet databases to modern structured nodes",
            "Deploy semantic knowledge triggers to speed up customer replies by 50%"
          ]
        }
      ],
      growthIndex: 68,
      potentialImpact: "Reduces weekly manual overhead by 40 hours while scaling consistent strategic appointments by 2.2x.",
      recommendedProgram: "Systemic Growth Engine: Performance Architecture Core"
    };
  }
}

startServer();
