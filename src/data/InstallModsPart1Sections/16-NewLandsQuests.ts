import { type ModProps } from '../../components/Mod/Mod';

// Секция: "Новые земли и задания"
export const newLandsQuests: ModProps[] = [
  {
    name: 'Falskaar',
    version: '2.2',
    author: 'AlexanderJVelicky',
    description:
      'Falskaar - это новый мод на земли, который добавляет совершенно новое мировое пространство в мир. В первый раз к нему можно добраться через подземелье, а затем на лодке. Цель Falskaar состояла в том, чтобы действовать как DLC, добавляя контент практически во всех областях. Вас ждет новая земля, места, люди, задания, подземелья и многое другое, что предстоит испытать игроку. Он добавляет примерно 20+ часов контента и отдает предпочтение всем типам персонажей.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/2057',
    files: [
      {
        type: 'Main Files',
        name: 'Falskaar V2_2',
        version: '2.2',
      },
    ],
    tags: ['bsa', 'cao'],
    specialInstructions: {
      blocks: [
        {
          type: 'cao',
          method: "Lexy's LOTD SE - BSA",
        },
      ],
    },
    translation: {
      version: '2.2+',
      author: 'DARTH---ALEXIEL',
      downloadLink: 'https://gamer-mods.ru/load/skyrim_se/kvesty/falskaar/157-1-0-6339',
      files: [
        {
          type: 'Main Files',
          name: 'Гугл-диск',
          version: '2.2+',
        },
      ],
    },
  },
  {
    name: 'Falskaar - Addons and Patches',
    version: '1.6',
    author: 'mnikjom',
    description: 'Этот мод представляет собой коллекцию настроек, улучшений и патчей для Falskaar.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/19454',
    files: [
      {
        type: 'Main Files',
        name: 'Falskaar - Addons and Patches 1.6',
        version: '1.6',
      },
    ],
    fomods: [
      {
        title: 'Falskaar - Addons and Patches 1.6',
        pages: [
          {
            title: 'Core',
            sections: [
              {
                title: 'Core',
                type: 'radio',
                items: [
                  {
                    label: 'Nothing',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'Patches and Addons',
            sections: [
              {
                title: 'Plugin Type',
                type: 'checkbox',
                items: [
                  {
                    label: 'Boat Location Patch ESPLite',
                    checked: true,
                  },
                  {
                    label: 'Unique Region Names Addon ESPLite',
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
      version: '1.6',
      author: 'DARTH---ALEXIEL',
      downloadLink:
        'https://gamer-mods.ru/load/skyrim_se/patchi/falskaar_addons_and_patches/153-1-0-8051',
      files: [
        {
          type: 'Main Files',
          name: 'Основной архив (316 Kb)',
          version: '1.6',
        },
      ],
      fomods: [
        {
          title: 'Falskaar - Addons and Patches 1.6',
          pages: [
            {
              title: 'Core',
              sections: [
                {
                  title: 'Core',
                  type: 'radio',
                  items: [
                    {
                      label: 'Nothing',
                      checked: true,
                    },
                  ],
                },
              ],
            },
            {
              title: 'Patches and Addons',
              sections: [
                {
                  title: 'Plugin Type',
                  type: 'checkbox',
                  items: [
                    {
                      label: 'Boat Location Patch ESPLite',
                      checked: true,
                    },
                    {
                      label: 'Unique Region Names Addon ESPLite',
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
    name: 'Comprehensive Falskaar Fixes',
    version: '1.4.0',
    author: 'Wartortle',
    description:
      'Falskaar от Alexander J Velicky — это определяющий новый мод размером с DLC, который существует уже много лет. Замечательный мод, который, к сожалению, больше не получает обновлений, и на протяжении многих лет сообщалось о множестве воспроизводимых ошибок. Этот мод перестраивает все квесты и скрипты с нуля для повышения стабильности.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/62819?',
    files: [
      {
        type: 'Main Files',
        name: 'Comprehensive Falskaar Fixes',
        version: '1.4.0',
      },
    ],
    translation: {
      version: '1.4.0',
      author: 'Andiwahl',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/103844',
      files: [
        {
          type: 'Main Files',
          name: 'Comprehensive Falskaar Fixes - RU',
          version: '1.4.0',
        },
      ],
    },
  },
  {
    name: 'Helgen Reborn',
    version: 'V106.SSE',
    author: 'Mike Hancho aka Balok',
    description:
      'Окончательный мод на квест для восстановления Хелгена! Узнайте легенду о Хранителях Хатту, воссоединив двух старых солдат и вступив в многолетнюю вражду с безжалостным и могущественным юстициаром из альдмерского доминиона.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/5673',
    files: [
      {
        type: 'Optional Files',
        name: 'Helgen Reborn SSE Version 106 With loose files',
        version: 'V106.SSE',
      },
    ],
    tags: ['cao', 'removal-tool'],
    specialInstructions: {
      blocks: [
        {
          type: 'mo2_removal_tool',
          filesToRemove: [
            'textures\\actors\\character\\facegendata\\facetint\\helgen reborn.esp\\*.tga',
          ],
        },
        {
          type: 'cao',
          method: "Lexy's LOTD SE - BSA",
        },
      ],
    },
    translation: {
      version: '1.0',
      author: 'SkyKatarsis',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/133405',
      files: [
        {
          type: 'Main Files',
          name: 'Helgen Reborn SSE Version 106 RUS SkyKatarsis',
          version: '1.0',
        },
      ],
    },
  },
  {
    name: 'Helgen Reborn with Level and Quest Requirement',
    version: '1.0',
    author: 'ikillyou233 - feeddanoob',
    description:
      'Добавляет настраиваемое требование к заданию для «Возрожденного Хелгена». Курьер также дает вам книгу, когда уровень и дополнительные условия задания выполнены.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/63923?',
    files: [
      {
        type: 'Main Files',
        name: 'Helgen Reborn level req MCM',
        version: '1.0',
      },
    ],
    translation: {
      version: 'Версия',
      author: 'Andiwahl',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/103846',
      files: [
        {
          type: 'Main Files',
          name: 'Helgen Reborn level req MCM - RU',
          version: 'Версия',
        },
      ],
    },
  },
  {
    name: "Konahrik's Accoutrements",
    version: '5.5.3',
    author: 'Edhelsereg',
    description:
      'Этот мод делает встречи с именными драконьими жрецами более сложными и полезными.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/22206?',
    files: [
      {
        type: 'Main Files',
        name: "Konahrik's Accoutrements - Dragon Priest Armory",
        version: '5.5.3',
      },
    ],
    tags: ['cao', 'removal-tool'],
    specialInstructions: {
      blocks: [
        {
          type: 'cao',
          method: "Lexy's LOTD SE - BSA",
        },
        {
          type: 'mo2_removal_tool',
          filesToRemove: ['konahrik_accoutrements.esp'],
        },
      ],
    },
  },
  {
    name: "Konahrik's Accoutrements - Fixed Esp",
    version: '1.0.1',
    author: 'Edhelsereg and MaskedRPGFan',
    description: "Исправленный esp для Konahrik's Accoutrements.",
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/73689',
    files: [
      {
        type: 'Main Files',
        name: "Konahrik's Accoutrements - Fixed Esp",
        version: '1.0.1',
      },
    ],
    translation: {
      version: '1.0.1',
      author: 'Andiwahl',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/103847',
      files: [
        {
          type: 'Main Files',
          name: "Konahrik's Accoutrements - Fixed Esp - RU",
          version: '1.0.1',
        },
      ],
    },
  },
  {
    name: "Konahrik's Accoutrements Upscaled Textures",
    version: '1',
    author: 'kartoffel',
    description: "Этот мод увеличивает текстуры из Konahrik's Accoutrements.",
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/34417?',
    files: [
      {
        type: 'Main Files',
        name: 'KAUP',
        version: '1',
      },
    ],
  },
  {
    name: 'Abjuration Affects Acolytes',
    version: '1.2',
    author: 'Korwin',
    description:
      "Konahrik's Accoutrements добавляют заклинание под названием «Отречение», на которое у драконьих жрецов и нежити сильная аллергия. Этот мод также позволяет заклинанию наносить урон драконьим жрецам, добавленным DLC Dragonborn на Солстхейме.",
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/73568',
    files: [
      {
        type: 'Main Files',
        name: 'Abjuration Affects Acolytes',
        version: '1.2',
      },
    ],
    translation: {
      version: '1.2',
      author: 'Andiwahl',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/103850',
      files: [
        {
          type: 'Main Files',
          name: 'Abjuration Affects Acolytes - RU',
          version: '1.2',
        },
      ],
    },
  },
  {
    name: 'Moon and Star',
    version: '3.2',
    author: 'Gan Xingba',
    description:
      'В Скайриме был замечен таинственный и могущественный преступник, по следу которого идут охотники из Морровинда. Однако на карту может быть поставлено нечто большее, чем кажется, и этот преступник может быть знаком...',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/4301',
    files: [
      {
        type: 'Main Files',
        name: 'Moon and Star',
        version: '3.2',
      },
    ],
    tags: ['bsa', 'cao', 'removal-tool', 'special-instructions'],
    translation: {
      version: '3.2',
      author: 'Wuzmart',
      downloadLink: 'https://gamer-mods.ru/load/skyrim_se/kvesty/moon_and_star_se/157-1-0-12913',
      files: [
        {
          type: 'Main Files',
          name: 'Moon And Star (SE).zip',
          version: '3.2',
        },
      ],
    },
    specialInstructions: {
      blocks: [
        {
          type: 'paragraph',
          content: 'При установке перевода не копируйте файл MoonAndStarGoodbyes.esp.',
        },
        {
          type: 'cao',
          method: "Lexy's LOTD SE - BSA",
        },
        {
          type: 'mo2_removal_tool',
          filesToRemove: ['MoonAndStarGoodbyes.esp'],
        },
      ],
    },
  },
  {
    name: 'Moon and Star Replacer',
    version: '3.2',
    author: 'Darkladylexy and SirJesto',
    description:
      'Этот мод очищает и исправляет Moon and Star. Особая благодарность SirJesto за помощь в этом.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/85672',
    files: [
      {
        type: 'Optional Files',
        name: 'Moon and Star Replacer',
        version: '3.2',
      },
    ],
    translation: {
      version: '3.2',
      author: 'Andiwahl',
      downloadLink:
        'https://drive.google.com/file/d/1r46QgDN8__i8hRGzSkSVw7qGClfJrJzN/view?usp=sharing',
      files: [
        {
          type: 'Main Files',
          name: 'Moon and Star Replacer - RU',
          version: '3.2',
        },
      ],
    },
  },
  {
    name: 'Better Moon and Star Navmesh',
    version: '1.0.2',
    author: 'Wartortle',
    description:
      'Moon and Star — отличный квестовый мод, который существует всегда. Однако навигационная сетка очень плоха и активно ломается во многих местах. Этот патч наконец-то исправляет navmesh.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/110521',
    files: [
      {
        type: 'Main Files',
        name: 'Better Moon and Star Navmesh',
        version: '1.0.2',
      },
      {
        type: 'Optional Files',
        name: 'BetterMASNavmesh - 3DNPC patch',
        version: '1.0.0',
      },
    ],
    translation: {
      version: '1.0.2',
      author: 'Andiewahl',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/155380',
      files: [
        {
          type: 'Main Files',
          name: 'Better Moon and Star Navmesh - RU',
          version: '1.0.2',
        },
        {
          type: 'Optional Files',
          name: 'BetterMASNavmesh - 3DNPC patch - RU',
          version: '1.0.0',
        },
      ],
    },
  },
  {
    name: 'Moonpath to Elsweyr SSE',
    version: '1.16.1',
    author: 'MuppetPuppet and An_Old_Sock',
    description:
      'Этот мод добавляет квест размером DLC, действие которого происходит в землях Эльсвейра.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/4341',
    files: [
      {
        type: 'Main Files',
        name: 'Moonpath to Elsweyr SSE',
        version: '1.16.1',
      },
    ],
    tags: ['bsa', 'cao'],
    specialInstructions: {
      blocks: [
        {
          type: 'cao',
          method: "Lexy's LOTD SE - BSA",
        },
      ],
    },
  },
  {
    name: 'Unofficial Moonpath to Elsweyr Patch',
    version: '1.5.0',
    author: 'Joseph Russell',
    description:
      'Этот мод представляет собой неофициальный патч для решения различных проблем с Moonpath to Elsweyr.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/15882',
    files: [
      {
        type: 'Main Files',
        name: 'Unofficial Moonpath to Elsweyr Patch v1.5.0',
        version: '1.5.0',
      },
    ],
    translation: {
      version: '1.5.0',
      author: 'Andiwahl',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/103851',
      files: [
        {
          type: 'Main Files',
          name: 'Unofficial Moonpath to Elsweyr Patch v1.5.0 - RU',
          version: '1.5.0',
        },
      ],
    },
  },
  {
    name: 'Moonpath To Elsweyr Retexture SE',
    version: '1.0',
    author: 'Xavbio',
    description:
      'Этот мод переделывает большинство пользовательских текстур из Moonpath To Elsweyr.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/67295?',
    files: [
      {
        type: 'Main Files',
        name: 'Moonpath To Elsweyr Retexture SE',
        version: '1.0',
      },
      {
        type: 'Optional Files',
        name: 'Siligonder Armor - Sigil On Shoulder',
        version: '1.1',
      },
    ],
  },
  {
    name: 'Moonpath to Elsweyr- Hyena Replacer',
    version: '1.0',
    author: 'SassiestAssassin',
    description: 'Этот мод заменяет модели гиен на новую модель',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/66116',
    files: [
      {
        type: 'Main Files',
        name: 'Moonpath Hyena Replacer',
        version: '1.0',
      },
    ],
  },
  {
    name: 'Moonpath to Elsweyr SSE - Music - Weather and Other Fixes',
    version: '3.2',
    author: 'ToosTruus',
    description: 'Мой взгляд на исправление ситуации с Moonpath to Elsweyr SSE.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/97517',
    files: [
      {
        type: 'Main Files',
        name: 'Moonpath to Elsweyr SSE - Fixes',
        version: '3.2',
      },
    ],
    fomods: [
      {
        title: 'Moonpath to Elsweyr SSE - Fixes',
        pages: [
          {
            title: 'Step 1',
            sections: [
              {
                title: 'Main Plugin and Assets',
                type: 'checkbox',
                items: [
                  {
                    label: 'Moonpath Fixes',
                    checked: true,
                  },
                ],
              },
              {
                title: 'ESMyfied Plugin Replacer',
                type: 'checkbox',
                items: [
                  {
                    label: 'Recommended',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'Step 2',
            sections: [
              {
                title: 'Blacksmith Forge Patch',
                type: 'checkbox',
                items: [
                  {
                    label: 'Patch',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'Step 3',
            sections: [
              {
                title: 'Optional Patches',
                type: 'checkbox',
                items: [
                  {
                    label: 'Hyena Replacer Patch',
                    checked: true,
                  },
                ],
              },
              {
                title: 'Forest Spiders',
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
            title: 'Step 4',
            sections: [
              {
                title: 'Modern Lighting Overhaul',
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
      version: '3.2',
      author: 'Andiewahl',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/155412',
      files: [
        {
          type: 'Main Files',
          name: 'Moonpath to Elsweyr SSE - Fixes - RU',
          version: '3.2',
        },
      ],
    },
  },
  {
    name: 'Teldryn Serious - A Teldryn Sero Backstory Quest SSE',
    version: '7.0.0',
    author: 'Undriel',
    description:
      'Этот мод представляет собой дружественный к лору, полностью озвученный квест об опасном прошлом Телдрина Серо.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/5541',
    files: [
      {
        type: 'Main Files',
        name: 'Teldryn Serious Enhanced Edition',
        version: '7.0.0',
      },
    ],
    translation: {
      version: '7.0.0',
      author: 'Andiewahl',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/155413',
      files: [
        {
          type: 'Main Files',
          name: 'Teldryn Serious Enhanced Edition - RU',
          version: '7.0.0',
        },
      ],
    },
  },
  {
    name: 'Teldryn Serious Patch',
    version: '1.1.5',
    author: 'tarlazo',
    description:
      'Этот мод добавляет несколько маркеров столкновений, чтобы предотвратить падение NPC в воду во время боя с кораблем и, таким образом, затруднить выполнение задания.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/32415',
    files: [
      {
        type: 'Main Files',
        name: 'Teldryn Serious Patch',
        version: '1.1.5',
      },
      {
        type: 'Update Files',
        name: 'Daedric Shrines - Azura patches',
        version: '1.0.0',
      },
    ],
    fomods: [
      {
        title: 'Daedric Shrines - Azura patches',
        pages: [
          {
            title: 'Установщик пакетов BAIN',
            sections: [
              {
                title: 'Выберите следующее:',
                type: 'checkbox',
                items: [
                  {
                    label: 'For TSR and SoA',
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
      version: '1.1.5',
      author: 'Andiewahl',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/155415',
      files: [
        {
          type: 'Main Files',
          name: 'Teldryn Serious Patch - RU',
          version: '1.1.5',
        },
      ],
    },
  },
  {
    name: 'The Forgotten City',
    version: '1.8',
    author: 'Nick Pearce',
    description:
      'The Forgotten City предлагает уникальный игровой процесс: расследование загадочного убийства, действие которого происходит в древнем подземном городе. В ней есть мрачный, нелинейный сюжет, в котором вы будете исследовать город в нескольких временных линиях, допрашивать подозреваемых, решать сложные моральные дилеммы и сражаться с новыми врагами.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/1179',
    files: [
      {
        type: 'Main Files',
        name: 'The Forgotten City',
        version: '1.8',
      },
    ],
    tags: ['bsa', 'cao', 'xedit-qac'],
    translation: {
      version: '1.8',
      author: 'Nocturn',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/86646',
      files: [
        {
          type: 'Main Files',
          name: 'The Forgotten City RUS',
          version: '1.8',
        },
      ],
    },
    specialInstructions: {
      blocks: [
        {
          type: 'cao',
          method: "Lexy's LOTD SE - BSA",
        },
      ],
    },
  },
  {
    name: 'Forgotten City Music Fixer',
    version: '2.2',
    author: 'Maleficus',
    description:
      'Этот мод исправляет печально известную ошибку с Forgotten City, из-за которой музыка продолжает играть после завершения мода.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/54019',
    files: [
      {
        type: 'Main Files',
        name: 'The Forgotten City Music Bug Fixer - Version 2.2 (esl flagged)',
        version: '2.2',
      },
    ],
    translation: {
      version: '2.2',
      author: 'Andiewahl',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/155417',
      files: [
        {
          type: 'Main Files',
          name: 'The Forgotten City Music Bug Fixer - Version 2.2 (',
          version: '2.2',
        },
      ],
    },
  },
  {
    name: 'The Forgotten City - Decree of the Arbiter spell music Fix',
    version: '1.0',
    author: 'Arctic4161',
    description:
      'Это музыкальный фиксатор для заклинания Постановление арбитра. Мне нравится мощь, но музыка продолжает звучать.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/64730',
    files: [
      {
        type: 'Main Files',
        name: 'The Forgotten City decree Music Spell Fix',
        version: '1.0',
      },
    ],
    translation: {
      version: '1.0',
      author: 'Andiewahl',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/155418',
      files: [
        {
          type: 'Main Files',
          name: 'The Forgotten City decree Music Spell Fix - RU',
          version: '1.0',
        },
      ],
    },
  },
  {
    name: 'The Gray Cowl of Nocturnal SE',
    version: '1.3',
    author: 'MannyGT',
    description:
      'Долгое время никто не претендовал на Серый капюшон Ноктюрнал. Последний из них был чемпионом Сиродила в последние дни Третьей эры. Но что произошло после Кризиса Обливиона? Где сейчас находится Серый капюшон? Вы вор, и во время кражи и карманных краж предметов по всему миру перед вами появляется видение. Серый капюшон зовет. Большое путешествие началось... Куда вы теперь пойдете? Вас ждет множество мест. Легендарные места, таинственные места, древние места, которые нужно очистить от песков времени. Серый капюшон хочет вас.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/4509',
    files: [
      {
        type: 'Main Files',
        name: 'The Gray Cowl of Nocturnal',
        version: '1.3',
      },
    ],
    tags: ['bsa', 'cao'],
    translation: {
      version: '1.3',
      author: 'Dalarin',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/34147',
      files: [
        {
          type: 'Main Files',
          name: 'The Gray Cowl of Nocturnal SE RU',
          version: '1.3',
        },
      ],
    },
    specialInstructions: {
      blocks: [
        {
          type: 'cao',
          method: "Lexy's LOTD SE - BSA",
        },
      ],
    },
  },
  {
    name: 'The Gray Cowl of Nocturnal - Bounty fix...and More',
    version: '1.0',
    author: 'Sthaagg Memnochs',
    description:
      'Замените manny_gf_graycowlscriptv2.pex, чтобы решить проблему с наградами. Добавляет отдельную награду за серого лиса. Объедините награду за игрока и серого лиса, если стражник заметит вас, когда вы надеваете/снимаете капюшон.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/94939?',
    files: [
      {
        type: 'Main Files',
        name: 'Gray Cowl of Nocturnal - Bounty fix',
        version: '1.0',
      },
    ],
  },
  {
    name: 'The Gray Cowl of Nocturnal SSE - HD pack',
    version: '1.2',
    author: 'Salchichen',
    description:
      'Этот мод направлен на улучшение общего визуального качества мода Gray Cowl of Nocturnal за счет замены текстур на новые в разрешении 2k и сжатия BC7.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/7644',
    files: [
      {
        type: 'Main Files',
        name: 'The Grey Cowl of Nocturnal SE - HD Texture pack',
        version: '1.2',
      },
    ],
  },
  {
    name: 'Gray Cowl of Nocturnal Alikr Flora Overhaul SE',
    version: '1.7se',
    author: 'sa547',
    description: 'Дополнительная пустынная флора для The Gray Cowl of Nocturnal MannyGT',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/10141',
    files: [
      {
        type: 'Main Files',
        name: 'Gray Cowl of Nocturnal - Alikr Flora Overhaul (LOOSE)',
        version: '1.7se',
      },
    ],
    translation: {
      version: '1.7se',
      author: 'Andiewahl',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/155470',
      files: [
        {
          type: 'Main Files',
          name: 'Gray Cowl of Nocturnal - Alikr Flora Overhaul - RU',
          version: '1.7se',
        },
      ],
    },
  },
];
