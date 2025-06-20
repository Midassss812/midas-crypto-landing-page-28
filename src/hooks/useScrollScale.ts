
import { useEffect, useState } from 'react';

export const useScrollScale = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 500; // Уменьшил с 800px до 500px для более быстрого срабатывания
      const minScale = 0.7; // Изменил с 0.3 до 0.7 для менее драматичного эффекта
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
