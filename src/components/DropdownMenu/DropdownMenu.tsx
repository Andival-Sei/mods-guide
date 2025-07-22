import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { DropdownArrowIcon } from '../icons';
import cls from './DropdownMenu.module.scss';

interface DropdownMenuProps {
  label: string;
  items: Array<{
    to: string;
    label: string;
  }>;
}

const DropdownMenu = ({ label, items }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  // Закрываем дропдаун при клике вне его
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      // Очищаем таймаут при размонтировании компонента
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Обработка клавиатуры для доступности
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case 'Escape':
          setIsOpen(false);
          break;
        case 'ArrowDown':
          event.preventDefault();
          // Фокус на первый элемент меню
          const firstItem = dropdownRef.current?.querySelector('a') as HTMLElement;
          firstItem?.focus();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleMouseEnter = () => {
    // Очищаем существующий таймаут
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // Устанавливаем таймаут для закрытия меню, давая пользователю время переместиться к меню
    timeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
    }, 300); // 300ms задержка перед закрытием
  };

  const handleToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleToggleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggleClick();
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      setIsOpen(true);
      // Фокус на первый элемент меню
      setTimeout(() => {
        const firstItem = dropdownRef.current?.querySelector('a') as HTMLElement;
        firstItem?.focus();
      }, 100);
    }
  };

  return (
    <div
      className={cls.dropdown}
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`${cls.dropdownToggle} ${isOpen ? cls.active : ''}`}
        onClick={handleToggleClick}
        onKeyDown={handleToggleKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={`${label} - нажмите для открытия меню`}
      >
        {label}
        <DropdownArrowIcon className={`${cls.dropdownArrow} ${isOpen ? cls.open : ''}`} />
      </button>

      <div
        className={`${cls.dropdownMenu} ${isOpen ? cls.visible : ''}`}
        role="menu"
        aria-label={`Подменю ${label}`}
      >
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className={cls.dropdownItem}
            role="menuitem"
            tabIndex={isOpen ? 0 : -1}
            onKeyDown={(event) => {
              if (event.key === 'ArrowDown') {
                event.preventDefault();
                const nextItem = event.currentTarget.nextElementSibling as HTMLElement;
                nextItem?.focus();
              } else if (event.key === 'ArrowUp') {
                event.preventDefault();
                const prevItem = event.currentTarget.previousElementSibling as HTMLElement;
                if (prevItem) {
                  prevItem.focus();
                } else {
                  // Возвращаемся к кнопке
                  const toggleButton = dropdownRef.current?.querySelector('button') as HTMLElement;
                  toggleButton?.focus();
                }
              } else if (event.key === 'Escape') {
                setIsOpen(false);
                const toggleButton = dropdownRef.current?.querySelector('button') as HTMLElement;
                toggleButton?.focus();
              }
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
