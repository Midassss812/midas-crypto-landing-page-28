
import React from 'react';
import { CreditCard, Monitor, Check, DollarSign, User } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: CreditCard,
      title: "Банковская карта",
      description: "Клиент использует свою карту"
    },
    {
      icon: User,
      title: "Запрос реквизитов",
      description: "Клиент запрашивает реквизиты для оплаты"
    },
    {
      icon: Monitor,
      title: "Обработка платежа",
      description: "Midas принимает и обрабатывает платеж"
    },
    {
      icon: Check,
      title: "Подтверждение",
      description: "Успешное завершение операции"
    },
    {
      icon: DollarSign,
      title: "Зачисление",
      description: "Доллары поступают на баланс"
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#caa75d]">Как это работает</h2>
      
      {/* Process Flow Diagram */}
      <div className="max-w-5xl mx-auto mb-16 px-4">
        <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#141414] rounded-2xl p-8 border border-[#333]">
          {/* Main flow */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Client Request */}
            <div className="flex flex-col items-center text-center">
              <div className="text-gray-400 text-sm mb-3 uppercase tracking-wide">Клиент запрашивает</div>
              <div className="text-gray-300 text-lg mb-4">реквизит</div>
              
              {/* Card representation */}
              <div className="w-24 h-16 bg-gradient-to-br from-[#caa75d] to-[#b8965a] rounded-lg shadow-lg flex items-center justify-center mb-4">
                <div className="w-4 h-4 bg-[#020202] rounded"></div>
                <div className="ml-2 space-y-1">
                  <div className="w-6 h-1 bg-[#020202] rounded"></div>
                  <div className="w-4 h-1 bg-[#020202] rounded"></div>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden lg:block text-gray-500 text-2xl">→</div>
            <div className="lg:hidden text-gray-500 text-2xl rotate-90">→</div>

            {/* MIDAS Processing */}
            <div className="flex flex-col items-center text-center">
              {/* MIDAS Logo placeholder */}
              <div className="w-20 h-16 bg-gradient-to-br from-[#caa75d] to-[#b8965a] rounded-xl shadow-lg flex items-center justify-center mb-4">
                <div className="text-[#020202] font-bold text-lg">👑</div>
              </div>
              <div className="text-[#caa75d] font-bold text-lg mb-1">MIDAS</div>
              <div className="text-gray-300 text-sm">принимает платеж</div>
            </div>

            {/* Arrow */}
            <div className="hidden lg:block text-gray-500 text-2xl">→</div>
            <div className="lg:hidden text-gray-500 text-2xl rotate-90">→</div>

            {/* Result */}
            <div className="flex flex-col items-center text-center">
              {/* Payment confirmation */}
              <div className="w-24 h-16 bg-gradient-to-br from-[#1a1a1a] to-[#141414] border-2 border-[#caa75d] rounded-lg shadow-lg flex flex-col items-center justify-center mb-4 p-2">
                <div className="text-[#caa75d] text-xs mb-1">✓ ✓ ✓</div>
                <div className="w-8 h-1 bg-[#caa75d] rounded mb-1"></div>
                <div className="w-6 h-1 bg-[#caa75d] rounded"></div>
              </div>
              
              {/* Dollar symbol */}
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-full shadow-lg flex items-center justify-center mb-2">
                <span className="text-white font-bold text-xl">$</span>
              </div>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-[#caa75d] rounded-full opacity-50"></div>
          <div className="absolute bottom-4 left-4 w-3 h-3 bg-[#caa75d] rounded-full opacity-30"></div>
        </div>
      </div>
      
      {/* Elegant flow visualization */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center flex-1">
                {/* Icon container with enhanced styling */}
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#caa75d] to-[#b8965a] rounded-full flex items-center justify-center mb-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <IconComponent className="w-10 h-10 text-[#020202]" />
                  </div>
                  {/* Connection line for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-20 w-16 xl:w-24 h-0.5 bg-gradient-to-r from-[#caa75d] to-transparent"></div>
                  )}
                </div>
                
                {/* Step content */}
                <div className="max-w-xs">
                  <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </div>
                
                {/* Mobile connection arrow */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden mt-6 mb-2">
                    <div className="w-px h-8 bg-gradient-to-b from-[#caa75d] to-transparent mx-auto"></div>
                    <div className="text-[#caa75d] text-xl">↓</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
