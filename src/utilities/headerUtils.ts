/**
 * Утилиты для работы с хедером
 */

/**
 * Получает высоту хедера в зависимости от размера экрана
 * @returns Высота хедера в пикселях
 */
export const getHeaderHeight = (): number => {
  return window.innerWidth <= 768 ? 70 : 80;
};

/**
 * Рассчитывает отступ для скроллинга с учетом высоты хедера
 * @param additionalOffset Дополнительный отступ
 * @returns Общий отступ для скроллинга
 */
export const getScrollOffset = (additionalOffset: number = 30): number => {
  return getHeaderHeight() + additionalOffset;
};
