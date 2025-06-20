
import React from 'react';
import StarBackground from '@/components/StarBackground';
import PageFooter from '@/components/PageFooter';
import BusinessHero from '@/components/BusinessHero';
import HowItWorks from '@/components/HowItWorks';
import KeyAdvantages from '@/components/KeyAdvantages';
import GeographyServices from '@/components/GeographyServices';
import ApiIntegration from '@/components/ApiIntegration';
import ContactSection from '@/components/ContactSection';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Business = () => {
  const howItWorksObserver = useIntersectionObserver();
  const keyAdvantagesObserver = useIntersectionObserver();
  const geographyObserver = useIntersectionObserver();
  const apiIntegrationObserver = useIntersectionObserver();
  const contactObserver = useIntersectionObserver();

  return (
    <div className="min-h-screen bg-[#020202] text-[#f0f0f0] flex flex-col relative overflow-hidden">
      <StarBackground />

      {/* Logo top-left */}
      <div className="absolute top-6 left-6 z-10">
        <img src="/lovable-uploads/9f563d21-3cce-40e4-ba1d-0cf6699b56a2.png" alt="Midas King Icon" className="h-16 w-16 sm:h-20 sm:w-20 object-contain" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex-1 px-4 py-8 max-w-6xl mx-auto w-full space-y-8">
        <BusinessHero />
        
        <div 
          ref={howItWorksObserver.ref}
          className={`bg-gradient-to-r from-[#1a1a1a]/50 to-[#141414]/50 border rounded-lg p-8 transition-all duration-500 ${
            howItWorksObserver.isIntersecting 
              ? 'border-[#caa75d]/50 shadow-lg shadow-[#caa75d]/20 scale-[1.02]' 
              : 'border-[#333]/50'
          }`}
        >
          <HowItWorks />
        </div>
        
        <div 
          ref={keyAdvantagesObserver.ref}
          className={`bg-gradient-to-r from-[#1a1a1a]/50 to-[#141414]/50 border rounded-lg p-8 transition-all duration-500 ${
            keyAdvantagesObserver.isIntersecting 
              ? 'border-[#caa75d]/50 shadow-lg shadow-[#caa75d]/20 scale-[1.02]' 
              : 'border-[#333]/50'
          }`}
        >
          <KeyAdvantages />
        </div>
        
        <div 
          ref={geographyObserver.ref}
          className={`bg-gradient-to-r from-[#1a1a1a]/50 to-[#141414]/50 border rounded-lg p-8 transition-all duration-500 ${
            geographyObserver.isIntersecting 
              ? 'border-[#caa75d]/50 shadow-lg shadow-[#caa75d]/20 scale-[1.02]' 
              : 'border-[#333]/50'
          }`}
        >
          <GeographyServices />
        </div>
        
        <div 
          ref={apiIntegrationObserver.ref}
          className={`bg-gradient-to-r from-[#1a1a1a]/50 to-[#141414]/50 border rounded-lg p-8 transition-all duration-500 ${
            apiIntegrationObserver.isIntersecting 
              ? 'border-[#caa75d]/50 shadow-lg shadow-[#caa75d]/20 scale-[1.02]' 
              : 'border-[#333]/50'
          }`}
        >
          <ApiIntegration />
        </div>
        
        <div 
          ref={contactObserver.ref}
          className={`bg-gradient-to-r from-[#1a1a1a]/50 to-[#141414]/50 border rounded-lg p-8 transition-all duration-500 ${
            contactObserver.isIntersecting 
              ? 'border-[#caa75d]/50 shadow-lg shadow-[#caa75d]/20 scale-[1.02]' 
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
