import { type ModProps } from '../../components/Mod/Mod';

// Секция: "Карта мира"
export const worldMap: ModProps[] = [
  {
    name: 'A Clear Map of Skyrim and Other Worlds',
    version: '4.0',
    author: 'DoubleYou',
    description:
      'Четкая карта Скайрима и других миров улучшает погоду на карте для улучшения видимости, модифицирует камеру карты для оптимального просмотра и добавляет недостающие карты мира Пирамиды Душ, Забытой Долины, Черного Предела, Совнгарда и Скульдафна. Дополнительные правила DynDOLOD могут быть использованы для добавления недостающих деталей на карту. Ох. Чуть не забыл. Я также добавил дороги!',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/56367',
    files: [
      {
        type: 'Main Files',
        name: 'A Clear Map of Skyrim and Other Worlds FOMOD',
        version: '4.0',
      },
    ],
    fomods: [
      {
        title: 'A Clear Map of Skyrim and Other Worlds FOMOD',
        pages: [
          {
            title: 'Options',
            sections: [
              {
                title: 'Core Files',
                type: 'checkbox',
                items: [
                  {
                    label: 'Core Files',
                    checked: true,
                  },
                ],
              },
              {
                title: 'DynDOLOD rules',
                type: 'radio',
                items: [
                  {
                    label: 'DynDOLOD 3',
                    checked: true,
                  },
                ],
              },
              {
                title: 'LOD Setup',
                type: 'radio',
                items: [
                  {
                    label: 'With DynDOLOD LOD32',
                    checked: true,
                  },
                ],
              },
              {
                title: 'Other Worlds',
                type: 'checkbox',
                items: [
                  {
                    label: 'Beyond Reach',
                    checked: true,
                  },
                  {
                    label: 'Falskaar',
                    checked: true,
                  },
                  {
                    label: 'Wyrmstooth',
                    checked: true,
                  },
                ],
              },
              {
                title: 'Optional Components',
                type: 'checkbox',
                items: [
                  {
                    label: 'Remove Clouds',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'Patches',
            sections: [
              {
                title: 'Patches',
                type: 'checkbox',
                items: [
                  {
                    label: 'Оставьте пустым',
                    checked: false,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    translation: {
      version: '4.0',
      author: 'Andiewahl',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/155360',
      files: [
        {
          type: 'Main Files',
          name: 'A Clear Map of Skyrim and Other Worlds RU',
          version: '4.0',
        },
      ],
    },
  },
  {
    name: 'Dynamic snow For Map',
    version: 'V8',
    author: 'Hritik Vaishnav -SkyrimENB',
    description: 'Этот мод улучшает внешний вид динамического снега на карте мира.',
    downloadLink: 'https://www.nexusmods.com/skyrim/mods/29877',
    files: [
      {
        type: 'Main Files',
        name: 'Type 2',
        version: 'V8',
      },
    ],
  },
  {
    name: 'Atlas Map Markers SE - Updated with MCM',
    version: '3.0.4',
    author: 'Kronixx and kryptopyr',
    description:
      'Исследуйте Скайрим и откройте для себя скрытые и труднодоступные места, такие как лагеря в дикой природе, святилища, выходы из пещер и многое другое. Это обновление классического мода Kronixx, Atlas Map Markers. Он основан на оригинальном моде и добавляет опции MCM с полным контролем над новыми маркерами карты и всеми маркерами на ванильной карте.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/24104',
    files: [
      {
        type: 'Main Files',
        name: 'Atlas Map Markers',
        version: '3.0.4',
      },
    ],
    fomods: [
      {
        title: 'Atlas Map Markers',
        pages: [
          {
            title: 'Atlas Map Markers - Updated with MCM',
            sections: [
              {
                title: 'Main File',
                type: 'checkbox',
                items: [
                  {
                    label: 'Atlas Map Markers',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'Updated Third-Party Patches',
            sections: [
              {
                title: 'Patches',
                type: 'checkbox',
                items: [
                  {
                    label: "Obscure's College of Winterhold",
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
      version: '3.0.4',
      author: 'k©קaso√®',
      downloadLink:
        'https://gamer-mods.ru/load/skyrim_se/interfejs/atlas_map_markers_updated_with_mcm_se_ae/154-1-0-13402',
      files: [
        {
          type: 'Main Files',
          name: 'Здесь только переведенные файлы (esp и МСМ меню) на русский" 3.0.4. Требуется основной мод с Нексуса.',
          version: '3.0.4',
        },
      ],
      fomods: [
        {
          title: 'Atlas Map Markers',
          pages: [
            {
              title: 'Atlas Map Markers - Updated with MCM',
              sections: [
                {
                  title: 'Основной файл',
                  type: 'checkbox',
                  items: [
                    {
                      label: 'Atlas Map Markers',
                      checked: true,
                    },
                  ],
                },
              ],
            },
            {
              title: 'Обновленные сторонние патчи',
              sections: [
                {
                  title: 'Патчи',
                  type: 'checkbox',
                  items: [
                    {
                      label: "Obscure's College of Winterhold",
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
    name: 'CoMAP - Common Marker Addon Project',
    version: '4.3.0',
    author: 'Jelidity and Parapets',
    description:
      'CoMAP - это фреймворк на основе SKSE, который позволяет добавлять пользовательские дизайны маркеров карты/компаса, редактировать музыку для обнаружения маркеров и изменять назначения маркеров без какой-либо необходимости в ESP. Поставляется с большим разнообразием встроенных типов маркеров для использования и готовыми файлами конфигурации для различных модов.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/56123?',
    files: [
      {
        type: 'Main Files',
        name: 'CoMAP',
        version: '4.3.0',
      },
    ],
    tags: ['special-instructions'],
    fomods: [
      {
        title: 'CoMAP',
        pages: [
          {
            title: 'Core Files',
            sections: [
              {
                title: 'CoMAP Core Pack',
                type: 'checkbox',
                items: [
                  {
                    label: 'CoMAP for Skyrim 1.6.x',
                    checked: true,
                  },
                ],
              },
              {
                title: 'Configs',
                type: 'checkbox',
                items: [
                  {
                    label: 'CoMAP Config Pack',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'Undiscovered Marker Options',
            sections: [
              {
                title: 'Obscured Undiscovered Options',
                type: 'radio',
                items: [
                  {
                    label: 'Obscured Undiscovered Markers - Small Diamond',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'Addons',
            sections: [
              {
                title: 'Khajiit Caravan Markers',
                type: 'radio',
                items: [
                  {
                    label: 'Hidden Until Discovered',
                    checked: true,
                  },
                ],
              },
              {
                title: 'Jorrvaskr Map Marker',
                type: 'radio',
                items: [
                  {
                    label: 'None',
                    checked: true,
                  },
                ],
              },
              {
                title: 'Vigilants of Stendarr Map Marker',
                type: 'radio',
                items: [
                  {
                    label: 'None',
                    checked: true,
                  },
                ],
              },
              {
                title: 'Other Addons',
                type: 'checkbox',
                items: [
                  {
                    label: 'Orc Only Bandit Locations Use Orc Stronghold Marker',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'Beyond Skyrim',
            sections: [
              {
                title: 'Beyond Skyrim Extensions',
                type: 'checkbox',
                items: [
                  {
                    label: 'Оставьте пустым',
                    checked: false,
                  },
                ],
              },
              {
                title: 'Beyond Skyrim Design Swaps',
                type: 'checkbox',
                items: [
                  {
                    label: 'Оставьте пустым',
                    checked: false,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    translation: {
      version: '4.3.0',
      author: 'Andiewahl',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/155365',
      files: [
        {
          type: 'Main Files',
          name: 'CoMAP RU',
          version: '4.3.0',
        },
      ],
    },
    specialInstructions: {
      blocks: [
        {
          type: 'paragraph',
          content:
            'После установки откройте SKSE\\Plugins\\MapMarkerFramework.ini и измените следующее:',
        },
        {
          type: 'code',
          content: ['[Hud]', 'bObscuredUndiscovered=1'].join('\n'),
        },
      ],
    },
  },
  {
    name: 'Atlas Map Markers Overhaul',
    version: '1.4',
    author: 'Almalesbian',
    description:
      'Цель Atlas Overhaul — привести расположение оригинальных маркеров на карте Атласа в соответствие с существующими соглашениями об именах Skyrim, уделяя особое внимание единообразию истории! Включает в себя капитальный ремонт маркеров CoMAP для Atlas.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/137793?',
    files: [
      {
        type: 'Main Files',
        name: 'Atlas Map Markers Overhaul',
        version: '1.4',
      },
    ],
    fomods: [
      {
        title: 'Atlas Map Markers Overhaul',
        pages: [
          {
            title: 'Optional Patches',
            sections: [
              {
                title: 'Creations',
                type: 'checkbox',
                items: [
                  {
                    label: 'Anniversary Edition',
                    checked: true,
                  },
                ],
              },
              {
                title: 'Flat World Map Framework',
                type: 'checkbox',
                items: [
                  {
                    label: 'Оставьте пустым',
                    checked: false,
                  },
                ],
              },
              {
                title: 'Settlements',
                type: 'checkbox',
                items: [
                  {
                    label: 'The Great City of Winterhold',
                    checked: true,
                  },
                ],
              },
              {
                title: 'Quests and Adventures',
                type: 'checkbox',
                items: [
                  {
                    label: 'Skyrim Sewers 4',
                    checked: true,
                  },
                ],
              },
              {
                title: 'Miscellaneous',
                type: 'checkbox',
                items: [
                  {
                    label: 'Ordinator - Perks of Skyrim',
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
      version: '1.4',
      author: 'Andiewahl',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/155368',
      files: [
        {
          type: 'Main Files',
          name: 'Atlas Map Markers Overhaul RU',
          version: '1.4',
        },
      ],
    },
  },
];
