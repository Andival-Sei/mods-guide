import { type ModProps } from '../../components/Mod/Mod';

// Секция: "Интерфейс - HUD"
export const interfaceHUD: ModProps[] = [
  {
    name: 'A Matter of Time - A HUD clock widget',
    version: 'v3.0.0a4',
    author: 'SkyAmigo',
    description:
      'Мод добавляет виджет в HUD, который отображает текущее время в игре двумя способами: в виде картинки, показывающей текущее время суток, и в виде часов.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/12937',
    files: [
      {
        type: 'Main Files',
        name: 'AMatterOfTime_v3_0_0_alpha_4',
        version: 'v3.0.0a4',
      },
    ],
    translation: {
      version: '3.0.0a4',
      author: 'k©קaso√®',
      downloadLink:
        'https://gamer-mods.ru/load/skyrim_se/interfejs/a_matter_of_time_se/154-1-0-6254',
      files: [
        {
          type: 'Main Files',
          name: 'Основной архив (1.2 mb)',
          version: '3.0.0a4',
        },
      ],
    },
  },
  {
    name: 'Immersive HUD - iHUD Special Edition',
    version: '0.2b',
    author: 'Gopher',
    description:
      'Этот мод увеличивает погружение, скрывая несущественные элементы интерфейса до тех пор, пока они не понадобятся.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/12440',
    files: [
      {
        type: 'Main Files',
        name: 'Immersive HUD - iHUD',
        version: '0.2b',
      },
    ],
    translation: {
      version: '0.2b',
      author: 'Staticgraf',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/66257',
      files: [
        {
          type: 'Main Files',
          name: 'Immersive HUD - iHUD - Russian Translation',
          version: '0.2b',
        },
      ],
    },
  },
  {
    name: 'SkyHUD',
    version: '0.90.1B',
    author: 'SkyHUD Team',
    description:
      'Включайте и выключайте элементы интерфейса, масштабируйте размеры, меняйте положение и меняйте местами элементы с альтернативной версией. Имеет точечное перекрестие, тонкий компас, альтернативный дисплей боеприпасов, отдельно стоящие маркеры компаса и встроенную поддержку модов шрифтов.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/463',
    files: [
      {
        type: 'Main Files',
        name: 'SkyHUD v090B v4',
        version: '0.90B',
      },
      {
        type: 'Update Files',
        name: 'Patch - SkyHUD v090B',
        version: '0.90.1B',
      },
    ],
    fomods: [
      {
        title: 'SkyHUD v090B v4',
        pages: [
          {
            title: 'Check',
            sections: [
              {
                title: "What's New",
                type: 'checkbox',
                items: [
                  {
                    label: 'Proceed',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'Install',
            sections: [
              {
                title: 'Please select installation type',
                type: 'radio',
                items: [
                  {
                    label: 'Loose Files',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'Example Presets',
            sections: [
              {
                title: 'Choose a preset',
                type: 'radio',
                items: [
                  {
                    label: 'None',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'Miscellaneous',
            sections: [
              {
                title: 'Optional',
                type: 'checkbox',
                items: [
                  {
                    label: 'Install iHUD compatibility patch',
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
      version: '0.90.1B',
      author: 'k©קaso√®',
      downloadLink: 'https://gamer-mods.ru/load/skyrim_se/interfejs/skyhud_se/154-1-0-5070',
      files: [
        {
          type: 'Main Files',
          name: 'Полный архив мода версии 0.90B (3.8 mb)',
          version: '0.90.1B',
        },
        {
          type: 'Main Files',
          name: 'Патч 0.90.1B исправляющий отсутствующие компоненты пользовательского интерфейса',
          version: '0.90.1B',
        },
      ],
      fomods: [
        {
          title: 'Полный архив мода версии 0.90B (3.8 mb)',
          pages: [
            {
              title: 'Check',
              sections: [
                {
                  title: 'Что нового',
                  type: 'checkbox',
                  items: [
                    {
                      label: 'Продолжить',
                      checked: true,
                    },
                  ],
                },
              ],
            },
            {
              title: 'Install',
              sections: [
                {
                  title: 'Выберите вариант установки',
                  type: 'radio',
                  items: [
                    {
                      label: 'Файлы без BSA и ESP',
                      checked: true,
                    },
                  ],
                },
              ],
            },
            {
              title: 'Example Presets',
              sections: [
                {
                  title: 'Выбор пресета',
                  type: 'radio',
                  items: [
                    {
                      label: 'Нет',
                      checked: true,
                    },
                  ],
                },
              ],
            },
            {
              title: 'Miscellaneous',
              sections: [
                {
                  title: 'Опции',
                  type: 'checkbox',
                  items: [
                    {
                      label: 'Патч для мода iHUD',
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
  },
  {
    name: 'moreHUD SE',
    version: '5.2.2.0',
    author: 'Ahzaab',
    description:
      'Этот мод отображает информацию об объекте, на который нацелен игрок, такую как алхимические эффекты, вес и полные характеристики брони/оружия, без необходимости их подбирать.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/12688',
    files: [
      {
        type: 'Main Files',
        name: 'moreHUD SE Light Master - AE',
        version: '5.2.2.0',
      },
    ],
    translation: {
      version: '5.2.2.0',
      author: 'k©קaso√®',
      downloadLink: 'https://gamer-mods.ru/load/skyrim_se/interfejs/morehud_se_ae/154-1-0-13117',
      files: [
        {
          type: 'Main Files',
          name: 'Основной архив мода 5.2.2.0 для игры версии 1.6.640.0.8 (формат файла .ESL)',
          version: '5.2.2.0',
        },
      ],
    },
  },
  {
    name: 'moreHUD Inventory Edition',
    version: '2.1.3.0',
    author: 'Ahzaab',
    description: 'Этот мод привносит некоторые функции из moreHUD в меню инвентаря.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/18619',
    files: [
      {
        type: 'Main Files',
        name: 'moreHUD Inventory Edition Loose Version - AE',
        version: '2.1.3.0',
      },
    ],
  },
  {
    name: 'TrueHUD - HUD Additions',
    version: '1.1.9',
    author: 'Ersh',
    description:
      'Дополнения в интерфейсе, которые ранее входили в True Directional Movement, были полностью переработаны и улучшены! Очень настраиваемые информационные панели об актерах, панели боссов, виджет игрока, журнал последних лутов и API для других плагинов. Модульный и настраиваемый с помощью MCM.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/62775',
    files: [
      {
        type: 'Main Files',
        name: 'TrueHUD',
        version: '1.1.9',
      },
    ],
    translation: {
      version: '1.1.9',
      author: 'Ersh and NB - Nillck - translator',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/134973',
      files: [
        {
          type: 'Main Files',
          name: 'TrueHUD - MCM RU',
          version: '1.1.9',
        },
      ],
    },
  },
  {
    name: 'TrueHUD Curated Bosses',
    version: '1.2',
    author: 'Catir',
    description:
      'Функция панели боссов в True HUD стала гораздо более строгой в выборе, резервируя панели боссов для боссов, которые важны для сюжета или имеют уникальную механику. Включает полную поддержку Creation Club и поддержку нескольких квестовых модов.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/53406?',
    files: [
      {
        type: 'Main Files',
        name: 'TrueHUD Curated Bosses',
        version: '1.2',
      },
    ],
  },
  {
    name: 'TrueHUD - HUD Additions - Gray Cowl of Nocturnal Boss Ini Tweaks',
    version: '1.1',
    author: 'lordkenyonkmp',
    description:
      'Я просмотрел все локации и NPC в The Grey Cowl of Nocturnal и занес в черный список "боссов" граждан и боссов для использования в True Directional Movement - Modernized Third Person Gameplay',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/53265?',
    files: [
      {
        type: 'Main Files',
        name: 'True Directional Movement - Gray Cowl Boss Ini Tweaks',
        version: '1.1',
      },
    ],
  },
  {
    name: 'TrueHUD - HUD Additions - Legacy of the Dragonborn SSE Boss Ini Tweaks',
    version: '1.1',
    author: 'lordkenyonkmp',
    description:
      'Я просмотрел все локации и NPC Legacy of the Dragonborn SSE и занес в черный список "боссов" граждан и боссов для использования в True Directional Movement - Modernized Third Person Gameplay',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/53545?',
    files: [
      {
        type: 'Main Files',
        name: 'True Directional Movement - LotD Boss Init Tweaks',
        version: '1.1',
      },
    ],
  },
  {
    name: 'TrueHUD - HUD Additions - Moonpath to Elsweyr SSE Boss Ini Tweaks',
    version: '1.0',
    author: 'lordkenyonkmp',
    description:
      'Добавляет боссов мода в белый список для использования с полосками здоровья босса True Directional Movement.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/53319?',
    files: [
      {
        type: 'Main Files',
        name: 'True Directional Movement - Moonpath Boss Ini Tweaks',
        version: '1.0',
      },
    ],
  },
];
