
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

      {/* Fixed Logo - without any container constraints */}
      <div className="fixed top-4 left-4 z-[100]">
        <img src="/lovable-uploads/9f563d21-3cce-40e4-ba1d-0cf6699b56a2.png" alt="Midas King Icon" className="h-16 w-16 sm:h-20 sm:w-20 object-contain" />
      </div>
      
      {/* Fixed Login Button - without any container constraints */}
      <div className="fixed top-4 right-4 z-[100]">
        <Button 
          variant="outline" 
          className="bg-transparent border-[#caa75d] text-[#caa75d] hover:bg-[#caa75d] hover:text-[#0a0a0a] transition-all duration-300"
        >
          <LogIn className="w-4 h-4 mr-2" />
          Вход
        </Button>
      </div>

      {/* Main Section without top padding */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pb-16 max-w-7xl mx-auto w-full">
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
  );
};

export default Index;
