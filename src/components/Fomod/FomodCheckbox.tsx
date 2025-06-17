import type { FomodCheckboxProps } from './FomodTypes';
import cls from './Fomod.module.scss';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';

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
    <div className={cls.slider__label}>
      <CustomCheckbox id={id} label={label} checked={checked} readOnly={true} />
    </div>
  );
};

export default FomodCheckbox;
