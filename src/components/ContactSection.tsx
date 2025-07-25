
import React from 'react';
import { Mail, MessageCircle, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('Midas_P2P@proton.me');
      toast({
        title: "Email адрес скопирован!",
        description: "Midas_P2P@proton.me скопирован в буфер обмена",
      });
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = 'Midas_P2P@proton.me';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      toast({
        title: "Email адрес скопирован!",
        description: "Midas_P2P@proton.me скопирован в буфер обмена",
      });
    }
  };

  return (
    <section className="text-center space-y-8">
      <h2 className="text-3xl font-bold text-[#caa75d]">Свяжитесь с нами</h2>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        Оставьте заявку на интеграцию и получите персональную консультацию
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <Button 
          size="lg" 
          className="group w-full sm:w-auto bg-[#caa75d] hover:bg-[#b8965a] text-[#0a0a0a] font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#caa75d]/20 px-8 py-6 text-lg"
          onClick={copyEmail}
        >
          <Copy className="mr-2" />
          Midas_P2P@proton.me
        </Button>
        <Button 
          size="lg" 
          className="group w-full sm:w-auto bg-[#caa75d] hover:bg-[#b8965a] text-[#0a0a0a] font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#caa75d]/20 px-8 py-6 text-lg"
          onClick={() => window.open('https://t.me/Midas_p2p', '_blank')}
        >
          <MessageCircle className="mr-2" />
          Telegram: Midas_p2p
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;
