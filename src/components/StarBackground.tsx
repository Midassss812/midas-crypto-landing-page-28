import React, { useEffect, useRef, useState } from 'react';

const TOTAL_STARS = 200;
const RADIUS = 80; // радиус реакции в px

const StarBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 }); // за экраном по умолчанию
  const starsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      starsRef.current.forEach((star) => {
        if (!star) return;

        const rect = star.getBoundingClientRect();
        const dx = rect.left + rect.width / 2 - mousePos.x;
        const dy = rect.top + rect.height / 2 - mousePos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < RADIUS) {
          star.style.transform = 'scale(1.8)';
          star.style.filter = 'brightness(2) blur(1px)';
          star.style.opacity = '1';
        } else {
          star.style.transform = '';
          star.style.filter = '';
          star.style.opacity = '';
        }
      });
    }, 50); // обновление 20 раз в секунду

    return () => clearInterval(interval);
  }, [mousePos]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {[...Array(TOTAL_STARS)].map((_, i) => {
        const size = Math.random() * 1.5 + 0.5;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const opacity = Math.random() * 0.6 + 0.3;
        const duration = Math.random() * 3 + 2;

        return (
          <div
            key={i}
            ref={(el) => (starsRef.current[i] = el!)}
            className="star animate-twinkle"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${top}%`,
              opacity,
              animationDuration: `${duration}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        );
      })}

      <style>{`
        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          transition: transform 0.3s ease, filter 0.3s ease, opacity 0.3s ease;
          pointer-events: none;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        .animate-twinkle {
          animation-name: twinkle;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-direction: alternate;
        }
      `}</style>
    </div>
  );
};

export default StarBackground;
