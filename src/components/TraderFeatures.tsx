
import React from 'react';
import { Shield, Clock, HeadphonesIcon, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TraderFeatures = () => {
  const features = [
    { icon: Zap, title: "Мгновенные уведомления", description: "Получайте уведомления о новых платежах в реальном времени" },
    { icon: Shield, title: "Безопасность данных", description: "Современные методы защиты и шифрования информации" },
    { icon: Clock, title: "Гибкий график", description: "Работайте в удобное для вас время без привязки к офису" },
    { icon: HeadphonesIcon, title: "Персональная поддержка", description: "Выделенный менеджер для решения любых вопросов" }
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8 text-[#caa75d]">Дополнительные возможности</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="bg-[#1a1a1a] border-[#333] hover:border-[#caa75d] transition-colors">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <feature.icon className="w-8 h-8 text-[#caa75d]" />
                <CardTitle className="text-white text-lg">{feature.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TraderFeatures;
