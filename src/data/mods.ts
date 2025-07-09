import type { ModProps } from '../components/Mod/Mod';

export const modsData: ModProps[] = [
  {
    name: '.NET 8.0 SDK',
    version: '8.0.404',
    author: 'Microsoft',
    description:
      '.NET — это бесплатная, кроссплатформенная платформа разработчика с открытым исходным кодом для создания различных типов приложений. Это необходимо для правильной работы Synthesis и Scrambled Bugs.',
    downloadLink:
      'https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-8.0.404-windows-x64-installer',
    files: [
      {
        type: 'Main Files',
        name: '.NET 8.0 SDK (v8.0.404) - Windows x64 Installer',
        version: '8.0.404',
      },
    ],
    tags: ['tool'],
  },
  {
    name: 'Microsoft Visual C++ Redistributable for Visual Studio 2015, 2017, 2019, and 2022',
    version: 'X64',
    author: 'Microsoft',
    description:
      'Распространяемый компонент Visual C++ устанавливает библиотеки времени выполнения Microsoft C и C++ (MSVC). Эти библиотеки требуются многим приложениям, созданным с использованием средств Microsoft C и C++. Это необходимо для правильной работы Mod Organizer 2 и LOOT.',
    downloadLink:
      'https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022',
    files: [
      {
        type: 'Main Files',
        name: 'Microsoft Visual C++ Redistributable for Visual Studio 2015, 2017, 2019, and 2022',
        version: 'X64',
      },
    ],
    tags: ['tool'],
  },
  {
    name: 'Skyrim Special Edition',
    version: '1.6.170',
    author: 'Bethesda',
    description: 'Тод Говард сказал, что это нужно купить.',
    downloadLink: 'http://store.steampowered.com/agecheck/app/489830/',
    files: [
      {
        type: 'Main Files',
        name: 'Skyrim Special Edition',
        version: '1.6.170',
      },
    ],
  },
  {
    name: 'Skyrim Anniversary Upgrade',
    version: '1.6.170',
    author: 'Bethesda',
    description: 'Купили? Ну купите ещё раз!',
    downloadLink: 'https://store.steampowered.com/app/1746860',
    files: [
      {
        type: 'Main Files',
        name: 'Skyrim Anniversary Upgrade',
        version: '1.6.170',
      },
    ],
  },
  {
    name: 'Skyrim Special Edition: Creation Kit',
    version: '1.6.1378.1',
    author: 'Bethesda',
    description:
      'Creation Kit — это официальный инструмент Bethesda для создания и редактирования модов.',
    downloadLink: 'https://store.steampowered.com/app/1946180/Skyrim_Special_Edition_Creation_Kit/',
    files: [
      {
        type: 'Main Files',
        name: 'Skyrim Anniversary Upgrade',
        version: '1.6.1378.1',
      },
    ],
    tags: ['tool'],
  },
  {
    name: 'Creation Kit Platform Extended for Skyrim',
    version: '0.5-b143',
    author: 'Nukem-perchik71',
    description: 'Различные патчи и исправления ошибок для Creation Kit SE, чтобы облегчить жизнь.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/71371',
    files: [
      {
        type: 'Main Files',
        name: 'CK Platform Extended 0.5-b143',
        version: '0.5-b143',
      },
    ],
    tags: ['tool', 'special-instructions'],
    specialInstructions: {
      blocks: [
        {
          type: 'unordered_list',
          items: [
            [
              {
                text: 'Вручную распакуйте мод и поместите в основной каталог Skyrim Special Edition.',
              },
            ],
          ],
        },
      ],
    },
  },
  {
    name: 'LOOT - Load Order Optimisation Tool',
    version: '0.26.1',
    author: 'LOOT team',
    description:
      'LOOT — это утилита для оптимизации порядка загрузки, которая критически важна для любого модифицированного запуска Skyrim, особенно с таким длинным списком, как у нас.',
    downloadLink: 'https://www.nexusmods.com/site/mods/439',
    files: [
      {
        type: 'Main Files',
        name: 'LOOT v0.26.1 - Installer (64-Bit)',
        version: '0.26.1',
      },
    ],
    tags: ['tool', 'special-instructions'],
    specialInstructions: {
      blocks: [
        {
          type: 'paragraph',
          content: [
            {
              text: 'При первой загрузке у LOOT не будет данных мастер-листа или групп модов по умолчанию. (Цветной текст указывает на цвет узла (по умолчанию).',
            },
          ],
        },
        {
          type: 'ordered_list',
          items: [
            [
              {
                text: 'Выключите Mod Organizer 2, если он открыт. (Если вы следуете руководству впервые, MO2 еще даже не установлен.)',
              },
            ],
            [{ text: 'Запустите LOOT из установленного места.' }],
            [
              {
                text: 'После загрузки LOOT отсортируйте порядок загрузки, нажав на иконку с надписью «Сортировать плагины» (она имеет три строки друг над другом). Это в верхнем левом углу',
              },
            ],
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              text: 'Если вы ранее установили LOOT, вам необходимо очистить все старые пользовательские правила, которые вы могли добавить:',
            },
          ],
        },
        {
          type: 'ordered_list',
          items: [
            [
              { text: 'Найдите и нажмите ' },
              { text: '«Игра»', highlight: true },
              { text: ' в верхнем меню, затем выберите ' },
              { text: '«Очистить все метаданные пользователя...»', highlight: true },
              { text: ', затем нажмите ' },
              { text: '«Да»', highlight: true },
              { text: '. Это гарантирует, что у вас будет четкий набор правил.' },
            ],
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              text: 'Руководство требует добавления новых групп модов LOOT для правильной сортировки порядка загрузки:',
            },
          ],
        },
        {
          type: 'ordered_list',
          items: [
            [
              {
                text: 'Запустите LOOT (если он все еще не загружен с последнего шага. Если вы закрыли его, вы можете загрузить его через MO2 на этом этапе, если хотите.)',
              },
            ],
            [
              { text: 'В верхнем меню найдите и нажмите «' },
              { text: 'Игра', highlight: true },
              { text: '».' },
            ],
            [
              { text: 'Нажмите кнопку ' },
              { text: 'Редактировать группы', highlight: true },
              { text: '.' },
            ],
            [
              { text: 'В поле «Название группы» введите ' },
              { text: '«Village Mods»', highlight: true },
              { text: ', затем нажмите кнопку «' },
              { text: 'Добавить новую группу', highlight: true },
              { text: '».' },
            ],
            [
              { text: 'Щелкните левой кнопкой мыши узел ' },
              { text: '«Alternate Start', highlight: true },
              { text: '», чтобы выбрать его.' },
            ],
            [
              { text: 'Дважды щелкните и удерживайте, перетаскивая линию от ' },
              { text: 'Alternate Start', highlight: true },
              { text: ' к узлу ' },
              { text: 'Village Mods', highlight: true },
              { text: ', который вы создали. ' },
              { text: 'Village Mods', highlight: true },
              { text: ' должны стать зелеными.' },
            ],
            [
              { text: 'Создайте новую группу под названием ' },
              { text: 'Trivial Smelters of Skyrim', highlight: true },
              { text: ',' },
            ],
            [
              { text: 'Подключите ' },
              { text: 'Village Mods', highlight: true },
              { text: ' к созданному вами узлу ' },
              { text: 'Trivial Smelters of Skyrim', highlight: true },
              { text: '. ' },
              { text: 'Trivial Smelters of Skyrim', highlight: true },
              { text: ' должны стать зелеными.' },
            ],
            [
              { text: 'Подключите ' },
              { text: 'Trivial Smelters of Skyrim', highlight: true },
              { text: ' к ' },
              { text: 'Follower Frameworks', highlight: true },
              { text: ', Trivial Smelters of Skyrim должны стать серыми.' },
            ],
            [
              { text: 'Создайте новую группу с именем ' },
              { text: 'CCOR Patches', highlight: true },
            ],
            [
              { text: 'Щелкните левой кнопкой мыши и перетащите линию от ' },
              { text: 'Cell Encounter Zones', highlight: true },
              { text: ' к узлу ' },
              { text: 'CCOR Patches', highlight: true },
              { text: ', который вы создали. CCOR Patches должны стать зелеными.' },
            ],
            [
              { text: 'Создайте новую группу с именем ' },
              { text: 'CACO Patches', highlight: true },
            ],
            [
              { text: 'Подключите ' },
              { text: 'CCOR Patches', highlight: true },
              { text: ' к созданному узлу ' },
              { text: 'CACO Patches', highlight: true },
              { text: '. CACO Patches должны стать зелеными.' },
            ],
            [{ text: 'Создайте новую группу с именем ' }, { text: 'OWL', highlight: true }],
            [
              { text: 'Подключите ' },
              { text: 'патчи CACO', highlight: true },
              { text: ' к созданному узлу ' },
              { text: 'OWL', highlight: true },
              { text: '. OWL должен стать зеленым.' },
            ],
            [
              { text: 'Создайте новую группу под названием ' },
              { text: 'Snazzy Patches', highlight: true },
            ],
            [
              { text: 'Подключите ' },
              { text: 'OWL', highlight: true },
              { text: ' к ноде ' },
              { text: 'Snazzy Patches', highlight: true },
              { text: ', которую вы создали. Snazzy Patches должны стать зелеными.' },
            ],
            [
              { text: 'Создайте новую группу под названием ' },
              { text: 'Merge Patches', highlight: true },
            ],
            [
              { text: 'Подключите ' },
              { text: 'Snazzy Patches', highlight: true },
              { text: ' к ноду ' },
              { text: 'Merge Patches', highlight: true },
              { text: ', который вы создали. Merge Patches должно стать зеленым.' },
            ],
            [
              { text: 'Подключите ' },
              { text: 'Merge Patches к', highlight: true },
              { text: ' ' },
              { text: 'Cell Water', highlight: true },
              { text: '. Merge Patches должны стать серыми.' },
            ],
            [{ text: 'Создайте новую группу под названием ' }, { text: 'LUX', highlight: true }],
            [
              { text: 'Щелкните левой кнопкой мыши и перетащите линию от ' },
              { text: 'Cell Weathers & Lighting', highlight: true },
              { text: ' к узлу ' },
              { text: 'LUX', highlight: true },
              { text: ', который вы создали, LUX должен стать зеленым.' },
            ],
            [
              { text: 'Создайте новую группу под названием ' },
              { text: 'LUX Orbis', highlight: true },
            ],
            [
              { text: 'Подключите ' },
              { text: 'LUX', highlight: true },
              { text: ' к ноде ' },
              { text: 'LUX Orbis', highlight: true },
              { text: ', который вы создали, LUX Orbis должен стать зеленым.' },
            ],
            [
              { text: 'Создайте новую группу под названием ' },
              { text: 'LUX Via', highlight: true },
            ],
            [
              { text: 'Подключите ' },
              { text: 'LUX Orbis', highlight: true },
              { text: ' к узлу ' },
              { text: 'LUX Via', highlight: true },
              { text: ', который вы создали, LUX Via должен стать зеленым.' },
            ],
            [
              { text: 'Подключите ' },
              { text: 'LUX Via', highlight: true },
              { text: ' к ' },
              { text: 'Open Cities Skyrim', highlight: true },
              { text: ', LUX Via должен стать серым.' },
            ],
            [
              { text: 'Создайте новую группу с именем ' },
              { text: 'NPC Retextures', highlight: true },
            ],
            [
              { text: 'Щелкните левой кнопкой мыши и перетащите линию из раздела ' },
              { text: 'Khajiit Speak', highlight: true },
              { text: ' в узел ' },
              { text: 'NPC Retextures', highlight: true },
              { text: ', который вы создали, NPC Retextures должны стать зелеными.' },
            ],
            [
              { text: 'Создайте новую группу с именем ' },
              { text: 'Consistency Patches', highlight: true },
            ],
            [
              { text: 'Подключите ' },
              { text: 'NPC Retextures', highlight: true },
              { text: ' к ' },
              { text: 'Consistency Patches', highlight: true },
              { text: '. Consistency Patches должны стать зелеными.' },
            ],
            [
              { text: 'Создайте новую группу с именем ' },
              { text: 'Conflict Resolution', highlight: true },
            ],
            [
              { text: 'Подключите ' },
              { text: 'Consistency Patches', highlight: true },
              { text: ' к ' },
              { text: 'Conflict Resolution', highlight: true },
              { text: ' Conflict Resolution должно стать зеленым.' },
            ],
            [
              { text: 'Подключите ' },
              { text: 'Conflict Resolution', highlight: true },
              { text: ' к ' },
              { text: 'Leveled List Modifiers', highlight: true },
              { text: '. Conflict Resolution должно стать серым.' },
            ],
            [
              {
                text: 'Убедитесь, что все вновь добавленные группы отображаются серым цветом. Нажмите ',
              },
              { text: 'кнопку «Автоупорядочивание групп»', highlight: true },
              { text: ', чтобы очистить групповые подключения. ' },
              { text: 'Нажмите Сохранить', highlight: true },
              { text: ', чтобы выйти из этого интерфейса.' },
            ],
          ],
        },
        { type: 'paragraph', content: [{ text: 'Теперь вы можете закрыть LOOT.' }] },
      ],
    },
  },
  {
    name: 'xEdit',
    version: '4.1.5o',
    author: 'ElminsterAU и SSEEdit Team',
    description:
      'Эта программа является важным инструментом, который поможет с очисткой модов от грязных правок и позволит создавать патчи, требуемые этим руководством.',
    downloadLink:
      'https://drive.google.com/file/d/1PeyRd3I2sXuoc43RdRExi4F0dD6-UExq/view?usp=sharing',
    files: [
      {
        type: 'Main Files',
        name: 'xEdit 4.1.5o.7z',
        version: '4.1.5o',
      },
    ],
    tags: ['tool', 'special-instructions'],
    specialInstructions: {
      blocks: [
        {
          type: 'paragraph',
          content: [
            {
              text: 'После загрузки файла распакуйте содержимое архива и переименуйте следующие файлы:',
            },
          ],
        },
        {
          type: 'unordered_list',
          items: [
            [{ text: 'xDump.exe в ' }, { text: 'SSEDump.exe', highlight: true }],
            [{ text: 'xDump64.exe в ' }, { text: 'SSEDump64.exe', highlight: true }],
            [{ text: 'xTESEdit.exe в ' }, { text: 'SSEEdit.exe', highlight: true }],
            [{ text: 'xTESEdit64.exe в ' }, { text: 'SSEEdit64.exe', highlight: true }],
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              text: 'скопируйте и вставьте SSEEdit64.exe (создав вторую версию exe) и переименуйте эту копию в ',
            },
            { text: 'SSEEditQuickAutoClean.exe', highlight: true },
          ],
        },
        { type: 'paragraph', content: [{ text: 'Родные 4K-мониторы', highlight: true }] },
        {
          type: 'paragraph',
          content: [
            {
              text: 'Поскольку многие 4K-мониторы теперь имеют формат Native 4K, необходимо быстро изменить настройки, чтобы сделать инструкции xEdit, особенно в разнообразии, простыми для выполнения. Без этого многие кнопки будут нечитаемы и приведут к путанице.',
            },
          ],
        },
        {
          type: 'ordered_list',
          items: [
            [
              { text: 'Щелкните правой кнопкой мыши на файле ' },
              { text: 'SSEEdit64.EXE', highlight: true },
            ],
            [{ text: 'Выберите ' }, { text: '"Properties"', highlight: true }],
            [{ text: 'Выберите вкладку  ' }, { text: '"Compatibility"', highlight: true }],
            [{ text: 'Нажмите на ' }, { text: '"Change High DPI Settings"', highlight: true }],
            [
              { text: 'Убедитесь, что установлен флажок ' },
              { text: '"Override High DPI Scaling Behavior"', highlight: true },
              { text: ' отмечен.' },
            ],
            [
              { text: 'Масштабирование должно выполняться ' },
              { text: '"SYSTEM"', highlight: true },
              { text: '.' },
            ],
          ],
        },
      ],
    },
  },
  {
    name: 'Mators xEdit Patching Framework',
    version: '1.1',
    author: 'matortheeternal',
    description:
      'MXPF — это библиотека сценариев xEdit, предоставляющая множество функций для создания патчей.',
    downloadLink: 'https://github.com/matortheeternal/mxpf/releases/tag/v1.1',
    files: [
      {
        type: 'Main Files',
        name: 'mxpf.zip',
        version: '1.1',
      },
    ],
    tags: ['tool', 'special-instructions'],
    specialInstructions: {
      blocks: [
        {
          type: 'paragraph',
          content: [
            { text: 'После загрузки извлеките содержимое папки ' },
            { text: 'Edit Scripts', highlight: true },
            { text: ' из архива в папку ' },
            { text: 'Edit Scripts', highlight: true },
            { text: ', которая находится в главной папке установки ' },
            { text: 'SSEEdit', highlight: true },
            { text: '.' },
          ],
        },
      ],
    },
  },
  {
    name: 'TES5EditScripts',
    version: '1.0',
    author: 'matortheeternal',
    description: 'Куча полезных скриптов xEdit.',
    downloadLink: 'https://github.com/matortheeternal/TES5EditScripts',
    files: [
      {
        type: 'Main Files',
        name: 'TES5EditScripts',
        version: '1.0',
      },
    ],
    tags: ['tool', 'special-instructions'],
    specialInstructions: {
      blocks: [
        {
          type: 'paragraph',
          content: [
            { text: 'Нажмите ' },
            { text: 'Code', highlight: true },
            { text: ', затем нажмите ' },
            { text: 'Download zip', highlight: true },
            { text: '.' },
          ],
        },
        {
          type: 'paragraph',
          content: [
            { text: 'После загрузки извлеките содержимое папки ' },
            { text: 'Edit Scripts', highlight: true },
            { text: ' из архива в папку ' },
            { text: 'Edit Scripts', highlight: true },
            { text: ', которая находится в главной папке установки ' },
            { text: 'SSEEdit', highlight: true },
            { text: '.' },
          ],
        },
      ],
    },
  },
  {
    name: 'WICO cleanup script',
    version: '2.5b',
    author: 'Hishy',
    description:
      'Это скрипт, который поможет навести порядок в Windsongs Immersive Character Overhaul.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/5049',
    files: [
      {
        type: 'Main Files',
        name: 'Hishy_NPC_RecordForwarding.pas',
        version: '2.5b',
      },
    ],
    tags: ['tool', 'special-instructions'],
    specialInstructions: {
      blocks: [
        {
          type: 'paragraph',
          content: [
            { text: 'После загрузки извлеките содержимое папки ' },
            { text: 'Hishy_NPC_RecordForwarding.pas-5049-2-5b', highlight: true },
            { text: ' из архива в папку ' },
            { text: 'Edit Scripts', highlight: true },
            { text: ', которая находится в главной папке установки ' },
            { text: 'SSEEdit', highlight: true },
            { text: '.' },
          ],
        },
      ],
    },
  },
  {
    name: 'Dark Face Issue Reporter',
    version: '2.8',
    author: 'LTmz',
    description: 'Это скрипт xEdit для поиска «Проблем с темным лицом» и их устранения.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/42133',
    files: [
      {
        type: 'Main Files',
        name: 'DarkFaceIssueReporter',
        version: '2.8',
      },
    ],
    tags: ['tool', 'special-instructions'],
    specialInstructions: {
      blocks: [
        {
          type: 'paragraph',
          content: [
            { text: 'После загрузки извлеките содержимое архива ' },
            { text: 'DarkFaceIssueReporter', highlight: true },
            { text: ' в папку ' },
            { text: 'Edit Scripts', highlight: true },
            { text: ', которая находится в главной папке установки ' },
            { text: 'SSEEdit', highlight: true },
            { text: '.' },
          ],
        },
        {
          type: 'paragraph',
          content: [
            { text: 'После установки измените ' },
            { text: 'darkfaceissuereporter.ini', highlight: true },
            { text: ' следующим образом:' },
          ],
        },
        {
          type: 'unordered_list',
          items: [
            [{ text: 'CreateDebugLogFile=' }, { text: 'True', highlight: true }],
            [{ text: 'CreateConsoleCommandBatchFile=' }, { text: 'True', highlight: true }],
            [{ text: 'CreateDarkFaceCollector=' }, { text: 'True', highlight: true }],
            [
              { text: 'DarkFaceCollectorFilename=' },
              { text: 'darkfacecollector.esp', highlight: true },
            ],
          ],
        },
      ],
    },
  },
  {
    name: 'Dark Face Issue Reporter Ignore',
    version: '1.0',
    author: 'Darkladylexy and The Community',
    description:
      'Это INI-файл, который будет сообщать скрипту Dark Face Issue Report Script игнорировать определенных NPC, которые дают ложные срабатывания при запуске скрипта.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/85672',
    files: [
      {
        type: 'Optional Files',
        name: 'Dark Face Issue Reporter Ignore',
        version: '1.0',
      },
    ],
    tags: ['tool', 'special-instructions'],
    specialInstructions: {
      blocks: [
        {
          type: 'paragraph',
          content: [
            { text: 'После загрузки извлеките содержимое архива и поместите INI-файл в папку ' },
            { text: 'SSEEdit/Edit Scripts', highlight: true },
            { text: '.' },
          ],
        },
      ],
    },
  },
  {
    name: 'Synthesis',
    version: '0.34.0',
    author: 'Noggog',
    description:
      'Фреймворк и графический интерфейс для создания одного игрового патча Bethesda из множества источников патчеров. Разработано для того, чтобы любая программа могла работать в качестве патчера, если она соответствует CLI API.',
    downloadLink: 'https://github.com/Mutagen-Modding/Synthesis/releases/tag/0.34.0',
    files: [
      {
        type: 'Main Files',
        name: 'Synthesis.zip',
        version: '0.34.0',
      },
    ],
    tags: ['tool'],
  },
];
