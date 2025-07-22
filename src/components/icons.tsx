import type { CSSProperties } from 'react';

// Базовый интерфейс для всех иконок
interface IconBaseProps {
  className?: string;
  style?: CSSProperties;
}

// Интерфейс для иконки навигационной стрелки
interface ArrowIconProps extends IconBaseProps {
  direction?: 'left' | 'right';
}

// Иконка стрелки для навигационных кнопок
export const ArrowIcon = ({ className, style }: ArrowIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ ...style }}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M15.17 6a30.23 30.23 0 0 1 5.62 5.406c.14.174.21.384.21.594m-5.83 6a30.232 30.232 0 0 0 5.62-5.406A.949.949 0 0 0 21 12m0 0H3"></path>
    </svg>
  );
};

// Иконка стрелки для кнопки "Начать" на главной странице
export const ChevronIcon = ({ className, style }: IconBaseProps) => {
  return (
    <svg
      className={className}
      style={style}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" />
    </svg>
  );
};

// Иконка стрелки для дропдаунов
export const DropdownArrowIcon = ({ className, style }: IconBaseProps) => {
  return (
    <svg
      className={className}
      style={style}
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="6,9 12,15 18,9"></polyline>
    </svg>
  );
};
