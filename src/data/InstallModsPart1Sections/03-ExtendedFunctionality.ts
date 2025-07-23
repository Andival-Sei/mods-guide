import { type ModProps } from '../../components/Mod/Mod';

// Секция: "Фреймворки расширений - Расширенная функциональность"
export const extendedFunctionality: ModProps[] = [
  {
    name: 'Base Object Swapper',
    version: '3.4.1',
    author: 'powerofthree',
    description:
      'Плагин SKSE и фреймворк для подмены базовых объектов и ссылок с помощью конфигурационных файлов.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/60805',
    files: [
      {
        type: 'Main Files',
        name: 'Base Object Swapper',
        version: '3.4.1',
      },
    ],
    fomods: [
      {
        title: 'Base Object Swapper',
        pages: [
          {
            title: 'Main',
            sections: [
              {
                title: 'DLL',
                type: 'radio',
                items: [
                  {
                    label: 'SSE v1.6.1130+ ("Anniversary Edition")',
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
    name: 'Behavior Data Injector',
    version: 'v0.13',
    author: 'Maxsu and Dropkicker',
    description:
      'Плагин SKSE, который позволяет добавлять новые переменные анимации и события через конфигурационные файлы без патча Nemesis.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/78146?',
    files: [
      {
        type: 'Main Files',
        name: 'Behavior Data Injector',
        version: 'v0.13',
      },
    ],
  },
  {
    name: 'Behavior Data Injector Universal Support',
    version: 'v0.13.0.1',
    author: 'doodlum',
    description:
      'Новейший плагин Behavior Data Injector SKSE с добавленной поддержкой AE и VR с PDB для отладки.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/78159?',
    files: [
      {
        type: 'Main Files',
        name: 'Behavior Data Injector Universal Support',
        version: 'v0.13.0.1',
      },
    ],
  },
  {
    name: 'Better Combat Escape - SSE',
    version: 'v0.83',
    author: 'Maxsu',
    description:
      'Плагин SKSE, который улучшает механизм побега / остановки боя в ванильной игре, чтобы вы не застревали в боевом состоянии с очень далеким врагом.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/43936',
    files: [
      {
        type: 'Main Files',
        name: 'Better Combat Escape - SSE V0.83',
        version: 'v0.83',
      },
    ],
  },
  {
    name: 'Better Combat Escape - NG',
    version: '1.0.1',
    author: 'doodlum',
    description: 'Обновление Better Combat Escape, с добавленной поддержкой SE и AE в одну DLL.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/72901?',
    files: [
      {
        type: 'Main Files',
        name: 'Better Combat Escape - NG',
        version: '1.0.1',
      },
    ],
  },
  {
    name: 'Container Distribution Framework',
    version: '3.0.2',
    author: 'SeaSparrow',
    description:
      'Фреймворк SKSE, который распределяет элементы по ссылкам на контейнеры на основе таких правил, как расположение, ссылка, количество, ключевое слово элемента и т. д.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/120152?',
    files: [
      {
        type: 'Main Files',
        name: 'Container Distribution Framework',
        version: '3.0.2',
      },
    ],
  },
  {
    name: 'Crash Logger SSE AE VR - PDB support',
    version: '1.15.0',
    author: 'alandtse',
    description:
      'Генерирует журналы сбоев, когда игра просто работает™. Это порт SSE/AE/VR, использующий источник MIT от fudgyduff. Он может читать PDB-файлы, которые могут распространять авторы модов.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/59818',
    files: [
      {
        type: 'Main Files',
        name: 'CrashLogger',
        version: '1.15.0',
      },
    ],
    tags: ['special-instructions'],
    specialInstructions: {
      blocks: [
        {
          type: 'paragraph',
          content:
            'Нам нужно изменить местоположение, где сохраняются журналы сбоев, выполните следующие действия:',
        },
        {
          type: 'ordered_list',
          items: [
            'Перейдите к <fp>Crash Logger SSE AE VR - PDB support\\SKSE\\Plugins\\CrashLogger.ini</fp>',
            'Откройте ini и найдите ;Crashlog output directory. Defaults to "Documents\\my games\\[Skyrim]\\SKSE"',
            'add Crashlog Directory = Тут напишите путь до папки overwrite по примеру C:\\Modding\\Skyrim\\MO2\\overwrite',
            'Сохраните и закройте ini',
          ],
        },
        {
          type: 'paragraph',
          content: 'Журналы сбоев теперь должны выводиться в папку Mod Organizer 2 Overwrite.',
        },
      ],
    },
  },
  {
    name: "Don't send me there again (dosemetha)",
    version: '1.0',
    author: 'vagonumero12',
    description:
      'Вы устали от квестов, отправляющих вас в подземелья, которые вы уже зачистили, когда в игре еще много непройденных подземелий? Этот мод исправляет это.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/72507?',
    files: [
      {
        type: 'Main Files',
        name: "Don't send me there again",
        version: '1.1.1',
      },
    ],
    fomods: [
      {
        title: "Don't send me there again",
        pages: [
          {
            title: 'Main',
            sections: [
              {
                title: 'DLL',
                type: 'radio',
                items: [
                  {
                    label: 'AE (newer versions)',
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
    name: 'Dynamic String Distributor (DSD)',
    version: '1.2.5',
    author: 'SkyHorizon',
    description: 'Плагин SKSE для динамической замены внутриигрового текста/строк.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/107676?',
    files: [
      {
        type: 'Main Files',
        name: 'Dynamic String Distributor',
        version: '1.2.5',
      },
    ],
  },
  {
    name: 'FormList Manipulator - FLM',
    version: '1.8.1',
    author: 'MaskedRPGFan',
    description:
      'Плагин SKSE, который позволяет добавлять Формы в FormLists при запуске игры с помощью конфигурационных файлов для уменьшения количества конфликтов между модами.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/74037?',
    files: [
      {
        type: 'Main Files',
        name: 'FormList Manipulator - FLM',
        version: '1.8.1',
      },
    ],
  },
  {
    name: 'Favorite Misc Items',
    version: '3.7.1',
    author: 'powerofthree',
    description:
      'Плагин SKSE, который позволяет вам добавлять в избранное книги/драгоценные камни душ/ключи и другие предметы.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/42750?',
    files: [
      {
        type: 'Main Files',
        name: 'Favorite Misc Items',
        version: '3.7.1',
      },
    ],
    fomods: [
      {
        title: 'Favorite Misc Items',
        pages: [
          {
            title: 'Main',
            sections: [
              {
                title: 'DLL',
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
    name: 'MergeMapper',
    version: '1.5.0',
    author: 'alandtse',
    description:
      'SKSE/VR DLL, которая автоматически позволяет скриптам Papyrus быть осведомленными, а также позволяет другим DLL поддерживать слияния zMerge.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/74689',
    files: [
      {
        type: 'Main Files',
        name: 'MergeMapper',
        version: '1.5.0',
      },
    ],
  },
  {
    name: 'Object Categorization Framework',
    version: '6.1.0',
    author: 'GroundAura',
    description:
      'OCF — это фреймворк-мод, который классифицирует предметы и другие объекты из сотен модов и предоставляет эти категории в виде ключевых слов и списков форм, которые могут использоваться в качестве условий другими модами.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/81469',
    files: [
      {
        type: 'Main Files',
        name: 'Object Categorization Framework',
        version: '6.1.0',
      },
    ],
    fomods: [
      {
        title: 'Object Categorization Framework',
        pages: [
          {
            title: 'Object Categorization Framework',
            sections: [
              {
                title: 'Install Type',
                type: 'radio',
                items: [
                  {
                    label: 'Full (Recommended)',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'Categorization Choices',
            sections: [
              {
                title: 'Info',
                type: 'checkbox',
                items: [
                  {
                    label: 'Info',
                    checked: true,
                  },
                ],
              },
              {
                title: 'Fruits or Vegetables',
                type: 'radio',
                items: [
                  {
                    label: 'Fruit',
                    checked: true,
                  },
                ],
              },
              {
                title: 'Green Pact',
                type: 'checkbox',
                items: [
                  {
                    label: 'Mead is allowed with Green Pact',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'Conditional Categorization',
            sections: [
              {
                title: 'Info',
                type: 'checkbox',
                items: [
                  {
                    label: 'Info',
                    checked: true,
                  },
                ],
              },
              {
                title: 'Coin Visuals',
                type: 'radio',
                items: [
                  {
                    label: 'Gold',
                    checked: true,
                  },
                ],
              },
              {
                title: 'Mod Dependant',
                type: 'checkbox',
                items: [
                  {
                    label: "Skyrim's Got Talent",
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
    name: 'PAPER',
    version: '2.2.4',
    author: 'Borgut1337',
    description:
      'Это плагин SKSE, который может быть загружен во время выполнения и предоставить дополнительную функциональность скриптового языка игры. Авторы модов могут использовать этот функционал для скриптов в своих модах.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/73849',
    files: [
      {
        type: 'Main Files',
        name: 'PAPER',
        version: '2.2.4',
      },
    ],
  },
  {
    name: 'Regional Save Names',
    version: '1.3.1',
    author: 'powerofthree',
    description:
      'Плагин SKSE, который исправляет сохранение не в соответствии с регионом, в котором они были сохранены.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/49698?',
    files: [
      {
        type: 'Main Files',
        name: 'Regional Save Names',
        version: '1.3.1',
      },
    ],
    fomods: [
      {
        title: 'Regional Save Names',
        pages: [
          {
            title: 'Main',
            sections: [
              {
                title: 'DLL',
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
    name: 'Simple Offence Suppression',
    version: '2.2.1',
    author: 'powerofthree',
    description:
      'Плагин SKSE, который предотвращает враждебность нейтральных NPC, когда вы случайно ударяете их.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/41764?',
    files: [
      {
        type: 'Main Files',
        name: 'Simple Offence Suppression',
        version: '2.2.1',
      },
    ],
    tags: ['special-instructions'],
    specialInstructions: {
      blocks: [
        {
          type: 'paragraph',
          content:
            'После установки откройте <fp>SKSE\\Plugins\\po3_SimpleOffenceSuppression.ini</fp> и измените следующее:',
        },
        {
          type: 'code',
          content: ['[Settings]', 'OnlyCombat = true'].join('\n'),
        },
      ],
    },
    fomods: [
      {
        title: 'Simple Offence Suppression',
        pages: [
          {
            title: 'Main',
            sections: [
              {
                title: 'DLL',
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
    name: 'Skyrim Save System Overhaul 3 (SSSO 3)',
    version: '1.13',
    author: 'Sthaagg Memnochs',
    description:
      'Skyrim Save System Overhaul 3 (SSSO3) — это полная переработка системы сохранений. Он призван полностью заменить оригинальную систему сохранения игры. Он включает в себя предустановленную систему, которая поможет вам легко его настроить.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/122343?',
    files: [
      {
        type: 'Main Files',
        name: 'Save System Overhaul 3',
        version: '1.13',
      },
    ],
  },
  {
    name: 'Spell Perk Item Distributor (SPID)',
    version: '7.1.3',
    author: 'powerofthree-sasnikol',
    description:
      'Плагин SKSE, который можно использовать для добавления заклинаний/прокачанных заклинаний/перков/предметов/прокачанных предметов/криков/пакетов к каждому NPC в игре, используя конфигурационные файлы.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/36869?',
    files: [
      {
        type: 'Miscellaneous Files',
        name: 'Spell Perk Item Distributor',
        version: '7.2.0.RC19',
      },
    ],
    fomods: [
      {
        title: 'Spell Perk Item Distributor',
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
    name: 'Whose Quest is it Anyway NG',
    version: '1.5',
    author: 'Ryan---VersuchDrei',
    description:
      'Меняется местами фраза «Предметы задания не могут быть удалены...» Сообщение для более информативного сообщения, информирующего вас о том, к какому заданию относится предмет.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/77360',
    files: [
      {
        type: 'Main Files',
        name: 'Whose Quest Is It Anyway',
        version: '1.5',
      },
    ],
    translation: {
      version: '1.5.0',
      author: 'Andiwahl',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/109247?',
      files: [
        {
          type: 'Main Files',
          name: 'Whose Quest is it Anyway RU',
          version: '1.5.0',
        },
      ],
    },
  },
  {
    name: 'Widescreen Scale Removed for 1-6-1130 and higher',
    version: '1.0.3',
    author: 'SkyHorizon',
    description:
      'Плагин SKSE, который удаляет широкоэкранную реализацию Bethesda с версии 1.6.1130+.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/136793?',
    files: [
      {
        type: 'Main Files',
        name: 'Widescreen Scale Removed',
        version: '1.0.3',
      },
    ],
  },
  {
    name: 'Yes Im Sure',
    version: '1.7.0',
    author: 'Ryan',
    description:
      'Этот мод отключает раздражающие сообщения с вопросом, уверены ли вы, что хотели бы создать/улучшить/выйти из меню.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/24898',
    files: [
      {
        type: 'Main Files',
        name: 'YesImSure',
        version: '1.7.0',
      },
    ],
  },
];
