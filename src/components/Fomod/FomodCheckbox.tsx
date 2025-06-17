import type { FomodCheckboxProps } from './FomodTypes';
import cls from './Fomod.module.scss';

/**
 * Компонент FomodCheckbox - представляет чекбокс в секции Fomod инструкции.
 * Чекбокс является неинтерактивным (только для отображения), его состояние
 * определяется при создании и не может быть изменено пользователем.
 *
 * @param id - Уникальный идентификатор чекбокса
 * @param label - Текстовая метка чекбокса
 * @param checked - Состояние чекбокса (отмечен/не отмечен)
 */
const FomodCheckbox = ({ id, label, checked }: FomodCheckboxProps) => {
  return (
    <label className={`${cls.slider__label} ${cls.checkboxWrapper}`} htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        className={cls.slider__checkbox}
        checked={checked}
        onClick={(e) => e.preventDefault()} // Предотвращение изменения состояния при клике
        readOnly // Чекбокс только для чтения
      />
      <span className={cls.slider__label_text}>{label}</span>
    </label>
  );
};

export default FomodCheckbox;
