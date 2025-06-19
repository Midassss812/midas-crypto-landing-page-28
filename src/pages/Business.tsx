
import React from 'react';
import { Shield, Zap, Clock, Globe, HeadphonesIcon, CheckCircle, Mail, MessageCircle, CreditCard, Monitor, Check, DollarSign } from "lucide-react";
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

  const geographyData = [
    { country: "RF", percentage: "80%" },
    { country: "KZ", percentage: "35%" },
    { country: "TJ", percentage: "20%" },
    { country: "UZ", percentage: "20%" }
  ];

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
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16 pt-20">
          <div className="lg:w-1/2 text-center lg:text-left space-y-6">
            <span className="text-[#caa75d] text-4xl sm:text-5xl lg:text-6xl font-bold">Midas</span>
            <h1 className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold leading-tight">
              Процессинговая платформа нового поколения
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl">
              Инфраструктура для бизнеса, которому важно быстро, выгодно, безопасно принимать оплату от клиентов
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img src="/lovable-uploads/f4d21867-b8f3-41d3-85ca-447df0e036a2.png" alt="Midas King" className="max-w-full h-auto max-h-96 object-contain" />
          </div>
        </div>

        {/* How it works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#caa75d]">Как это работает</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#caa75d] rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-[#020202]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Клиент</h3>
              <p className="text-gray-300">Запрашивает реквизит</p>
            </div>
            <div className="hidden md:block text-[#caa75d] text-2xl">→</div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#caa75d] rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-[#020202]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Midas</h3>
              <p className="text-gray-300">Принимает платеж</p>
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

        {/* Geography Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#caa75d]">География оказания услуг</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {geographyData.map((item, index) => (
              <Card key={index} className="bg-[#1a1a1a] border-[#333] hover:border-[#caa75d] transition-colors text-center">
                <CardContent className="p-6">
                  <div className="text-[#caa75d] font-bold text-2xl mb-2">{item.country}</div>
                  <div className="text-white text-xl font-semibold">{item.percentage}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* API Integration */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#caa75d]">API интеграция</h2>
          
          {/* API Flow */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-5xl mx-auto mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#caa75d] rounded-full flex items-center justify-center mx-auto mb-2">
                  <CreditCard className="w-8 h-8 text-[#020202]" />
                </div>
                <span className="text-sm text-gray-300">Клиент</span>
              </div>
              <div className="hidden md:block text-[#caa75d]">→</div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#caa75d] rounded-full flex items-center justify-center mx-auto mb-2">
                  <DollarSign className="w-8 h-8 text-[#020202]" />
                </div>
                <span className="text-sm text-gray-300">Пополнить</span>
              </div>
              <div className="hidden md:block text-[#caa75d]">→</div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#caa75d] rounded-full flex items-center justify-center mx-auto mb-2">
                  <Monitor className="w-8 h-8 text-[#020202]" />
                </div>
                <span className="text-sm text-gray-300">API Реквизиты</span>
              </div>
              <div className="hidden md:block text-[#caa75d]">→</div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#caa75d] rounded-full flex items-center justify-center mx-auto mb-2">
                  <Globe className="w-8 h-8 text-[#020202]" />
                </div>
                <span className="text-sm text-gray-300">Баланс</span>
              </div>
              <div className="hidden md:block text-[#caa75d]">→</div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#caa75d] rounded-full flex items-center justify-center mx-auto mb-2">
                  <Check className="w-8 h-8 text-[#020202]" />
                </div>
                <span className="text-sm text-gray-300">Успешно</span>
              </div>
            </div>
          </div>

          {/* Integration Steps */}
          <Card className="bg-[#1a1a1a] border-[#333] max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-white text-center">3 шага до запуска платежей</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="bg-[#caa75d] text-[#020202] rounded-full w-8 h-8 flex items-center justify-center font-bold">1</span>
                <span className="text-gray-300">Заявка</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-[#caa75d] text-[#020202] rounded-full w-8 h-8 flex items-center justify-center font-bold">2</span>
                <span className="text-gray-300">Онбординг</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-[#caa75d] text-[#020202] rounded-full w-8 h-8 flex items-center justify-center font-bold">3</span>
                <span className="text-gray-300">Запуск платежей</span>
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
          
          <p className="text-sm text-gray-400 italic mt-4">
            *Оплата комиссии зависит от сложности кейса
          </p>
        </section>

      </main>

      <PageFooter />
    </div>
  );
};

export default Business;
