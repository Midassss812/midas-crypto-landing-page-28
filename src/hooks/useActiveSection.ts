
import { useEffect, useRef, useState } from 'react';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sectionsRef = useRef<Map<string, HTMLDivElement>>(new Map());

  const registerSection = (id: string, element: HTMLDivElement | null) => {
    if (element) {
      sectionsRef.current.set(id, element);
    } else {
      sectionsRef.current.delete(id);
    }
  };

  useEffect(() => {
    const findClosestToCenter = () => {
      const viewportCenter = window.innerHeight / 2;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Проверяем, находимся ли мы в самом низу страницы (в пределах 100px от конца)
      const isAtBottom = scrollY + windowHeight >= documentHeight - 100;
      
      console.log(`Scroll position: ${scrollY}, isAtBottom: ${isAtBottom}`);

      let closestSection = null;
      let closestDistance = Infinity;
      let lastVisibleSection = null;

      sectionsRef.current.forEach((element, id) => {
        const rect = element.getBoundingClientRect();
        
        // Проверяем, что элемент хотя бы частично видим
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          lastVisibleSection = id;
          
          const elementCenter = rect.top + rect.height / 2;
          const distance = Math.abs(viewportCenter - elementCenter);
          
          console.log(`Section ${id}: top=${rect.top.toFixed(0)}, center=${elementCenter.toFixed(0)}, distance=${distance.toFixed(0)}`);
          
          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = id;
          }
        }
      });

      // Если мы в самом низу страницы, активируем последний видимый блок
      if (isAtBottom && lastVisibleSection) {
        closestSection = lastVisibleSection;
        console.log(`At bottom of page, activating last visible section: ${lastVisibleSection}`);
      }

      if (closestSection && closestSection !== activeSection) {
        console.log(`Setting active section to: ${closestSection}`);
        setActiveSection(closestSection);
      }
    };

    // Используем scroll event вместо IntersectionObserver для более точного контроля
    const handleScroll = () => {
      requestAnimationFrame(findClosestToCenter);
    };

    // Запускаем первоначальную проверку
    const timeoutId = setTimeout(findClosestToCenter, 100);
    
    // Добавляем обработчик скролла
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [activeSection]);

  return { activeSection, registerSection };
};
