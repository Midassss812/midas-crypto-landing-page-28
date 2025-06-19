import React from 'react';
import { Shield, Zap, Clock, Globe, HeadphonesIcon, CheckCircle, Mail, MessageCircle, CreditCard, Monitor, Check, DollarSign, FileText, User } from "lucide-react";
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

  const integrationSteps = [
    "Свяжитесь с нами и оставьте заявку на интеграцию",
    "Пройдите онбординг и получите доступ к кабинету и API", 
    "Запускайте прием платежей в тот же день"
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

        {/* How it works - Updated according to slide 2 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#caa75d]">Как это работает</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#caa75d] rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-[#020202]" />
              </div>
              <p className="text-gray-300 text-sm">Банковская карта</p>
            </div>
            <div className="hidden md:block text-[#caa75d] text-2xl">→</div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#caa75d] rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-[#020202]" />
              </div>
              <p className="text-gray-300 text-sm">Клиент запрашивает<br />реквизит</p>
            </div>
            <div className="hidden md:block text-[#caa75d] text-2xl">→</div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#caa75d] rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-[#020202]" />
              </div>
              <p className="text-gray-300 text-sm">Midas принимает<br />платеж</p>
            </div>
            <div className="hidden md:block text-[#caa75d] text-2xl">→</div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#caa75d] rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-[#020202]" />
              </div>
              <p className="text-gray-300 text-sm">Успешный<br />платеж</p>
            </div>
            <div className="hidden md:block text-[#caa75d] text-2xl">→</div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#caa75d] rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-[#020202]" />
              </div>
              <p className="text-gray-300 text-sm">Доллары на<br />балансе</p>
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

        {/* API Integration - Updated according to slide 1 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#caa75d] uppercase tracking-wider">Интеграция по API</h2>
          
          {/* API Flow - Updated according to slide 1 */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-6xl mx-auto mb-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#caa75d] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <User className="w-10 h-10 text-[#020202]" />
                </div>
                <span className="text-sm text-gray-300 font-semibold">КЛИЕНТ</span>
              </div>
              <div className="hidden md:block text-[#caa75d] text-3xl">→</div>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#caa75d] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="w-10 h-10 text-[#020202]" />
                </div>
                <span className="text-sm text-gray-300 font-semibold">ПОПОЛНИТЬ</span>
              </div>
              <div className="hidden md:block text-[#caa75d] text-3xl">→</div>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#caa75d] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-10 h-10 text-[#020202]" />
                </div>
                <span className="text-sm text-gray-300 font-semibold">API<br />РЕКВИЗИТЫ</span>
              </div>
              <div className="hidden md:block text-[#caa75d] text-3xl">→</div>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#caa75d] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-10 h-10 text-[#020202]" />
                </div>
                <span className="text-sm text-gray-300 font-semibold">БАЛАНС</span>
              </div>
              <div className="hidden md:block text-[#caa75d] text-3xl">→</div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Check className="w-10 h-10 text-white" />
                </div>
                <span className="text-sm text-gray-300 font-semibold">УСПЕШНО</span>
              </div>
            </div>
          </div>

          {/* Integration Steps - Updated according to slide 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {integrationSteps.map((step, index) => (
              <Card key={index} className="bg-[#1a1a1a] border-[#333] hover:border-[#caa75d] transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="bg-[#caa75d] text-[#020202] rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {index + 1}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{step}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section - Keep unchanged as requested */}
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
