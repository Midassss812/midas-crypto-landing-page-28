
import React from 'react';
import { Monitor, Check, Landmark, User } from "lucide-react";

const HowItWorks = () => {
  const steps = [
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
      icon: Landmark,
      title: "Зачисление",
      description: "Средства поступают на баланс"
    }
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8 text-[#caa75d]">Как это работает</h2>

      {/* Этапы визуально */}
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
