
import React from 'react';
import { CheckCircle, Clock, Shield, Zap } from "lucide-react";

const TraderConditions = () => {
  const conditions = [
    {
      icon: CheckCircle,
      title: "Простое подключение",
      description: "Быстрая регистрация и начало работы в день регистрации"
    },
    {
      icon: Clock,
      title: "Круглосуточная поддержка",
      description: "Техническая поддержка и консультации 24/7"
    },
    {
      icon: Shield,
      title: "Безопасные транзакции",
      description: "Защищенная платформа с современными технологиями"
    },
    {
      icon: Zap,
      title: "Мгновенные выплаты",
      description: "Быстрые расчеты и прозрачная система комиссий"
    }
  ];

  const trafficTypes = [
    "Гэмблинг",
    "Беттинг",
    "Бизнесы",
    "Обмен"
  ];

  return (
    <section className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-[#caa75d]">Условия сотрудничества</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Работайте с нами и получайте стабильный доход от обработки Pay In трафика
        </p>
      </div>

      {/* Условия работы */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {conditions.map((condition, index) => {
          const IconComponent = condition.icon;
          return (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#1a1a1a]/60 to-[#0d0d0d]/60 border border-[#333]/30 rounded-lg p-6 hover:border-[#caa75d]/40 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#caa75d]/20 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-[#caa75d]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{condition.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{condition.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Типы трафика */}
      <div className="bg-gradient-to-r from-[#1a1a1a]/40 to-[#141414]/40 border border-[#333]/50 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-[#caa75d] mb-6 text-center">Типы трафика</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trafficTypes.map((type, index) => (
            <div 
              key={index}
              className="bg-[#caa75d]/10 border border-[#caa75d]/30 rounded-lg p-4 text-center hover:bg-[#caa75d]/20 transition-all duration-300"
            >
              <span className="text-[#caa75d] font-semibold">{type}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Статистика */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="text-center space-y-2">
          <div className="text-3xl font-bold text-[#caa75d]">7-10%</div>
          <div className="text-gray-300">Комиссия</div>
        </div>
        <div className="text-center space-y-2">
          <div className="text-3xl font-bold text-[#caa75d]">24/7</div>
          <div className="text-gray-300">Поддержка</div>
        </div>
      </div>
    </section>
  );
};

export default TraderConditions;
