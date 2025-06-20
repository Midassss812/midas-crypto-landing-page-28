
import React from 'react';
import { useScrollScale } from '@/hooks/useScrollScale';

const BusinessHero = () => {
  const scale = useScrollScale();

  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 pt-12">
      {/* Полигональный король слева */}
      <div className="lg:w-1/2 flex justify-center lg:justify-start order-2 lg:order-1">
        <img 
          src="/lovable-uploads/f4d21867-b8f3-41d3-85ca-447df0e036a2.png" 
          alt="Midas King" 
          className="max-w-full h-auto max-h-[500px] object-contain transition-transform duration-300 ease-out"
          style={{ transform: `scale(${scale})` }}
        />
      </div>
      
      {/* Текстовый блок справа */}
      <div className="lg:w-1/2 text-center lg:text-left space-y-6 order-1 lg:order-2">
        <span className="text-[#caa75d] text-4xl sm:text-5xl lg:text-6xl font-bold">Midas</span>
        <h1 className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold leading-tight">
          Процессинговая платформа нового поколения
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl">
          Инфраструктура для бизнеса, которому важно быстро, выгодно, безопасно принимать оплату от клиентов
        </p>
      </div>
    </div>
  );
};

export default BusinessHero;
