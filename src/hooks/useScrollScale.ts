
import { useEffect, useState } from 'react';

export const useScrollScale = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 800; // После 800px скролла король будет минимального размера
      const minScale = 0.6; // Минимальный размер (60% от оригинала)
      const maxScale = 1; // Максимальный размер (100% от оригинала)
      
      // Вычисляем масштаб на основе позиции скролла
      const scrollProgress = Math.min(scrollY / maxScroll, 1);
      const newScale = maxScale - (scrollProgress * (maxScale - minScale));
      
      setScale(newScale);
    };

    // Инициализируем при загрузке
    handleScroll();
    
    // Добавляем обработчик с throttling через requestAnimationFrame
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  return scale;
};
