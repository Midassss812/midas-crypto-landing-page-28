
import React from 'react';
import { TrendingUp, Shield, Users, BarChart3 } from "lucide-react";

const TraderAdvantages = () => {
  const advantages = [
    {
      icon: TrendingUp,
      title: "Комиссия 7-10%",
      description: "Зависит от объёма обработки и частоты онлайна"
    },
    {
      icon: Shield,
      title: "Без страхового депозита",
      description: "Начинайте работу без предварительных вложений"
    },
    {
      icon: Users,
      title: "Разнообразный трафик",
      description: "Гэмблинг, Беттинг, Бизнесы, Обмен"
    },
    {
      icon: BarChart3,
      title: "Курс p2p ByBit",
      description: "Курс платформы приближен к p2p ByBit"
    }
  ];

  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-[#caa75d]">Ключевые преимущества</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Мы предоставляем трафик Pay In с выгодными условиями для всех партнеров
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {advantages.map((advantage, index) => {
          const IconComponent = advantage.icon;
          return (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#1a1a1a]/60 to-[#0d0d0d]/60 border border-[#333]/30 rounded-lg p-6 hover:border-[#caa75d]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#caa75d]/20"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#caa75d]/20 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-[#caa75d]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{advantage.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{advantage.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TraderAdvantages;
