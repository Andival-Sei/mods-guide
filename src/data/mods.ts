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
          items: ['Вручную распакуйте мод и поместите в основной каталог Skyrim Special Edition.'],
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
          content:
            'При первой загрузке у LOOT не будет данных мастер-листа или групп модов по умолчанию. (Цветной текст указывает на цвет узла (по умолчанию).',
        },
        {
          type: 'ordered_list',
          items: [
            'Выключите Mod Organizer 2, если он открыт. (Если вы следуете руководству впервые, MO2 еще даже не установлен.)',
            'Запустите LOOT из установленного места.',
            'После загрузки LOOT отсортируйте порядок загрузки, нажав на иконку с надписью «Сортировать плагины» (она имеет три строки друг над другом). Это в верхнем левом углу',
          ],
        },
        {
          type: 'paragraph',
          content:
            'Если вы ранее установили LOOT, вам необходимо очистить все старые пользовательские правила, которые вы могли добавить:',
        },
        {
          type: 'ordered_list',
          items: [
            'Найдите и нажмите <hl>«Игра»</hl> в верхнем меню, затем выберите <hl>«Очистить все метаданные пользователя...»</hl>, затем нажмите <hl>«Да»</hl>. Это гарантирует, что у вас будет четкий набор правил.',
          ],
        },
        {
          type: 'paragraph',
          content:
            'Руководство требует добавления новых групп модов LOOT для правильной сортировки порядка загрузки:',
        },
        {
          type: 'ordered_list',
          items: [
            'Запустите LOOT (если он все еще не загружен с последнего шага. Если вы закрыли его, вы можете загрузить его через MO2 на этом этапе, если хотите.)',
            'В верхнем меню найдите и нажмите <hl>Игра</hl>.',
            'Нажмите кнопку <hl>Редактировать группы</hl>.',
            'В поле «Название группы» введите <hl>«Village Mods»</hl>, затем нажмите кнопку <hl>Добавить новую группу</hl>.',
            'Щелкните левой кнопкой мыши узел <hl>«Alternate Start</hl>», чтобы выбрать его.',
            'Дважды щелкните и удерживайте, перетаскивая линию от <hl>Alternate Start</hl> к узлу <hl>Village Mods</hl>, который вы создали. <hl>Village Mods</hl> должны стать зелеными.',
            'Создайте новую группу под названием <hl>Trivial Smelters of Skyrim</hl>,',
            'Подключите <hl>Village Mods</hl> к созданному вами узлу <hl>Trivial Smelters of Skyrim</hl>. <hl>Trivial Smelters of Skyrim</hl> должны стать зелеными.',
            'Подключите <hl>Trivial Smelters of Skyrim</hl> к <hl>Follower Frameworks</hl>, Trivial Smelters of Skyrim должны стать серыми.',
            'Создайте новую группу с именем <hl>CCOR Patches</hl>',
            'Щелкните левой кнопкой мыши и перетащите линию от <hl>Cell Encounter Zones</hl> к узлу <hl>CCOR Patches</hl>, который вы создали. CCOR Patches должны стать зелеными.',
            'Создайте новую группу с именем <hl>CACO Patches</hl>',
            'Подключите <hl>CCOR Patches</hl> к созданному узлу <hl>CACO Patches</hl>. CACO Patches должны стать зелеными.',
            'Создайте новую группу с именем <hl>OWL</hl>',
            'Подключите <hl>патчи CACO</hl> к созданному узлу <hl>OWL</hl>. OWL должен стать зеленым.',
            'Создайте новую группу под названием <hl>Snazzy Patches</hl>',
            'Подключите <hl>OWL</hl> к ноде <hl>Snazzy Patches</hl>, которую вы создали. Snazzy Patches должны стать зелеными.',
            'Создайте новую группу под названием <hl>Merge Patches</hl>',
            'Подключите <hl>Snazzy Patches</hl> к ноду <hl>Merge Patches</hl>, который вы создали. Merge Patches должно стать зеленым.',
            'Подключите <hl>Merge Patches к</hl> <hl>Cell Water</hl>. Merge Patches должны стать серыми.',
            'Создайте новую группу под названием <hl>LUX</hl>',
            'Щелкните левой кнопкой мыши и перетащите линию от <hl>Cell Weathers & Lighting</hl> к узлу <hl>LUX</hl>, который вы создали, LUX должен стать зеленым.',
            'Создайте новую группу под названием <hl>LUX Orbis</hl>',
            'Подключите <hl>LUX</hl> к ноде <hl>LUX Orbis</hl>, который вы создали, LUX Orbis должен стать зеленым.',
            'Создайте новую группу под названием <hl>LUX Via</hl>',
            'Подключите <hl>LUX Orbis</hl> к узлу <hl>LUX Via</hl>, который вы создали, LUX Via должен стать зеленым.',
            'Подключите <hl>LUX Via</hl> к <hl>Open Cities Skyrim</hl>, LUX Via должен стать серым.',
            'Создайте новую группу с именем <hl>NPC Retextures</hl>',
            'Щелкните левой кнопкой мыши и перетащите линию из раздела <hl>Khajiit Speak</hl> в узел <hl>NPC Retextures</hl>, который вы создали, NPC Retextures должны стать зелеными.',
            'Создайте новую группу с именем <hl>Consistency Patches</hl>',
            'Подключите <hl>NPC Retextures</hl> к <hl>Consistency Patches</hl>. Consistency Patches должны стать зелеными.',
            'Создайте новую группу с именем <hl>Conflict Resolution</hl>',
            'Подключите <hl>Consistency Patches</hl> к <hl>Conflict Resolution</hl> Conflict Resolution должно стать зеленым.',
            'Подключите <hl>Conflict Resolution</hl> к <hl>Leveled List Modifiers</hl>. Conflict Resolution должно стать серым.',
            'Убедитесь, что все вновь добавленные группы отображаются серым цветом. Нажмите <hl>кнопку «Автоупорядочивание групп»</hl>, чтобы очистить групповые подключения. <hl>Нажмите Сохранить</hl>, чтобы выйти из этого интерфейса.',
          ],
        },
        {
          type: 'paragraph',
          content: 'Теперь вы можете закрыть LOOT.',
        },
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
          content:
            'После загрузки файла распакуйте содержимое архива и переименуйте следующие файлы:',
        },
        {
          type: 'unordered_list',
          items: [
            'xDump.exe в <hl>SSEDump.exe</hl>',
            'xDump64.exe в <hl>SSEDump64.exe</hl>',
            'xTESEdit.exe в <hl>SSEEdit.exe</hl>',
            'xTESEdit64.exe в <hl>SSEEdit64.exe</hl>',
          ],
        },
        {
          type: 'paragraph',
          content:
            'скопируйте и вставьте SSEEdit64.exe (создав вторую версию exe) и переименуйте эту копию в <hl>SSEEditQuickAutoClean.exe</hl>',
        },
        {
          type: 'paragraph',
          content: '<hl>Родные 4K-мониторы</hl>',
        },
        {
          type: 'paragraph',
          content:
            'Поскольку многие 4K-мониторы теперь имеют формат Native 4K, необходимо быстро изменить настройки, чтобы сделать инструкции xEdit, особенно в разнообразии, простыми для выполнения. Без этого многие кнопки будут нечитаемы и приведут к путанице.',
        },
        {
          type: 'ordered_list',
          items: [
            'Щелкните правой кнопкой мыши на файле <hl>SSEEdit64.EXE</hl>',
            'Выберите <hl>"Properties"</hl>',
            'Выберите вкладку <hl>"Compatibility"</hl>',
            'Нажмите на <hl>"Change High DPI Settings"</hl>',
            'Убедитесь, что установлен флажок <hl>"Override High DPI Scaling Behavior"</hl> отмечен.',
            'Масштабирование должно выполняться <hl>"SYSTEM"</hl>.',
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
          content:
            'После загрузки извлеките содержимое папки <hl>Edit Scripts</hl> из архива в папку <hl>Edit Scripts</hl>, которая находится в главной папке установки <hl>SSEEdit</hl>.',
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
          content: 'Нажмите <hl>Code</hl>, затем нажмите <hl>Download zip</hl>.',
        },
        {
          type: 'paragraph',
          content:
            'После загрузки извлеките содержимое папки <hl>Edit Scripts</hl> из архива в папку <hl>Edit Scripts</hl>, которая находится в главной папке установки <hl>SSEEdit</hl>.',
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
          content:
            'После загрузки извлеките содержимое папки <hl>Hishy_NPC_RecordForwarding.pas-5049-2-5b</hl> из архива в папку <hl>Edit Scripts</hl>, которая находится в главной папке установки <hl>SSEEdit</hl>.',
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
          content:
            'После загрузки извлеките содержимое архива <hl>DarkFaceIssueReporter</hl> в папку <hl>Edit Scripts</hl>, которая находится в главной папке установки <hl>SSEEdit</hl>.',
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
          content:
            'После загрузки извлеките содержимое архива и поместите INI-файл в папку <hl>SSEEdit/Edit Scripts</hl>.',
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
  {
    name: "Lexy's LOTD Synthesis Profile",
    version: '0.33.3',
    author: 'Darkladylexy and The Community',
    description: 'Этот мод представляет собой готовый профиль для использования с Synthesis.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/85672?',
    files: [
      {
        type: 'Main Files',
        name: "Lexy's LOTD Synthesis Profile",
        version: '0.33.3',
      },
    ],
    tags: ['tool', 'special-instructions'],
    specialInstructions: {
      blocks: [
        {
          type: 'paragraph',
          content: 'Распакуйте содержимое архива туда, где вы установили Synthesis.',
        },
      ],
    },
  },
  {
    name: 'Cathedral Assets Optimizer',
    version: '5.3.15',
    author: 'G_k',
    description:
      'Cathedral Assets Optimizer — это инструмент, предназначенный для автоматизации конвертации и оптимизации активов для Skyrim Special Edition.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/23316',
    files: [
      {
        type: 'Main Files',
        name: 'Cathedral Assets Optimizer 64',
        version: '5.3.15',
      },
    ],
    tags: ['tool'],
  },
  {
    name: "Lexy's LOTD CAO Profiles",
    version: '5.3.14.1',
    author: 'Darkladylexy and The Community',
    description: "Профили Cathedral Assets Optimizer для Lexy's LOTD Skyrim Special Edition.",
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/85672',
    files: [
      {
        type: 'Main Files',
        name: "Lexy's LOTD CAO Profiles",
        version: '5.3.14.1',
      },
    ],
    tags: ['tool', 'special-instructions'],
    specialInstructions: {
      blocks: [
        {
          type: 'paragraph',
          content:
            'После загрузки извлеките содержимое профилей <hl>CAO Lexy LOTD</hl> в папку <hl>Cathedral Assets Optimizer</hl>.',
        },
      ],
    },
  },
  {
    name: 'Wrye Bash',
    version: '314',
    author: 'Wrye Bash Team',
    description:
      'Функция этого инструмента заключается в управлении модами и создании Bashed Patches. Bashed Patches объединяет списки уровней из установленных модов и имеет некоторую ограниченную функциональность для объединения модов и настройки игровых ценностей. В этом руководстве вы будете использовать только функционал Bashed Patch.',
    downloadLink: 'https://www.nexusmods.com/site/mods/591?',
    files: [
      {
        type: 'Main Files',
        name: 'Wrye Bash 314 - Standalone Executable',
        version: '314',
      },
    ],
    tags: ['tool'],
  },
  {
    name: 'zEdit',
    version: '0.6.7',
    author: 'matortheeternal',
    description:
      'Этот инструмент похож на SSEEdit. Он включает в себя zMerge, который используется для объединения плагинов.',
    downloadLink: 'https://github.com/z-edit/zedit/releases/tag/0.6.7',
    files: [
      {
        type: 'Main Files',
        name: 'zEdit_v0.6.7_-_Portable_x64.7z',
        version: '0.6.7',
      },
    ],
    tags: ['tool'],
  },
  {
    name: 'Skyrim Script Extender - Special Edition',
    version: '2.2.6',
    author: 'SKSE Team',
    description:
      'SKSE абсолютно необходима. Это расширяет возможности написания сценариев в игре, позволяя модам делать вещи, которые обычно невозможны в базовом движке Skyrim. Многие моды зависят от него.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/30379?',
    files: [
      {
        type: 'Main Files',
        name: 'Skyrim Script Extender (SKSE64)',
        version: '2.2.6',
      },
    ],
    tags: ['tool', 'special-instructions'],
    specialInstructions: {
      blocks: [
        {
          type: 'paragraph',
          content:
            'Установите ТОЛЬКО следующие файлы в основной каталог <hl>Skyrim Special Edition</hl>:',
        },
        {
          type: 'unordered_list',
          items: ['SKSE64.exe', 'SKSE64_config.ini'],
        },
      ],
    },
  },
  {
    name: 'Bethini Pie (Performance INI Editor)',
    version: '4.15',
    author: 'DoubleYou',
    description:
      'Bethini Pie (Performance INI Editor) - это универсальный инструмент для упрощения редактирования файлов конфигурации INI через графический пользовательский интерфейс.',
    downloadLink: 'https://www.nexusmods.com/site/mods/631',
    files: [
      {
        type: 'Main Files',
        name: 'Bethini Pie',
        version: '4.15',
      },
    ],
    tags: ['tool'],
  },
];
