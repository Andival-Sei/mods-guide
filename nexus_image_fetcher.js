/**
 * Функция для автоматического получения изображений модов с Nexus Mods
 * 
 * @param {string} modUrl - URL мода на Nexus Mods (например: "https://www.nexusmods.com/skyrim/mods/1000")
 * @returns {Promise<string|null>} - URL первого изображения мода или null если не найдено
 */
async function getModImageFromNexus(modUrl) {
    try {
        // Извлекаем ID мода из URL
        const modIdMatch = modUrl.match(/\/mods\/(\d+)/);
        if (!modIdMatch) {
            console.error('Не удалось извлечь ID мода из URL:', modUrl);
            return null;
        }
        
        const modId = modIdMatch[1];
        console.log(`Получаем изображение для мода ID: ${modId}`);
        
        // Делаем запрос к странице мода
        const response = await fetch(modUrl);
        const html = await response.text();
        
        // Ищем og:image в meta тегах (это основное изображение мода)
        const ogImageMatch = html.match(/<meta property="og:image" content="([^"]+)"/);
        if (ogImageMatch && ogImageMatch[1] !== 'https://www.nexusmods.com/Contents/images/og/default.png') {
            console.log('Найдено основное изображение:', ogImageMatch[1]);
            return ogImageMatch[1];
        }
        
        // Если og:image не найден или это дефолтное изображение, ищем в галерее
        const galleryMatch = html.match(/data-src="(https:\/\/staticdelivery\.nexusmods\.com\/mods\/\d+\/images\/[^"]+)"/);
        if (galleryMatch) {
            console.log('Найдено изображение в галерее:', galleryMatch[1]);
            return galleryMatch[1];
        }
        
        // Альтернативный поиск в thumbnails
        const thumbnailMatch = html.match(/src="(https:\/\/staticdelivery\.nexusmods\.com\/mods\/\d+\/images\/thumbnails\/[^"]+)"/);
        if (thumbnailMatch) {
            console.log('Найдено изображение в thumbnails:', thumbnailMatch[1]);
            return thumbnailMatch[1];
        }
        
        console.log('Изображения не найдены для мода:', modId);
        return null;
        
    } catch (error) {
        console.error('Ошибка при получении изображения мода:', error);
        return null;
    }
}

/**
 * Функция для применения изображения как фона карточки мода
 * 
 * @param {string} modUrl - URL мода
 * @param {string} cardSelector - CSS селектор карточки мода
 */
async function applyModBackgroundImage(modUrl, cardSelector) {
    const imageUrl = await getModImageFromNexus(modUrl);
    
    if (imageUrl) {
        const card = document.querySelector(cardSelector);
        if (card) {
            // Применяем изображение как слабо заметный фон
            card.style.backgroundImage = `url('${imageUrl}')`;
            card.style.backgroundSize = 'cover';
            card.style.backgroundPosition = 'center';
            card.style.backgroundRepeat = 'no-repeat';
            card.style.opacity = '0.95'; // Слабо заметный эффект
            
            // Добавляем overlay для лучшей читаемости текста
            card.style.position = 'relative';
            card.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            
            console.log('Фоновое изображение применено к карточке мода');
        }
    }
}

/**
 * Функция для массового применения изображений к списку модов
 * 
 * @param {Array} mods - Массив объектов с URL модов
 */
async function applyModBackgroundsToAll(mods) {
    for (const mod of mods) {
        const cardSelector = `.mod-card[data-mod-url="${mod.url}"]`;
        await applyModBackgroundImage(mod.url, cardSelector);
        
        // Небольшая задержка между запросами, чтобы не перегружать сервер
        await new Promise(resolve => setTimeout(resolve, 100));
    }
}

// Пример использования:
/*
// Для одного мода
const modUrl = "https://www.nexusmods.com/skyrim/mods/1000";
applyModBackgroundImage(modUrl, '.mod-card');

// Для списка модов
const mods = [
    { url: "https://www.nexusmods.com/skyrim/mods/1000" },
    { url: "https://www.nexusmods.com/skyrim/mods/2000" },
    // ... другие моды
];
applyModBackgroundsToAll(mods);
*/

// Экспорт для использования в других модулях
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getModImageFromNexus,
        applyModBackgroundImage,
        applyModBackgroundsToAll
    };
}