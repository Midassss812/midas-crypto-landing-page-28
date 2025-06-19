
import React from 'react';
import { Mail, Send } from "lucide-react";

const PageFooter = () => {
  return (
    <footer className="relative z-10 pb-8 text-center text-sm text-[#888] opacity-70 mt-auto px-6">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-[#c0c0c0]">
        <a href="mailto:Midas_P2P@proton.me" className="flex items-center gap-2 hover:text-[#caa75d]">
          <Mail className="w-4 h-4" />
          Midas_P2P@proton.me
        </a>
        <a href="https://t.me/Midas_p2p" className="flex items-center gap-2 hover:text-[#caa75d]">
          <Send className="w-4 h-4" />
          Midas_p2p
        </a>
      </div>
    </footer>
  );
};

export default PageFooter;
