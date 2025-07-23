// Конфигурация мета-тегов для социальных сетей
export const metaConfig = {
  // Основная информация о сайте
  title: 'Руководство по модификациям Skyrim',
  description:
    'Пошаговое руководство по установке модификаций для The Elder Scrolls V: Skyrim Anniversary Edition',
  keywords: 'Skyrim, моды, модификации, руководство, установка, Anniversary Edition',
  author: 'Mods Guide Team',
  siteName: 'Mods Guide',

  // URL сайта
  url: 'https://mods-guide.vercel.app',

  // Изображения для превью
  images: {
    large: '/preview-large.png',
    small: '/preview-small.png',
    width: 1200,
    height: 630,
  },

  // Open Graph мета-теги
  openGraph: {
    title: 'Руководство по модификациям Skyrim',
    description:
      'Пошаговое руководство по установке модификаций для The Elder Scrolls V: Skyrim Anniversary Edition',
    image: '/preview-large.png',
    imageWidth: 1200,
    imageHeight: 630,
    type: 'website',
    url: 'https://mods-guide.vercel.app',
    siteName: 'Mods Guide',
  },

  // Twitter Card мета-теги
  twitter: {
    card: 'summary_large_image',
    title: 'Руководство по модификациям Skyrim',
    description:
      'Пошаговое руководство по установке модификаций для The Elder Scrolls V: Skyrim Anniversary Edition',
    image: '/preview-large.png',
  },
};

// Функция для генерации мета-тегов в формате HTML
export const generateMetaTags = () => {
  const { openGraph, twitter } = metaConfig;

  return `
    <!-- Open Graph мета-теги для превью в социальных сетях -->
    <meta property="og:title" content="${openGraph.title}" />
    <meta property="og:description" content="${openGraph.description}" />
    <meta property="og:image" content="${openGraph.image}" />
    <meta property="og:image:width" content="${openGraph.imageWidth}" />
    <meta property="og:image:height" content="${openGraph.imageHeight}" />
    <meta property="og:type" content="${openGraph.type}" />
    <meta property="og:url" content="${openGraph.url}" />
    <meta property="og:site_name" content="${openGraph.siteName}" />
    
    <!-- Twitter Card мета-теги -->
    <meta name="twitter:card" content="${twitter.card}" />
    <meta name="twitter:title" content="${twitter.title}" />
    <meta name="twitter:description" content="${twitter.description}" />
    <meta name="twitter:image" content="${twitter.image}" />
    
    <!-- Дополнительные мета-теги -->
    <meta name="description" content="${metaConfig.description}" />
    <meta name="keywords" content="${metaConfig.keywords}" />
    <meta name="author" content="${metaConfig.author}" />
  `;
};

// Экспортируем тип для использования в других файлах
export type MetaConfig = typeof metaConfig;
