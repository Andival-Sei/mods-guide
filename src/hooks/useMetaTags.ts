import { useEffect } from 'react';
import { updateMetaTags, metaConfig } from '../config/meta';

// Хук для управления мета-тегами
export const useMetaTags = (customConfig?: Partial<typeof metaConfig>) => {
  useEffect(() => {
    // Обновляем мета-теги при монтировании компонента
    updateMetaTags(customConfig);

    // Восстанавливаем исходные мета-теги при размонтировании
    return () => {
      updateMetaTags();
    };
  }, [customConfig]);
};

// Предустановленные конфигурации для разных страниц
export const pageMetaConfigs = {
  home: {
    title: 'Главная - Руководство по модификациям Skyrim',
    description: 'Добро пожаловать в руководство по модификациям Skyrim AE',
  },
  welcome: {
    title: 'Добро пожаловать - Руководство по модификациям Skyrim',
    description: 'Начните свой путь в мире модификаций Skyrim',
  },
  preInstall: {
    title: 'Предустановка - Руководство по модификациям Skyrim',
    description: 'Подготовка системы и установка необходимых инструментов',
  },
  installMods: {
    title: 'Установка модов - Руководство по модификациям Skyrim',
    description: 'Пошаговая установка основных модификаций',
  },
  contacts: {
    title: 'Контакты - Руководство по модификациям Skyrim',
    description: 'Свяжитесь с нами для получения поддержки',
  },
  changelog: {
    title: 'Журнал изменений - Руководство по модификациям Skyrim',
    description: 'История обновлений и изменений в руководстве',
  },
};
