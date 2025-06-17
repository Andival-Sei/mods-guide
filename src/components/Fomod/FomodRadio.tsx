import type { FomodRadioProps } from './FomodTypes';
import cls from './Fomod.module.scss';

/**
 * Компонент FomodRadio - представляет радиокнопку в секции Fomod инструкции.
 * Радиокнопка является неинтерактивной (только для отображения), её состояние
 * определяется при создании и не может быть изменено пользователем.
 * Радиокнопки с одинаковым атрибутом name образуют группу, в которой может быть
 * выбрана только одна кнопка.
 *
 * @param id - Уникальный идентификатор радиокнопки
 * @param name - Имя группы радиокнопок
 * @param label - Текстовая метка радиокнопки
 * @param checked - Состояние радиокнопки (выбрана/не выбрана)
 */
const FomodRadio = ({ id, name, label, checked }: FomodRadioProps) => {
  return (
    <label className={`${cls.slider__label} ${cls.radioWrapper}`} htmlFor={id}>
      <input
        id={id}
        name={name}
        type="radio"
        checked={checked}
        onClick={(e) => e.preventDefault()} // Предотвращение изменения состояния при клике
        readOnly // Радиокнопка только для чтения
      />
      <span className={cls.slider__label_text}>{label}</span>
    </label>
  );
};

export default FomodRadio;
