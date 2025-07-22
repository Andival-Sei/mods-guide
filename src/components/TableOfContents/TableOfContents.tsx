import type { FC } from 'react';
import { useEffect, useState } from 'react';
import cls from './TableOfContents.module.scss';

interface TableOfContentsItem {
  id: string;
  title: string;
  element: HTMLElement;
}

interface TableOfContentsProps {
  items: TableOfContentsItem[];
  isVisible: boolean;
}

const TableOfContents: FC<TableOfContentsProps> = ({ items, isVisible }) => {
  const [activeItem, setActiveItem] = useState<string>('');

  // Отслеживаем активный элемент при прокрутке
  useEffect(() => {
    if (!items.length) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const headerHeight = 80;
      const offset = 100; // Отступ для определения активного элемента

      let currentActive = '';

      for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i];
        const elementTop = item.element.offsetTop;

        if (scrollTop + headerHeight + offset >= elementTop) {
          currentActive = item.id;
          break;
        }
      }

      setActiveItem(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Вызываем сразу для установки начального состояния

    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  // Плавная прокрутка к элементу
  const scrollToElement = (item: TableOfContentsItem) => {
    const element = item.element;
    const elementTop = element.offsetTop;
    const headerHeight = 80; // Примерная высота хедера
    const offset = 20; // Дополнительный отступ

    window.scrollTo({
      top: elementTop - headerHeight - offset,
      behavior: 'smooth',
    });
  };

  if (!isVisible || !items.length) {
    return null;
  }

  return (
    <nav className={cls.tableOfContents}>
      <div className={cls.container}>
        <h3 className={cls.title}>На этой странице</h3>
        <ul className={cls.list}>
          {items.map((item) => (
            <li key={item.id} className={cls.listItem}>
              <button
                className={`${cls.link} ${activeItem === item.id ? cls.active : ''}`}
                onClick={() => scrollToElement(item)}
                type="button"
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
