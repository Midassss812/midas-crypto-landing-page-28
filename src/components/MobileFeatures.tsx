
import React from 'react';
import { TrendingUp, Shield, Zap, BarChart3 } from "lucide-react";

const MobileFeatures = () => {
  const features = [
    { icon: TrendingUp, title: "Доходность" },
    { icon: Shield, title: "Безопасность" },
    { icon: Zap, title: "Скорость" },
    { icon: BarChart3, title: "Аналитика" }
  ];

  return (
    <div className="lg:hidden grid grid-cols-2 gap-4 mt-8 w-full max-w-md">
      {features.map((feature, index) => (
        <div key={index} className="text-center p-3 border border-[#caa75d]/20 rounded-lg bg-[#caa75d]/5">
          <feature.icon className="w-6 h-6 text-[#caa75d] mx-auto mb-1" />
          <h3 className="text-xs font-semibold text-[#caa75d]">{feature.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MobileFeatures;
