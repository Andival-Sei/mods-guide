import type { FC } from 'react';
import { useRef } from 'react';
import cls from './TableOfContents.module.scss';

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

  // Плавная прокрутка к элементу с учетом высоты хедера
  const scrollToElement = (item: TableOfContentsItem) => {
    const element = item.element;
    if (!element) return;

    // Предотвращаем множественные вызовы прокрутки
    if (scrollTimeoutRef.current) {
      window.clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = window.setTimeout(() => {
      const elementTop = element.offsetTop;
      const headerHeight = 80; // Высота хедера
      const offset = 20; // Дополнительный отступ для комфортного просмотра

      // Плавная прокрутка к элементу
      window.scrollTo({
        top: elementTop - headerHeight - offset,
        behavior: 'smooth',
      });

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
        <ul className={cls.list}>
          {items.map((item) => (
            <li key={item.id} className={cls.listItem}>
              <button
                className={`${cls.link} ${activeItem === item.id ? cls.active : ''}`}
                onClick={() => scrollToElement(item)}
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
