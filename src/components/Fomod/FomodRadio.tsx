import cls from './Fomod.module.scss';
import CustomRadio from '../CustomRadio/CustomRadio';

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
const FomodRadio = ({ label, checked }: { label: string; checked: boolean }) => {
  return (
    <div className={cls.slider__label}>
      <CustomRadio label={label} checked={checked} readOnly={true} />
    </div>
  );
};

export default FomodRadio;
