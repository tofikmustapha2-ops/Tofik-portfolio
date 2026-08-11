import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { SkillsSection } from './components/SkillsSection';
import { LearningJourney } from './components/LearningJourney';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceType } from './types';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceType>('Flyer & Graphic Design');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectServiceFromCard = (serviceName: ServiceType) => {
    setSelectedService(serviceName);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#03120c] text-slate-100 flex flex-col font-sans selection:bg-emerald-400 selection:text-slate-950 relative overflow-x-hidden">
      
      {/* Top Navbar */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main One-Page Content Sections */}
      <main className="flex-1">
        
        {/* 1. Hero Section */}
        <Hero onNavigate={scrollToSection} />

        {/* 2. About Me Section */}
        <AboutSection />

        {/* 3. Three Core Services Section */}
        <ServicesSection onSelectService={handleSelectServiceFromCard} />

        {/* 4. Portfolio / My Work Section */}
        <PortfolioSection onRequestService={handleSelectServiceFromCard} />

        {/* 5. Why Work With Me */}
        <WhyWorkWithMe />

        {/* 6. My Digital Skills */}
        <SkillsSection />

        {/* 7. Education / My Learning Journey */}
        <LearningJourney />

        {/* 8. Contact Section & Email Functionality */}
        <ContactSection
          selectedServiceNeeded={selectedService}
          onServiceNeededChange={setSelectedService}
        />

      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

    </div>
  );
}

