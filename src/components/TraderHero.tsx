
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
          
          {/* Анимированный контейнер для короля */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Основной контейнер с множественными анимированными кольцами */}
              <div 
                className="relative w-64 h-64 sm:w-72 sm:h-72"
                style={{ 
                  transform: `scale(${scale})`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                {/* Внешние вращающиеся кольца */}
                <div className="absolute inset-0 w-full h-full border-2 border-[#caa75d]/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] border border-[#d4b668]/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                <div className="absolute inset-8 w-[calc(100%-4rem)] h-[calc(100%-4rem)] border border-[#caa75d]/40 rounded-full animate-spin" style={{ animationDuration: '25s' }}></div>
                
                {/* Пульсирующие градиентные кольца */}
                <div className="absolute inset-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)] bg-gradient-to-r from-[#caa75d]/10 to-transparent rounded-full animate-pulse"></div>
                <div className="absolute inset-6 w-[calc(100%-3rem)] h-[calc(100%-3rem)] bg-gradient-to-r from-[#d4b668]/15 to-transparent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                {/* Центральный контейнер для короля с overflow hidden */}
                <div className="absolute inset-12 w-[calc(100%-6rem)] h-[calc(100%-6rem)] rounded-full overflow-hidden bg-gradient-to-br from-[#1a1a1a]/80 to-[#0d0d0d]/80 border-2 border-[#caa75d]/50 shadow-2xl shadow-[#caa75d]/30">
                  {/* Изображение короля с контролируемыми границами */}
                  <div className="w-full h-full flex items-center justify-center p-4">
                    <img 
                      src="/lovable-uploads/f4d21867-b8f3-41d3-85ca-447df0e036a2.png" 
                      alt="Midas King" 
                      className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                </div>
                
                {/* Вращающиеся световые точки */}
                <div className="absolute top-4 left-1/2 w-3 h-3 bg-[#caa75d] rounded-full opacity-80 animate-ping transform -translate-x-1/2"></div>
                <div className="absolute bottom-4 left-1/4 w-2 h-2 bg-[#d4b668] rounded-full opacity-60 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute right-4 top-1/3 w-2 h-2 bg-[#caa75d] rounded-full opacity-70 animate-ping" style={{ animationDelay: '1s' }}></div>
                <div className="absolute left-4 bottom-1/3 w-3 h-3 bg-[#d4b668] rounded-full opacity-50 animate-ping" style={{ animationDelay: '1.5s' }}></div>
                
                {/* Дополнительные декоративные элементы */}
                <div className="absolute top-8 right-8 w-4 h-4 bg-gradient-to-r from-[#caa75d] to-[#d4b668] rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                <div className="absolute bottom-8 left-8 w-3 h-3 bg-gradient-to-r from-[#d4b668] to-[#caa75d] rounded-full animate-bounce" style={{ animationDelay: '0.8s' }}></div>
                
                {/* Внутренние пульсирующие кольца */}
                <div className="absolute inset-10 w-[calc(100%-5rem)] h-[calc(100%-5rem)] border border-[#caa75d]/30 rounded-full animate-pulse"></div>
                <div className="absolute inset-14 w-[calc(100%-7rem)] h-[calc(100%-7rem)] border border-[#d4b668]/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                
                {/* Вращающиеся градиентные сегменты */}
                <div className="absolute inset-0 w-full h-full opacity-30">
                  <div className="absolute top-0 left-1/2 w-1 h-8 bg-gradient-to-b from-[#caa75d] to-transparent transform -translate-x-1/2 animate-spin" style={{ animationDuration: '8s' }}></div>
                  <div className="absolute bottom-0 left-1/2 w-1 h-6 bg-gradient-to-t from-[#d4b668] to-transparent transform -translate-x-1/2 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}></div>
                </div>
              </div>
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

        {/* Call-to-action секция */}
        <div className="relative mt-12">
          <div className="bg-gradient-to-r from-[#1a1a1a]/60 to-[#141414]/60 border border-[#caa75d]/30 rounded-2xl p-6 max-w-2xl mx-auto transition-all duration-300 hover:scale-[1.02] hover:border-[#caa75d]/50">
            <h3 className="text-xl font-semibold text-white mb-2">
              Готовы начать зарабатывать?
            </h3>
            <p className="text-gray-300 text-sm">
              Присоединяйтесь к сообществу успешных трейдеров Midas уже сегодня
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraderHero;
