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

// Функция для динамического обновления мета-тегов в React
export const updateMetaTags = (customConfig?: Partial<typeof metaConfig>) => {
  const config = { ...metaConfig, ...customConfig };

  // Обновляем title
  document.title = config.title;

  // Обновляем meta теги
  const updateMetaTag = (name: string, content: string, property?: string) => {
    const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
    let meta = document.querySelector(selector) as HTMLMetaElement;

    if (!meta) {
      meta = document.createElement('meta');
      if (property) {
        meta.setAttribute('property', property);
      } else {
        meta.setAttribute('name', name);
      }
      document.head.appendChild(meta);
    }

    meta.setAttribute('content', content);
  };

  // Open Graph
  updateMetaTag('og:title', config.openGraph.title, 'og:title');
  updateMetaTag('og:description', config.openGraph.description, 'og:description');
  updateMetaTag('og:image', config.openGraph.image, 'og:image');
  updateMetaTag('og:image:width', config.openGraph.imageWidth.toString(), 'og:image:width');
  updateMetaTag('og:image:height', config.openGraph.imageHeight.toString(), 'og:image:height');
  updateMetaTag('og:type', config.openGraph.type, 'og:type');
  updateMetaTag('og:url', config.openGraph.url, 'og:url');
  updateMetaTag('og:site_name', config.openGraph.siteName, 'og:site_name');

  // Twitter
  updateMetaTag('twitter:card', config.twitter.card, 'twitter:card');
  updateMetaTag('twitter:title', config.twitter.title, 'twitter:title');
  updateMetaTag('twitter:description', config.twitter.description, 'twitter:description');
  updateMetaTag('twitter:image', config.twitter.image, 'twitter:image');

  // Дополнительные
  updateMetaTag('description', config.description);
  updateMetaTag('keywords', config.keywords);
  updateMetaTag('author', config.author);
};
