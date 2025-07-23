import { type ModProps } from '../../components/Mod/Mod';

// Секция: "Исправления и ресурсы - Неофициальные патчи"
export const unofficialPatches: ModProps[] = [
  {
    name: 'Unofficial High Definition Audio Project',
    version: '1.0',
    author: 'sharrken',
    description:
      'Восстановление оригинальных голосов и музыки Skyrim в высоком разрешении, основанное на гораздо более высоком качестве звука PS4 в качестве источника.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/18115',
    files: [
      {
        type: 'Optional Files',
        name: 'Voices RU - Part 1',
        version: '1.0',
      },
      {
        type: 'Optional Files',
        name: 'Voices RU - Part 2',
        version: '1.0',
      },
      {
        type: 'Miscellaneous Files',
        name: 'Music - UHQ',
        version: '1.0',
      },
    ],
  },
  {
    name: 'Unofficial Skyrim Special Edition Patch - USSEP',
    version: '4.3.5',
    author: 'The Unofficial Patch Project Team',
    description:
      'Комплексный мод для исправления ошибок для The Elder Scrolls V: Skyrim - Special Edition. Цель неофициального патча Skyrim Special Edition (также известного как USSEP) — в конечном итоге исправить все ошибки в Skyrim Special Edition, официально не разрешенные разработчиками, до пределов Creation Kit и инструментов, разработанных сообществом, в одном простом в установке пакете.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/266',
    files: [
      {
        type: 'Main Files',
        name: 'Unofficial Skyrim Special Edition Patch',
        version: '4.3.5',
      },
    ],
    translation: {
      version: '4.3.5',
      author: 'dem6nd',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/129696?',
      files: [
        {
          type: 'Main Files',
          name: 'Unofficial Skyrim Special Edition Patch - Russian',
          version: '4.3.5',
        },
      ],
    },
  },
  {
    name: 'Navigator - Navmesh Fixes',
    version: '1.6.1',
    author: 'tarlazo',
    description:
      'Этот мод улучшает некоторые из плохо оптимизированных ванильных навигационных сеток.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/52641',
    files: [
      {
        type: 'Main Files',
        name: 'Navigator - Navmesh Fixes',
        version: '1.6.1',
      },
    ],
    fomods: [
      {
        title: 'Navigator - Navmesh Fixes',
        pages: [
          {
            title: 'Navigator',
            sections: [
              {
                title: 'AIO or Modular',
                type: 'radio',
                items: [
                  {
                    label: 'All-in-one',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'All-in-one',
            sections: [
              {
                title: 'All-in-one',
                type: 'radio',
                items: [
                  {
                    label: '.esl',
                    checked: true,
                  },
                ],
              },
              {
                title: 'Interesting NPCs',
                type: 'checkbox',
                items: [
                  {
                    label: 'Interesting NPCs',
                    checked: true,
                  },
                ],
              },
              {
                title: 'Sunder and Wraithguard',
                type: 'radio',
                items: [
                  {
                    label: 'Sunder and Wraithguard - Editable Vault Cell',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'Optional Fixes',
            sections: [
              {
                title: 'Skyrim Sewers',
                type: 'checkbox',
                items: [
                  {
                    label: 'Skyrim Sewers',
                    checked: true,
                  },
                ],
              },
              {
                title: 'Vigilant',
                type: 'checkbox',
                items: [
                  {
                    label: 'Vigilant',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'Optional Extras',
            sections: [
              {
                title: 'Abandoned Prison',
                type: 'radio',
                items: [
                  {
                    label: 'Abandoned Prison AS-LAL',
                    checked: true,
                  },
                ],
              },
              {
                title: 'Rift Watchtower',
                type: 'checkbox',
                items: [
                  {
                    label: 'Оставьте пустым',
                    checked: false,
                  },
                ],
              },
              {
                title: 'Broken Oar script tweak',
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
      version: '1.6.1',
      author: 'Andiewahl',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/155197',
      files: [
        {
          type: 'Main Files',
          name: 'Navigator - Navmesh Fixes RU',
          version: '1.6.1',
        },
      ],
    },
  },
  {
    name: "Unofficial Skyrim Modder's Patch - USMP SE",
    version: '2.6.6',
    author: 'The Community - PlagueHush - sattyre',
    description:
      'Обширная подборка исправлений для исправлений ошибок, несоответствий и ошибок, которые могут быть обнаружены в модифицированном Skyrim и его DLC. Тщательно подобранная как для создателей модов, так и для игроков, чтобы помочь игровому опыту и служить базой, чтобы авторам модов не нужно было постоянно искать, исправлять и обходить одни и те же старые проблемы.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/49616',
    files: [
      {
        type: 'Main Files',
        name: "Unofficial Skyrim Modder's Patch - USMP SE 2.6.6",
        version: '2.6.6',
      },
    ],
    translation: {
      version: '2.6.6',
      author: 'The Community - PlagueHush - sattyre and NB - Nillck - translator',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/154565?',
      files: [
        {
          type: 'Main Files',
          name: "Unofficial Skyrim Modder's Patch - USMP SE - RU",
          version: '2.6.6',
        },
      ],
    },
  },
  {
    name: 'Skyrim Extended Cut - Saints and Seducers',
    version: '1.0.0.6',
    author: 'ECSS Dev Group',
    description:
      'Skyrim: Extended Cut - Saints and Seducers - это переработка и расширение официального творения Saints & Seducers. Несколько элементов из оригинального квеста были сохранены и расширены в новый, полностью озвученный квест.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/72772?',
    files: [
      {
        type: 'Main Files',
        name: 'Skyrim Extended Cut - Saints and Seducers',
        version: '1.0.0.6',
      },
    ],
    fomods: [
      {
        title: 'Название_FOMOD',
        pages: [
          {
            title: 'Core Files',
            sections: [
              {
                title: 'Extended Cut: Saints and Seducers',
                type: 'radio',
                items: [
                  {
                    label: 'Core Files',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'Creation Club Integrations',
            sections: [
              {
                title: 'Creation Club Integrations',
                type: 'checkbox',
                items: [
                  {
                    label: "Ruin's Edge",
                    checked: true,
                  },
                  {
                    label: 'Shadowrend',
                    checked: true,
                  },
                  {
                    label: 'Staff of Sheogorath',
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
      version: '1.0.0.6',
      author: 'Nocturn---Andiewahl',
      downloadLink:
        'https://drive.google.com/file/d/1EtTHcu46DmUp6T-PDzAqNWUlOTJzjWCk/view?usp=sharing',
      files: [
        {
          type: 'Main Files',
          name: 'Skyrim Extended Cut - Saints and Seducers RU.7z',
          version: '1.0.0.6',
        },
      ],
    },
  },
  {
    name: 'Skyrim Extended Cut Saints and Seducers - Quest Patch',
    version: '2.0',
    author: 'imamurlocmurgle',
    description:
      'Skyrim Extended Cut: Saints and Seducers представляет новое мировое пространство с новыми квестами и NPC, что означает, что он теоретически совместим с большинством модов из коробки. Проблема, по большей части, возникает из-за того, что один NPC редактируется, а не получает новый экземпляр.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/83336?',
    files: [
      {
        type: 'Main Files',
        name: 'esl plugin',
        version: 'V2',
      },
    ],
    translation: {
      version: 'V2',
      author: 'Andiwahl',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/102974',
      files: [
        {
          type: 'Main Files',
          name: 'esl plugin RU',
          version: 'V2',
        },
      ],
    },
  },
];
