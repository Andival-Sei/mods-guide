import type { FomodPageProps } from './FomodTypes';
import FomodSection from './FomodSection';
import cls from './Fomod.module.scss';
import { forwardRef } from 'react';

/**
 * Компонент FomodPage - представляет отдельную страницу в Fomod инструкции.
 * Использует forwardRef для передачи ссылки на DOM-элемент родительскому компоненту,
 * что позволяет измерять высоту страницы для корректного отображения.
 *
 * @param title - Заголовок страницы
 * @param sections - Массив секций на странице
 * @param ref - Ссылка на DOM-элемент, передаваемая из родительского компонента
 */
const FomodPage = forwardRef<HTMLFieldSetElement, FomodPageProps>(({ title, sections }, ref) => {
  return (
    <fieldset className={cls.slider__page} ref={ref}>
      {/* Заголовок страницы */}
      <h5 className={cls.slider__page_title}>{title}</h5>

      {/* Отображение всех секций на странице */}
      {sections.map((section, index) => (
        <FomodSection
          key={`${title}-section-${index}`}
          title={section.title}
          type={section.type}
          items={section.items}
        />
      ))}
    </fieldset>
  );
});

// Установка отображаемого имени для компонента (полезно для инструментов разработки)
FomodPage.displayName = 'FomodPage';

export default FomodPage;
