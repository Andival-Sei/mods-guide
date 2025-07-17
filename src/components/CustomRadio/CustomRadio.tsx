import React from 'react';
import styles from './CustomRadio.module.scss';

export interface CustomRadioProps {
  /** Текстовая метка радиокнопки */
  label: string;
  /** Состояние радиокнопки (выбрана/не выбрана) */
  checked: boolean;
  /** Обработчик изменения состояния (опционально) */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Только для чтения (опционально) */
  readOnly?: boolean;
}

/**
 * Компонент CustomRadio - кастомная радиокнопка с улучшенным дизайном.
 *
 * @param id - Уникальный идентификатор радиокнопки
 * @param name - Имя группы радиокнопок
 * @param label - Текстовая метка радиокнопки
 * @param checked - Состояние радиокнопки (выбрана/не выбрана)
 * @param onChange - Обработчик изменения состояния (опционально)
 * @param readOnly - Только для чтения (опционально)
 */
const CustomRadio: React.FC<CustomRadioProps> = ({
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
    <label className={styles.label}>
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        onClick={readOnly ? handleClick : undefined}
        readOnly={readOnly}
      />
      <p className={styles.text}>{label}</p>
    </label>
  );
};

export default CustomRadio;
