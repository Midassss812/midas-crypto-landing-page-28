
import React from 'react';

const StarBackground = () => {
  // Generate star parameters once to sync between elements and keyframes
  const starParams = [...Array(4)].map((_, i) => {
    const side = Math.floor(Math.random() * 3); // 0: top, 1: left, 2: right
    let startX, startY, rotation, deltaX, deltaY;
    
    if (side === 0) { // From top
      startX = Math.random() * 120 - 10;
      startY = Math.random() * 20 - 30;
      rotation = Math.random() * 30 + 30; // 30-60 degrees
      deltaX = (Math.random() * 200 + 150) * (Math.random() > 0.5 ? 1 : -1);
      deltaY = Math.random() * 400 + 300;
    } else if (side === 1) { // From left
      startX = Math.random() * 20 - 30;
      startY = Math.random() * 80 + 10;
      rotation = Math.random() * 45 + 10; // 10-55 degrees
      deltaX = Math.random() * 400 + 300;
      deltaY = Math.random() * 200 + 100;
    } else { // From right
      startX = Math.random() * 20 + 110;
      startY = Math.random() * 80 + 10;
      rotation = Math.random() * 45 + 125; // 125-170 degrees
      deltaX = -(Math.random() * 400 + 300);
      deltaY = Math.random() * 200 + 100;
    }
    
    return {
      startX,
      startY,
      rotation,
      deltaX,
      deltaY,
      duration: Math.random() * 4 + 3, // 3-7 seconds
      delay: Math.random() * 20, // 0-20 seconds for much rarer appearance
      width: Math.random() * 60 + 80,
      height: Math.random() * 1 + 1.5
    };
  });

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <div className="stars-container">
        {[...Array(300)].map((_, i) => (
          <div 
            key={i} 
            className="star absolute rounded-full bg-white" 
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 0.5}px`,
              height: `${Math.random() * 2 + 0.5}px`,
              opacity: Math.random() * 0.8 + 0.2,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 3}s`
            }} 
          />
        ))}

        {starParams.map((star, i) => (
          <div 
            key={`falling-star-${i}`} 
            className="falling-star absolute bg-gradient-to-r from-transparent via-white to-transparent opacity-80" 
            style={{
              left: `${star.startX}%`,
              top: `${star.startY}%`,
              width: `${star.width}px`,
              height: `${star.height}px`,
              transform: `rotate(${star.rotation}deg)`,
              transformOrigin: 'left center',
              animation: `falling-star-${i} ${star.duration}s linear infinite`,
              animationDelay: `${star.delay}s`
            }} 
          />
        ))}
      </div>

      <style>
        {starParams.map((star, i) => `
          @keyframes falling-star-${i} {
            0% {
              transform: rotate(${star.rotation}deg) translateX(0px) translateY(0px);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: rotate(${star.rotation}deg) translateX(${star.deltaX}px) translateY(${star.deltaY}px);
              opacity: 0;
            }
          }
        `).join("\n")}
      </style>
    </div>
  );
};

export default StarBackground;
