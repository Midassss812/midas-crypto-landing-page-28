
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

      {/* Completely Isolated Fixed Logo Container */}
      <div 
        className="fixed top-4 left-4 z-[10000] pointer-events-auto"
        style={{ 
          position: 'fixed',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          isolation: 'isolate'
        }}
      >
        <img 
          src="/lovable-uploads/9f563d21-3cce-40e4-ba1d-0cf6699b56a2.png" 
          alt="Midas King Icon" 
          className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
          style={{ 
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }}
        />
      </div>

      {/* Main Content without centering constraints */}
      <main className="relative z-10 flex-1 px-4 pb-8 w-full space-y-8 pointer-events-none">
        <div className="pointer-events-auto">
          <div className="max-w-6xl mx-auto">
            <BusinessHero />
          </div>
        </div>
        
        <div 
          ref={howItWorksRef}
          data-section="howItWorks"
          className={`bg-gradient-to-r from-[#1a1a1a]/50 to-[#141414]/50 border rounded-lg p-8 transition-all duration-700 ease-out pointer-events-auto ${
            activeSection === 'howItWorks'
              ? 'border-[#caa75d]/90 shadow-2xl shadow-[#caa75d]/30 transform scale-[1.02] bg-gradient-to-r from-[#1a1a1a]/80 to-[#141414]/80' 
              : 'border-[#333]/50 hover:border-[#444]/60'
          }`}
          style={{ transformOrigin: 'center' }}
        >
          <div className="max-w-6xl mx-auto">
            <HowItWorks />
          </div>
        </div>
        
        <div 
          ref={keyAdvantagesRef}
          data-section="keyAdvantages"
          className={`bg-gradient-to-r from-[#1a1a1a]/50 to-[#141414]/50 border rounded-lg p-8 transition-all duration-700 ease-out pointer-events-auto ${
            activeSection === 'keyAdvantages'
              ? 'border-[#caa75d]/90 shadow-2xl shadow-[#caa75d]/30 transform scale-[1.02] bg-gradient-to-r from-[#1a1a1a]/80 to-[#141414]/80' 
              : 'border-[#333]/50 hover:border-[#444]/60'
          }`}
          style={{ transformOrigin: 'center' }}
        >
          <div className="max-w-6xl mx-auto">
            <KeyAdvantages />
          </div>
        </div>
        
        <div 
          ref={geographyRef}
          data-section="geography"
          className={`bg-gradient-to-r from-[#1a1a1a]/50 to-[#141414]/50 border rounded-lg p-8 transition-all duration-700 ease-out pointer-events-auto ${
            activeSection === 'geography'
              ? 'border-[#caa75d]/90 shadow-2xl shadow-[#caa75d]/30 transform scale-[1.02] bg-gradient-to-r from-[#1a1a1a]/80 to-[#141414]/80' 
              : 'border-[#333]/50 hover:border-[#444]/60'
          }`}
          style={{ transformOrigin: 'center' }}
        >
          <div className="max-w-6xl mx-auto">
            <GeographyServices />
          </div>
        </div>
        
        <div 
          ref={apiIntegrationRef}
          data-section="apiIntegration"
          className={`bg-gradient-to-r from-[#1a1a1a]/50 to-[#141414]/50 border rounded-lg p-8 transition-all duration-700 ease-out pointer-events-auto ${
            activeSection === 'apiIntegration'
              ? 'border-[#caa75d]/90 shadow-2xl shadow-[#caa75d]/30 transform scale-[1.02] bg-gradient-to-r from-[#1a1a1a]/80 to-[#141414]/80' 
              : 'border-[#333]/50 hover:border-[#444]/60'
          }`}
          style={{ transformOrigin: 'center' }}
        >
          <div className="max-w-6xl mx-auto">
            <ApiIntegration />
          </div>
        </div>
        
        <div 
          ref={contactRef}
          data-section="contact"
          className={`bg-gradient-to-r from-[#1a1a1a]/50 to-[#141414]/50 border rounded-lg p-8 transition-all duration-700 ease-out pointer-events-auto ${
            activeSection === 'contact'
              ? 'border-[#caa75d]/90 shadow-2xl shadow-[#caa75d]/30 transform scale-[1.02] bg-gradient-to-r from-[#1a1a1a]/80 to-[#141414]/80' 
              : 'border-[#333]/50 hover:border-[#444]/60'
          }`}
          style={{ transformOrigin: 'center' }}
        >
          <div className="max-w-6xl mx-auto">
            <ContactSection />
          </div>
        </div>
      </main>

      <PageFooter />
    </div>
  );
};

export default Business;
