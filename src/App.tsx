import React from 'react';
import { LanguageProvider } from './components/LanguageContext';
import { Header } from './components/Header';
import { HeroPillars } from './components/HeroPillars';
import { EcosystemDetail } from './components/EcosystemDetail';
import { IndustrySolutions } from './components/IndustrySolutions';
import { AcademyCoaching } from './components/AcademyCoaching';
import { WhyTrustUs } from './components/WhyTrustUs';
import { FounderStory } from './components/FounderStory';
import { DiagnosticAudit } from './components/DiagnosticAudit';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#F8F9FA] text-[#0F172A] flex flex-col justify-between selection:bg-[#4F46E5]/20 selection:text-[#4F46E5]">
        
        {/* Navigation & Brand Header */}
        <Header />

        {/* Global Structural Chapters of TAHOUN Intelligence */}
        <main className="flex-grow">
          {/* Section 1: The Entrance Experience */}
          <HeroPillars />

          {/* Section 2: What We Actually Build */}
          <EcosystemDetail />

          {/* Section 3: Industry Solutions */}
          <IndustrySolutions />

          {/* Section 4: Netflix-Inspired Academy & Mentorship Directory */}
          <AcademyCoaching />

          {/* Section 5: Why Clients Trust Us & Proof Metrics */}
          <WhyTrustUs />

          {/* Section 6: Behind the Systems - Founder Biography */}
          <FounderStory />

          {/* Section 7: Strategic Planning & Diagnostic Consultation Engine */}
          <DiagnosticAudit />
        </main>

        {/* Corporate Footer Block */}
        <Footer />
        
      </div>
    </LanguageProvider>
  );
}
