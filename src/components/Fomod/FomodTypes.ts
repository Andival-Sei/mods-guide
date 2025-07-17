/**
 * Интерфейс для свойств чекбокса в Fomod
 */
export interface FomodCheckboxProps {
  /** Текстовая метка чекбокса */
  label: string;
  /** Состояние чекбокса (отмечен/не отмечен) */
  checked: boolean;
}

/**
 * Интерфейс для свойств радиокнопки в Fomod
 */
export interface FomodRadioProps {
  /** Текстовая метка радиокнопки */
  label: string;
  /** Состояние радиокнопки (выбрана/не выбрана) */
  checked: boolean;
}

/**
 * Интерфейс для свойств секции в Fomod
 * Секция содержит группу элементов одного типа (чекбоксы или радиокнопки)
 */
export interface FomodSectionProps {
  /** Заголовок секции */
  title: string;
  /** Тип элементов в секции (чекбоксы или радиокнопки) */
  type: 'checkbox' | 'radio';
  /** Массив элементов секции (чекбоксы или радиокнопки) */
  items: FomodCheckboxProps[] | FomodRadioProps[];
}

/**
 * Интерфейс для свойств страницы в Fomod
 * Страница содержит одну или несколько секций
 */
export interface FomodPageProps {
  /** Заголовок страницы */
  title: string;
  /** Массив секций на странице */
  sections: FomodSectionProps[];
}

/**
 * Интерфейс для свойств компонента Fomod
 * Основной интерфейс, определяющий структуру данных для компонента Fomod
 * Теперь этот интерфейс можно использовать для массива Fomod у модов (см. поле fomods в ModProps)
 */
export interface FomodProps {
  /** Заголовок Fomod (отображается в верхней части компонента) */
  title: string;
  /** Массив страниц Fomod */
  pages: FomodPageProps[];
}
