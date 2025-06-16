// исправленный Index.tsx по требованиям пользователя
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Mail,
  Send,
  TrendingUp,
  Shield,
  Zap,
  BarChart3
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#020202] text-[#f0f0f0] flex flex-col relative overflow-hidden">
      {/* Falling Stars Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="stars-container">
          {[...Array(300)].map((_, i) => (
            <div
              key={i}
              className="star absolute rounded-full bg-white"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 0.5}px`,
                height: `${Math.random() * 2 + 0.5}px`,
                opacity: Math.random() * 0.8 + 0.2,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 2 + 3}s`
              }}
            />
          ))}
          {[...Array(15)].map((_, i) => {
            const startX = Math.random() * 120 - 10;
            const startY = Math.random() * 20 - 30;
            const duration = Math.random() * 3 + 2;
            const delay = Math.random() * 8;
            return (
              <div
                key={`falling-star-${i}`}
                className="falling-star absolute bg-gradient-to-r from-transparent via-white to-transparent opacity-80"
                style={{
                  left: `${startX}%`,
                  top: `${startY}%`,
                  width: `120px`,
                  height: `2px`,
                  transform: `rotate(45deg)`,
                  transformOrigin: "left center",
                  animation: `falling-star-${i} ${duration}s linear infinite`,
                  animationDelay: `${delay}s`
                }}
              />
            );
          })}
        </div>
        <style>
          {Array.from({ length: 15 }, (_, i) => {
            const distance = Math.random() * 400 + 300;
            return `@keyframes falling-star-${i} {
              0% { transform: rotate(45deg) translateX(0px); opacity: 0; }
              10% { opacity: 1; }
              90% { opacity: 1; }
              100% { transform: rotate(45deg) translateX(${distance}px); opacity: 0; }
            }`;
          }).join("\n")}
        </style>
      </div>

      {/* Top-left small logo */}
      <div className="absolute top-6 left-6 z-10">
        <img
          src="/lovable-uploads/f4d21867-b8f3-41d3-85ca-447df0e036a2.png"
          alt="Midas Bust Icon"
          className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
        />
      </div>

      {/* Main Section */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-8 max-w-7xl mx-auto w-full">
        <div className="text-center space-y-8">
          <span className="text-[#caa75d] text-6xl font-bold">Midas</span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white font-semibold max-w-4xl mx-auto leading-tight">
            Платформа, где бизнес и трейдеры работают синхронно.
          </h1>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              onClick={() => (window.location.href = "/trader.html")}
              className="group w-full sm:w-auto bg-[#caa75d] hover:bg-[#b8965a] text-[#0a0a0a] font-semibold px-16 py-6 text-xl"
            >
              Стать трейдером
              <ArrowRight className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => (window.location.href = "/business.html")}
              className="group w-full sm:w-auto border-2 border-[#caa75d] bg-white text-black hover:bg-[#f0f0f0] font-semibold px-16 py-6 text-xl"
            >
              Интеграция Midas
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>

        {/* Stats Section */}
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
      </main>

      {/* Footer */}
      <footer className="relative z-10 pb-8 text-center text-sm text-[#888] opacity-70 mt-auto px-6">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-[#c0c0c0]">
          <a
            href="mailto:Midas_P2P@proton.me"
            className="flex items-center gap-2 hover:text-[#caa75d]"
          >
            <Mail className="w-4 h-4" />
            Midas_P2P@proton.me
          </a>
          <a
            href="https://t.me/Midas_p2p"
            className="flex items-center gap-2 hover:text-[#caa75d]"
          >
            <Send className="w-4 h-4" />
            Midas_p2p
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;