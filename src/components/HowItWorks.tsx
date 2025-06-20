
import React from 'react';
import { CreditCard, Monitor, Check, DollarSign, User, ArrowRight } from "lucide-react";

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
      <h2 className="text-3xl font-bold text-center mb-8 text-[#caa75d]">Как это работает</h2>

      {/* CSS схема вместо изображения */}
      <div className="flex justify-center mb-12 px-4">
        <div className="w-full max-w-[850px] bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] rounded-xl p-8 border border-[#caa75d]/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Клиент */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-2">
                <User className="w-8 h-8 text-white" />
              </div>
              <span className="text-white text-sm font-medium">Клиент</span>
            </div>

            <ArrowRight className="text-[#caa75d] hidden md:block" />
            <div className="md:hidden w-full h-0.5 bg-[#caa75d]"></div>

            {/* Midas Platform */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#caa75d] to-[#b8965a] rounded-full flex items-center justify-center mb-2">
                <Monitor className="w-10 h-10 text-[#020202]" />
              </div>
              <span className="text-[#caa75d] text-lg font-bold">Midas</span>
              <span className="text-white text-sm">Платформа</span>
            </div>

            <ArrowRight className="text-[#caa75d] hidden md:block" />
            <div className="md:hidden w-full h-0.5 bg-[#caa75d]"></div>

            {/* Трейдер */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-2">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <span className="text-white text-sm font-medium">Трейдер</span>
            </div>

            <ArrowRight className="text-[#caa75d] hidden md:block" />
            <div className="md:hidden w-full h-0.5 bg-[#caa75d]"></div>

            {/* Банк */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-2">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <span className="text-white text-sm font-medium">Банк</span>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <div className="text-[#caa75d] text-sm font-medium mb-2">Процесс обработки платежа</div>
            <div className="text-gray-300 text-xs">Безопасная передача средств через платформу Midas</div>
          </div>
        </div>
      </div>

      {/* Этапы */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center flex-1">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#caa75d] to-[#b8965a] rounded-full flex items-center justify-center mb-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <IconComponent className="w-10 h-10 text-[#020202]" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-20 w-16 xl:w-24 h-0.5 bg-gradient-to-r from-[#caa75d] to-transparent"></div>
                  )}
                </div>
                <div className="max-w-xs">
                  <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
