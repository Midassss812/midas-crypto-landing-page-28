
import { useEffect, useState } from 'react';

export const useScrollScale = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 800; // Увеличил с 500px до 800px для более плавной анимации
      const minScale = 0.85; // Увеличил с 0.7 до 0.85 для менее драматичного эффекта
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
