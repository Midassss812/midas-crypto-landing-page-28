
import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      value: "99%",
      title: "Конверсия", 
      description: "Высокий процент успешных сделок"
    },
    {
      value: "24/7",
      title: "Поддержка",
      description: "Круглосуточная техническая поддержка"
    },
    {
      value: "API",
      title: "Интеграция",
      description: "Простая интеграция с вашим бизнесом"
    }
  ];

  return (
    <div className="mt-12">
      <h2 className="text-xl text-[#caa75d] font-semibold mb-8">Почему выбирают Midas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-6 border border-[#caa75d]/20 rounded-xl bg-[#caa75d]/5 hover:bg-[#caa75d]/10 transition-colors">
            <div className="text-5xl font-bold text-[#caa75d] mb-3">{stat.value}</div>
            <div className="text-xl font-medium text-white mb-2">{stat.title}</div>
            <div className="text-sm text-gray-400">{stat.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
