import React, { useEffect, useState } from 'react';

const TOTAL_STARS = 120;
const SHOOTING_STAR_INTERVAL = 8000; // Каждые ~8 секунд одна падающая звезда

const StarBackground = () => {
  const [shootingStars, setShootingStars] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const startX = Math.random() * 100;
      const startY = Math.random() * 30; // Верхняя треть экрана
      const rotation = Math.random() * 20 - 10; // -10 to 10 градусов

      setShootingStars((prev) => [
        ...prev,
        {
          id: Date.now(),
          startX,
          startY,
          rotation,
        },
      ]);

      // Удаляем через 1.5s
      setTimeout(() => {
        setShootingStars((prev) => prev.slice(1));
      }, 1500);
    }, SHOOTING_STAR_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {/* Static stars */}
      {[...Array(TOTAL_STARS)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full animate-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 1.5 + 0.5}px`,
            height: `${Math.random() * 1.5 + 0.5}px`,
            opacity: Math.random() * 0.6 + 0.3,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className="absolute shooting-star"
          style={{
            top: `${star.startY}%`,
            left: `${star.startX}%`,
            transform: `rotate(${star.rotation}deg)`,
          }}
        >
          <div className="star-core" />
          <div className="star-tail" />
        </div>
      ))}

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .animate-twinkle {
          animation: twinkle ease-in-out infinite alternate;
        }

        .shooting-star {
          width: 100px;
          height: 2px;
          background: linear-gradient(to right, white, rgba(255,255,255,0));
          animation: fall 1.5s linear forwards;
          opacity: 0.8;
          filter: blur(0.5px);
        }

        @keyframes fall {
          0% {
            transform: translate(0, 0) rotate(var(--angle, 0deg));
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translate(200px, 100px) rotate(var(--angle, 0deg));
            opacity: 0;
          }
        }

        .star-core {
          width: 3px;
          height: 3px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 6px white;
          position: absolute;
          top: -0.5px;
          left: 0;
        }

        .star-tail {
          width: 100px;
          height: 2px;
          background: linear-gradient(to right, white, rgba(255, 255, 255, 0));
          position: absolute;
          top: 0;
          left: 0;
        }
      `}</style>
    </div>
  );
};

export default StarBackground;
