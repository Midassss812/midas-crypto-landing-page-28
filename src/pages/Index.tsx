
import React from 'react';
import { LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import StarBackground from '@/components/StarBackground';
import HeroSection from '@/components/HeroSection';
import MobileFeatures from '@/components/MobileFeatures';
import PageFooter from '@/components/PageFooter';

const Index = () => {
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
      
      {/* Абсолютно изолированная кнопка входа - вне основного layout */}
      <div 
        style={{
          position: 'fixed',
          top: '16px',
          right: '16px',
          zIndex: 99999,
          pointerEvents: 'auto',
          transform: 'translate3d(0, 0, 0)',
          willChange: 'auto',
          contain: 'layout style paint'
        }}
      >
        <Button 
          variant="outline" 
          className="bg-transparent border-[#caa75d] text-[#caa75d] hover:bg-[#caa75d] hover:text-[#0a0a0a] transition-all duration-300"
        >
          <LogIn className="w-4 h-4 mr-2" />
          Вход
        </Button>
      </div>

      <div className="min-h-screen bg-[#020202] text-[#f0f0f0] flex flex-col relative overflow-hidden">
        <StarBackground />

        {/* Main Section */}
        <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pb-16 w-full pointer-events-none">
          <div className="w-full flex items-center justify-center min-h-[80vh] pointer-events-auto">
            <div className="max-w-7xl mx-auto w-full">
              <HeroSection />
            </div>
          </div>

          <div className="w-full pointer-events-auto">
            <div className="max-w-7xl mx-auto w-full">
              <MobileFeatures />
            </div>
          </div>
        </main>

        <PageFooter />
      </div>
    </>
  );
};

export default Index;
