import { metaConfig } from './meta';

// Функция для динамического обновления мета-тегов в React (только для браузера)
export const updateMetaTags = (customConfig?: Partial<typeof metaConfig>) => {
  // Проверяем, что мы в браузере
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

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
