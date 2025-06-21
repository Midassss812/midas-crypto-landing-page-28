
import React, { useRef, useEffect } from 'react';
import StarBackground from '@/components/StarBackground';
import PageFooter from '@/components/PageFooter';
import TraderHero from '@/components/TraderHero';
import TraderAdvantages from '@/components/TraderAdvantages';
import TraderWorkflow from '@/components/TraderWorkflow';
import TraderConditions from '@/components/TraderConditions';
import TraderFeatures from '@/components/TraderFeatures';
import ContactSection from '@/components/ContactSection';
import { useActiveSection } from '@/hooks/useActiveSection';

const Trader = () => {
  const { activeSection, registerSection } = useActiveSection();
  
  const advantagesRef = useRef<HTMLDivElement>(null);
  const workflowRef = useRef<HTMLDivElement>(null);
  const conditionsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerSection('advantages', advantagesRef.current);
    registerSection('workflow', workflowRef.current);
    registerSection('conditions', conditionsRef.current);
    registerSection('features', featuresRef.current);
    registerSection('contact', contactRef.current);
  }, [registerSection]);

  console.log('Active section:', activeSection);

  return (
    <>
      {/* Абсолютно изолированный логотип - вне основного layout */}
      <div 
        style={{
          position: 'fixed',
          top: '16px',
          left: '16px',
          zIndex: 99999,
          pointerEvents: 'auto',
          transform: 'translate3d(0, 0, 0)',
          willChange: 'auto',
          contain: 'layout style paint'
        }}
      >
        <img 
          src="/lovable-uploads/9f563d21-3cce-40e4-ba1d-0cf6699b56a2.png" 
          alt="Midas King Icon" 
          style={{
            height: '4rem',
            width: '4rem',
            objectFit: 'contain',
            transform: 'translate3d(0, 0, 0)',
            willChange: 'auto'
          }}
          className="sm:h-20 sm:w-20"
        />
      </div>

      <div className="min-h-screen bg-[#020202] text-[#f0f0f0] flex flex-col relative overflow-hidden">
        <StarBackground />

        {/* Main Content */}
        <main className="relative z-10 flex-1 px-4 pb-8 w-full space-y-8 pointer-events-none">
          <div className="pointer-events-auto">
            <div className="max-w-6xl mx-auto">
              <TraderHero />
            </div>
          </div>
          
          <div 
            ref={advantagesRef}
            data-section="advantages"
            className={`bg-gradient-to-r from-[#1a1a1a]/50 to-[#141414]/50 border rounded-lg p-8 transition-all duration-700 ease-out pointer-events-auto ${
              activeSection === 'advantages'
                ? 'border-[#caa75d]/90 shadow-2xl shadow-[#caa75d]/30 transform scale-[1.02] bg-gradient-to-r from-[#1a1a1a]/80 to-[#141414]/80' 
                : 'border-[#333]/50 hover:border-[#444]/60'
            }`}
            style={{ transformOrigin: 'center' }}
          >
            <div className="max-w-6xl mx-auto">
              <TraderAdvantages />
            </div>
          </div>

          <div 
            ref={workflowRef}
            data-section="workflow"
            className={`bg-gradient-to-r from-[#1a1a1a]/50 to-[#141414]/50 border rounded-lg p-8 transition-all duration-700 ease-out pointer-events-auto ${
              activeSection === 'workflow'
                ? 'border-[#caa75d]/90 shadow-2xl shadow-[#caa75d]/30 transform scale-[1.02] bg-gradient-to-r from-[#1a1a1a]/80 to-[#141414]/80' 
                : 'border-[#333]/50 hover:border-[#444]/60'
            }`}
            style={{ transformOrigin: 'center' }}
          >
            <div className="max-w-6xl mx-auto">
              <TraderWorkflow />
            </div>
          </div>
          
          <div 
            ref={conditionsRef}
            data-section="conditions"
            className={`bg-gradient-to-r from-[#1a1a1a]/50 to-[#141414]/50 border rounded-lg p-8 transition-all duration-700 ease-out pointer-events-auto ${
              activeSection === 'conditions'
                ? 'border-[#caa75d]/90 shadow-2xl shadow-[#caa75d]/30 transform scale-[1.02] bg-gradient-to-r from-[#1a1a1a]/80 to-[#141414]/80' 
                : 'border-[#333]/50 hover:border-[#444]/60'
            }`}
            style={{ transformOrigin: 'center' }}
          >
            <div className="max-w-6xl mx-auto">
              <TraderConditions />
            </div>
          </div>

          <div 
            ref={featuresRef}
            data-section="features"
            className={`bg-gradient-to-r from-[#1a1a1a]/50 to-[#141414]/50 border rounded-lg p-8 transition-all duration-700 ease-out pointer-events-auto ${
              activeSection === 'features'
                ? 'border-[#caa75d]/90 shadow-2xl shadow-[#caa75d]/30 transform scale-[1.02] bg-gradient-to-r from-[#1a1a1a]/80 to-[#141414]/80' 
                : 'border-[#333]/50 hover:border-[#444]/60'
            }`}
            style={{ transformOrigin: 'center' }}
          >
            <div className="max-w-6xl mx-auto">
              <TraderFeatures />
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
    </>
  );
};

export default Trader;
