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
const FomodCheckbox = ({ label, checked }: { label: string; checked: boolean }) => {
  return (
    <div className={cls.slider__label}>
      <CustomCheckbox label={label} checked={checked} readOnly={true} />
    </div>
  );
};

export default FomodCheckbox;
