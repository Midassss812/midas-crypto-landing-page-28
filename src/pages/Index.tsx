
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Send, TrendingUp, Shield, Zap, Users, BarChart3, Clock } from "lucide-react";

const Index = () => {
  return <div className="min-h-screen bg-[#020202] text-[#f0f0f0] flex flex-col relative overflow-hidden">
      {/* Star Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="stars-container">
          {[...Array(300)].map((_, i) => <div key={i} className="star absolute rounded-full bg-white" style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 2 + 0.5}px`,
          height: `${Math.random() * 2 + 0.5}px`,
          opacity: Math.random() * 0.8 + 0.2,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${Math.random() * 2 + 3}s`
        }} />)}

          {[...Array(4)].map((_, i) => {
          // Random starting positions from different sides
          const side = Math.floor(Math.random() * 3); // 0: top, 1: left, 2: right
          let startX, startY, rotation, endX, endY;
          
          if (side === 0) { // From top
            startX = Math.random() * 120 - 10;
            startY = Math.random() * 20 - 30;
            rotation = Math.random() * 30 + 30; // 30-60 degrees
            endX = startX + (Math.random() * 200 + 150) * (Math.random() > 0.5 ? 1 : -1);
            endY = startY + Math.random() * 400 + 300;
          } else if (side === 1) { // From left
            startX = Math.random() * 20 - 30;
            startY = Math.random() * 80 + 10;
            rotation = Math.random() * 45 + 10; // 10-55 degrees
            endX = startX + Math.random() * 400 + 300;
            endY = startY + Math.random() * 200 + 100;
          } else { // From right
            startX = Math.random() * 20 + 110;
            startY = Math.random() * 80 + 10;
            rotation = Math.random() * 45 + 125; // 125-170 degrees
            endX = startX - (Math.random() * 400 + 300);
            endY = startY + Math.random() * 200 + 100;
          }
          
          const duration = Math.random() * 4 + 3; // 3-7 seconds
          const delay = Math.random() * 20; // 0-20 seconds for much rarer appearance
          
          return <div 
            key={`falling-star-${i}`} 
            className="falling-star absolute bg-gradient-to-r from-transparent via-white to-transparent opacity-80" 
            style={{
              left: `${startX}%`,
              top: `${startY}%`,
              width: `${Math.random() * 60 + 80}px`,
              height: `${Math.random() * 1 + 1.5}px`,
              transform: `rotate(${rotation}deg)`,
              transformOrigin: 'left center',
              animation: `falling-star-${i} ${duration}s linear infinite`,
              animationDelay: `${delay}s`
            }} 
          />;
        })}
        </div>

        <style>
          {Array.from({
          length: 4
        }, (_, i) => {
          // Generate random movement for each star
          const side = Math.floor(Math.random() * 3);
          let deltaX, deltaY;
          
          if (side === 0) { // From top
            deltaX = (Math.random() * 200 + 150) * (Math.random() > 0.5 ? 1 : -1);
            deltaY = Math.random() * 400 + 300;
          } else if (side === 1) { // From left
            deltaX = Math.random() * 400 + 300;
            deltaY = Math.random() * 200 + 100;
          } else { // From right
            deltaX = -(Math.random() * 400 + 300);
            deltaY = Math.random() * 200 + 100;
          }
          
          return `
              @keyframes falling-star-${i} {
                0% {
                  transform: rotate(var(--rotation)) translateX(0px) translateY(0px);
                  opacity: 0;
                }
                10% {
                  opacity: 1;
                }
                90% {
                  opacity: 1;
                }
                100% {
                  transform: rotate(var(--rotation)) translateX(${deltaX}px) translateY(${deltaY}px);
                  opacity: 0;
                }
              }
            `;
        }).join("\n")}
        </style>
      </div>

      {/* Logo top-left */}
      <div className="absolute top-6 left-6 z-10">
        <img src="/lovable-uploads/9f563d21-3cce-40e4-ba1d-0cf6699b56a2.png" alt="Midas King Icon" className="h-16 w-16 sm:h-20 sm:w-20 object-contain" />
      </div>

      {/* Main Section */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-8 max-w-7xl mx-auto w-full">
        {/* Grid Layout for better space utilization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-center min-h-[80vh]">
          
          {/* Left Feature Panel */}
          <div className="lg:col-span-2 hidden lg:flex flex-col space-y-6">
            <div className="text-center p-4 border border-[#caa75d]/20 rounded-lg bg-[#caa75d]/5">
              <TrendingUp className="w-8 h-8 text-[#caa75d] mx-auto mb-2" />
              <h3 className="text-sm font-semibold text-[#caa75d]">Высокая доходность</h3>
              <p className="text-xs text-gray-400 mt-1">Максимизируйте прибыль</p>
            </div>
            <div className="text-center p-4 border border-[#caa75d]/20 rounded-lg bg-[#caa75d]/5">
              <Shield className="w-8 h-8 text-[#caa75d] mx-auto mb-2" />
              <h3 className="text-sm font-semibold text-[#caa75d]">Безопасность</h3>
              <p className="text-xs text-gray-400 mt-1">Защищенные транзакции</p>
            </div>
          </div>

          {/* Central Content */}
          <div className="lg:col-span-8 text-center space-y-8">
            {/* Title Section */}
            <div className="relative">
              {/* Centered title */}
              <div className="flex flex-col items-center space-y-4">
                <span className="text-[#caa75d] text-5xl sm:text-6xl lg:text-7xl font-bold">Midas</span>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white font-semibold max-w-4xl leading-tight">
                  Платформа, где бизнес и трейдеры работают синхронно.
                </h1>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" onClick={() => window.location.href = '/trader.html'} className="group w-full sm:w-auto bg-[#caa75d] hover:bg-[#b8965a] text-[#0a0a0a] font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#caa75d]/20 px-16 py-6 text-xl">
                Стать трейдером
                <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.location.href = '/business.html'} className="group w-full sm:w-auto border-2 border-[#caa75d] text-black hover:bg-[#caa75d] hover:text-[#0a0a0a] font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#caa75d]/20 px-16 py-6 text-xl">
                Интеграция Midas
                <ArrowRight className="ml-2" />
              </Button>
            </div>

            {/* Expanded Stats Section */}
            <div className="mt-12">
              <h2 className="text-xl text-[#caa75d] font-semibold mb-8">Почему выбирают Midas</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="text-center p-6 border border-[#caa75d]/20 rounded-xl bg-[#caa75d]/5 hover:bg-[#caa75d]/10 transition-colors">
                  <div className="text-5xl font-bold text-[#caa75d] mb-3">99%</div>
                  <div className="text-xl font-medium text-white mb-2">Конверсия</div>
                  <div className="text-sm text-gray-400">Высокий процент успешных сделок</div>
                </div>
                <div className="text-center p-6 border border-[#caa75d]/20 rounded-xl bg-[#caa75d]/5 hover:bg-[#caa75d]/10 transition-colors">
                  <div className="text-5xl font-bold text-[#caa75d] mb-3">24/7</div>
                  <div className="text-xl font-medium text-white mb-2">Поддержка</div>
                  <div className="text-sm text-gray-400">Круглосуточная техническая поддержка</div>
                </div>
                <div className="text-center p-6 border border-[#caa75d]/20 rounded-xl bg-[#caa75d]/5 hover:bg-[#caa75d]/10 transition-colors">
                  <div className="text-5xl font-bold text-[#caa75d] mb-3">API</div>
                  <div className="text-xl font-medium text-white mb-2">Интеграция</div>
                  <div className="text-sm text-gray-400">Простая интеграция с вашим бизнесом</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Feature Panel */}
          <div className="lg:col-span-2 hidden lg:flex flex-col space-y-6">
            <div className="text-center p-4 border border-[#caa75d]/20 rounded-lg bg-[#caa75d]/5">
              <Zap className="w-8 h-8 text-[#caa75d] mx-auto mb-2" />
              <h3 className="text-sm font-semibold text-[#caa75d]">Быстрые операции</h3>
              <p className="text-xs text-gray-400 mt-1">Мгновенные транзакции</p>
            </div>
            <div className="text-center p-4 border border-[#caa75d]/20 rounded-lg bg-[#caa75d]/5">
              <BarChart3 className="w-8 h-8 text-[#caa75d] mx-auto mb-2" />
              <h3 className="text-sm font-semibold text-[#caa75d]">Аналитика</h3>
              <p className="text-xs text-gray-400 mt-1">Детальная отчетность</p>
            </div>
          </div>
        </div>

        {/* Additional Features Section for Mobile */}
        <div className="lg:hidden grid grid-cols-2 gap-4 mt-8 w-full max-w-md">
          <div className="text-center p-3 border border-[#caa75d]/20 rounded-lg bg-[#caa75d]/5">
            <TrendingUp className="w-6 h-6 text-[#caa75d] mx-auto mb-1" />
            <h3 className="text-xs font-semibold text-[#caa75d]">Доходность</h3>
          </div>
          <div className="text-center p-3 border border-[#caa75d]/20 rounded-lg bg-[#caa75d]/5">
            <Shield className="w-6 h-6 text-[#caa75d] mx-auto mb-1" />
            <h3 className="text-xs font-semibold text-[#caa75d]">Безопасность</h3>
          </div>
          <div className="text-center p-3 border border-[#caa75d]/20 rounded-lg bg-[#caa75d]/5">
            <Zap className="w-6 h-6 text-[#caa75d] mx-auto mb-1" />
            <h3 className="text-xs font-semibold text-[#caa75d]">Скорость</h3>
          </div>
          <div className="text-center p-3 border border-[#caa75d]/20 rounded-lg bg-[#caa75d]/5">
            <BarChart3 className="w-6 h-6 text-[#caa75d] mx-auto mb-1" />
            <h3 className="text-xs font-semibold text-[#caa75d]">Аналитика</h3>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 pb-8 text-center text-sm text-[#888] opacity-70 mt-auto px-6">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-[#c0c0c0]">
          <a href="mailto:Midas_P2P@proton.me" className="flex items-center gap-2 hover:text-[#caa75d]">
            <Mail className="w-4 h-4" />
            Midas_P2P@proton.me
          </a>
          <a href="https://t.me/Midas_p2p" className="flex items-center gap-2 hover:text-[#caa75d]">
            <Send className="w-4 h-4" />
            Midas_p2p
          </a>
        </div>
      </footer>
    </div>;
};
export default Index;
