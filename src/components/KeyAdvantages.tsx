
import React from 'react';
import { Shield, Clock, HeadphonesIcon, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const KeyAdvantages = () => {
  const advantages = [
    { icon: CheckCircle, title: "99% конверсии", description: "Максимальная эффективность платежей" },
    { icon: Shield, title: "Полный контроль реквизитов", description: "Управление всеми аспектами приема платежей" },
    { icon: Clock, title: "Бесперебойная работа 24/7", description: "Стабильная работа без простоев" },
    { icon: HeadphonesIcon, title: "Круглосуточная поддержка", description: "Квалифицированная техподдержка" }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#caa75d]">Ключевые преимущества</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {advantages.map((advantage, index) => (
          <Card key={index} className="bg-[#1a1a1a] border-[#333] hover:border-[#caa75d] transition-colors">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <advantage.icon className="w-8 h-8 text-[#caa75d]" />
                <CardTitle className="text-white text-lg">{advantage.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{advantage.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default KeyAdvantages;
