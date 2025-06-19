
import React from 'react';
import { CreditCard, Monitor, Check, DollarSign, User } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#caa75d]">Как это работает</h2>
      
      {/* Slide Image */}
      <div className="flex justify-center mb-8">
        <img 
          src="/lovable-uploads/fc3579e1-328a-4c97-971e-77b1e8c4d58d.png" 
          alt="Как это работает схема" 
          className="max-w-full h-auto max-h-96 object-contain rounded-lg"
        />
      </div>

      {/* Icons below the image - perfectly aligned horizontally */}
      <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto overflow-x-auto">
        <div className="text-center flex-shrink-0">
          <div className="w-16 h-16 bg-[#caa75d] rounded-full flex items-center justify-center mx-auto mb-4">
            <CreditCard className="w-8 h-8 text-[#020202]" />
          </div>
          <p className="text-gray-300 text-sm whitespace-nowrap">Банковская карта</p>
        </div>
        
        <div className="hidden sm:block text-[#caa75d] text-2xl flex-shrink-0">→</div>
        
        <div className="text-center flex-shrink-0">
          <div className="w-16 h-16 bg-[#caa75d] rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-[#020202]" />
          </div>
          <p className="text-gray-300 text-sm whitespace-nowrap">Клиент запрашивает<br />реквизит</p>
        </div>
        
        <div className="hidden sm:block text-[#caa75d] text-2xl flex-shrink-0">→</div>
        
        <div className="text-center flex-shrink-0">
          <div className="w-16 h-16 bg-[#caa75d] rounded-full flex items-center justify-center mx-auto mb-4">
            <Monitor className="w-8 h-8 text-[#020202]" />
          </div>
          <p className="text-gray-300 text-sm whitespace-nowrap">Midas принимает<br />платеж</p>
        </div>
        
        <div className="hidden sm:block text-[#caa75d] text-2xl flex-shrink-0">→</div>
        
        <div className="text-center flex-shrink-0">
          <div className="w-16 h-16 bg-[#caa75d] rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-[#020202]" />
          </div>
          <p className="text-gray-300 text-sm whitespace-nowrap">Успешный<br />платеж</p>
        </div>
        
        <div className="hidden sm:block text-[#caa75d] text-2xl flex-shrink-0">→</div>
        
        <div className="text-center flex-shrink-0">
          <div className="w-16 h-16 bg-[#caa75d] rounded-full flex items-center justify-center mx-auto mb-4">
            <DollarSign className="w-8 h-8 text-[#020202]" />
          </div>
          <p className="text-gray-300 text-sm whitespace-nowrap">Доллары на<br />балансе</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
