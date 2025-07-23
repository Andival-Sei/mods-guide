import type { FC } from 'react';
import { useRef, useEffect, useCallback } from 'react';
import cls from './TableOfContents.module.scss';
import { getHeaderHeight } from '../../utilities/headerUtils.ts';

interface TableOfContentsItem {
  id: string;
  title: string;
  element: HTMLElement;
}

interface TableOfContentsProps {
  items: TableOfContentsItem[];
  isVisible: boolean;
  isLoading: boolean;
  activeItem: string;
}

const TableOfContents: FC<TableOfContentsProps> = ({ items, isVisible, isLoading, activeItem }) => {
  const scrollTimeoutRef = useRef<number | null>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const lastActiveItemRef = useRef<string>('');

  // Оптимизированная функция для обновления позиции синей линии
  const updateLinePosition = useCallback(() => {
    if (!activeItem || !items.length || !listRef.current) return;

    // Предотвращаем лишние вычисления
    if (lastActiveItemRef.current === activeItem) return;

    lastActiveItemRef.current = activeItem;

    const activeIndex = items.findIndex((item) => item.id === activeItem);
    if (activeIndex === -1) return;

    // Находим активный элемент в DOM для точного вычисления позиции
    const activeButton = listRef.current.querySelector(`[aria-current="location"]`) as HTMLElement;
    if (activeButton) {
      const buttonRect = activeButton.getBoundingClientRect();
      const listRect = listRef.current.getBoundingClientRect();

      // Вычисляем позицию относительно списка и центрируем линию
      const relativeTop = buttonRect.top - listRect.top;
      const buttonHeight = buttonRect.height;
      const lineHeight = 32; // Высота линии

      // Центрируем линию по вертикали относительно кнопки
      const centeredPosition = relativeTop + (buttonHeight - lineHeight) / 2;

      // Применяем CSS-переменную для плавного перемещения
      listRef.current.style.setProperty('--line-position', `${centeredPosition}px`);
    } else {
      // Fallback: используем примерную высоту элемента
      const itemHeight = 40; // Примерная высота элемента (padding + margin + content)
      const lineHeight = 32; // Высота линии
      const linePosition = activeIndex * itemHeight + (itemHeight - lineHeight) / 2;
      listRef.current.style.setProperty('--line-position', `${linePosition}px`);
    }
  }, [activeItem, items]);

  // Вычисляем позицию синей линии на основе активного элемента
  useEffect(() => {
    updateLinePosition();
  }, [updateLinePosition]);

  // Плавная прокрутка к элементу с учетом высоты хедера
  const scrollToElement = (item: TableOfContentsItem) => {
    const element = item.element;
    if (!element) return;

    // Предотвращаем множественные вызовы прокрутки
    if (scrollTimeoutRef.current) {
      window.clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = window.setTimeout(() => {
      // Ищем основной контейнер для скролла
      const mainWrapper = document.querySelector('[data-main-wrapper]') as HTMLElement;

      if (mainWrapper) {
        // Используем утилиту для получения высоты хедера
        const headerHeight = getHeaderHeight();
        const offset = 30; // Дополнительный отступ, чтобы заголовок был хорошо виден

        // Получаем позицию элемента относительно контейнера
        const elementRect = element.getBoundingClientRect();
        const containerRect = mainWrapper.getBoundingClientRect();

        // Вычисляем позицию элемента внутри скроллируемого контейнера
        const elementTop = elementRect.top - containerRect.top + mainWrapper.scrollTop;

        // Целевая позиция скролла с учетом высоты хедера и дополнительного отступа
        const targetScrollTop = elementTop - headerHeight - offset;

        mainWrapper.scrollTo({
          top: Math.max(0, targetScrollTop), // Не позволяем скроллить выше начала
          behavior: 'smooth',
        });
      } else {
        // Fallback: используем старый метод, если не можем найти контейнер
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

        // Корректируем позицию с учетом хедера
        setTimeout(() => {
          window.scrollBy(0, -(getHeaderHeight() + 20));
        }, 100);
      }

      scrollTimeoutRef.current = null;
    }, 100); // Небольшая задержка для предотвращения спама
  };

  if (!isVisible || !items.length) {
    return null;
  }

  return (
    <nav className={`${cls.tableOfContents} ${isLoading ? cls.loading : ''}`} data-sidebar>
      <div className={cls.container}>
        <h3 className={cls.title}>На этой странице</h3>
        <ul ref={listRef} className={cls.list}>
          {items.map((item) => (
            <li key={item.id} className={cls.listItem}>
              <button
                className={`${cls.link} ${activeItem === item.id ? cls.active : ''}`}
                onClick={(e) => {
                  scrollToElement(item);
                  // Убираем фокус после клика, чтобы не было выделения
                  e.currentTarget.blur();
                }}
                type="button"
                aria-current={activeItem === item.id ? 'location' : undefined}
                aria-label={`Перейти к разделу: ${item.title}`}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default TableOfContents;
