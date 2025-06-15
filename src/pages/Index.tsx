import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Send } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#020202] text-[#f0f0f0] flex flex-col relative overflow-hidden">
      {/* Stars Background */}
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
                opacity: Math.random() * 0.6 + 0.3,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>

        {/* Shooting Stars */}
        {[...Array(30)].map((_, i) => {
          const direction = Math.random() * 360;
          const startX = Math.random() * 100;
          const startY = Math.random() * 100;
          const length = Math.random() * 100 + 80;

          return (
            <div
              key={`shooting-${i}`}
              className="shooting-star absolute h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-60"
              style={{
                left: `${startX}%`,
                top: `${startY}%`,
                width: `${length}px`,
                animationDelay: `${Math.random() * 15 + 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                transform: `rotate(${direction}deg)`
              }}
            />
          );
        })}

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020202]/30 to-[#020202]/90" />
      </div>

      {/* Top Left Logo */}
      <div className="absolute top-5 left-5 z-10">
        <img
          src="/lovable-uploads/king_head_no_bg.png"
          alt="Midas King Icon"
          className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
        />
      </div>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center justify-center gap-6">
              <img
                src="/lovable-uploads/a465ef4a-8571-45f3-bc84-589af7eed350.png"
                alt="Midas Head"
                className="h-24 w-24 sm:h-32 sm:w-32 object-contain"
              />
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#caa75d]">Midas</h1>
            </div>
            <p className="text-2xl sm:text-3xl text-white font-medium">
              Платформа, где бизнес и трейдеры работают синхронно.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
            <Button
              size="lg"
              className="bg-[#caa75d] hover:bg-[#b8965a] text-black font-bold px-10 py-6 text-xl shadow-lg hover:scale-105 transition"
              onClick={() => (window.location.href = "/trader.html")}
            >
              Стать трейдером
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-[#caa75d] text-[#caa75d] hover:bg-[#caa75d] hover:text-black font-bold px-10 py-6 text-xl hover:scale-105 transition border-2"
              onClick={() => (window.location.href = "/business.html")}
            >
              Интеграция Midas
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-8 pt-10 text-center">
            {[
              { title: "99%", subtitle: "Конверсия" },
              { title: "24/7", subtitle: "Поддержка" },
              { title: "API", subtitle: "Интеграция" }
            ].map((item, i) => (
              <div key={i} className="space-y-2 hover:scale-105 transition-transform">
                <div className="text-4xl sm:text-5xl font-bold text-[#caa75d]">{item.title}</div>
                <div className="text-md text-white">{item.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="z-10 pb-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-sm text-[#ccc] space-y-3 sm:space-y-0">
          <div className="flex items-center space-x-5">
            <a href="mailto:Midas_P2P@proton.me" className="flex items-center hover:text-[#caa75d] transition">
              <Mail className="mr-2 h-4 w-4" />
              Midas_P2P@proton.me
            </a>
            <a href="https://t.me/Midas_p2p" className="flex items-center hover:text-[#caa75d] transition">
              <Send className="mr-2 h-4 w-4" />
              Midas_p2p
            </a>
          </div>
          <div>*Оплата комиссий зависит от сложности кейса</div>
        </div>
      </footer>

      <style>{`
        .star {
          animation: gentle-twinkle infinite ease-in-out alternate;
        }

        .shooting-star {
          animation: shooting linear infinite;
        }

        @keyframes gentle-twinkle {
          0% { opacity: 0.3; }
          100% { opacity: 0.9; }
        }

        @keyframes shooting {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateX(500px) translateY(200px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
