
import React from 'react';
import { LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import StarBackground from '@/components/StarBackground';
import HeroSection from '@/components/HeroSection';
import MobileFeatures from '@/components/MobileFeatures';
import PageFooter from '@/components/PageFooter';

const Index = () => {
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
      
      {/* Completely Isolated Fixed Login Button Container */}
      <div 
        className="fixed top-4 right-4 z-[10000] pointer-events-auto"
        style={{ 
          position: 'fixed',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          isolation: 'isolate'
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

      {/* Main Section without centering constraints */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pb-16 w-full pointer-events-none">
        {/* Simplified layout - central content only */}
        <div className="w-full flex items-center justify-center min-h-[80vh] pointer-events-auto">
          <div className="max-w-7xl mx-auto w-full">
            <HeroSection />
          </div>
        </div>

        {/* Additional Features Section for Mobile */}
        <div className="w-full pointer-events-auto">
          <div className="max-w-7xl mx-auto w-full">
            <MobileFeatures />
          </div>
        </div>
      </main>

      <PageFooter />
    </div>
  );
};

export default Index;
