
import React from 'react';
import { Shield, Zap, Clock, Globe, HeadphonesIcon, CheckCircle, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StarBackground from '@/components/StarBackground';
import PageFooter from '@/components/PageFooter';

const Business = () => {
  const advantages = [
    { icon: CheckCircle, title: "99% конверсии", description: "Максимальная эффективность платежей" },
    { icon: Shield, title: "Полный контроль реквизитов", description: "Управление всеми аспектами приема платежей" },
    { icon: Clock, title: "Бесперебойная работа 24/7", description: "Стабильная работа без простоев" },
    { icon: HeadphonesIcon, title: "Круглосуточная поддержка", description: "Квалифицированная техподдержка" }
  ];

  const features = [
    { icon: Zap, title: "Высокая скорость", description: "Мгновенная обработка транзакций" },
    { icon: Shield, title: "Максимальная безопасность", description: "Защищенные протоколы передачи данных" },
    { icon: Globe, title: "Широкая география", description: "Поддержка РФ, КЗ, ТЖ, УЗ" }
  ];

  const countries = ["РФ", "КЗ", "ТЖ", "УЗ"];

  return (
    <div className="min-h-screen bg-[#020202] text-[#f0f0f0] flex flex-col relative overflow-hidden">
      <StarBackground />

      {/* Logo top-left */}
      <div className="absolute top-6 left-6 z-10">
        <img src="/lovable-uploads/9f563d21-3cce-40e4-ba1d-0cf6699b56a2.png" alt="Midas King Icon" className="h-16 w-16 sm:h-20 sm:w-20 object-contain" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex-1 px-4 py-8 max-w-6xl mx-auto w-full">
        
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-16 pt-20">
          <span className="text-[#caa75d] text-4xl sm:text-5xl lg:text-6xl font-bold">Midas Business</span>
          <h1 className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold max-w-4xl mx-auto leading-tight">
            Процессинговая платформа нового поколения для вашего бизнеса
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Инфраструктура для быстрого, выгодного и безопасного приема платежей
          </p>
        </div>

        {/* How it works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#caa75d]">Как это работает</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#caa75d] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#020202] font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Клиент</h3>
              <p className="text-gray-300">Инициирует платеж</p>
            </div>
            <div className="hidden md:block text-[#caa75d] text-2xl">→</div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#caa75d] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#020202] font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Реквизит</h3>
              <p className="text-gray-300">Получает данные</p>
            </div>
            <div className="hidden md:block text-[#caa75d] text-2xl">→</div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#caa75d] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#020202] font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Платеж</h3>
              <p className="text-gray-300">Успешно выполнен</p>
            </div>
          </div>
        </section>

        {/* Key Advantages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#caa75d]">Ключевые преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="bg-[#1a1a1a] border-[#333] hover:border-[#caa75d] transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <advantage.icon className="w-8 h-8 text-[#caa75d]" />
                    <CardTitle className="text-white text-lg">{advantage.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#caa75d]">Возможности платформы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-[#1a1a1a] border-[#333] hover:border-[#caa75d] transition-colors text-center">
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-[#caa75d] mx-auto mb-4" />
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Geography */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#caa75d]">География услуг</h2>
          <div className="flex justify-center gap-4 flex-wrap">
            {countries.map((country, index) => (
              <div key={index} className="bg-[#1a1a1a] border border-[#333] rounded-lg px-6 py-4">
                <span className="text-[#caa75d] font-bold text-xl">{country}</span>
              </div>
            ))}
          </div>
        </section>

        {/* API Integration */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#caa75d]">Простая интеграция</h2>
          <Card className="bg-[#1a1a1a] border-[#333] max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-white text-center">API подключение за 3 шага</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="bg-[#caa75d] text-[#020202] rounded-full w-8 h-8 flex items-center justify-center font-bold">1</span>
                <span className="text-gray-300">Получите API ключи</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-[#caa75d] text-[#020202] rounded-full w-8 h-8 flex items-center justify-center font-bold">2</span>
                <span className="text-gray-300">Интегрируйте в вашу систему</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-[#caa75d] text-[#020202] rounded-full w-8 h-8 flex items-center justify-center font-bold">3</span>
                <span className="text-gray-300">Начните принимать платежи</span>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section className="text-center space-y-8">
          <h2 className="text-3xl font-bold text-[#caa75d]">Свяжитесь с нами</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Оставьте заявку на интеграцию и получите персональную консультацию
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="group w-full sm:w-auto bg-[#caa75d] hover:bg-[#b8965a] text-[#0a0a0a] font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#caa75d]/20 px-8 py-6 text-lg"
              onClick={() => window.open('mailto:Midas_P2P@proton.me', '_blank')}
            >
              <Mail className="mr-2" />
              Midas_P2P@proton.me
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="group w-full sm:w-auto border-2 border-[#caa75d] text-white hover:bg-[#caa75d] hover:text-[#0a0a0a] font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#caa75d]/20 px-8 py-6 text-lg"
              onClick={() => window.open('https://t.me/Midas_p2p', '_blank')}
            >
              <MessageCircle className="mr-2" />
              Telegram: Midas_p2p
            </Button>
          </div>
        </section>

      </main>

      <PageFooter />
    </div>
  );
};

export default Business;
