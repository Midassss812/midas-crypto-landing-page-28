
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import StatsSection from './StatsSection';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="lg:col-span-8 text-center space-y-8">
      {/* Title Section */}
      <div className="relative">
        {/* Centered title */}
        <div className="flex flex-col items-center space-y-4">
          <span className="text-[#caa75d] text-5xl sm:text-6xl lg:text-7xl font-bold">Midas</span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white font-semibold max-w-4xl leading-tight">
            Платформа, где бизнес и трейдеры работают синхронно.
          </h1>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <Button 
          size="lg" 
          onClick={() => window.location.href = '/trader.html'} 
          className="group w-full sm:w-auto bg-[#caa75d] hover:bg-[#b8965a] text-[#0a0a0a] font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#caa75d]/20 px-16 py-6 text-xl"
        >
          Стать трейдером
          <ArrowRight className="ml-2" />
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          onClick={() => navigate('/business')} 
          className="group w-full sm:w-auto border-2 border-[#caa75d] text-black hover:bg-[#caa75d] hover:text-[#0a0a0a] font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#caa75d]/20 px-16 py-6 text-xl"
        >
          Интеграция Midas
          <ArrowRight className="ml-2" />
        </Button>
      </div>

      <StatsSection />
    </div>
  );
};

export default HeroSection;
