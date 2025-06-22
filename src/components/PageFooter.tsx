
import React from 'react';
import { Mail, Send, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PageFooter = () => {
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

  const handleTelegramClick = () => {
    window.open('https://t.me/Midas_p2p', '_blank');
  };

  return (
    <footer className="relative z-10 pb-8 text-center text-sm text-[#888] opacity-70 mt-auto px-6 pointer-events-auto">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-[#c0c0c0]">
        <button 
          onClick={copyEmail}
          className="flex items-center gap-2 hover:text-[#caa75d] transition-colors cursor-pointer"
        >
          <Copy className="w-4 h-4" />
          Midas_P2P@proton.me
        </button>
        <button 
          onClick={handleTelegramClick}
          className="flex items-center gap-2 hover:text-[#caa75d] transition-colors cursor-pointer"
        >
          <Send className="w-4 h-4" />
          Midas_p2p
        </button>
      </div>
    </footer>
  );
};

export default PageFooter;
