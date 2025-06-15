import { Button } from "@/components/ui/button";
import { Crown, ArrowRight, Mail, MessageCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f0f0f0] flex flex-col relative overflow-hidden">
      {/* Animated Starry Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars-container">
          {[...Array(150)].map((_, i) => (
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

        {/* Shooting stars */}
        {[...Array(2)].map((_, i) => (
          <div
            key={`shooting-${i}`}
            className="shooting-star absolute h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              width: '80px',
              animationDelay: `${Math.random() * 15 + 10}s`,
              animationDuration: '2s'
            }}
          />
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/30 to-[#0a0a0a]/70" />
      </div>

      {/* Crown in top left */}
      <div className="absolute top-8 left-8 z-10">
        <Crown className="h-8 w-8 text-[#caa75d] animate-fade-in" />
      </div>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-hero-entrance">
          {/* Midas Logo and Text */}
          <div className="space-y-6">
            <div className="flex items-center justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#f0f0f0] font-inter tracking-tight">
                Midas
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#f0f0f0] leading-tight font-inter animate-text-reveal" style={{ animationDelay: '0.4s' }}>
              <span className="inline-block animate-word-slide-up" style={{ animationDelay: '0.6s' }}>
                Процессинг
              </span>{' '}
              <span className="inline-block animate-word-slide-up" style={{ animationDelay: '0.8s' }}>
                нового
              </span>{' '}
              <span className="inline-block animate-word-slide-up text-[#caa75d]" style={{ animationDelay: '1s' }}>
                поколения
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#d0d0d0] max-w-3xl mx-auto font-light animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
              Платформа, где бизнес и трейдеры работают синхронно.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
            <Button
              size="lg"
              className="group w-full sm:w-auto bg-[#caa75d] hover:bg-[#b8965a] text-[#0a0a0a] font-semibold px-10 py-5 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#caa75d]/20"
              onClick={() => window.location.href = '/trader.html'}
            >
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                Стать трейдером
              </span>
              <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group w-full sm:w-auto border-2 border-[#caa75d] text-[#caa75d] hover:bg-[#caa75d] hover:text-[#0a0a0a] font-semibold px-10 py-5 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#caa75d]/20"
              onClick={() => window.location.href = '/business.html'}
            >
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                Интеграция Midas
              </span>
              <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-16 grid grid-cols-3 gap-8 text-center opacity-90 animate-fade-in-up" style={{ animationDelay: '1.6s' }}>
            <div className="space-y-3 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-[#caa75d]">99%</div>
              <div className="text-sm text-[#c0c0c0]">Конверсия</div>
            </div>
            <div className="space-y-3 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-[#caa75d]">24/7</div>
              <div className="text-sm text-[#c0c0c0]">Поддержка</div>
            </div>
            <div className="space-y-3 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-[#caa75d]">API</div>
              <div className="text-sm text-[#c0c0c0]">Интеграция</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="pb-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between space-y-4 sm:space-y-0 animate-fade-in-up" style={{ animationDelay: '1.8s' }}>
            <div className="flex items-center space-x-6">
              <a 
                href="mailto:Midas_P2P@proton.me"
                className="flex items-center space-x-2 text-[#c0c0c0] hover:text-[#caa75d] transition-all duration-300 hover:scale-105"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">Midas_P2P@proton.me</span>
              </a>
              <a 
                href="https://t.me/Midas_p2p"
                className="flex items-center space-x-2 text-[#c0c0c0] hover:text-[#caa75d] transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="text-sm">Midas_p2p</span>
              </a>
            </div>
            <div className="text-xs text-[#888] opacity-70">
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
          animation: shooting infinite linear;
        }

        @keyframes gentle-twinkle {
          0% { opacity: 0.3; }
          100% { opacity: 0.8; }
        }

        @keyframes shooting {
          0% {
            transform: translateX(-100px) translateY(0px);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateX(calc(100vw + 100px)) translateY(80px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
