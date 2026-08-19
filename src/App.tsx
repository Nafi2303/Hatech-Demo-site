import React, { useState } from 'react';
import { BackgroundVideo } from './components/BackgroundVideo';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientLogos } from './components/ClientLogos';
import { AboutSection } from './components/AboutSection';
import { ProblemTransformation } from './components/ProblemTransformation';
import { SolutionsSection } from './components/SolutionsSection';
import { OdooSection } from './components/OdooSection';
import { SectorsSection } from './components/SectorsSection';
import { FeaturesServicesSection } from './components/FeaturesServicesSection';
import { StatsSection } from './components/StatsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { OdooPartnerSection } from './components/OdooPartnerSection';
import { CtaFinalSection } from './components/CtaFinalSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { BlogModal } from './components/BlogModal';

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [blogModalOpen, setBlogModalOpen] = useState(false);
  const [selectedDemoTopic, setSelectedDemoTopic] = useState<string | undefined>(undefined);

  const handleOpenDemo = (topic?: string) => {
    setSelectedDemoTopic(topic);
    setDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setDemoModalOpen(false);
    setSelectedDemoTopic(undefined);
  };

  const handleScrollToSolutions = () => {
    const el = document.getElementById('solutions');
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen text-neutral-100 flex flex-col font-sans selection:bg-[#630000] selection:text-white relative">
      {/* 0. Fullscreen Looping Video Background */}
      <BackgroundVideo />

      {/* 1. NAVBAR */}
      <Navbar
        onOpenDemo={handleOpenDemo}
        onOpenBlog={() => setBlogModalOpen(true)}
      />

      {/* Main Sections Hierarchy */}
      <main className="flex-1 relative z-10">
        
        {/* 2. HERO */}
        <Hero
          onOpenDemo={() => handleOpenDemo('Démonstration Globale HATECH')}
          onExploreSolutions={handleScrollToSolutions}
        />

        {/* 3. CLIENTS / PARTENAIRES */}
        <ClientLogos />

        {/* À PROPOS DE HATECH */}
        <AboutSection onOpenQuote={() => handleOpenDemo('Conseil & Transformation')} />

        {/* 4. PROBLÈME → TRANSFORMATION */}
        <ProblemTransformation
          onOpenDemo={() => handleOpenDemo('Plan de Transformation Digitale')}
        />

        {/* 5. NOS SOLUTIONS */}
        <SolutionsSection
          onOpenDemoWithSolution={(solName) => handleOpenDemo(`Solution : ${solName}`)}
        />

        {/* 6. SECTION ODOO */}
        <OdooSection
          onOpenDemo={(serviceName) => handleOpenDemo(serviceName || 'Odoo ERP Enterprise')}
        />

        {/* 7. SECTEURS */}
        <SectorsSection
          onOpenDemoForSector={(secName) => handleOpenDemo(secName)}
        />

        {/* 8. FEATURES / SERVICES */}
        <FeaturesServicesSection
          onOpenDemoForService={(srvName) => handleOpenDemo(`Service : ${srvName}`)}
        />

        {/* 9. CHIFFRES */}
        <StatsSection />

        {/* 10. TÉMOIGNAGES */}
        <TestimonialsSection />

        {/* 11. ODOO PARTNER */}
        <OdooPartnerSection
          onOpenDemo={(srv) => handleOpenDemo(srv || 'Audit & Intégration Odoo')}
        />

        {/* 12. CTA FINAL */}
        <CtaFinalSection
          onOpenDemo={() => handleOpenDemo('Démo Gratuite & Audit')}
        />

        {/* Contact direct section */}
        <ContactSection />
      </main>

      {/* 13. FOOTER */}
      <Footer
        onOpenDemo={() => handleOpenDemo('Demande de Contact')}
        onOpenBlog={() => setBlogModalOpen(true)}
      />

      {/* Interactive Demo Request Modal */}
      <QuoteModal
        isOpen={demoModalOpen}
        onClose={handleCloseDemo}
        initialService={selectedDemoTopic}
      />

      {/* Interactive Blog Reader Modal */}
      <BlogModal
        isOpen={blogModalOpen}
        onClose={() => setBlogModalOpen(false)}
        onSelectArticleForDemo={(title) => handleOpenDemo(`Discussion Blog : ${title}`)}
      />
    </div>
  );
}
