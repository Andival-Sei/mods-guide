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
    version: '0.35.0',
    author: 'Noggog',
    description:
      'Фреймворк и графический интерфейс для создания одного игрового патча Bethesda из множества источников патчеров. Разработано для того, чтобы любая программа могла работать в качестве патчера, если она соответствует CLI API.',
    downloadLink: 'https://github.com/Mutagen-Modding/Synthesis/releases/tag/0.35.0',
    files: [
      {
        type: 'Main Files',
        name: 'Synthesis.zip',
        version: '0.35.0',
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
  {
    name: 'Mod Organizer 2',
    version: '2.5.2',
    author: 'Tannin - MO2 Team',
    description:
      'Это инструмент, который мы будем использовать для загрузки, установки и управления модами. Не волнуйтесь, если это выглядит пугающим, мы исправим это в ближайшее время.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/6194',
    files: [
      {
        type: 'Main Files',
        name: 'Mod Organizer 2',
        version: '2.5.2',
      },
    ],
    tags: ['tool'],
  },
  {
    name: 'Fluency Themes for Mod Organizer 2',
    version: '1.5',
    author: 'memphisfml',
    description:
      'Набор тем, созданных в стиле Windows 11. Имеет 3 темы с чистым и последовательным внешним видом, а также пользовательские иконки.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/71449?',
    files: [
      {
        type: 'Main Files',
        name: 'Fluency Themes',
        version: '1.5',
      },
    ],
    tags: ['tool'],
  },
  {
    name: 'Clean Splash Screens for Mod Organizer 2',
    version: '1.0',
    author: '6788',
    description: 'Чистые и современные заставки для Mod Organizer 2.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/71449?',
    files: [
      {
        type: 'Main Files',
        name: 'Clean Splash Screens for Mod Organizer 2',
        version: '1.0',
      },
    ],
    tags: ['tool'],
  },
  {
    name: "Kezyma's Curation Club for Mod Organizer",
    version: '1.1.0',
    author: 'Kezyma',
    description:
      'Curation Club — это плагин для Mod Organizer 2, позволяющий пользователям импортировать контент Creation Club в Mod Organizer в виде отдельных модов.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/60552?',
    files: [
      {
        type: 'Main Files',
        name: 'Curation Club 1.1.0',
        version: '1.1.0',
      },
    ],
    tags: ['tool', 'special-instructions'],
    specialInstructions: {
      blocks: [
        {
          type: 'paragraph',
          content: 'После загрузки извлеките содержимое архива в папку plugins в папке MO2.',
        },
      ],
    },
  },
  {
    name: 'Merge Plugins Hide',
    version: '1.4',
    author: 'deorder',
    description:
      'Это плагин для Mod Organizer 2, который позволяет легко скрывать объединенные плагины.',
    downloadLink: 'https://github.com/deorder/mo2-plugins/releases/tag/1.4',
    files: [
      {
        type: 'Main Files',
        name: 'deorder-plugins.zip',
        version: '1.4',
      },
      {
        type: 'Main Files',
        name: 'link-deploy.zip',
        version: '1.4',
      },
      {
        type: 'Main Files',
        name: 'merge-plugins-hide.zip',
        version: '1.4',
      },
      {
        type: 'Main Files',
        name: 'sync-mod-order.zip',
        version: '1.4',
      },
    ],
    tags: ['tool', 'special-instructions'],
    specialInstructions: {
      blocks: [
        {
          type: 'ordered_list',
          items: [
            'Перейдите в папку Plugins в папке MO2.',
            'Распакуйте содержимое архивов в папку плагинов MO2.',
            'Перезапустите Mod Organizer 2 и перейдите в настройки.',
            'Перейдите на вкладку «Плагины».',
            'Прокрутите вниз, пока не найдете <hl>Merge Plugins Hide</hl>.',
            'В правом поле измените <hl>hide-type</hl> на <hl>optional</hl> (должен быть полностью строчным)',
            'Нажмите <hl>OK</hl>.',
          ],
        },
        {
          type: 'paragraph',
          content:
            'Функция «Скрыть объединенные плагины» теперь настроена и перемещает объединенные плагины в необязательный каталог в Mod Organizer 2. Доступ к нему можно получить с помощью значка головоломки в Mod Organizer 2.',
        },
      ],
    },
  },
  {
    name: 'Mod Organizer 2 Removal Tool',
    version: '2.4.1',
    author: 'DeltaJordan',
    description:
      'Этот инструмент для Mod Organizer 2 упрощает удаление файлов из модов. Он поддерживает относительные пути с подстановочными знаками (*).',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/117306?',
    files: [
      {
        type: 'Main Files',
        name: 'MO2 File Removal Tool',
        version: '2.4.1',
      },
    ],
    tags: ['tool', 'special-instructions'],
    specialInstructions: {
      blocks: [
        {
          type: 'ordered_list',
          items: [
            'Перейдите в папку Plugins в папке MO2.',
            'Распакуйте содержимое архивов в папку плагинов MO2.',
            'Перезапустите Mod Organizer 2 и перейдите в настройки.',
            'Перейдите на вкладку «Плагины».',
            'Прокрутите вниз, пока не найдете <hl>MO2 Removal Tool</hl>.',
            'В правом поле измените <hl>plugin-optional</hl> на <hl>true</hl>',
            'В правом поле измените <hl>removal-type</hl> на <hl>mohidden</hl>',
            'Нажмите <hl>OK</hl>.',
          ],
        },
      ],
    },
  },
  {
    name: 'Prepare Merge - Mod Organizer 2 Plugin',
    version: '1.2.3',
    author: 'Sosorinai',
    description:
      'Этот плагин для Mod Organizer 2 находит и включает моды, содержащие выбранный список плагинов и их необходимые мастера. Затем он помещает выбранные плагины в конец заказа на загрузку. Полезно для подготовки слияния плагинов, например, с zMerge.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/47791',
    files: [
      {
        type: 'Main Files',
        name: 'Prepare Merge',
        version: '1.2.3',
      },
    ],
    tags: ['tool', 'special-instructions'],
    specialInstructions: {
      blocks: [
        {
          type: 'paragraph',
          content:
            'После загрузки извлеките содержимое архива в папку plugins в папке MO2. Затем перезапустите Mod Organizer 2 и перейдите в настройки.',
        },
      ],
    },
  },
  {
    name: 'FOMOD Plus - A Mod Installation Overhaul for Mod Organizer 2',
    version: '1.15.0',
    author: 'aglowinthefield',
    description:
      'Полная переработка опыта работы с FOMOD. Показывайте и устанавливайте предыдущие варианты, фильтруйте свой список модов по установленным FOMOD модам, сканируйте для предварительного заполнения обнаружения содержимого FOMOD, неблокирующего, умно изменяющего размер окна установщика и многое другое!',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/47791',
    files: [
      {
        type: 'Main Files',
        name: 'FOMOD Plus',
        version: '1.15.0',
      },
    ],
    tags: ['tool', 'special-instructions'],
    specialInstructions: {
      blocks: [
        {
          type: 'paragraph',
          content: 'После загрузки извлеките содержимое архива в папку MO2 (не плагины).',
        },
      ],
    },
  },
  {
    name: 'Set CPU Affinity for Mod Organizer',
    version: '1.2.0',
    author: 'MaskedRPGFan',
    description:
      'Этот плагин для Mod Organizer 2 автоматически рассчитывает и устанавливает сродство процессора для Skyrim Priority SE AE - skse plugin от Boring3.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/94636?',
    files: [
      {
        type: 'Main Files',
        name: 'Set CPU Affinity',
        version: '1.2.0',
      },
    ],
    tags: ['tool', 'special-instructions'],
    specialInstructions: {
      blocks: [
        {
          type: 'paragraph',
          content: 'После загрузки извлеките содержимое архива в папку плагинов MO2.',
        },
      ],
    },
  },
  {
    name: 'xLODGen',
    version: 'beta 132',
    author: 'Sheson',
    description:
      'Это утилита, используемая для создания сеток и текстур LOD «в точности», как у CK.',
    downloadLink: 'https://github.com/sheson/xLODGen/releases/download/v132/xLODGen.132.7z',
    files: [
      {
        type: 'Main Files',
        name: 'xLODGen.132.7z',
        version: 'beta 132',
      },
    ],
    tags: ['tool', 'special-instructions'],
    specialInstructions: {
      blocks: [
        {
          type: 'ordered_list',
          items: [
            'Разархивируйте архив как отдельную программу среди других инструментов для Skyrim.',
            'Создайте папку с именем <hl>SSELODGen_Output</hl> в корне вашего диска.',
            'Как только вышеуказанное будет сделано, откройте Mod Organizer 2 и добавьте <hl>xLODGenx64.exe</hl> как исполняемый файл.',
            'В поле "Аргументы" введите <hl>-sse -o:"Буква диска:\\SSELODGen_Output"</hl>',
          ],
        },
      ],
    },
  },
  {
    name: 'ACMOS Road Generator',
    version: '4.0',
    author: 'DoubleYou',
    description:
      'ACMOS Road Generator рисует дороги и/или тропинки на вашем LODGen-LODen, предоставляя вам идеальную карту мира с дорогами, которая соответствует установленным вами ландшафтным модам. Поддерживаются все основные моды мирового пространства.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/79205',
    files: [
      {
        type: 'Main Files',
        name: 'ACMOS Road Generator',
        version: '4.0',
      },
    ],
    tags: ['tool', 'special-instructions'],
    specialInstructions: {
      blocks: [
        {
          type: 'paragraph',
          content:
            'Разархивируйте архив как отдельную программу среди других инструментов для Skyrim. После загрузки добавьте ACMOS Road Generator.exe в качестве исполняемого файла в MO2.',
        },
      ],
    },
  },
  {
    name: 'DynDOLOD 3 Alpha',
    version: 'Alpha-194',
    author: 'Sheson',
    description:
      'Это утилита, используемая для создания мода на основе порядка загрузки, который добавляет пользовательский, удаленный LOD для объектов в Skyrim.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/68518?',
    files: [
      {
        type: 'Main Files',
        name: 'DynDOLOD 3.00',
        version: 'Alpha-194',
      },
    ],
    tags: ['tool', 'special-instructions'],
    specialInstructions: {
      blocks: [
        {
          type: 'ordered_list',
          items: [
            'Разархивируйте архив как отдельную программу среди других инструментов для Skyrim.',
            'Как только вышеуказанное будет сделано, откройте Mod Organizer 2 и добавьте <hl>TexGenx64</hl> и <hl>DynDOLODx64</hl> в качестве исполняемых файлов.',
            'В поле Аргументы введите <hl>-sse</hl> для каждого исполняемого файла.',
          ],
        },
        {
          type: 'paragraph',
          content: 'Включите режимы Expert и Level32 в DynDOLOD:',
        },
        {
          type: 'ordered_list',
          items: [
            'Перейдите в Блокнот и откройте <hl>...\\DynDOLOD\\Edit Scripts\\DynDOLOD\\DynDOLOD_SSE.ini</hl>',
            'С помощью <hl>CTRL-F</hl> найдите Expert. Замените <hl>0</hl> на <hl>1</hl>.',
            'С помощью <hl>CTRL-F</hl> найдите Level32. Замените <hl>0</hl> на <hl>1</hl>.',
            'Используя <hl>CTRL-F</hl>, найдите "DoubleSidedTextureMask". Удалите точку с запятой ( ; ) перед этой строкой. Это «раскомментирует» строку, чтобы она могла повлиять на генерацию LOD. Теперь он должен выглядеть следующим образом <hl>DoubleSidedTextureMask=mountain,mtn</hl>',
            'Сохраните и выйдите.',
          ],
        },
      ],
    },
  },
  {
    name: 'ENB Series Binaries',
    version: '0.503',
    author: 'Boris Vorontsov',
    description:
      'Это библиотека модификации графики, предназначенная для того, чтобы геймеры могли настраивать свои игры по своему вкусу.',
    downloadLink: 'http://enbdev.com/enbseries_skyrimse_v0503.zip',
    files: [
      {
        type: 'Main Files',
        name: 'ENBSeries for TES Skyrim SE',
        version: '0.503',
      },
    ],
    tags: ['tool', 'special-instructions'],
    specialInstructions: {
      blocks: [
        {
          type: 'paragraph',
          content:
            'После загрузки файла откройте папку Wrapper Version, заключенную в архив, и извлеките ТОЛЬКО файлы <hl>d3d11.dll</hl> и <hl>d3dcompiler_46e.dll</hl>. Поместите их в основной каталог Skyrim Special Edition.',
        },
      ],
    },
  },
  {
    name: 'Project Clarity AIO - Skyrim Textures Redone',
    version: '3.2',
    author: 'Iconic',
    description: 'Компиляция всех модов Project Clarity.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/45306?',
    files: [
      {
        type: 'Main Files',
        name: 'Project Clarity AIO Half Res Loose',
        version: '3.2',
      },
    ],
  },
  {
    name: 'Creation Club Anniversary Cleaned and Upscaled',
    version: '1.1',
    author: 'kartoffel',
    description:
      'Очищенные текстуры. (Бефесда, у вас есть DTX11. Зачем использовать BC1 в 2021 году?) Увеличенная броня и оружие из 2k -> 4k.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/58801?',
    files: [
      {
        type: 'Main Files',
        name: 'CC_Content_Anniversary_Cleaned_and_Upscaled',
        version: '1',
      },
      {
        type: 'Update Files',
        name: 'CC_Content_Anniversary_Cleaned_and_Upscaled_Update',
        version: '1.1',
      },
    ],
    // Пример Fomod для данного мода
    fomods: [
      {
        title: 'CC_Content_Anniversary_Cleaned_and_Upscaled',
        pages: [
          {
            title: 'well?', // Название первой страницы
            sections: [
              {
                title: 'WELL?', // Название секции
                type: 'radio',
                items: [
                  {
                    label: 'INSTALL EVERYTHING',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'MWAHAHAHA', // Название второй страницы
            sections: [
              {
                title: 'poggers', // Название секции
                type: 'checkbox',
                items: [
                  {
                    label: 'poggers',
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
    tags: ['removal-tool', 'special-instructions'],
    specialInstructions: {
      blocks: [
        {
          type: 'paragraph',
          content: 'Удалите следующие файлы:',
        },
        {
          type: 'code',
          content: [
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
          ].join('\n'),
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
];
