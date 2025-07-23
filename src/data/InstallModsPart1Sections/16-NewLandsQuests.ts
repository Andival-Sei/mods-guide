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
];
