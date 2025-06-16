import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Send } from "lucide-react";
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

          {[...Array(30)].map((_, i) => {
          const angle = Math.random() * Math.PI * 2;
          const startX = Math.random() * 100;
          const startY = Math.random() * 100;
          const distance = Math.random() * 400 + 100;
          const dx = Math.cos(angle) * distance;
          const dy = Math.sin(angle) * distance;
          return <div key={`shooting-${i}`} className="shooting-star absolute h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-60" style={{
            left: `${startX}%`,
            top: `${startY}%`,
            width: `100px`,
            transform: `translate(0, 0)`,
            animation: `shooting-move-${i} ${Math.random() * 2 + 2}s linear infinite`
          }} />;
        })}
        </div>

        <style>
          {Array.from({
          length: 30
        }, (_, i) => {
          const angle = Math.random() * Math.PI * 2;
          const dx = Math.cos(angle) * (Math.random() * 400 + 100);
          const dy = Math.sin(angle) * (Math.random() * 400 + 100);
          return `
              @keyframes shooting-move-${i} {
                0% {
                  transform: translate(0, 0);
                  opacity: 0;
                }
                5% {
                  opacity: 1;
                }
                95% {
                  opacity: 1;
                }
                100% {
                  transform: translate(${dx}px, ${dy}px);
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
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center space-y-10 px-[28px] py-0">
        {/* Logo + Title */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <img src="/lovable-uploads/f4d21867-b8f3-41d3-85ca-447df0e036a2.png" alt="Midas Bust" className="h-20 sm:h-24 object-contain" />
          <span className="text-[#caa75d] text-5xl font-bold mr-auto text-left\n">Midas</span>
        </div>

        <h1 className="text-2xl text-white font-semibold sm:text-3xl px-0 py-0">
          Платформа, где бизнес и трейдеры работают синхронно.
        </h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
          <Button size="lg" onClick={() => window.location.href = '/trader.html'} className="group w-full sm:w-auto bg-[#caa75d] hover:bg-[#b8965a] text-[#0a0a0a] font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#caa75d]/20 px-[74px] py-[31px] text-xl">
            Стать трейдером
            <ArrowRight className="ml-2" />
          </Button>
          <Button size="lg" variant="outline" onClick={() => window.location.href = '/business.html'} className="group w-full sm:w-auto border-2 border-[#caa75d] text-[#caa75d] hover:bg-[#caa75d] hover:text-[#0a0a0a] font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#caa75d]/20 px-[74px] py-[31px] text-xl">
            Интеграция Midas
            <ArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 pt-10">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#caa75d] px-[84px] py-[37px] rounded-2xl">99%</div>
            <div className="text-sm">Конверсия</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#caa75d] px-[84px] py-[37px]">24/7</div>
            <div className="text-sm">Поддержка</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#caa75d] px-[84px] py-[37px]">API</div>
            <div className="text-sm">Интеграция</div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 pb-8 text-center text-sm text-[#888] opacity-70 mt-auto">
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