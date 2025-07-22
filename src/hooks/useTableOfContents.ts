import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface TableOfContentsItem {
  id: string;
  title: string;
  element: HTMLElement;
}

export const useTableOfContents = () => {
  const [items, setItems] = useState<TableOfContentsItem[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

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

    // Функция для проверки видимости сайдбара
    const checkVisibility = () => {
      const windowWidth = window.innerWidth;
      setIsVisible(windowWidth > 1400);
    };

    // Инициализация
    const initialize = () => {
      // Небольшая задержка для рендера компонентов
      setTimeout(() => {
        const foundItems = findTitleBlocks();
        setItems(foundItems);
        checkVisibility();
      }, 200);
    };

    // Слушатели событий
    window.addEventListener('resize', checkVisibility);

    // Инициализация при монтировании и при изменении маршрута
    initialize();

    // Очистка
    return () => {
      window.removeEventListener('resize', checkVisibility);
    };
  }, [location.pathname]);

  return { items, isVisible };
};
