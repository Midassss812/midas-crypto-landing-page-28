
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Send } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#020202] text-[#f0f0f0] flex flex-col relative overflow-hidden">
      {/* Animated Starry Background */}
      <div className="absolute inset-0 overflow-hidden">
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
        </div>

        {/* Multiple shooting stars with random directions and positions */}
        {[...Array(30)].map((_, i) => {
          const direction = Math.random() * 360; // Random direction in degrees
          const startX = Math.random() * 120 - 10; // Random start X position
          const startY = Math.random() * 120 - 10; // Random start Y position
          const length = Math.random() * 100 + 80; // Random trail length
          
          return (
            <div
              key={`shooting-${i}`}
              className="shooting-star absolute h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-60"
              style={{
                left: `${startX}%`,
                top: `${startY}%`,
                width: `${length}px`,
                animationDelay: `${Math.random() * 20 + 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                '--direction': `${direction}deg`,
                '--distance': `${Math.random() * 300 + 200}px`
              } as React.CSSProperties & { '--direction': string; '--distance': string }}
            />
          );
        })}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020202]/30 to-[#020202]/70" />
      </div>

      {/* Flat golden king logo in top left */}
      <div className="absolute top-6 left-6 z-10">
        <img 
          src="/lovable-uploads/300ca513-4ce7-4c91-bf6b-cbcab4036038.png" 
          alt="Midas King Logo" 
          className="h-12 w-12 object-contain filter drop-shadow-lg"
        />
      </div>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main hero content - Centered */}
          <div className="space-y-6">
            {/* 3D Bust + Midas Title - Horizontally centered as a unit */}
            <div className="flex items-center justify-center gap-6 sm:gap-8">
              <img 
                src="/lovable-uploads/a465ef4a-8571-45f3-bc84-589af7eed350.png" 
                alt="Midas 3D Bust" 
                className="h-32 w-32 sm:h-40 sm:w-40 object-contain filter drop-shadow-2xl"
              />
              <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#caa75d] font-inter tracking-tight">
                Midas
              </span>
            </div>

            {/* Slogan - Centered relative to the title above */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-inter">
              <span className="inline-block text-[#f0f0f0]">
                Платформа, где бизнес и трейдеры
              </span>{' '}
              <span className="inline-block text-white">
                работают синхронно
              </span>
            </h1>
          </div>

          {/* Action Buttons - Centered relative to content above */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button
              size="lg"
              className="group w-full sm:w-auto bg-[#caa75d] hover:bg-[#b8965a] text-[#0a0a0a] font-semibold px-20 py-10 text-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#caa75d]/20"
              onClick={() => window.location.href = '/trader.html'}
            >
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                Стать трейдером
              </span>
              <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group w-full sm:w-auto border-2 border-[#caa75d] text-[#caa75d] hover:bg-[#caa75d] hover:text-[#0a0a0a] font-semibold px-20 py-10 text-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#caa75d]/20"
              onClick={() => window.location.href = '/business.html'}
            >
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                Интеграция Midas
              </span>
              <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Trust Indicators - Centered */}
          <div className="pt-12 grid grid-cols-3 gap-6 text-center opacity-95">
            <div className="space-y-3 hover:scale-105 transition-transform duration-300">
              <div className="text-5xl sm:text-6xl font-bold text-[#caa75d] mb-3">99%</div>
              <div className="text-xl sm:text-2xl text-[#f0f0f0] font-semibold">Конверсия</div>
            </div>
            <div className="space-y-3 hover:scale-105 transition-transform duration-300">
              <div className="text-5xl sm:text-6xl font-bold text-[#caa75d] mb-3">24/7</div>
              <div className="text-xl sm:text-2xl text-[#f0f0f0] font-semibold">Поддержка</div>
            </div>
            <div className="space-y-3 hover:scale-105 transition-transform duration-300">
              <div className="text-5xl sm:text-6xl font-bold text-[#caa75d] mb-3">API</div>
              <div className="text-xl sm:text-2xl text-[#f0f0f0] font-semibold">Интеграция</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="pb-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-8">
              <a 
                href="mailto:Midas_P2P@proton.me"
                className="flex items-center space-x-3 text-[#c0c0c0] hover:text-[#caa75d] transition-all duration-300 hover:scale-105"
              >
                <Mail className="h-8 w-8" />
                <span className="text-2xl font-medium">Midas_P2P@proton.me</span>
              </a>
              <a 
                href="https://t.me/Midas_p2p"
                className="flex items-center space-x-3 text-[#c0c0c0] hover:text-[#caa75d] transition-all duration-300 hover:scale-105"
              >
                <Send className="h-8 w-8" />
                <span className="text-2xl font-medium">Midas_p2p</span>
              </a>
            </div>
            <div className="text-sm text-[#888] opacity-70">
              *Оплата комиссий зависит от сложности кейса
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .star {
          animation: gentle-twinkle infinite ease-in-out alternate;
        }

        .shooting-star {
          animation: shooting-random infinite linear;
        }

        @keyframes gentle-twinkle {
          0% { opacity: 0.2; }
          100% { opacity: 0.9; }
        }

        @keyframes shooting-random {
          0% {
            transform: translateX(0) translateY(0) rotate(var(--direction));
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: 
              translateX(calc(cos(var(--direction)) * var(--distance))) 
              translateY(calc(sin(var(--direction)) * var(--distance))) 
              rotate(var(--direction));
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
