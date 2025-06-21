
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

      {/* Fixed Header Container for Logo */}
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex-shrink-0 pointer-events-auto">
            <img src="/lovable-uploads/9f563d21-3cce-40e4-ba1d-0cf6699b56a2.png" alt="Midas King Icon" className="h-16 w-16 sm:h-20 sm:w-20 object-contain" />
          </div>
        </div>
      </header>

      {/* Main Content with top padding to account for fixed header */}
      <main className="relative z-10 flex-1 px-4 pt-24 pb-8 max-w-6xl mx-auto w-full space-y-8">
        <BusinessHero />
        
        <div 
          ref={howItWorksRef}
          data-section="howItWorks"
          className={`bg-gradient-to-r from-[#1a1a1a]/50 to-[#141414]/50 border rounded-lg p-8 transition-all duration-700 ease-out ${
            activeSection === 'howItWorks'
              ? 'border-[#caa75d]/90 shadow-2xl shadow-[#caa75d]/30 transform scale-[1.02] bg-gradient-to-r from-[#1a1a1a]/80 to-[#141414]/80' 
              : 'border-[#333]/50 hover:border-[#444]/60'
          }`}
        >
          <HowItWorks />
        </div>
        
        <div 
          ref={keyAdvantagesRef}
          data-section="keyAdvantages"
          className={`bg-gradient-to-r from-[#1a1a1a]/50 to-[#141414]/50 border rounded-lg p-8 transition-all duration-700 ease-out ${
            activeSection === 'keyAdvantages'
              ? 'border-[#caa75d]/90 shadow-2xl shadow-[#caa75d]/30 transform scale-[1.02] bg-gradient-to-r from-[#1a1a1a]/80 to-[#141414]/80' 
              : 'border-[#333]/50 hover:border-[#444]/60'
          }`}
        >
          <KeyAdvantages />
        </div>
        
        <div 
          ref={geographyRef}
          data-section="geography"
          className={`bg-gradient-to-r from-[#1a1a1a]/50 to-[#141414]/50 border rounded-lg p-8 transition-all duration-700 ease-out ${
            activeSection === 'geography'
              ? 'border-[#caa75d]/90 shadow-2xl shadow-[#caa75d]/30 transform scale-[1.02] bg-gradient-to-r from-[#1a1a1a]/80 to-[#141414]/80' 
              : 'border-[#333]/50 hover:border-[#444]/60'
          }`}
        >
          <GeographyServices />
        </div>
        
        <div 
          ref={apiIntegrationRef}
          data-section="apiIntegration"
          className={`bg-gradient-to-r from-[#1a1a1a]/50 to-[#141414]/50 border rounded-lg p-8 transition-all duration-700 ease-out ${
            activeSection === 'apiIntegration'
              ? 'border-[#caa75d]/90 shadow-2xl shadow-[#caa75d]/30 transform scale-[1.02] bg-gradient-to-r from-[#1a1a1a]/80 to-[#141414]/80' 
              : 'border-[#333]/50 hover:border-[#444]/60'
          }`}
        >
          <ApiIntegration />
        </div>
        
        <div 
          ref={contactRef}
          data-section="contact"
          className={`bg-gradient-to-r from-[#1a1a1a]/50 to-[#141414]/50 border rounded-lg p-8 transition-all duration-700 ease-out ${
            activeSection === 'contact'
              ? 'border-[#caa75d]/90 shadow-2xl shadow-[#caa75d]/30 transform scale-[1.02] bg-gradient-to-r from-[#1a1a1a]/80 to-[#141414]/80' 
              : 'border-[#333]/50 hover:border-[#444]/60'
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
