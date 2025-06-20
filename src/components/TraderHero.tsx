import React from 'react';
import { useScrollScale } from '@/hooks/useScrollScale';
import { TrendingUp, Shield, Clock, Zap } from "lucide-react";

const TraderHero = () => {
  const scale = useScrollScale();

  const stats = [
    {
      icon: TrendingUp,
      value: "7-10%",
      label: "Комиссия",
      color: "text-green-400"
    },
    {
      icon: Shield,
      value: "0₽",
      label: "Страховой Депозит",
      color: "text-blue-400"
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Поддержка",
      color: "text-purple-400"
    },
    {
      icon: Zap,
      value: "Pay In",
      label: "Трафик",
      color: "text-orange-400"
    }
  ];

  return (
    <div className="relative pt-12 pb-8">
      {/* Декоративный градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#caa75d]/10 via-transparent to-[#caa75d]/5 rounded-3xl"></div>
      <div className="absolute top-4 right-4 w-32 h-32 bg-[#caa75d]/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-8 left-8 w-24 h-24 bg-[#caa75d]/10 rounded-full blur-lg"></div>
      
      <div className="relative z-10 text-center space-y-8">
        {/* Главный заголовок */}
        <div className="space-y-4">
          <div className="inline-block">
            <span className="text-[#caa75d] text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#caa75d] to-[#d4b668] bg-clip-text text-transparent">
              Midas
            </span>
            <div className="h-1 bg-gradient-to-r from-[#caa75d] to-transparent rounded-full mt-2"></div>
          </div>
          
          {/* Контейнер для изображения короля с фиксированной анимированной областью */}
          <div className="relative flex justify-center">
            <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden">
              {/* Декоративные кольца вокруг изображения - покрывают всю область контейнера */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#caa75d]/20 to-transparent rounded-full animate-pulse"></div>
              <div className="absolute inset-0 border-2 border-[#caa75d]/30 rounded-full"></div>
              <div className="absolute inset-0 border border-[#caa75d]/20 rounded-full animate-ping"></div>
              
              {/* Изображение короля - центрировано внутри фиксированной области */}
              <img 
                src="/lovable-uploads/f4d21867-b8f3-41d3-85ca-447df0e036a2.png" 
                alt="Midas King" 
                className="absolute inset-0 w-full h-full object-cover rounded-full transition-transform duration-500 ease-out hover:scale-110 transform-origin-center z-10"
                style={{ transform: `scale(${scale})` }}
              />
              
              {/* Световые эффекты - позиционированы относительно всей области */}
              <div className="absolute top-[25%] left-[25%] w-3 h-3 bg-[#caa75d] rounded-full opacity-60 animate-ping z-20"></div>
              <div className="absolute bottom-[33%] right-[25%] w-2 h-2 bg-[#d4b668] rounded-full opacity-40 animate-ping z-20" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-[50%] right-[15%] w-2 h-2 bg-[#caa75d] rounded-full opacity-50 animate-pulse z-20" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
          
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold leading-tight max-w-4xl mx-auto">
            Стань трейдером <span className="text-[#caa75d]">нового поколения</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Выгодные условия сотрудничества с Pay In трафиком. 
            <span className="text-[#caa75d] font-semibold"> Комиссия 7-10%, не требуется страхового депозита</span>
          </p>
        </div>

        {/* Статистические карточки */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1a1a1a]/80 to-[#0d0d0d]/80 border border-[#333]/50 rounded-2xl p-6 hover:border-[#caa75d]/40 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="space-y-3">
                  <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-[#333]/30 group-hover:border-[#caa75d]/30 transition-colors`}>
                    <IconComponent className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <div className="text-2xl font-bold text-white group-hover:text-[#caa75d] transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call-to-action секция с исправленными анимациями */}
        <div className="relative mt-12">
          <div className="bg-gradient-to-r from-[#1a1a1a]/60 to-[#141414]/60 border border-[#caa75d]/30 rounded-2xl p-6 max-w-2xl mx-auto transform transition-all duration-300 hover:scale-[1.02] hover:border-[#caa75d]/50">
            <h3 className="text-xl font-semibold text-white mb-2 transition-colors duration-300">
              Готовы начать зарабатывать?
            </h3>
            <p className="text-gray-300 text-sm transition-colors duration-300">
              Присоединяйтесь к сообществу успешных трейдеров Midas уже сегодня
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraderHero;
