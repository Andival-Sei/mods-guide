import { type ModProps } from '../../components/Mod/Mod';

// Секция: "Фреймворки расширений - Исправления к движку"
export const engineFixes: ModProps[] = [
  {
    name: 'Address Library for SKSE Plugins',
    version: '11',
    author: 'meh321',
    description:
      'Этот мод содержит заголовочный файл и базу данных, чтобы сделать версию плагинов SKSE DLL независимой.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/32444?',
    files: [
      {
        type: 'Main Files',
        name: 'All in one (1.6.X)',
        version: '11',
      },
    ],
    tags: ['removal-tool'],
    specialInstructions: {
      blocks: [
        {
          type: 'mo2_removal_tool',
          filesToRemove: [
            'SKSE\\Plugins\\versionlib-1-6-317-0.bin',
            'SKSE\\Plugins\\versionlib-1-6-318-0.bin',
            'SKSE\\Plugins\\versionlib-1-6-323-0.bin',
            'SKSE\\Plugins\\versionlib-1-6-342-0.bin',
            'SKSE\\Plugins\\versionlib-1-6-353-0.bin',
            'SKSE\\Plugins\\versionlib-1-6-629-0.bin',
            'SKSE\\Plugins\\versionlib-1-6-640-0.bin',
            'SKSE\\Plugins\\versionlib-1-6-659-0.bin',
            'SKSE\\Plugins\\versionlib-1-6-1130-0.bin',
            'SKSE\\Plugins\\versionlib-1-6-1179-0.bin',
          ],
        },
      ],
    },
  },
  {
    name: 'SSE Engine Fixes (skse64 plugin)',
    version: '6.1.1',
    author: 'aers - Nukem - Ryan',
    description:
      'Этот мод содержит заголовочный файл и базу данных, чтобы сделать версию плагинов SKSE DLL независимой.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/32444?',
    files: [
      {
        type: 'Main Files',
        name: '(Part 1) SSE Engine Fixes for 1.6.1170 and newer',
        version: '6.2',
      },
      {
        type: 'Main Files',
        name: '(Part 2) Engine Fixes - skse64 Preloader and TBB Lib',
        version: '2020.3',
      },
    ],
    tags: ['special-instructions'],
    specialInstructions: {
      blocks: [
        {
          type: 'ordered_list',
          items: [
            'После установки откройте и измените следующее: <fp>\\skse\\plugins\\EngineFixes.toml</fp>',
            {
              type: 'code',
              language: 'toml',
              content: `[Patches]\nMaxStdio = 8192\nRegularQuicksaves = true\n[Experimental]\nSaveGameMaxSize = true`,
            },
            'Извлеките (Part 2) Engine Fixes - skse64 Preloader and TBB Lib и установите файлы в папку каталога Main Skyrim Special Edition.',
          ],
        },
      ],
    },
  },
  {
    name: 'Actor Limit Fix',
    version: '9',
    author: 'meh321',
    description:
      'Увеличивает количество актеров, которые могут двигаться, делать мимику и синхронизировать губы с репликами голоса в любой момент времени.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/32349?',
    files: [
      {
        type: 'Main Files',
        name: 'Actor Limit Fix - Anniversary Edition (1.6.629.0 and later)',
        version: '9',
      },
    ],
  },
  {
    name: 'Barter Limit Fix',
    version: '1.0',
    author: 'powerofthree and KernalsEgg',
    description:
      'Плагин SKSE, который исправляет торговлю с торговцами с более чем 32 767 золотом.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/77173?',
    files: [
      {
        type: 'Main Files',
        name: 'Barter Limit Fix',
        version: '1.0',
      },
    ],
  },
  {
    name: 'Bug Fixes SSE',
    version: '10',
    author: 'meh321',
    description: 'Этот мод исправляет некоторые ошибки с кодом игры.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/33261?',
    files: [
      {
        type: 'Main Files',
        name: 'Bug Fixes SSE - Anniversary Edition (1.6.629.0 and later)',
        version: '10',
      },
    ],
  },
  {
    name: 'Equip Enchantment Fix',
    version: '1.3.6',
    author: 'SlavicPotato',
    description:
      'Этот мод исправляет ошибки движка, из-за которых чары предметов не применяются при экипировке или перестают работать, пока предмет все еще экипирован. Плагин SKSE64.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/42839?',
    files: [
      {
        type: 'Main Files',
        name: 'Equip Enchantment Fix for 1.6.629 and newer',
        version: '1.3.6',
      },
    ],
  },
  {
    name: 'Fix Note icon for SkyUI (SKSE64 plugin)',
    version: '1.2.6',
    author: '0xC0000005',
    description: 'Плагин SKSE64, который исправляет иконку и тип буквы/заметки для SkyUI.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/32561?',
    files: [
      {
        type: 'Main Files',
        name: 'FixNotesForSkyUI Skyrim AE',
        version: '1.2.6',
      },
    ],
  },
  {
    name: "I'm Walkin' Here NG with Pets",
    version: '1.0.0',
    author: 'Ryan--VersuchDrei--golovatris',
    description:
      'Плагин, который изо всех сил старается игнорировать коллизии между игроком и союзниками/призывами союзников/питомцами или во время диалогов.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/122516?',
    files: [
      {
        type: 'Main Files',
        name: "I'm Walkin' Here NG with Pets",
        version: '1.0.0',
      },
    ],
  },
  {
    name: 'Keyword Item Distributor (KID)',
    version: '3.4.0',
    author: 'powerofthree',
    description:
      'Плагин SKSE, который распределяет ключевые слова для оружия/брони/магических эффектов и других предметов, используя конфигурационные файлы.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/55728?',
    files: [
      {
        type: 'Main Files',
        name: 'Keyword Item Distributor',
        version: '3.4.0',
      },
    ],
    fomods: [
      {
        title: 'Keyword Item Distributor',
        pages: [
          {
            title: 'Main', // Название первой страницы
            sections: [
              {
                title: 'DLL', // Название секции
                type: 'radio',
                items: [
                  {
                    label: 'SSE v1.6+ ("Anniversary Edition")',
                    checked: true,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Mum's the Word NG",
    version: '2.1',
    author: 'Ryan---VersuchDrei',
    description:
      "Этот мод удаляет украденную метку с бесполезных предметов, которые вы крадете, до тех пор, пока никто этого не заметит. Это преобразование Mum's the Word в CLib-NG создает один файл .dll, который работает во всех версиях Skyrim SE, включая AE 1.6.629+ и VR!",
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/77409',
    files: [
      {
        type: 'Main Files',
        name: "Mum's the Word",
        version: '2.1',
      },
    ],
  },
  {
    name: 'NPC AI Process Position Fix - NG',
    version: '1.1.1',
    author: 'doodlum',
    description:
      'Плагин DLL, который исправляет ошибку ванильного игрового движка, из-за которой позиции процесса ИИ NPC не могли обновляться после того, как вы ждете/спите/быстро перемещаетесь.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/69326?',
    files: [
      {
        type: 'Main Files',
        name: 'NPC AI Process Position Fix - NG',
        version: '1.1.1',
      },
    ],
    fomods: [
      {
        title: 'NPC AI Process Position Fix - NG',
        pages: [
          {
            title: 'Files',
            sections: [
              {
                title: 'Plugin',
                type: 'checkbox',
                items: [
                  {
                    label: 'DLL and INI file',
                    checked: true,
                  },
                ],
              },
              {
                title: 'Patches',
                type: 'radio',
                items: [
                  {
                    label: 'Al Overhaul',
                    checked: true,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "powerofthree's Papyrus Extender",
    version: '6.0.3',
    author: 'powerofthree',
    description:
      'Плагин SKSE64/VR, расширяющий функциональность скрипта Papyrus, с более чем 220 новыми функциями Papyrus и 25 событиями.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/22854',
    files: [
      {
        type: 'Main Files',
        name: 'Papyrus Extender',
        version: '6.0.3',
      },
    ],
    fomods: [
      {
        title: 'Papyrus Extender',
        pages: [
          {
            title: 'Main',
            sections: [
              {
                title: 'DLL',
                type: 'radio',
                items: [
                  {
                    label: 'SSE v1.6.1170+ ("Anniversary Edition")',
                    checked: true,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Papyrus Tweaks NG',
    version: '4.1.0',
    author: 'Nightfallstorm',
    description:
      'Коллекция исправлений, доработок и улучшений производительности для скриптового движка Skyrim.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/77779?',
    files: [
      {
        type: 'Main Files',
        name: 'Papyrus Tweaks 4.1.0',
        version: '4.1.0',
      },
    ],
  },
  {
    name: "powerofthree's Tweaks",
    version: '1.13.1',
    author: 'powerofthree',
    description:
      'Этот мод представляет собой коллекцию исправлений ошибок и настроек движка. Плагин SKSE.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/51073?',
    files: [
      {
        type: 'Main Files',
        name: "powerofthree's Tweaks",
        version: '1.13.1',
      },
    ],
    fomods: [
      {
        title: "powerofthree's Tweaks",
        pages: [
          {
            title: 'Main',
            sections: [
              {
                title: 'DLL',
                type: 'radio',
                items: [
                  {
                    label: 'SSE v1.6.629+ ("Anniversary Edition")',
                    checked: true,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Recursion Monitor',
    version: '1.2',
    author: 'Nightfallstorm',
    description:
      'Обнаруживает сломанные папирусные скрипты, застрявшие в рекурсии, и предотвращает огромные задержки частоты кадров.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/76867?',
    files: [
      {
        type: 'Main Files',
        name: 'Recursion Fix',
        version: '1.2',
      },
    ],
  },
  {
    name: 'Scaleform Translation Plus Plus NG',
    version: '1.8',
    author: 'Ryan---VersuchDrei',
    description: 'Этот плагин обеспечивает вложение нативного перевода, присутствующего в SkyUI.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/77359?',
    files: [
      {
        type: 'Main Files',
        name: 'ScaleformTranslationPP',
        version: '1.8',
      },
    ],
  },
  {
    name: 'Scrambled Bugs',
    version: '21',
    author: 'Magicockerel',
    description: 'Коллекция исправлений ошибок и патчей движка.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/43532?',
    files: [
      {
        type: 'Main Files',
        name: 'Scrambled Bugs - Anniversary Edition (1.6.629.0 and later)',
        version: '21',
      },
    ],
  },
  {
    name: 'Skyrim Priority SE AE - CPU Performance FPS Optimizer',
    version: '3.4.0',
    author: 'Boring3',
    description:
      'Этот мод позволяет Skyrim всегда брать на себя большую часть загрузки процессора, увеличивает FPS и предотвращает внезапные задержки, вызванные другими процессами.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/43532?',
    files: [
      {
        type: 'Main Files',
        name: 'Skyrim Priority SE AE (3.4.0)',
        version: '3.4.0',
      },
    ],
    tags: ['special-instructions'],
    specialInstructions: {
      blocks: [
        {
          type: 'paragraph',
          content: 'Нам нужно настроить это следующим образом:',
        },
        {
          type: 'ordered_list',
          items: [
            'После установки мода перезапустите Mod Organizer 2 и нажмите на иконку «Инструменты»:',
            'Выберите инструмент <hl>Set CPU Affinity</hl>.',
            'Инструмент спросит, хотите ли вы установить соответствующее значение.',
            'Нажмите <hl>OK</hl>.',
          ],
        },
      ],
    },
  },
  {
    name: 'SSE Display Tweaks',
    version: '0.5.16',
    author: 'SlavicPotato',
    description:
      'Универсальное решение для игры с более высокой частотой кадров. Исправление физики, совместимой с OSD, улучшение полноэкранной производительности без границ, контроль частоты обновления, настраиваемое ограничение частоты кадров, а также несколько исправлений и оптимизаций.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/34705?',
    files: [
      {
        type: 'Main Files',
        name: 'SSE Display Tweaks',
        version: '0.5.16',
      },
    ],
    tags: ['special-instructions'],
    specialInstructions: {
      blocks: [
        {
          type: 'paragraph',
          content:
            'После установки откройте <fp>SKSE\\Plugins\\SSEDisplayTweaks.ini</fp> и измените следующее:',
        },
        {
          type: 'code',
          content: [
            'Borderless=true (Удалите # в начале строки.)',
            'BorderlessUpscale=true',
            'Resolution= Укажите ваше разрешение монитора(например моё 3840x2160) и удалите # в начале строки.',
            'UIFramerateLimitMap=60',
          ].join('\n'),
        },
      ],
    },
  },
];
