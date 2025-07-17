import React from 'react';
import styles from './CustomCheckbox.module.scss';

export interface CustomCheckboxProps {
  /** Текстовая метка чекбокса */
  label: string;
  /** Состояние чекбокса (отмечен/не отмечен) */
  checked: boolean;
  /** Обработчик изменения состояния (опционально) */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Только для чтения (опционально) */
  readOnly?: boolean;
}

/**
 * Компонент CustomCheckbox - кастомный чекбокс с улучшенным дизайном.
 *
 * @param id - Уникальный идентификатор чекбокса
 * @param label - Текстовая метка чекбокса
 * @param checked - Состояние чекбокса (отмечен/не отмечен)
 * @param onChange - Обработчик изменения состояния (опционально)
 * @param readOnly - Только для чтения (опционально)
 */
const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  label,
  checked,
  onChange,
  readOnly = false,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (readOnly) {
      e.preventDefault();
    }
  };

  return (
    <label className={styles.checkboxContainer}>
      <div className={styles.iosCheckbox}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          onClick={readOnly ? handleClick : undefined}
          readOnly={readOnly}
        />
        <div className={styles.checkboxWrapper}>
          <div className={styles.checkboxBg}></div>
          <svg className={styles.checkboxIcon} viewBox="0 0 24 24" fill="none">
            <path
              className={styles.checkPath}
              d="M4 12L10 18L20 6"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </div>
      <span className={styles.label}>{label}</span>
    </label>
  );
};

export default CustomCheckbox;
