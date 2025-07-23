# 🎮 Автоматические изображения модов Nexus Mods

Этот проект демонстрирует, как автоматически получать изображения модов с Nexus Mods и использовать их в качестве слабо заметных фонов для карточек модов.

## ✨ Возможности

- 🔄 **Автоматическое получение изображений** - извлекает первое изображение мода с Nexus Mods
- 🎨 **Слабо заметные фоны** - изображения применяются с низкой прозрачностью для эстетики
- ⚡ **Кэширование** - оптимизированные запросы с задержками
- 🎛️ **Управление** - возможность включать/выключать фоны
- 📱 **Адаптивность** - работает на всех устройствах
- 🌙 **Темная тема** - поддержка системных настроек

## 🚀 Как это работает

### 1. Структура ссылок Nexus Mods

Все моды на Nexus Mods имеют одинаковую структуру URL:
```
https://www.nexusmods.com/{game}/mods/{mod_id}
```

Примеры:
- `https://www.nexusmods.com/skyrim/mods/1000`
- `https://www.nexusmods.com/skyrimspecialedition/mods/266`

### 2. Получение изображений

Система использует несколько методов для получения изображений:

1. **Meta теги** - ищет `og:image` в HTML
2. **Галерея мода** - парсит изображения из галереи
3. **Thumbnails** - использует миниатюры изображений

### 3. Применение фонов

Изображения применяются как CSS `background-image` с:
- `opacity: 0.1` - слабо заметный эффект
- `background-size: cover` - полное покрытие
- `background-position: center` - центрирование

## 📁 Структура файлов

```
├── nexus_image_fetcher.js    # Основная логика получения изображений
├── mod_cards.css            # Стили для карточек модов
├── demo.html                # Демонстрационная страница
└── README.md               # Этот файл
```

## 🛠️ Использование

### Базовое использование

```javascript
// Получение изображения для одного мода
const modUrl = "https://www.nexusmods.com/skyrim/mods/1000";
const imageUrl = await getModImageFromNexus(modUrl);

if (imageUrl) {
    console.log('Найдено изображение:', imageUrl);
}
```

### Применение к карточке мода

```javascript
// Применение изображения как фона
await applyModBackgroundImage(modUrl, '.mod-card');
```

### Массовое применение

```javascript
// Для списка модов
const mods = [
    { url: "https://www.nexusmods.com/skyrim/mods/1000" },
    { url: "https://www.nexusmods.com/skyrim/mods/2000" }
];

await applyModBackgroundsToAll(mods);
```

## 🎨 CSS Стили

### Базовая карточка мода

```css
.mod-card {
    position: relative;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 10px 0;
    transition: all 0.3s ease;
    overflow: hidden;
}
```

### Фоновое изображение

```css
.mod-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.1; /* Слабо заметный фон */
    z-index: 0;
    transition: opacity 0.3s ease;
}
```

## 🔧 Настройка

### Изменение прозрачности фона

В файле `mod_cards.css` измените значение `opacity`:

```css
.mod-card::before {
    opacity: 0.05; /* Более слабый фон */
    /* или */
    opacity: 0.2;  /* Более заметный фон */
}
```

### Изменение задержки между запросами

В функции `applyModBackgroundsToAll`:

```javascript
// Увеличьте задержку для более медленной загрузки
await new Promise(resolve => setTimeout(resolve, 500));

// Уменьшите для более быстрой загрузки
await new Promise(resolve => setTimeout(resolve, 50));
```

## ⚠️ Ограничения

### CORS (Cross-Origin Resource Sharing)

Из-за политики CORS браузеров, прямые запросы к Nexus Mods могут быть заблокированы. Для решения этой проблемы:

1. **Прокси-сервер** - используйте свой сервер как прокси
2. **Backend API** - создайте API endpoint на вашем сервере
3. **Browser Extension** - используйте расширение браузера

### Пример прокси-сервера (Node.js)

```javascript
const express = require('express');
const fetch = require('node-fetch');

app.get('/api/nexus-image/:modId', async (req, res) => {
    try {
        const modId = req.params.modId;
        const url = `https://www.nexusmods.com/skyrim/mods/${modId}`;
        const response = await fetch(url);
        const html = await response.text();
        
        // Логика извлечения изображения
        const imageUrl = extractImageUrl(html);
        
        res.json({ imageUrl });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch image' });
    }
});
```

## 🎯 Примеры интеграции

### React компонент

```jsx
import React, { useState, useEffect } from 'react';

function ModCard({ modUrl, title, description }) {
    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function loadImage() {
            setLoading(true);
            try {
                const url = await getModImageFromNexus(modUrl);
                setImageUrl(url);
            } catch (error) {
                console.error('Failed to load image:', error);
            }
            setLoading(false);
        }
        
        loadImage();
    }, [modUrl]);

    return (
        <div 
            className="mod-card"
            style={{
                backgroundImage: imageUrl ? `url(${imageUrl})` : 'none'
            }}
        >
            <div className="mod-card-content">
                <h3>{title}</h3>
                <p>{description}</p>
                {loading && <div>Загрузка изображения...</div>}
            </div>
        </div>
    );
}
```

### Vue компонент

```vue
<template>
  <div 
    class="mod-card"
    :style="{ backgroundImage: imageUrl ? `url(${imageUrl})` : 'none' }"
  >
    <div class="mod-card-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <div v-if="loading">Загрузка изображения...</div>
    </div>
  </div>
</template>

<script>
import { getModImageFromNexus } from './nexus_image_fetcher.js';

export default {
  props: ['modUrl', 'title', 'description'],
  data() {
    return {
      imageUrl: null,
      loading: false
    };
  },
  async mounted() {
    this.loading = true;
    try {
      this.imageUrl = await getModImageFromNexus(this.modUrl);
    } catch (error) {
      console.error('Failed to load image:', error);
    }
    this.loading = false;
  }
};
</script>
```

## 🚀 Запуск демо

1. Откройте `demo.html` в браузере
2. Нажмите "Загрузить все изображения"
3. Наблюдайте, как карточки модов получают фоновые изображения

## 📝 Лицензия

Этот проект предоставляется "как есть" для образовательных целей. Убедитесь, что вы соблюдаете условия использования Nexus Mods при использовании их контента.

## 🤝 Вклад в проект

Приветствуются предложения по улучшению! Создавайте issues и pull requests.

## 📞 Поддержка

Если у вас есть вопросы или проблемы, создайте issue в репозитории проекта.


