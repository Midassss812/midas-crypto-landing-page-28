
import React from 'react';
import { DollarSign, FileText, Globe, Check, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ApiIntegration = () => {
  const apiFlow = [
    { icon: User, label: "КЛИЕНТ", description: "Инициирует запрос" },
    { icon: DollarSign, label: "ПОПОЛНИТЬ", description: "Выбирает сумму" },
    { icon: FileText, label: "API РЕКВИЗИТЫ", description: "Получает данные" },
    { icon: Globe, label: "БАЛАНС", description: "Проверяет статус" },
    { icon: Check, label: "УСПЕШНО", description: "Завершение операции", isSuccess: true }
  ];

  const integrationSteps = [
    {
      title: "Свяжитесь с нами",
      description: "Оставьте заявку на интеграцию через любой удобный канал связи"
    },
    {
      title: "Пройдите онбординг", 
      description: "Получите доступ к личному кабинету и API документации"
    },
    {
      title: "Запускайте платежи",
      description: "Начинайте принимать платежи в тот же день после интеграции"
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#caa75d] uppercase tracking-wider">
        Интеграция по API
      </h2>
      
      {/* Изображение схемы */}
      <div className="flex justify-center mb-12 px-4">
        <img
          src="/lovable-uploads/0a2b9cf1-38a4-43a2-9933-424535900db1.png"
          alt="Схема работы API интеграции Midas"
          className="w-full max-w-[900px] h-auto rounded-xl shadow-2xl"
        />
      </div>
      
      {/* Enhanced API Flow */}
      <div className="mb-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-8 max-w-7xl mx-auto">
          {apiFlow.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center relative">
                {/* Icon with enhanced styling */}
                <div className={`w-24 h-24 rounded-xl flex items-center justify-center mb-4 shadow-lg transition-all duration-300 hover:scale-105 ${
                  step.isSuccess 
                    ? 'bg-gradient-to-br from-green-600 to-green-700' 
                    : 'bg-gradient-to-br from-[#caa75d] to-[#b8965a]'
                }`}>
                  <IconComponent className={`w-12 h-12 ${step.isSuccess ? 'text-white' : 'text-[#020202]'}`} />
                </div>
                
                {/* Step info */}
                <div className="max-w-xs">
                  <span className="text-sm text-[#caa75d] font-bold tracking-wide block mb-1">
                    {step.label}
                  </span>
                  <span className="text-xs text-gray-400">{step.description}</span>
                </div>
                
                {/* Connection arrow for desktop */}
                {index < apiFlow.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-24 lg:left-28">
                    <div className="text-[#caa75d] text-2xl lg:text-3xl">→</div>
                  </div>
                )}
                
                {/* Mobile connection */}
                {index < apiFlow.length - 1 && (
                  <div className="md:hidden mt-4 mb-2 text-[#caa75d] text-xl">↓</div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Enhanced Integration Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {integrationSteps.map((step, index) => (
          <Card key={index} className="bg-gradient-to-br from-[#1a1a1a] to-[#141414] border-[#333] hover:border-[#caa75d] transition-all duration-300 hover:shadow-lg hover:shadow-[#caa75d]/20">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-[#caa75d] to-[#b8965a] text-[#020202] rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-6 font-bold text-xl shadow-lg">
                {index + 1}
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">{step.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ApiIntegration;
