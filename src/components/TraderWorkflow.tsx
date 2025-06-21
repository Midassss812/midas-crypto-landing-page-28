
import React from 'react';
import { UserPlus, TrendingUp, CheckCircle, DollarSign } from "lucide-react";

const TraderWorkflow = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Регистрация",
      description: "Подача заявки и быстрое подключение в день обращения"
    },
    {
      icon: TrendingUp,
      title: "Получение трафика",
      description: "Начинаете обрабатывать Pay In трафик по выгодным условиям"
    },
    {
      icon: CheckCircle,
      title: "Обработка платежей",
      description: "Принимайте платежи от проверенных контрагентов"
    },
    {
      icon: DollarSign,
      title: "Получение дохода",
      description: "Получаете комиссию 7-10% от обработанного объема"
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

export default TraderWorkflow;
