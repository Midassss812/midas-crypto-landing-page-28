
import React from 'react';
import { DollarSign, FileText, Globe, Check, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ApiIntegration = () => {
  const integrationSteps = [
    "Свяжитесь с нами и оставьте заявку на интеграцию",
    "Пройдите онбординг и получите доступ к кабинету и API", 
    "Запускайте прием платежей в тот же день"
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#caa75d] uppercase tracking-wider">Интеграция по API</h2>
      
      {/* API Flow - Updated according to slide 1 */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-6xl mx-auto mb-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-[#caa75d] rounded-lg flex items-center justify-center mx-auto mb-3">
              <User className="w-10 h-10 text-[#020202]" />
            </div>
            <span className="text-sm text-gray-300 font-semibold">КЛИЕНТ</span>
          </div>
          <div className="hidden md:block text-[#caa75d] text-3xl">→</div>
          <div className="text-center">
            <div className="w-20 h-20 bg-[#caa75d] rounded-lg flex items-center justify-center mx-auto mb-3">
              <DollarSign className="w-10 h-10 text-[#020202]" />
            </div>
            <span className="text-sm text-gray-300 font-semibold">ПОПОЛНИТЬ</span>
          </div>
          <div className="hidden md:block text-[#caa75d] text-3xl">→</div>
          <div className="text-center">
            <div className="w-20 h-20 bg-[#caa75d] rounded-lg flex items-center justify-center mx-auto mb-3">
              <FileText className="w-10 h-10 text-[#020202]" />
            </div>
            <span className="text-sm text-gray-300 font-semibold">API<br />РЕКВИЗИТЫ</span>
          </div>
          <div className="hidden md:block text-[#caa75d] text-3xl">→</div>
          <div className="text-center">
            <div className="w-20 h-20 bg-[#caa75d] rounded-lg flex items-center justify-center mx-auto mb-3">
              <Globe className="w-10 h-10 text-[#020202]" />
            </div>
            <span className="text-sm text-gray-300 font-semibold">БАЛАНС</span>
          </div>
          <div className="hidden md:block text-[#caa75d] text-3xl">→</div>
          <div className="text-center">
            <div className="w-20 h-20 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Check className="w-10 h-10 text-white" />
            </div>
            <span className="text-sm text-gray-300 font-semibold">УСПЕШНО</span>
          </div>
        </div>
      </div>

      {/* Integration Steps - Updated according to slide 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {integrationSteps.map((step, index) => (
          <Card key={index} className="bg-[#1a1a1a] border-[#333] hover:border-[#caa75d] transition-colors">
            <CardContent className="p-6 text-center">
              <div className="bg-[#caa75d] text-[#020202] rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                {index + 1}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{step}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ApiIntegration;
