
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
    const observer = new IntersectionObserver(
      (entries) => {
        let closestSection = null;
        let closestDistance = Infinity;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const rect = entry.boundingClientRect;
            const viewportCenter = window.innerHeight / 2;
            const elementCenter = rect.top + rect.height / 2;
            const distance = Math.abs(viewportCenter - elementCenter);

            if (distance < closestDistance) {
              closestDistance = distance;
              closestSection = entry.target.getAttribute('data-section');
            }
          }
        });

        if (closestSection) {
          setActiveSection(closestSection);
        }
      },
      {
        threshold: [0.1, 0.3, 0.5, 0.7, 0.9],
        rootMargin: '-30% 0px -30% 0px',
      }
    );

    // Наблюдаем за всеми зарегистрированными секциями
    const observeAll = () => {
      sectionsRef.current.forEach((element) => {
        observer.observe(element);
      });
    };

    // Запускаем наблюдение с небольшой задержкой чтобы элементы успели зарегистрироваться
    const timeoutId = setTimeout(observeAll, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return { activeSection, registerSection };
};
