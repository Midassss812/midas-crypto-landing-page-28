import React from 'react';

const TOTAL_STARS = 200;

const StarBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {[...Array(TOTAL_STARS)].map((_, i) => {
        const size = Math.random() * 1.5 + 0.5;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const opacity = Math.random() * 0.6 + 0.3;
        const duration = Math.random() * 3 + 2;

        return (
          <div
            key={i}
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
          pointer-events: auto;
        }

        .star:hover {
          transform: scale(1.8);
          filter: brightness(2);
          opacity: 1;
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
