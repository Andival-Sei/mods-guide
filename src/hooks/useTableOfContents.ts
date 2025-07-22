import { useEffect, useState, useMemo } from 'react';
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
  const location = useLocation();

  // Вычисляем видимость сайдбара
  const isVisible = useMemo(() => {
    return windowWidth > 1775;
  }, [windowWidth]);

    // Эффект для отслеживания изменения маршрута
  useEffect(() => {
    // Мгновенно скрываем сайдбар при изменении маршрута
    setIsLoading(true);
    
    // Задержка для появления нового сайдбара после загрузки контента
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [location.pathname]);

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
  }, [location.pathname]);

  return { items, isVisible, isLoading };
};
