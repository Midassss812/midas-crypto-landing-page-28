
import { Button } from "@/components/ui/button";
import { Crown, ArrowRight, Mail, MessageCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f0f0f0] flex flex-col">
      {/* Header with Logo */}
      <header className="pt-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center sm:justify-start">
            <div className="flex items-center space-x-3">
              <Crown className="h-8 w-8 text-[#caa75d]" />
              <span className="text-2xl font-bold text-[#f0f0f0] font-inter">Midas</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f0f0f0] leading-tight font-inter">
              Процессинг нового поколения
            </h1>
            <p className="text-xl sm:text-2xl text-[#b0b0b0] max-w-3xl mx-auto font-light">
              Платформа, где бизнес и трейдеры работают синхронно.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-[#caa75d] hover:bg-[#b8965a] text-[#0f0f0f] font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => window.location.href = '/trader.html'}
            >
              <span>Стать трейдером</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-[#caa75d] text-[#caa75d] hover:bg-[#caa75d] hover:text-[#0f0f0f] font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => window.location.href = '/business.html'}
            >
              <span>Интеграция Midas</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 grid grid-cols-3 gap-8 text-center opacity-80">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-[#caa75d]">99%</div>
              <div className="text-sm text-[#b0b0b0]">Конверсия</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-[#caa75d]">24/7</div>
              <div className="text-sm text-[#b0b0b0]">Поддержка</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-[#caa75d]">API</div>
              <div className="text-sm text-[#b0b0b0]">Интеграция</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-6">
              <a 
                href="mailto:Midas_P2P@proton.me"
                className="flex items-center space-x-2 text-[#b0b0b0] hover:text-[#caa75d] transition-colors duration-300"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">Midas_P2P@proton.me</span>
              </a>
              <a 
                href="https://t.me/Midas_p2p"
                className="flex items-center space-x-2 text-[#b0b0b0] hover:text-[#caa75d] transition-colors duration-300"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="text-sm">Midas_p2p</span>
              </a>
            </div>
            <div className="text-xs text-[#666] opacity-70">
              *Оплата комиссий зависит от сложности кейса
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
