import { type ModProps } from '../../components/Mod/Mod';

// Секция: "Интерфейс - Камера"
export const interfaceCamera: ModProps[] = [
  {
    name: 'Better Third Person Selection - BTPS',
    version: '0.8.9',
    author: 'Shrimperator',
    description: 'Этот мод улучшает выбор предметов на полу от третьего лица.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/64339',
    files: [
      {
        type: 'Main Files',
        name: 'Better Third Person Selection (AE - SE)',
        version: '0.8.9',
      },
    ],
    translation: {
      version: '0.8.9',
      author: 'Pinky Tongue',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/138117',
      files: [
        {
          type: 'Main Files',
          name: 'Better Third Person Selection - BTPS',
          version: '0.8.9',
        },
      ],
    },
  },
  {
    name: 'Clutter Filter for BTPS',
    version: '1.0.4',
    author: 'Rasclew',
    description:
      'Конфигурация фильтра для лучшего выбора от третьего лица, чтобы избежать беспорядка и предметов инструмента. Исключения сохраняют в наличии квестовые предметы, материалы для крафта, подарки и другие полезные предметы. Ограниченный полным режимом выбора BTPS, вы можете переопределить фильтр, переключившись в режим выбора по умолчанию, перейдя в вид от первого лица.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/89427',
    files: [
      {
        type: 'Main Files',
        name: 'Clutter Filter for BTPS',
        version: '1.0.4',
      },
    ],
  },
  {
    name: 'SmoothCam',
    version: '1.7',
    author: 'mwilsnd',
    description:
      'SmoothCam — это гибко настраиваемая камера от третьего лица, с плавной интерполяцией кадров и перекрестием луча, который поможет вам прицелиться.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/41252',
    files: [
      {
        type: 'Main Files',
        name: 'SmoothCam',
        version: '1.7',
      },
    ],
    fomods: [
      {
        title: 'SmoothCam',
        pages: [
          {
            title: 'Version',
            sections: [
              {
                title: 'Select Version',
                type: 'radio',
                items: [
                  {
                    label: 'SmoothCam AE',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'Plugin',
            sections: [
              {
                title: 'Select Plugin Type',
                type: 'radio',
                items: [
                  {
                    label: 'ESL',
                    checked: true,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    translation: {
      version: '1.7',
      author: 'Архив',
      downloadLink: 'https://gamer-mods.ru/load/skyrim_se/gejmplej/smoothcam_se/158-1-0-11989',
      files: [
        {
          type: 'Main Files',
          name: 'Здесь только переведенный МСМ меню на русский версии 1.7. Требуется основной мод с Нексуса. Читайте раздел "Установка". (перевод от Robin_Hood)',
          version: '1.7',
        },
      ],
    },
  },
  {
    name: 'Improved Alternate Conversation Camera',
    version: '1.2.0',
    author: 'MaskedRPGFan',
    description:
      'Улучшенная версия альтернативной разговорной камеры от NasGorTelorCeplok с MCM, исправлениями и многим другим.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/68210',
    files: [
      {
        type: 'Optional Files',
        name: 'Improved Alternate Conversation Camera AE - Simple',
        version: '1.2.0',
      },
    ],
    translation: {
      version: '1.2.0SE',
      author: 'PaZZle1',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/97410',
      files: [
        {
          type: 'Main Files',
          name: 'Improved Alternate Conversation Camera_RUS',
          version: '1.2.0',
        },
      ],
    },
  },
  {
    name: 'Disable Kill Cam And Kill Moves',
    version: '4.0',
    author: 'reyqune',
    description:
      'Отключает камеру убийства, отключает приемы убийства для всех и отключает мгновенное убийство драконами.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/111190',
    files: [
      {
        type: 'Main Files',
        name: 'Disable Kill Cam And Kill Moves',
        version: '4.0',
      },
    ],
  },
];
