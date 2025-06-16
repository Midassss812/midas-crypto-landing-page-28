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

          {[...Array(15)].map((_, i) => {
          const startX = Math.random() * 120 - 10; // Start from -10% to 110% for wider coverage
          const startY = Math.random() * 20 - 30; // Start from above the screen (-30% to -10%)
          const duration = Math.random() * 3 + 2; // 2-5 seconds duration
          const delay = Math.random() * 8; // 0-8 seconds delay for staggered effect
          
          return <div 
            key={`falling-star-${i}`} 
            className="falling-star absolute bg-gradient-to-r from-transparent via-white to-transparent opacity-80" 
            style={{
              left: `${startX}%`,
              top: `${startY}%`,
              width: `120px`,
              height: `2px`,
              transform: `rotate(45deg)`,
              transformOrigin: 'left center',
              animation: `falling-star-${i} ${duration}s linear infinite`,
              animationDelay: `${delay}s`
            }} 
          />;
        })}
        </div>

        <style>
          {Array.from({
          length: 15
        }, (_, i) => {
          const distance = Math.random() * 400 + 300; // Distance to travel diagonally
          return `
              @keyframes falling-star-${i} {
                0% {
                  transform: rotate(45deg) translateX(0px);
                  opacity: 0;
                }
                10% {
                  opacity: 1;
                }
                90% {
                  opacity: 1;
                }
                100% {
                  transform: rotate(45deg) translateX(${distance}px);
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 w-full items-center min-h-[80vh]">
          
          {/* Left Feature Panel */}
          <div className="lg:col-span-2 hidden lg:flex flex-col justify-center">
            <div className="text-center p-3 border border-[#caa75d]/20 rounded-lg bg-[#caa75d]/5">
              <Shield className="w-6 h-6 text-[#caa75d] mx-auto mb-1" />
              <h3 className="text-xs font-semibold text-[#caa75d]">Безопасность</h3>
            </div>
          </div>

          {/* Central Content */}
          <div className="lg:col-span-8 text-center space-y-8">
            {/* Title Section */}
            <div className="relative">
              {/* Decorative bust image positioned to the side */}
              <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden xl:block">
                <img src="/lovable-uploads/f4d21867-b8f3-41d3-85ca-447df0e036a2.png" alt="Midas Bust" className="h-20 object-contain opacity-80" />
              </div>
              
              {/* Centered title */}
              <div className="flex flex-col items-center space-y-4">
                <span className="text-[#caa75d] text-5xl sm:text-6xl lg:text-7xl font-bold">Midas</span>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white font-semibold max-w-4xl leading-tight">
                  Платформа, где бизнес и трейдеры работают синхронно.
                </h1>
              </div>
              
              {/* Decorative bust image for mobile */}
              <div className="flex justify-center mt-4 xl:hidden">
                <img src="/lovable-uploads/f4d21867-b8f3-41d3-85ca-447df0e036a2.png" alt="Midas Bust" className="h-16 object-contain opacity-80" />
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
          <div className="lg:col-span-2 hidden lg:flex flex-col justify-center">
            <div className="text-center p-3 border border-[#caa75d]/20 rounded-lg bg-[#caa75d]/5">
              <Zap className="w-6 h-6 text-[#caa75d] mx-auto mb-1" />
              <h3 className="text-xs font-semibold text-[#caa75d]">Скорость</h3>
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
        <div className="mt-2">
          *Оплата комиссий зависит от сложности кейса
        </div>
      </footer>
    </div>;
};
export default Index;
