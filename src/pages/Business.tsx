
import React, { useRef, useEffect } from 'react';
import StarBackground from '@/components/StarBackground';
import PageFooter from '@/components/PageFooter';
import BusinessHero from '@/components/BusinessHero';
import HowItWorks from '@/components/HowItWorks';
import KeyAdvantages from '@/components/KeyAdvantages';
import GeographyServices from '@/components/GeographyServices';
import ApiIntegration from '@/components/ApiIntegration';
import ContactSection from '@/components/ContactSection';
import { useActiveSection } from '@/hooks/useActiveSection';

const Business = () => {
  const { activeSection, registerSection } = useActiveSection();
  
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const keyAdvantagesRef = useRef<HTMLDivElement>(null);
  const geographyRef = useRef<HTMLDivElement>(null);
  const apiIntegrationRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerSection('howItWorks', howItWorksRef.current);
    registerSection('keyAdvantages', keyAdvantagesRef.current);
    registerSection('geography', geographyRef.current);
    registerSection('apiIntegration', apiIntegrationRef.current);
    registerSection('contact', contactRef.current);
  }, [registerSection]);

  console.log('Active section:', activeSection);

  return (
    <div className="min-h-screen bg-[#020202] text-[#f0f0f0] flex flex-col relative overflow-hidden">
      <StarBackground />

      {/* Logo top-left */}
      <div className="absolute top-6 left-6 z-10">
        <img src="/lovable-uploads/9f563d21-3cce-40e4-ba1d-0cf6699b56a2.png" alt="Midas King Icon" className="h-16 w-16 sm:h-20 sm:w-20 object-contain" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex-1 px-4 py-8 max-w-6xl mx-auto w-full space-y-16">
        <BusinessHero />
        
        <div 
          ref={howItWorksRef}
          data-section="howItWorks"
          className={`bg-gradient-to-r from-[#1a1a1a]/50 to-[#141414]/50 border rounded-lg p-8 transition-all duration-1000 ease-in-out ${
            activeSection === 'howItWorks'
              ? 'border-[#caa75d]/80 shadow-xl shadow-[#caa75d]/40 scale-[1.01] bg-gradient-to-r from-[#1a1a1a]/70 to-[#141414]/70 -mx-2' 
              : 'border-[#333]/50'
          }`}
        >
          <HowItWorks />
        </div>
        
        <div 
          ref={keyAdvantagesRef}
          data-section="keyAdvantages"
          className={`bg-gradient-to-r from-[#1a1a1a]/50 to-[#141414]/50 border rounded-lg p-8 transition-all duration-1000 ease-in-out ${
            activeSection === 'keyAdvantages'
              ? 'border-[#caa75d]/80 shadow-xl shadow-[#caa75d]/40 scale-[1.01] bg-gradient-to-r from-[#1a1a1a]/70 to-[#141414]/70 -mx-2' 
              : 'border-[#333]/50'
          }`}
        >
          <KeyAdvantages />
        </div>
        
        <div 
          ref={geographyRef}
          data-section="geography"
          className={`bg-gradient-to-r from-[#1a1a1a]/50 to-[#141414]/50 border rounded-lg p-8 transition-all duration-1000 ease-in-out ${
            activeSection === 'geography'
              ? 'border-[#caa75d]/80 shadow-xl shadow-[#caa75d]/40 scale-[1.01] bg-gradient-to-r from-[#1a1a1a]/70 to-[#141414]/70 -mx-2' 
              : 'border-[#333]/50'
          }`}
        >
          <GeographyServices />
        </div>
        
        <div 
          ref={apiIntegrationRef}
          data-section="apiIntegration"
          className={`bg-gradient-to-r from-[#1a1a1a]/50 to-[#141414]/50 border rounded-lg p-8 transition-all duration-1000 ease-in-out ${
            activeSection === 'apiIntegration'
              ? 'border-[#caa75d]/80 shadow-xl shadow-[#caa75d]/40 scale-[1.01] bg-gradient-to-r from-[#1a1a1a]/70 to-[#141414]/70 -mx-2' 
              : 'border-[#333]/50'
          }`}
        >
          <ApiIntegration />
        </div>
        
        <div 
          ref={contactRef}
          data-section="contact"
          className={`bg-gradient-to-r from-[#1a1a1a]/50 to-[#141414]/50 border rounded-lg p-8 transition-all duration-1000 ease-in-out ${
            activeSection === 'contact'
              ? 'border-[#caa75d]/80 shadow-xl shadow-[#caa75d]/40 scale-[1.01] bg-gradient-to-r from-[#1a1a1a]/70 to-[#141414]/70 -mx-2' 
              : 'border-[#333]/50'
          }`}
        >
          <ContactSection />
        </div>
      </main>

      <PageFooter />
    </div>
  );
};

export default Business;
