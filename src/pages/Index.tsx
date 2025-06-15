
import { Button } from "@/components/ui/button";
import { Crown, ArrowRight, Mail, MessageCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f0f0f0] flex flex-col relative overflow-hidden">
      {/* Animated Starry Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars-container">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="star absolute rounded-full bg-white opacity-70"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Shooting stars */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`shooting-${i}`}
            className="shooting-star absolute h-px bg-gradient-to-r from-transparent via-white to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              width: '100px',
              animationDelay: `${Math.random() * 10 + 5}s`,
              animationDuration: '1.5s'
            }}
          />
        ))}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f0f0f]/20 to-[#0f0f0f]/60" />
      </div>

      {/* Header with Logo */}
      <header className="pt-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center sm:justify-start">
            <div className="flex items-center space-x-4 animate-fade-in-up">
              <div className="relative">
                <img 
                  src="/lovable-uploads/a465ef4a-8571-45f3-bc84-589af7eed350.png" 
                  alt="Midas Logo" 
                  className="h-16 w-16 object-contain hover:scale-110 transition-transform duration-500 animate-glow"
                />
              </div>
              <span className="text-3xl font-bold text-[#f0f0f0] font-inter animate-text-shimmer">
                Midas
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-hero-entrance">
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#f0f0f0] leading-tight font-inter animate-text-reveal">
              <span className="inline-block animate-word-slide-up" style={{ animationDelay: '0.2s' }}>
                Процессинг
              </span>{' '}
              <span className="inline-block animate-word-slide-up" style={{ animationDelay: '0.4s' }}>
                нового
              </span>{' '}
              <span className="inline-block animate-word-slide-up text-[#caa75d]" style={{ animationDelay: '0.6s' }}>
                поколения
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#b0b0b0] max-w-3xl mx-auto font-light animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              Платформа, где бизнес и трейдеры работают синхронно.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <Button
              size="lg"
              className="group w-full sm:w-auto bg-[#caa75d] hover:bg-[#b8965a] text-[#0f0f0f] font-semibold px-10 py-5 text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#caa75d]/25 animate-pulse-glow"
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
              className="group w-full sm:w-auto border-2 border-[#caa75d] text-[#caa75d] hover:bg-[#caa75d] hover:text-[#0f0f0f] font-semibold px-10 py-5 text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#caa75d]/25 animate-border-glow"
              onClick={() => window.location.href = '/business.html'}
            >
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                Интеграция Midas
              </span>
              <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-16 grid grid-cols-3 gap-8 text-center opacity-80 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <div className="space-y-3 hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: '0s' }}>
              <div className="text-3xl font-bold text-[#caa75d] animate-number-count">99%</div>
              <div className="text-sm text-[#b0b0b0]">Конверсия</div>
            </div>
            <div className="space-y-3 hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="text-3xl font-bold text-[#caa75d] animate-number-count">24/7</div>
              <div className="text-sm text-[#b0b0b0]">Поддержка</div>
            </div>
            <div className="space-y-3 hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-3xl font-bold text-[#caa75d] animate-number-count">API</div>
              <div className="text-sm text-[#b0b0b0]">Интеграция</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="pb-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between space-y-4 sm:space-y-0 animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
            <div className="flex items-center space-x-6">
              <a 
                href="mailto:Midas_P2P@proton.me"
                className="flex items-center space-x-2 text-[#b0b0b0] hover:text-[#caa75d] transition-all duration-300 hover:scale-105"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">Midas_P2P@proton.me</span>
              </a>
              <a 
                href="https://t.me/Midas_p2p"
                className="flex items-center space-x-2 text-[#b0b0b0] hover:text-[#caa75d] transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="text-sm">Midas_p2p</span>
              </a>
            </div>
            <div className="text-xs text-[#666] opacity-70 animate-pulse">
              *Оплата комиссий зависит от сложности кейса
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .star {
          animation: twinkle infinite ease-in-out alternate;
        }
        
        .shooting-star {
          animation: shooting infinite linear;
        }
        
        @keyframes twinkle {
          0% { opacity: 0.3; transform: scale(1); }
          100% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes shooting {
          0% {
            transform: translateX(-100px) translateY(0px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 100px)) translateY(100px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
