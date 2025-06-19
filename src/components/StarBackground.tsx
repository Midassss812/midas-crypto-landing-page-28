
import React from 'react';

const StarBackground = () => {
  // Generate star parameters with improved logic
  const starParams = [...Array(6)].map((_, i) => {
    // Better distribution across all edges including bottom
    const side = Math.floor(Math.random() * 4); // 0: top, 1: left, 2: right, 3: bottom
    let startX, startY, deltaX, deltaY;
    
    if (side === 0) { // From top
      startX = Math.random() * 120 - 10; // -10% to 110%
      startY = Math.random() * 10 - 20; // -20% to -10%
      deltaX = (Math.random() * 300 + 200) * (Math.random() > 0.5 ? 1 : -1);
      deltaY = Math.random() * 500 + 400;
    } else if (side === 1) { // From left
      startX = Math.random() * 10 - 20; // -20% to -10%
      startY = Math.random() * 120 - 10; // -10% to 110%
      deltaX = Math.random() * 500 + 400;
      deltaY = (Math.random() * 300 + 200) * (Math.random() > 0.5 ? 1 : -1);
    } else if (side === 2) { // From right
      startX = Math.random() * 10 + 110; // 110% to 120%
      startY = Math.random() * 120 - 10; // -10% to 110%
      deltaX = -(Math.random() * 500 + 400);
      deltaY = (Math.random() * 300 + 200) * (Math.random() > 0.5 ? 1 : -1);
    } else { // From bottom
      startX = Math.random() * 120 - 10; // -10% to 110%
      startY = Math.random() * 10 + 110; // 110% to 120%
      deltaX = (Math.random() * 300 + 200) * (Math.random() > 0.5 ? 1 : -1);
      deltaY = -(Math.random() * 500 + 400);
    }
    
    // Calculate proper rotation based on movement direction
    const rotation = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    
    return {
      startX,
      startY,
      rotation,
      deltaX,
      deltaY,
      duration: Math.random() * 3 + 2, // 2-5 seconds (faster)
      delay: Math.random() * 15, // 0-15 seconds
      coreSize: Math.random() * 2 + 2, // 2-4px core
      tailLength: Math.random() * 20 + 20, // 20-40px tail
      brightness: Math.random() * 0.3 + 0.7 // 0.7-1.0 brightness variation
    };
  });

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <div className="stars-container">
        {/* Static twinkling stars */}
        {[...Array(200)].map((_, i) => (
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

        {/* Falling/shooting stars */}
        {starParams.map((star, i) => (
          <div
            key={`shooting-star-${i}`}
            className="shooting-star absolute"
            style={{
              left: `${star.startX}%`,
              top: `${star.startY}%`,
              transform: `rotate(${star.rotation}deg)`,
              transformOrigin: 'left center',
              animation: `shooting-star-${i} ${star.duration}s linear infinite`,
              animationDelay: `${star.delay}s`
            }}
          >
            {/* Star core (bright center) */}
            <div
              className="star-core absolute bg-white rounded-full"
              style={{
                width: `${star.coreSize}px`,
                height: `${star.coreSize}px`,
                boxShadow: `
                  0 0 ${star.coreSize * 2}px rgba(255, 255, 255, ${star.brightness}),
                  0 0 ${star.coreSize * 4}px rgba(255, 255, 220, ${star.brightness * 0.8}),
                  0 0 ${star.coreSize * 6}px rgba(255, 255, 180, ${star.brightness * 0.4})
                `,
                filter: `brightness(${star.brightness})`
              }}
            />
            {/* Star tail */}
            <div
              className="star-tail absolute bg-gradient-to-r from-white via-white/60 to-transparent"
              style={{
                width: `${star.tailLength}px`,
                height: `${star.coreSize * 0.6}px`,
                left: `-${star.tailLength}px`,
                top: `${(star.coreSize - star.coreSize * 0.6) / 2}px`,
                borderRadius: `${star.coreSize * 0.3}px`,
                boxShadow: `0 0 ${star.coreSize}px rgba(255, 255, 255, ${star.brightness * 0.3})`,
                filter: `brightness(${star.brightness}) blur(0.5px)`
              }}
            />
          </div>
        ))}
      </div>

      <style>
        {`
          .star {
            animation: twinkle 4s ease-in-out infinite alternate;
          }
          
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
          }
          
          ${starParams.map((star, i) => `
            @keyframes shooting-star-${i} {
              0% {
                transform: rotate(${star.rotation}deg) translateX(0px) translateY(0px);
                opacity: 0;
              }
              5% {
                opacity: ${star.brightness};
              }
              10% {
                opacity: ${star.brightness * 1.2};
              }
              85% {
                opacity: ${star.brightness};
              }
              100% {
                transform: rotate(${star.rotation}deg) translateX(${star.deltaX}px) translateY(${star.deltaY}px);
                opacity: 0;
              }
            }
          `).join('\n')}
        `}
      </style>
    </div>
  );
};

export default StarBackground;
