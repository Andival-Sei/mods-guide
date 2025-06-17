import type { FomodCheckboxProps, FomodRadioProps, FomodSectionProps } from './FomodTypes';
import FomodCheckbox from './FomodCheckbox';
import FomodRadio from './FomodRadio';
import cls from './Fomod.module.scss';

/**
 * Компонент FomodSection - представляет секцию на странице Fomod инструкции.
 * Секция содержит заголовок и группу элементов одного типа (чекбоксы или радиокнопки).
 *
 * @param title - Заголовок секции
 * @param type - Тип элементов в секции ('checkbox' или 'radio')
 * @param items - Массив элементов (чекбоксы или радиокнопки)
 */
const FomodSection = ({ title, type, items }: FomodSectionProps) => {
  return (
    <fieldset className={cls.slider__page_section}>
      {/* Заголовок секции */}
      <h6 className={cls.slider__section_title}>{title}</h6>

      {/* Отображение чекбоксов, если тип секции - 'checkbox' */}
      {type === 'checkbox' &&
        (items as FomodCheckboxProps[]).map((item) => (
          <FomodCheckbox key={item.id} id={item.id} label={item.label} checked={item.checked} />
        ))}

      {/* Отображение радиокнопок, если тип секции - 'radio' */}
      {type === 'radio' &&
        (items as FomodRadioProps[]).map((item) => (
          <FomodRadio
            key={item.id}
            id={item.id}
            name={item.name}
            label={item.label}
            checked={item.checked}
          />
        ))}
    </fieldset>
  );
};

export default FomodSection;
