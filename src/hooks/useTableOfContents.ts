import { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

interface TableOfContentsItem {
  id: string;
  title: string;
  element: HTMLElement;
}

export const useTableOfContents = () => {
  const [items, setItems] = useState<TableOfContentsItem[]>([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLoading, setIsLoading] = useState(false);
  const [activeItem, setActiveItem] = useState<string>('');
  const location = useLocation();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastActiveItemRef = useRef<string>('');

  // Вычисляем видимость сайдбара
  const isVisible = useMemo(() => {
    return windowWidth > 1775;
  }, [windowWidth]);

  // Оптимизированная функция установки активного элемента
  const setActiveItemOptimized = useCallback((newActiveItem: string) => {
    if (lastActiveItemRef.current !== newActiveItem) {
      lastActiveItemRef.current = newActiveItem;
      setActiveItem(newActiveItem);
    }
  }, []);

  // Эффект для отслеживания изменения маршрута
  useEffect(() => {
    // Мгновенно скрываем сайдбар при изменении маршрута
    setIsLoading(true);
    setActiveItem(''); // Сбрасываем активный элемент
    lastActiveItemRef.current = '';

    // Очищаем старые элементы при смене страницы
    setItems([]);

    // Задержка для появления нового сайдбара после загрузки контента
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Создаем Intersection Observer для отслеживания видимости элементов
  useEffect(() => {
    if (!items.length) return;

    // Очищаем предыдущий observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Создаем новый Intersection Observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const headerHeight = 80; // Высота хедера
        const offset = 100; // Дополнительный отступ

        // Находим элемент, который находится в области видимости
        let currentActive = '';
        let maxIntersectionRatio = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Вычисляем, насколько элемент находится в области видимости
            const intersectionRatio = entry.intersectionRatio;
            const elementTop = entry.boundingClientRect.top;

            // Приоритет отдаем элементам, которые находятся выше в области видимости
            // и имеют большую площадь пересечения
            if (elementTop <= headerHeight + offset && intersectionRatio > maxIntersectionRatio) {
              maxIntersectionRatio = intersectionRatio;
              currentActive = entry.target.id;
            }
          }
        });

        // Если нет пересекающихся элементов, находим ближайший к верху экрана
        if (!currentActive) {
          let minDistance = Infinity;
          entries.forEach((entry) => {
            const elementTop = entry.boundingClientRect.top;
            const distance = Math.abs(elementTop - (headerHeight + offset));

            if (distance < minDistance) {
              minDistance = distance;
              currentActive = entry.target.id;
            }
          });
        }

        if (currentActive) {
          setActiveItemOptimized(currentActive);
        }
      },
      {
        root: null, // Используем viewport
        rootMargin: `-${80 + 100}px 0px -50% 0px`, // Учитываем высоту хедера и отступ
        threshold: [0, 0.1, 0.5, 1], // Пороги пересечения
      }
    );

    // Наблюдаем за всеми элементами
    items.forEach((item) => {
      if (item.element && observerRef.current) {
        observerRef.current.observe(item.element);
      }
    });

    // Очистка при размонтировании
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [items, setActiveItemOptimized]);

  useEffect(() => {
    // Функция для поиска всех TitleBlock элементов
    const findTitleBlocks = (): TableOfContentsItem[] => {
      const titleBlocks = document.querySelectorAll('[data-title-block]');
      const items: TableOfContentsItem[] = [];

      titleBlocks.forEach((element, index) => {
        const titleElement = element.querySelector('h2');
        if (titleElement && element instanceof HTMLElement) {
          const title = titleElement.textContent || `Раздел ${index + 1}`;
          const id = `title-block-${index}`;

          // Добавляем id к элементу для прокрутки
          element.id = id;

          items.push({
            id,
            title,
            element,
          });
        }
      });

      return items;
    };

    // Функция для обновления ширины окна
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Инициализация
    const initialize = () => {
      // Увеличенная задержка для полного рендера компонентов
      setTimeout(() => {
        const foundItems = findTitleBlocks();
        setItems(foundItems);

        // Устанавливаем первый элемент как активный по умолчанию
        if (foundItems.length > 0 && !activeItem) {
          setActiveItemOptimized(foundItems[0].id);
        }
      }, 350);
    };

    // Слушатели событий
    window.addEventListener('resize', updateWindowWidth);

    // Инициализация при монтировании и при изменении маршрута
    initialize();

    // Очистка
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, [location.pathname, activeItem, setActiveItemOptimized]);

  return { items, isVisible, isLoading, activeItem };
};
