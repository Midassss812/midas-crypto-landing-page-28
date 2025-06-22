
import React from 'react';

const Header = () => {
  const handleLoginClick = () => {
    // TODO: Implement login functionality
    console.log('Login clicked');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#020202]/95 to-[#1a1a1a]/95 backdrop-blur-md border-b border-[#333]/30">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo section */}
        <div className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/2317caf2-f162-4cd9-a3ce-14e04ba60d55.png" 
            alt="Midas Logo" 
            className="h-10 w-10 object-contain"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-[#caa75d] to-[#d4b668] bg-clip-text text-transparent">
            Midas
          </span>
        </div>

        {/* Login button */}
        <button
          onClick={handleLoginClick}
          className="bg-gradient-to-r from-[#caa75d]/80 to-[#d4b668]/70 border border-[#caa75d] rounded-lg px-6 py-2 text-black font-semibold transition-all duration-300 hover:from-[#caa75d] hover:to-[#d4b668] hover:border-[#d4b668] hover:shadow-lg hover:shadow-[#caa75d]/30 active:scale-[0.98] group"
        >
          <span className="transition-colors duration-300 group-hover:text-[#1a1a1a]">
            Вход
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
