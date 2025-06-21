
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
      <StarBackground />

      {/* Absolutely Fixed Header for Logo and Login - completely separate from main container */}
      <header className="fixed top-0 left-0 w-full z-[9999] pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-start pointer-events-auto">
          {/* Logo fixed in left corner */}
          <div className="flex-shrink-0">
            <img src="/lovable-uploads/9f563d21-3cce-40e4-ba1d-0cf6699b56a2.png" alt="Midas King Icon" className="h-16 w-16 sm:h-20 sm:w-20 object-contain" />
          </div>
          
          {/* Login button in right corner */}
          <Button 
            variant="outline" 
            className="bg-transparent border-[#caa75d] text-[#caa75d] hover:bg-[#caa75d] hover:text-[#0a0a0a] transition-all duration-300"
          >
            <LogIn className="w-4 h-4 mr-2" />
            Вход
          </Button>
        </div>
      </header>

      {/* Main Page Container */}
      <div className="min-h-screen bg-[#020202] text-[#f0f0f0] flex flex-col">
        {/* Main Section with top padding to account for fixed header */}
        <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pb-16 pt-24 sm:pt-28 max-w-7xl mx-auto w-full">
          {/* Simplified layout - central content only */}
          <div className="w-full flex items-center justify-center min-h-[80vh]">
            {/* Central Content */}
            <HeroSection />
          </div>

          {/* Additional Features Section for Mobile */}
          <MobileFeatures />
        </main>

        <PageFooter />
      </div>
    </>
  );
};

export default Index;
