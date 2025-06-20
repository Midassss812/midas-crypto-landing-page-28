
import React from 'react';
import { DollarSign, FileText, Wallet, Check, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ApiIntegration = () => {
  const apiFlow = [
    { icon: User, title: "Клиент", description: "Инициирует запрос" },
    { icon: DollarSign, title: "Пополнение", description: "Выбирает сумму" },
    { icon: FileText, title: "выдача реквизитов", description: "данные для перевода" },
    { icon: Wallet, title: "Баланс", description: "Проверяет статус" },
    { icon: Check, title: "Успешно", description: "Завершение операции" }
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
      description: "пользуйтесь платежным решением в день интеграции"
    }
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-12 text-[#caa75d] uppercase tracking-wider">
        Интеграция по API
      </h2>
      
      {/* API Flow с тем же стилем что и в HowItWorks */}
      <div className="mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
            {apiFlow.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center flex-1">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#caa75d] to-[#b8965a] rounded-full flex items-center justify-center mb-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <IconComponent className="w-10 h-10 text-[#020202]" />
                    </div>
                    {index < apiFlow.length - 1 && (
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
