import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { generateMetaTags } from './src/config/meta';

// Плагин для вставки мета-тегов
const metaTagsPlugin = () => {
  return {
    name: 'meta-tags-plugin',
    transformIndexHtml(html: string) {
      // Удаляем существующие мета-теги (если есть)
      const cleanHtml = html
        .replace(/<!-- Open Graph мета-теги.*?-->/s, '')
        .replace(/<!-- Twitter Card мета-теги.*?-->/s, '')
        .replace(/<!-- Дополнительные мета-теги.*?-->/s, '')
        .replace(/<meta property="og:.*?\/>/g, '')
        .replace(/<meta name="twitter:.*?\/>/g, '')
        .replace(/<meta name="description".*?\/>/g, '')
        .replace(/<meta name="keywords".*?\/>/g, '')
        .replace(/<meta name="author".*?\/>/g, '');

      // Вставляем новые мета-теги перед закрывающим тегом head
      return cleanHtml.replace('</head>', `${generateMetaTags()}\n  </head>`);
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), metaTagsPlugin()],
  server: {
    host: '0.0.0.0', // Прослушивать все сетевые интерфейсы
    port: 5173,
    open: true,
  },
});
