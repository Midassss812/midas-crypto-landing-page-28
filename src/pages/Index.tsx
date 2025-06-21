
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
          contain: 'layout style paint',
          isolation: 'isolate',
          backfaceVisibility: 'hidden'
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
