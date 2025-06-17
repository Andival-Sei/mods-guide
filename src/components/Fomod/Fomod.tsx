import { type MouseEvent, type TouchEvent, useEffect, useRef, useState } from 'react';
import cls from './Fomod.module.scss';
import type { FomodProps } from './FomodTypes';
import FomodPage from './FomodPage';

/**
 * Компонент Fomod - интерактивный компонент для отображения многостраничных инструкций Fomod.
 * Позволяет пользователю переключаться между страницами и взаимодействовать с различными элементами.
 */
const Fomod = ({ title, pages }: FomodProps) => {
  // Состояние открытия/закрытия компонента
  const [isOpen, setIsOpen] = useState(false);
  // Индекс текущей отображаемой страницы
  const [currentPage, setCurrentPage] = useState(0);
  // Высота слайдера, вычисляемая динамически на основе содержимого
  const [sliderHeight, setSliderHeight] = useState<number | null>(null);
  // Ссылка на элемент списка слайдов
  const slidesRef = useRef<HTMLUListElement>(null);
  // Массив ссылок на элементы страниц
  const pagesRef = useRef<(HTMLFieldSetElement | null)[]>([]);

  // Состояние для отслеживания касаний и перетаскиваний
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Переключение состояния открытия/закрытия Fomod
  const toggleFomod = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);

    // Сброс на первую страницу при закрытии Fomod, но только после завершения анимации
    if (!newIsOpen) {
      // Ожидание завершения анимации закрытия перед сбросом страницы
      setTimeout(() => {
        setCurrentPage(0);
      }, 300); // Соответствует длительности перехода в CSS (0.3s)
    }
  };

  // Переход к предыдущей странице
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Переход к следующей странице
  const nextPage = () => {
    if (pages && currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Переход к конкретной странице по индексу
  const goToPage = (pageIndex: number) => {
    if (pages && pageIndex >= 0 && pageIndex < pages.length) {
      setCurrentPage(pageIndex);
    }
  };

  // Обновление высоты слайдера при изменении текущей страницы
  useEffect(() => {
    if (pagesRef.current[currentPage]) {
      // Использование setTimeout для гарантии обновления DOM
      setTimeout(() => {
        const pageHeight = pagesRef.current[currentPage]?.offsetHeight;
        if (pageHeight) {
          // Добавление дополнительного отступа для больших экранов
          const extraPadding = window.innerWidth >= 768 ? 50 : 20;
          setSliderHeight(pageHeight + extraPadding);
        }
      }, 0);
    }
  }, [currentPage, isOpen]);

  // Инициализация массива pagesRef с правильной длиной
  useEffect(() => {
    if (pages) {
      pagesRef.current = Array(pages.length).fill(null);
    }
  }, [pages]);

  // Обработка события начала касания
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    if (!isOpen || pages.length <= 1) return;
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  // Обработка события движения при касании
  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isOpen || !touchStart || pages.length <= 1) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  // Обработка события окончания касания
  const handleTouchEnd = () => {
    if (!isOpen || !touchStart || !touchEnd || pages.length <= 1) return;

    // Расчет расстояния свайпа
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50; // Минимальное расстояние для распознавания свайпа

    // Если расстояние свайпа больше минимального, меняем страницу
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        // Свайп влево, переход к следующей странице
        nextPage();
      } else {
        // Свайп вправо, переход к предыдущей странице
        prevPage();
      }
    }

    // Сброс состояния касания
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Обработка события нажатия мыши
  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!isOpen || pages.length <= 1) return;
    setTouchStart(e.clientX);
    setIsDragging(true);
  };

  // Обработка события движения мыши
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isOpen || !touchStart || !isDragging || pages.length <= 1) return;
    setTouchEnd(e.clientX);
  };

  // Обработка события отпускания кнопки мыши
  const handleMouseUp = () => {
    if (!isOpen || !touchStart || !touchEnd || !isDragging || pages.length <= 1) return;

    // Расчет расстояния перетаскивания
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50; // Минимальное расстояние для распознавания перетаскивания

    // Если расстояние перетаскивания больше минимального, меняем страницу
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        // Перетаскивание влево, переход к следующей странице
        nextPage();
      } else {
        // Перетаскивание вправо, переход к предыдущей странице
        prevPage();
      }
    }

    // Сброс состояния перетаскивания
    setTouchStart(null);
    setTouchEnd(null);
    setIsDragging(false);
  };

  // Если страницы не предоставлены, возвращаем null
  if (!pages || pages.length === 0) {
    return null;
  }

  return (
    <article className={cls.fomod}>
      <div className={cls.fomod__wrapper}>
        {/* Заголовок Fomod с возможностью переключения видимости содержимого */}
        <div className={`${cls.fomod__toggle} ${isOpen ? cls.active : ''}`} onClick={toggleFomod}>
          <p className={cls.fomod__text}>
            <span className={cls.fomod__highlight}>Инструкция Fomod</span> - {title}
          </p>
        </div>
        {/* Контейнер содержимого Fomod, который открывается/закрывается */}
        <div className={`${cls.fomod__content} ${isOpen ? cls.open : ''}`}>
          <div className={cls.fomod__content_wrapper} style={{ opacity: isOpen ? 1 : 0 }}>
            <div className={cls.slider}>
              {/* Обертка слайдера с динамической высотой и обработчиками событий касания/перетаскивания */}
              <div
                className={cls.slider__wrapper}
                style={{ height: sliderHeight ? `${sliderHeight}px` : 'auto' }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp} // Обработка случая, когда мышь покидает элемент
              >
                {/* Список слайдов с анимацией перехода между страницами */}
                <ul
                  className={`${cls.slider__slides} ${isDragging ? cls.dragging : ''}`}
                  ref={slidesRef}
                  style={{ transform: `translateX(-${currentPage * 100}%)` }}
                >
                  {/* Отображение всех страниц Fomod */}
                  {pages.map((page, index) => (
                    <li key={`page-${index}`} className={cls.slider__slide}>
                      <FomodPage
                        ref={(el) => {
                          pagesRef.current[index] = el;
                        }}
                        title={page.title}
                        sections={page.sections}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Кнопки навигации - показывать кнопку "назад" только если не на первой странице */}
              {currentPage > 0 && (
                <button
                  type="button"
                  className={`${cls.slider__control} ${cls.slider__control_prev}`}
                  onClick={prevPage}
                ></button>
              )}

              {/* Показывать кнопку "вперед" только если не на последней странице */}
              {currentPage < pages.length - 1 && (
                <button
                  type="button"
                  className={`${cls.slider__control} ${cls.slider__control_next}`}
                  onClick={nextPage}
                ></button>
              )}

              {/* Точки пагинации - показывать только если есть несколько страниц */}
              {pages.length > 1 && (
                <div className={cls.slider__pagination}>
                  {pages.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`${cls.slider__pagination_dot} ${currentPage === index ? cls.active : ''}`}
                      onClick={() => goToPage(index)}
                    ></button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Fomod;
