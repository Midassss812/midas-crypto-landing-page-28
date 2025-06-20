
import React from 'react';
import { TrendingUp, Shield, Zap, BarChart3, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import StarBackground from '@/components/StarBackground';
import FeaturePanel from '@/components/FeaturePanel';
import HeroSection from '@/components/HeroSection';
import MobileFeatures from '@/components/MobileFeatures';
import PageFooter from '@/components/PageFooter';

const Index = () => {
  const leftFeatures = [
    { icon: TrendingUp, title: "Высокая доходность", description: "Максимизируйте прибыль" },
    { icon: Shield, title: "Безопасность", description: "Защищенные транзакции" }
  ];

  const rightFeatures = [
    { icon: Zap, title: "Быстрые операции", description: "Мгновенные транзакции" },
    { icon: BarChart3, title: "Аналитика", description: "Детальная отчетность" }
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-[#f0f0f0] flex flex-col relative overflow-hidden">
      <StarBackground />

      {/* Logo top-left */}
      <div className="absolute top-6 left-6 z-10">
        <img src="/lovable-uploads/9f563d21-3cce-40e4-ba1d-0cf6699b56a2.png" alt="Midas King Icon" className="h-16 w-16 sm:h-20 sm:w-20 object-contain" />
      </div>

      {/* Login button top-right */}
      <div className="absolute top-6 right-6 z-10">
        <Button 
          variant="outline" 
          className="bg-transparent border-[#caa75d] text-[#caa75d] hover:bg-[#caa75d] hover:text-[#0a0a0a] transition-all duration-300"
        >
          <LogIn className="w-4 h-4 mr-2" />
          Вход
        </Button>
      </div>

      {/* Main Section */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-8 max-w-7xl mx-auto w-full">
        {/* Grid Layout for better space utilization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-center min-h-[80vh]">
          
          {/* Left Feature Panel */}
          <FeaturePanel features={leftFeatures} className="lg:col-span-2" />

          {/* Central Content */}
          <HeroSection />

          {/* Right Feature Panel */}
          <FeaturePanel features={rightFeatures} className="lg:col-span-2" />
        </div>

        {/* Additional Features Section for Mobile */}
        <MobileFeatures />
      </main>

      <PageFooter />
    </div>
  );
};

export default Index;
