import { type ModProps } from '../components/Mod/Mod';

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
  {
    name: 'Project New Reign - Nemesis Unlimited Behavior Engine',
    version: '0.84-beta',
    author: 'Shikyo Kira',
    description: 'Наш инструмент для анимаций.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/60033',
    files: [
      {
        type: 'Main Files',
        name: 'Nemesis Unlimited Behavior Engine',
        version: 'v0.84-beta',
      },
    ],
    tags: ['tool', 'special-instructions'],
    specialInstructions: {
      blocks: [
        {
          type: 'ordered_list',
          items: [
            'Установите Nemesis как обычный мод.',
            '<fp>Nemesis\\Nemesis_Engine\\Nemesis Unlimited Behavior Engine.exe</fp> должен быть добавлен в качестве исполняемого файла в Mod Organizer 2.',
          ],
        },
      ],
    },
  },
  {
    name: 'Open Animation Replacer',
    version: '2.3.6',
    author: 'Ersh',
    description:
      'Плагин фреймворка SKSE, который заменяет анимацию в зависимости от настраиваемых условий.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/92109',
    files: [
      {
        type: 'Main Files',
        name: 'Open Animation Replacer',
        version: '2.3.6',
      },
    ],
  },
  {
    name: 'Animation Queue Fix',
    version: '1.0.1',
    author: 'Ersh',
    description:
      'Исправлена ошибка, из-за которой очередь перегружалась, когда в очереди на загрузку одновременно находится много анимаций',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/82395',
    files: [
      {
        type: 'Main Files',
        name: 'Animation Queue Fix',
        version: '1.0.1',
      },
    ],
  },
  {
    name: 'Custom Skills Framework',
    version: '3.1.0',
    author: 'meh321 and Parapets',
    description:
      'Этот мод позволяет авторам модов создавать неограниченное количество новых пользовательских навыков с помощью собственных деревьев перков.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/41780?',
    files: [
      {
        type: 'Main Files',
        name: 'Custom Skills Framework',
        version: '3.1.0',
      },
    ],
  },
  {
    name: 'Custom Skills Menu - A Custom Skills Framework Unified Menu',
    version: '1.1.5',
    author: 'OsmosisWrench',
    description:
      'Добавляет пользовательское меню для удобного доступа ко всем деревьям навыков Custom Skills Framework. Напрямую интегрирован в ванильное меню анимации и поддерживает ввод с помощью мыши, клавиатуры и контроллера.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/62423',
    files: [
      {
        type: 'Main Files',
        name: 'Custom Skill Menu',
        version: '1.1.7',
      },
    ],
    translation: {
      version: '1.1.5',
      author: 'GGGDragonborn',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/123618?',
      files: [
        {
          type: 'Main Files',
          name: 'A Custom Skills Framework Unified Menu (Russian)',
          version: '1.1.7',
        },
      ],
    },
  },
  {
    name: 'Custom Skills Menu - Custom Icons',
    version: '2.0',
    author: 'monkeyangie',
    description:
      'Добавляет пользовательские иконки для пользовательских навыков, у которых их не было или которые мне показалось, выглядели немного устаревшими, и все это с помощью Custom Skills Menu - унифицированного меню и искусственного интеллекта Custom Skills Framework',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/106000?',
    files: [
      {
        type: 'Main Files',
        name: 'Custom Icons CSF',
        version: '2.0',
      },
    ],
  },
  {
    name: 'Experience',
    version: '3.6.1',
    author: 'zax',
    description:
      'Повышайте уровень, выполняя задания и исследуя. Навыки больше не влияют на уровень персонажа!',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/17751',
    files: [
      {
        type: 'Main Files',
        name: 'Experience',
        version: '3.6.1',
      },
    ],
    fomods: [
      {
        title: 'Experience',
        pages: [
          {
            title: 'Step 1',
            sections: [
              {
                title: 'Plugin version',
                type: 'radio',
                items: [
                  {
                    label: 'AE',
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
                title: 'Aspect ratio',
                type: 'radio',
                items: [
                  {
                    label: '16:9',
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
    name: "Lexy's Experience ini",
    version: '1.13',
    author: 'Darkladylexy and The Community',
    description:
      'Этот мод представляет собой пользовательский INI-файл для мода Experience, специально предназначенный для использования с руководством.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/85672',
    files: [
      {
        type: 'Main Files',
        name: "Lexy's Experience ini",
        version: '1.13',
      },
    ],
  },
  {
    name: 'Skyrim Skill Uncapper for SE and AE',
    version: '2.2.3',
    author: 'Kasplat',
    description:
      'Позволяет изменять конфигурацию максимального уровня и максимального эффективного уровня навыков. Исправляет ряд ошибок в оригинальной реализации и добавляет новые функции.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/82558?',
    files: [
      {
        type: 'Main Files',
        name: 'Skyrim Skill Uncapper for SE and AE',
        version: '2.2.3',
      },
    ],
  },
  {
    name: "Lexy's LOTD - Uncapper INI",
    version: '1.03',
    author: 'Darkladylexy and The Community',
    description: 'Настройки для пользовательского Uncapper INI.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/85672?',
    files: [
      {
        type: 'Main Files',
        name: "Lexy's LOTD - Uncapper INI",
        version: '1.03',
      },
    ],
  },
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
  {
    name: 'Bard Instrumentals Mostly - Sing Rarely',
    version: '1.0',
    author: 'BanjoBunny',
    description: 'Этот мод делает так, что барды реже поют в тавернах.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/10927',
    files: [
      {
        type: 'Main Files',
        name: 'Bard Instrumentals Mostly - Sing Rarely',
        version: '1.0',
      },
    ],
  },
  {
    name: 'Beard Mask Fix - Beards Use Slot 44 SKSE Plugin',
    version: '1.0.1',
    author: 'Parapets',
    description:
      'Этот мод дает возможность носить маски для лица персонажам с растительностью на лице без застревания бороды в маске.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/80232',
    files: [
      {
        type: 'Main Files',
        name: 'Beard Mask Fix',
        version: '1.0.1',
      },
    ],
    fomods: [
      {
        title: 'Beard Mask Fix',
        pages: [
          {
            title: 'Game Version',
            sections: [
              {
                title: 'Game Version',
                type: 'radio',
                items: [
                  {
                    label: 'Skyrim Special Edition',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'Extras',
            sections: [
              {
                title: 'Select Addons',
                type: 'checkbox',
                items: [
                  {
                    label: 'Vanilla Masks',
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
      version: '1.0.1.0',
      author: 'DrunkRussianGun',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/101510',
      files: [
        {
          type: 'Main Files',
          name: 'Beard Mask Fix RUS',
          version: '1.0.1.0',
        },
      ],
      fomods: [
        {
          title: 'Beard Mask Fix RUS',
          pages: [
            {
              title: 'Версия игры',
              sections: [
                {
                  title: 'Версия игры',
                  type: 'radio',
                  items: [
                    {
                      label: 'Skyrim Special Edition',
                      checked: true,
                    },
                  ],
                },
              ],
            },
            {
              title: 'Дополнительно',
              sections: [
                {
                  title: 'Выбор дополнений',
                  type: 'checkbox',
                  items: [
                    {
                      label: 'Маски Vanilla',
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
    name: 'Better Jumping SE',
    version: '1.8.6',
    author: 'meh321 and z65536',
    description:
      'Этот мод позволяет прыгать во время спринта. Также вы можете настроить множитель высоты прыжка, сколько раз вы можете прыгнуть (двойной прыжок, как в экшн-играх).',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/18967',
    files: [
      {
        type: 'Main Files',
        name: 'Better Jumping (1.6.X)',
        version: '1.8.6',
      },
    ],
  },
  {
    name: 'College of Winterhold Quest Start Fixes',
    version: '0.4',
    author: 'wankingSkeever',
    description:
      'Исправлены ошибки, из-за которых Коллегия Винтерхолда MG07 "Посох Магнуса", MG08 "Око Магнуса", MG05 "Содержание" и MGRArniel03 "Усилие Арниэля" Часть 3 отказывалась запускаться из-за незаполненных зарезервированных псевдонимов заданий.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/53817?',
    files: [
      {
        type: 'Main Files',
        name: 'College of Winterhold Quest Start Fixes',
        version: '0.4',
      },
    ],
    fomods: [
      {
        title: 'Название_FOMOD',
        pages: [
          {
            title: 'Страница 1',
            sections: [
              {
                title: 'Секция 1',
                type: 'radio',
                items: [
                  {
                    label: 'Vanilla (Regular)',
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
      version: '0.4',
      author: 'Hainiji',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/114910',
      files: [
        {
          type: 'Main Files',
          name: 'College of Winterhold Quest Start Fixes',
          version: '0.4',
        },
      ],
      fomods: [
        {
          title: 'College of Winterhold Quest Start Fixes',
          pages: [
            {
              title: 'Страница 1',
              sections: [
                {
                  title: 'Секция 1',
                  type: 'radio',
                  items: [
                    {
                      label: 'Vanilla (Regular)',
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
    name: 'Combat Music Fix - Papyrus',
    version: '2.0.0',
    author: 'SeaSparrow',
    description:
      'Исправлена ошибка, из-за которой боевая музыка могла зацикливаться после окончания боя. Эта версия использует Papyrus и не требует SKSE.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/78057',
    files: [
      {
        type: 'Main Files',
        name: 'Combat Music Fix - Papyrus',
        version: '2.0.0',
      },
    ],
  },
  {
    name: 'Dual Casting Fix',
    version: '1.0',
    author: 'powerofthree',
    description:
      'Плагин SKSE, который исправляет ванильную ошибку, из-за которой игра обрабатывает двойные заклинания, как если бы они были одинарными.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/92454',
    files: [
      {
        type: 'Main Files',
        name: 'Dual Casting Fix',
        version: '1.0',
      },
    ],
    fomods: [
      {
        title: 'Dual Casting Fix',
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
    name: 'Fuz Ro D-oh - Silent Voice',
    version: '2.5',
    author: 'Плагин SKSE64, который добавляет поддержку неозвученных диалогов в игре.',
    description: 'Описание_мода',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/15109',
    files: [
      {
        type: 'Main Files',
        name: "Fuz Ro D'oh",
        version: '2.5',
      },
    ],
  },
  {
    name: 'High Gate Ruins Puzzle Reset Fix',
    version: '0.3',
    author: 'wankingSkeever',
    description:
      'Исправлена ошибка, из-за которой головоломка «Руины высоких ворот» не сбрасывалась должным образом, блокируя половину подземелья при последующих посещениях.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/53643?',
    files: [
      {
        type: 'Main Files',
        name: 'High Gate Ruins Puzzle Reset Fix',
        version: '0.3',
      },
    ],
  },
  {
    name: 'Horse Save Load Fix',
    version: '0.2',
    author: 'wankingSkeever',
    description: 'Исправлена ошибка, из-за которой лошадь взлетала в небо при загрузке сохранения.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/132110',
    files: [
      {
        type: 'Main Files',
        name: 'Horse Save Load Fix',
        version: '0.2',
      },
    ],
  },
  {
    name: 'Hunters Not Bandits',
    version: '4.2',
    author: 'raccoondance',
    description:
      'NPC не будут использовать насмешки или оскорбления во время боя с животными. В частности, охотники будут вести себя более реалистично, а также исправлять странное поведение, когда враги желают вам доброго утра, и другие неуместные диалоги сразу после того, как они вас убили.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/1547',
    files: [
      {
        type: 'Main Files',
        name: 'Hunters Not Bandits 4.2',
        version: '4.2',
      },
    ],
    translation: {
      version: '4.2',
      author: 'raccoondance and NB - Nillck - translator',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/154568',
      files: [
        {
          type: 'Main Files',
          name: 'Hunters Not Bandits - RU',
          version: '4.2',
        },
      ],
    },
  },
  {
    name: "King Olaf's Fire Festival Not Ending Fix",
    version: '0.1',
    author: 'wankingSkeever',
    description:
      'Задним числом исправлена ошибка, из-за которой застрял Огненный фестиваль «Сожжение короля Олафа».',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/65849?',
    files: [
      {
        type: 'Main Files',
        name: "King Olaf's Fire Festival Not Ending Fix",
        version: '0.1',
      },
    ],
  },
  {
    name: 'LeveledList Crash Fix',
    version: '1.1.1',
    author: 'SeaSparrow',
    description:
      'Простой мод SKSE, который не позволяет AddForm добавлять формы в уровненные списки с 255 элементами, предотвращая сбои.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/129136?',
    files: [
      {
        type: 'Main Files',
        name: 'Leveled List Crash Fix',
        version: '1.1.1',
      },
    ],
  },
  {
    name: 'Magic Student (WIChangeLocation04) Quest Fix',
    version: '0.1',
    author: 'wankingSkeever',
    description: 'Исправлены цели заданий, которые никогда не исчезают из журнала заданий.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/80676?',
    files: [
      {
        type: 'Main Files',
        name: 'Magic Student (WIChangeLocation04) Quest Fix',
        version: '0.1',
      },
    ],
  },
  {
    name: "Neloth's Experimental Subject Quest (DLC2TTR4a) Fix",
    version: '0.1',
    author: 'wankingSkeever',
    description:
      'Исправлена ошибка, из-за которой задание Нелота на подопытного (DLC2TTR4a) застревало.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/64016?',
    files: [
      {
        type: 'Main Files',
        name: "Neloth's Experimental Subject Quest (DLC2TTR4a) Fix",
        version: '0.1',
      },
    ],
  },
  {
    name: 'No More Blinding Fog - SSE Port',
    version: '0.1',
    author: 'wSkeever',
    description:
      'Делает частицы тумана, прикрепленные к камере, более тонкими, чтобы предотвратить появление тумана на экране.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/87342?',
    files: [
      {
        type: 'Main Files',
        name: 'No More Blinding Fog',
        version: '0.1',
      },
    ],
  },
  {
    name: 'NPC Stuck in Bleedout fix',
    version: '0.1.3',
    author: 'wankingSkeever',
    description:
      'Иногда NPC застревают в кровотечении навсегда с полным здоровьем. Это исправляет ситуацию.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/95489?',
    files: [
      {
        type: 'Main Files',
        name: 'NPC Stuck in Bleedout fix',
        version: '0.2',
      },
    ],
  },
  {
    name: "Rogue's Gallery",
    version: '1.0.0.1',
    author: 'Noah',
    description: 'Разнообразная библиотека папирусов для личного и общественного пользования.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/99482?',
    files: [
      {
        type: 'Main Files',
        name: 'RG Main File',
        version: '1.0.0.1',
      },
    ],
  },
  {
    name: 'To Your Face SE - AE - VR',
    version: '1.0r',
    author: 'underthesky and xILARTH',
    description: 'NPC не будут здороваться в спину Драконорожденного. Плагин SKSE.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/24720?',
    files: [
      {
        type: 'Main Files',
        name: 'To Your Face AE',
        version: '1.0u',
      },
    ],
  },
  {
    name: 'WIDeadBodyCleanupScript Crash Fix',
    version: '0.4',
    author: 'wankingSkeever',
    description: 'Исправлен редкий сбой при сохранении из-за wideadbodycleanupscript.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/62413',
    files: [
      {
        type: 'Main Files',
        name: 'WIDeadBodyCleanupScript Crash Fix',
        version: '0.4',
      },
    ],
  },
  {
    name: 'Word Wall Transparency Fix for ENB',
    version: '0.3',
    author: 'wankingSkeever',
    description:
      'Убирает тонкий темный прямоугольник вокруг слова силы на стенах со словами и крики седобородых для пользователей ENB.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/41463',
    files: [
      {
        type: 'Main Files',
        name: 'Word Wall Transparency Fix for ENB',
        version: '0.3',
      },
    ],
  },
  {
    name: 'World Encounter Hostility Fix',
    version: '0.4',
    author: 'wankingSkeever',
    description:
      'Не позволяйте NPC, столкнувшимся с ванильным миром, становиться враждебными, когда вы применяете невраждебные заклинания.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/91403?',
    files: [
      {
        type: 'Main Files',
        name: 'World Encounter Hostility Fix -Performance Version',
        version: '0.4',
      },
    ],
  },
  {
    name: 'Zero Bounty Hostility Fix',
    version: '0.4',
    author: 'wankingSkeever',
    description:
      'Снимает враждебность, которая остается даже после того, как вы заплатите награду или убьете свидетелей. Работает только на ванильных холдах.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/95989?',
    files: [
      {
        type: 'Main Files',
        name: 'Zero Bounty Hostility Fix',
        version: '0.4',
      },
    ],
  },
  {
    name: 'Console Commands Extender - Anniversary Edition Update',
    version: '1.12.0',
    author: 'shad0wshayd3',
    description:
      'Обновлен файл .dll для работы Console Commands Extender со Skyrim SE версии 1.6.629+.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/74390?',
    files: [
      {
        type: 'Main Files',
        name: 'Console Commands Extender - 1.6.1130 Update',
        version: '1.12.0',
      },
    ],
  },
  {
    name: 'ConsoleUtilSSE NG',
    version: '1.5.1',
    author: 'Ryan---VersuchDrei',
    description:
      'Этот мод позволяет скриптам папируса выполнять консольные команды. Это преобразование ConsoleUtilSSE в CLib-NG создает один файл .dll, который работает во всех версиях Skyrim SE, включая AE 1.6.629+.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/76649?',
    files: [
      {
        type: 'Main Files',
        name: 'ConsoleUtilSSE NG',
        version: '1.5.1',
      },
    ],
  },
  {
    name: 'ConsolePlusPlus',
    version: '1.4.1',
    author: 'powerofthree',
    description:
      'Плагин SKSE. Добавляет копирование и вставку в консоль и кэширует консольные команды между игровыми сессиями',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/79975',
    files: [
      {
        type: 'Main Files',
        name: 'ConsolePlusPlus',
        version: '1.4.1',
      },
    ],
  },
  {
    name: 'More Informative Console',
    version: '1.2.2',
    author: 'Linthar',
    description:
      'Этот мод редактирует пользовательский интерфейс, чтобы отображать много дополнительной информации о NPC, предметах и других объектах при открытии консоли, подобно тому, как консоль MFG работала в Skyrim LE',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/19250',
    files: [
      {
        type: 'Main Files',
        name: 'More Informative Console 1.2.2',
        version: '1.2.2',
      },
    ],
  },
  {
    name: 'ImGui Icons',
    version: '1.1.0',
    author: 'powerofthree',
    description: 'Библиотека иконок и шрифтов ImGui.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/114790',
    files: [
      {
        type: 'Main Files',
        name: 'ImGui Icons',
        version: '1.1.0',
      },
    ],
  },
  {
    name: 'Constructible Object Custom Keyword System',
    version: '1.1.1',
    author: 'Parapets',
    description:
      'Повышает удобство использования меню конструируемых объектов в SkyUI с помощью расширяемой системы категорий на основе ключевых слов.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/81409?',
    files: [
      {
        type: 'Main Files',
        name: 'Crafting Categories for SkyUI',
        version: '1.1.1',
      },
    ],
    translation: {
      version: '1.1.1',
      author: 'Koul99',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/136040',
      files: [
        {
          type: 'Main Files',
          name: 'Crafting Categories for SkyUI_SSE_v1.1.1_RU_NX',
          version: '1.1.1',
        },
      ],
    },
  },
  {
    name: 'Versatile Item and Group Re-Assignment - C.O.C.K.S. Enhanced',
    version: '1.0.1.1',
    author: 'Tate Taylor',
    description:
      'Улучшает мод Constructible Object Custom Keyword System дополнительными категориями и поддержкой различных популярных модов.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/85419',
    files: [
      {
        type: 'Main Files',
        name: 'Versatile Item and Group Re-Assignment',
        version: '1.0.1.1',
      },
    ],
    translation: {
      version: '1.0.1.1',
      author: 'Andiewahl',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/155221',
      files: [
        {
          type: 'Main Files',
          name: 'Versatile Item and Group Re-Assignment RU',
          version: '1.0.1.1',
        },
      ],
    },
  },
  {
    name: 'Constructible Object Custom Keyword System - Seperate Weapon and Armor',
    version: '1.0.0',
    author: 'murrayj',
    description:
      'Улучшена система пользовательских ключевых слов для конструируемых объектов за счет разделения категорий брони и оружия.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/81787',
    files: [
      {
        type: 'Main Files',
        name: 'Constructible Object Custom Keyword System - Seperate Weapon and Armor',
        version: '1.0.0',
      },
    ],
    translation: {
      version: '1.0.0',
      author: 'Koul99',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/136350',
      files: [
        {
          type: 'Main Files',
          name: 'COCKS - Seperate Weapon and Armor_SSE_v1.0.0_RU_NX',
          version: '1.0.0',
        },
      ],
    },
  },
  {
    name: 'Cooking Categories Improvement (Constructible Object Custom Keyword System - Fixes)',
    version: '2.0.1',
    author: 'Dylan James - Parapets',
    description:
      'Добавляет продуманные, бесконфликтные подкатегории на станции приготовления и выпечки с помощью COCKS!',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/84875',
    files: [
      {
        type: 'Main Files',
        name: 'Cooking Categories Improvement (2.0.1)',
        version: '2.0.1',
      },
    ],
    translation: {
      version: '2.0.1',
      author: 'outlndrr',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/85339',
      files: [
        {
          type: 'Main Files',
          name: 'Cooking Categories Improvement',
          version: '2.0.1',
        },
      ],
    },
  },
  {
    name: 'Dialogue History',
    version: '2.2.0',
    author: 'powerofthree',
    description: 'Отслеживайте свои разговоры с помощью «Истории диалогов». Плагин SKSE.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/114238',
    files: [
      {
        type: 'Main Files',
        name: 'Dialogue History',
        version: '2.2.0',
      },
    ],
    fomods: [
      {
        title: 'Dialogue History',
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
    translation: {
      version: '2.2.0',
      author: 'Andiewahl',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/155236',
      files: [
        {
          type: 'Main Files',
          name: 'Dialogue History RU',
          version: '2.2.0',
        },
      ],
    },
  },
  {
    name: 'Extended UI',
    version: '1.2.0d',
    author: 'MrJack',
    description:
      'Расширенный пользовательский интерфейс — это проект, который пытается исправить части пользовательского интерфейса. В настоящее время предполагается, что Extended UI станет дополнением к SkyUI, а не заменит его части.',
    downloadLink: 'https://www.nexusmods.com/skyrim/mods/57873',
    files: [
      {
        type: 'Main Files',
        name: 'Extended UI',
        version: '1.2.0d',
      },
    ],
    tags: ['classic', 'creation-kit-resave', 'bsa'],
    translation: {
      version: '1.2.0d',
      author: 'k©קaso√®',
      downloadLink:
        'https://gamer-mods.ru/load/skyrim_le/interfejs/rasshirennyj_interfejs_navykov_exui/84-1-0-2400',
      files: [
        {
          type: 'Main Files',
          name: 'Extended UI-57873-1-2-0d.7z',
          version: '1.2.0d',
        },
      ],
    },
  },
  {
    name: 'UIExtensions',
    version: '1.2.0',
    author: 'Expired',
    description:
      'Этот мод добавляет в Skyrim различные пользовательские меню для использования моддерами.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/17561',
    files: [
      {
        type: 'Main Files',
        name: 'UIExtensions v1-2-0',
        version: '1.2.0',
      },
    ],
    translation: {
      version: '1.2.0',
      author: 'k©קaso√®',
      downloadLink: 'https://gamer-mods.ru/load/skyrim_se/interfejs/uiextensions_se/154-1-0-7187',
      files: [
        {
          type: 'Main Files',
          name: 'UIExtensions v1-2-0-17561-1-2-0.7z',
          version: '1.2.0',
        },
      ],
    },
  },
  {
    name: 'Skyrim SE Skill Interface Re-Texture',
    version: 'v4.1',
    author: 'Arndas',
    description:
      'Этот мод меняет интерфейс навыков, используемый при повышении уровня и выборе перков.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/1523',
    files: [
      {
        type: 'Main Files',
        name: 'SSIRT SE v4.1',
        version: 'v4.1',
      },
    ],
    fomods: [
      {
        title: 'SSIRT SE v4.1',
        pages: [
          {
            title: 'Introduction',
            sections: [
              {
                title: 'Introduction',
                type: 'checkbox',
                items: [
                  {
                    label: 'Please Read',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'Background',
            sections: [
              {
                title: 'Background',
                type: 'radio',
                items: [
                  {
                    label: 'Background - Irradiant Stars - HDR Nebula',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'Perk Lines',
            sections: [
              {
                title: 'Perk Lines',
                type: 'radio',
                items: [
                  {
                    label: 'Perk Lines - Option 3',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'Perk Line Colours',
            sections: [
              {
                title: 'Perk Line Colours',
                type: 'radio',
                items: [
                  {
                    label: 'Perk Line Colour - Yellow',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'Constellations',
            sections: [
              {
                title: 'Constellation',
                type: 'radio',
                items: [
                  {
                    label: 'Constellations - Option 2',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'Perk Stars',
            sections: [
              {
                title: 'Perk Stars',
                type: 'radio',
                items: [
                  {
                    label: 'Perk Stars - Option 2',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'Dawnguard Moons and Stars',
            sections: [
              {
                title: 'Dawnguard Moons and Stars',
                type: 'radio',
                items: [
                  {
                    label: 'HD Masser and Secunda and More Stars',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'Vampire Background',
            sections: [
              {
                title: 'Vampire Nebula Background',
                type: 'radio',
                items: [
                  {
                    label: 'HDR Nebula',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'Thanks',
            sections: [
              {
                title: 'Thanks',
                type: 'checkbox',
                items: [
                  {
                    label: 'Thank You',
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
    name: 'SkyUI',
    version: '5.2SE',
    author: 'SkyUI Team',
    description:
      'Этот мод заменяет консольный пользовательский интерфейс на более всеобъемлющий и функциональный, подходящий для среды ПК.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/12604',
    files: [
      {
        type: 'Main Files',
        name: 'SkyUI_5_2_SE',
        version: '5.2SE',
      },
    ],
    tags: ['special-instructions', 'bsa'],
    translation: {
      version: '5.2SE',
      author: 'k©קaso√®',
      downloadLink: 'https://gamer-mods.ru/load/skyrim_se/interfejs/skyui_se_ae/154-1-0-6195',
      files: [
        {
          type: 'Main Files',
          name: 'SkyUI 5.2 SE-АЕ (для игры Skyrim SE 1.5.97.0.8 или Skyrim AE 1.6.318.0.8 и выше) (1.1 mb)',
          version: '5.2SE',
        },
      ],
    },
    specialInstructions: {
      blocks: [
        {
          type: 'paragraph',
          content: 'Проблема: SkyUI_SE.esp будет выдавать ошибки в SSEEdit.',
        },
        {
          type: 'paragraph',
          content: 'Решение: Добавьте Skyrim.esm в заголовок файла плагина.',
        },
        {
          type: 'ordered_list',
          items: [
            'Загружайте только SkyUI_SE.esp и Skyrim.esm в SSEEdit.',
            'Щелкните правой кнопкой мыши по SkyUI_SE.esp и выберите <hl>Add Masters...</hl>.',
            'Должно появиться всплывающее окно. Выберите Skyrim.esm и нажмите <hl>OK</hl>.',
            'Сохраните и выйдите.',
          ],
        },
        {
          type: 'paragraph',
          content: 'SkyUI_SE.esp можно смело помечать как ESM и ESL.',
        },
        {
          type: 'ordered_list',
          items: [
            'Загрузите мод в SSEEdit.',
            'Нажмите на маленький плюс рядом с заголовком мода.',
            'Нажмите левой кнопкой мыши на <hl>File Header</hl> мод в раскрывшемся списке.',
            'В появившемся окне справа нажмите на плюс рядом с <hl>Record Header</hl>.',
            'В раскрывшемся новом списке дважды щелкните на пустое поле рядом с <hl>Record Flags</hl>.',
            'Отметьте флажки <hl>ESM</hl> и <hl>ESL</hl>.',
          ],
        },
        {
          type: 'paragraph',
          content: 'Это превратит ESP в ESP с флагом ESM и ESL.',
        },
      ],
    },
  },
  {
    name: 'SkyUI - Ghost Item Bug Fix',
    version: '1.0.0',
    author: 'SkyUI Team and EdmanSA',
    description:
      'Это устраняет проблему, из-за которой группы избранного SkyUI могли быть неправильно экипированы при определенных обстоятельствах, например после улучшения предметов.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/49106?t',
    files: [
      {
        type: 'Main Files',
        name: 'SkyUI - Ghost Item Bug Fix',
        version: '1.0.0',
      },
    ],
  },
  {
    name: 'MCM Helper',
    version: '1.5.0',
    author: 'Parapets',
    description:
      'Упрощает создание меню конфигурации мода и расширяет их новыми мощными функциями, такими как постоянные настройки INI и регистрация горячих клавиш. Авторы модов смогут писать более простые и понятные скрипты Papyrus для своих конфигов. Игроки смогут проводить меньше времени в меню.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/53000?',
    files: [
      {
        type: 'Main Files',
        name: 'MCM Helper',
        version: '1.5.0',
      },
    ],
    fomods: [
      {
        title: 'MCM Helper',
        pages: [
          {
            title: 'Game Version',
            sections: [
              {
                title: 'Game Version',
                type: 'radio',
                items: [
                  {
                    label: 'Skyrim Special Edition',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'Mod Files',
            sections: [
              {
                title: 'Plugin',
                type: 'radio',
                items: [
                  {
                    label: 'ESL',
                    checked: true,
                  },
                ],
              },
              {
                title: 'Resources',
                type: 'radio',
                items: [
                  {
                    label: 'BSA',
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
    name: 'SkyUI 3D Item Offset Fix (Centered Item Card - Script Fix - Improvement)',
    version: '1.1.0',
    author: 'SkyUI Team - Dylan James',
    description:
      'Перекомпилирован скрипт SkyUI, чтобы устранить неудобство 3D-графики инвентаря предметов при запуске новых игр.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/92602',
    files: [
      {
        type: 'Main Files',
        name: 'SkyUI 3D Item Offset Fix - MCM Helper',
        version: '1.1.0',
      },
    ],
  },
  {
    name: 'ESO Cursor',
    version: '1.0',
    author: 'jple',
    description:
      'Заменяет стандартный курсор мыши на минималистичный, вдохновленный Elder Scrolls Online.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/39670',
    files: [
      {
        type: 'Main Files',
        name: 'ESO Style Cursor',
        version: '1.0',
      },
    ],
    fomods: [
      {
        title: 'ESO Style Cursor',
        pages: [
          {
            title: 'Options',
            sections: [
              {
                title: 'Choose Type',
                type: 'radio',
                items: [
                  {
                    label: 'White, Medium',
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
    name: "Sovngarde - Mist's Font Replacer",
    version: '8.9',
    author: 'mjorka',
    description:
      'Sovngarde — это пользовательский шрифт, созданный для поддержки многоязычной пользовательской базы и органично вписывающийся в историю Skyrim.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/386',
    files: [
      {
        type: 'Main Files',
        name: "Sovngarde - Mist's Font Replacer Bold V8.9",
        version: '8.9',
      },
    ],
    tags: ['special-instructions'],
    specialInstructions: {
      blocks: [
        {
          type: 'paragraph',
          content:
            'Откройте файл <fp>Interface\\fontconfig_ru.txt</fp> и удалите вторую строку: fontlib "Interface\\fonts_en.swf"',
        },
      ],
    },
  },
  {
    name: 'The Elder Scrolls Legends - Loading Screens',
    version: '2.1.1',
    author: 'Jampion',
    description:
      'Этот мод добавляет 56 высококачественных и дружественных к лору иллюстраций из "The Elder Scrolls: Legends" в качестве загрузочных экранов. Работает как заменитель ванили и наряду с ванильными загрузочными экранами.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/37929',
    files: [
      {
        type: 'Main Files',
        name: 'TESL - Loading Screens - ESP and Meshes',
        version: '2.1.1',
      },
      {
        type: 'Main Files',
        name: 'Textures - 4K',
        version: '2.0.0',
      },
    ],
    tags: ['quality-choice'],
    fomods: [
      {
        title: 'TESL - Loading Screens - ESP and Meshes',
        pages: [
          {
            title: 'Aspect Ratio',
            sections: [
              {
                title: 'Aspect Ratio',
                type: 'radio',
                items: [
                  {
                    label: '16×9',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'Ini Compatibility Settings',
            sections: [
              {
                title: 'Ini Compatibility Settings',
                type: 'radio',
                items: [
                  {
                    label: 'Vanilla',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'Border Options',
            sections: [
              {
                title: 'Border Options',
                type: 'radio',
                items: [
                  {
                    label: 'FixedHeight',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'Display Messages',
            sections: [
              {
                title: 'Display Messages',
                type: 'radio',
                items: [
                  {
                    label: 'Yes',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'Loading Screen Priority',
            sections: [
              {
                title: 'Loading Screen Priority',
                type: 'radio',
                items: [
                  {
                    label: 'Mcm',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'Loading Screen Frequency',
            sections: [
              {
                title: 'Loading Screen Frequency',
                type: 'radio',
                items: [
                  {
                    label: '50%',
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
      version: '2.1.1',
      author: 'Andiewahl',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/155330',
      files: [
        {
          type: 'Main Files',
          name: 'TESL - Loading Screens - ESP and Meshes RU',
          version: '2.1.1',
        },
      ],
    },
  },
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
    name: 'Better Third Person Selection - BTPS',
    version: '0.8.9',
    author: 'Shrimperator',
    description: 'Этот мод улучшает выбор предметов на полу от третьего лица.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/64339',
    files: [
      {
        type: 'Main Files',
        name: 'Better Third Person Selection (AE - SE)',
        version: '0.8.9',
      },
    ],
    translation: {
      version: '0.8.9',
      author: 'Pinky Tongue',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/138117',
      files: [
        {
          type: 'Main Files',
          name: 'Better Third Person Selection - BTPS',
          version: '0.8.9',
        },
      ],
    },
  },
  {
    name: 'Clutter Filter for BTPS',
    version: '1.0.4',
    author: 'Rasclew',
    description:
      'Конфигурация фильтра для лучшего выбора от третьего лица, чтобы избежать беспорядка и предметов инструмента. Исключения сохраняют в наличии квестовые предметы, материалы для крафта, подарки и другие полезные предметы. Ограниченный полным режимом выбора BTPS, вы можете переопределить фильтр, переключившись в режим выбора по умолчанию, перейдя в вид от первого лица.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/89427',
    files: [
      {
        type: 'Main Files',
        name: 'Clutter Filter for BTPS',
        version: '1.0.4',
      },
    ],
  },
  {
    name: 'SmoothCam',
    version: '1.7',
    author: 'mwilsnd',
    description:
      'SmoothCam — это гибко настраиваемая камера от третьего лица, с плавной интерполяцией кадров и перекрестием луча, который поможет вам прицелиться.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/41252',
    files: [
      {
        type: 'Main Files',
        name: 'SmoothCam',
        version: '1.7',
      },
    ],
    fomods: [
      {
        title: 'SmoothCam',
        pages: [
          {
            title: 'Version',
            sections: [
              {
                title: 'Select Version',
                type: 'radio',
                items: [
                  {
                    label: 'SmoothCam AE',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'Plugin',
            sections: [
              {
                title: 'Select Plugin Type',
                type: 'radio',
                items: [
                  {
                    label: 'ESL',
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
      version: '1.7',
      author: 'Архив',
      downloadLink: 'https://gamer-mods.ru/load/skyrim_se/gejmplej/smoothcam_se/158-1-0-11989',
      files: [
        {
          type: 'Main Files',
          name: 'Здесь только переведенный МСМ меню на русский версии 1.7. Требуется основной мод с Нексуса. Читайте раздел "Установка". (перевод от Robin_Hood)',
          version: '1.7',
        },
      ],
    },
  },
  {
    name: 'Improved Alternate Conversation Camera',
    version: '1.2.0',
    author: 'MaskedRPGFan',
    description:
      'Улучшенная версия альтернативной разговорной камеры от NasGorTelorCeplok с MCM, исправлениями и многим другим.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/68210',
    files: [
      {
        type: 'Optional Files',
        name: 'Improved Alternate Conversation Camera AE - Simple',
        version: '1.2.0',
      },
    ],
    translation: {
      version: '1.2.0SE',
      author: 'PaZZle1',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/97410',
      files: [
        {
          type: 'Main Files',
          name: 'Improved Alternate Conversation Camera_RUS',
          version: '1.2.0',
        },
      ],
    },
  },
  {
    name: 'Disable Kill Cam And Kill Moves',
    version: '4.0',
    author: 'reyqune',
    description:
      'Отключает камеру убийства, отключает приемы убийства для всех и отключает мгновенное убийство драконами.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/111190',
    files: [
      {
        type: 'Main Files',
        name: 'Disable Kill Cam And Kill Moves',
        version: '4.0',
      },
    ],
  },
  {
    name: 'Dynamic Activation Key',
    version: '1.02',
    author: 'JaySerpa',
    description:
      'Этот мод включает различные интуитивно понятные поведения при нажатии «Shift + Activate» (или клавиши, которую вы определяете). Он также работает на контроллерах. Используется в качестве основы для многих моих модов для включения контекстных активаций.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/96273?',
    files: [
      {
        type: 'Optional Files',
        name: 'Dynamic Activation Key - DLL NG Edition',
        version: '1.02',
      },
    ],
  },
  {
    name: 'Dynamic Activation Key - MCM',
    version: '1.2.0',
    author: 'MaskedRPGFan',
    description:
      'MCM для Dynamic Activation Key от JaySerpa. Позволяет легко менять сочетание клавиш в MCM без перезагрузки игры. Поддержка контроллера.',
    downloadLink: 'Ссылка_на_мод',
    files: [
      {
        type: 'Optional Files',
        name: 'Dynamic Activation Key - DLL NG Edition - MCM',
        version: '2.1.0',
      },
    ],
  },
  {
    name: 'Dynamic Activation Key - Addons Collection',
    version: '2.1.1',
    author: 'MaskedRPGFan',
    description:
      'Коллекция аддонов для Dynamic Activation Key от JaySerpa. Легко торгуйте с торговцами, тренируйтесь с тренерами и получайте доступ к инвентарю для последователей или лошадей. Это еще не все!',
    downloadLink: 'Ссылка_на_мод',
    files: [
      {
        type: 'Optional Files',
        name: 'Dynamic Activation Key - Addons Collection',
        version: '2.2.0',
      },
    ],
  },
  {
    name: "Lexy's LOTD - Control Map",
    version: '1.04',
    author: 'Darkladylexy and The Community',
    description: 'Этот мод представляет собой пользовательскую карту управления для руководства.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/85672?',
    files: [
      {
        type: 'Main Files',
        name: "Lexy's LOTD - Control Map",
        version: '1.04',
      },
    ],
  },
  {
    name: 'RaceMenu',
    version: '0.4.19.16',
    author: 'Expired',
    description:
      'Полная переработка меню создания персонажа, включая новые функции персонализации, такие как несколько боевых раскрасок RGBA, краски для тела, ручные раскраски и краски для ног.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/19080',
    files: [
      {
        type: 'Main Files',
        name: 'RaceMenu Anniversary Edition v0-4-19-16',
        version: '0.4.19.16',
      },
    ],
    translation: {
      version: '0.4.19.16',
      author: 'k©קaso√®',
      downloadLink:
        'https://gamer-mods.ru/load/skyrim_se/telo_lico_volosy/racemenu_se_ae/164-1-0-6981',
      files: [
        {
          type: 'Main Files',
          name: 'Основной архив мода 0.4.19.16 для Skyrim АE 1.6.1170.0.8 (8.2 mb)',
          version: '0.4.19.16',
        },
        {
          type: 'Main Files',
          name: 'Подкорректированная локализация на русский язык слайдеров и настроек в RaceMenu от kopasova. Требуется основной архив мода для SE или АЕ',
          version: '0.4.19.16',
        },
      ],
    },
  },
  {
    name: 'Another RaceMenu Rotation Mod',
    version: '1.2.1',
    author: 'DarkMatterValkyrie',
    description: 'Это позволяет вам легче вращать персонажа игрока в RaceMenu.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/72937',
    files: [
      {
        type: 'Main Files',
        name: 'Another Player Rotation Mod',
        version: '1.2.1',
      },
    ],
  },
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
  {
    name: 'HD Enhanced Terrain',
    version: 'PRO',
    author: 'Hritik Vaishnav -SkyrimENB',
    description:
      'Этот мод дает более детализированный «травяной» эффект местности на дальних дистанциях (отсюда и повышенный шум) и содержит более высокую детализацию деталей.',
    downloadLink: 'https://www.nexusmods.com/skyrim/mods/29782?',
    files: [
      {
        type: 'Main Files',
        name: 'HD Enhanced Terrain PRO - Blended Version',
        version: 'PRO',
      },
    ],
  },
  {
    name: 'DynDOLOD Resources SE 3',
    version: 'Alpha-57',
    author: 'Sheson',
    description:
      'DynDOLOD - это набор простых инструментов на основе xEdit/xLODGen для автоматического создания мода Skyrim на основе порядка загрузки, который добавляет удаленный LOD для объектов и деревьев в Skyrim. Объединив DynDOLOD с xLODGen, пользователи могут создать значительно улучшенный статический объект LOD + древовидный LOD и новый, опциональный динамический LOD удаленного объекта за несколько простых шагов.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/52897',
    files: [
      {
        type: 'Main Files',
        name: 'DynDOLOD Resources SE 3.00',
        version: 'Alpha-57',
      },
    ],
    fomods: [
      {
        title: 'DynDOLOD Resources SE 3.00',
        pages: [
          {
            title: 'Main',
            sections: [
              {
                title: 'DynDOLOD Resources',
                type: 'checkbox',
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
            title: 'Options',
            sections: [
              {
                title: 'Visual Options',
                type: 'checkbox',
                items: [
                  {
                    label: 'Whiterun Exterior Grass',
                    checked: true,
                  },
                  {
                    label: 'Solitude Occlusion Planes',
                    checked: true,
                  },
                  {
                    label: 'High Hrothgar Window Glow',
                    checked: true,
                  },
                  {
                    label: 'DLC2 Vvardenfell 3D Plume',
                    checked: true,
                  },
                ],
              },
              {
                title: 'Performance Options',
                type: 'checkbox',
                items: [
                  {
                    label: 'Оставьте пустым',
                    checked: false,
                  },
                ],
              },
              {
                title: 'Misc Options',
                type: 'checkbox',
                items: [
                  {
                    label: 'Desync Birds of Prey',
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
    name: 'DynDOLOD DLL NG',
    version: 'Alpha-36',
    author: 'Sheson',
    description:
      'DynDOLOD DLL NG — это плагин SKSE64 и сопровождающие его папирусные скрипты для обходных путей больших справочных ошибок от DynDOLOD 3. Это используется вместо PapyrusUtil / DynDOLOD DLL SE/VR.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/97720?',
    files: [
      {
        type: 'Main Files',
        name: 'DynDOLOD DLL NG and Scripts 3.00',
        version: 'Alpha-36',
      },
    ],
  },
  {
    name: 'Far Object LOD Improvement Project SSE',
    version: '1.1',
    author: 'DoubleYou',
    description:
      'Дополнительные ресурсы LOD дальнего объекта для использования с DynDOLOD. Добавлена возможность добавления дорог на карту через объект LOD.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/79197?',
    files: [
      {
        type: 'Main Files',
        name: 'Far Object LOD Improvement Project SSE',
        version: '1.1',
      },
    ],
  },
  {
    name: 'LOD Unloading Bug Fix',
    version: '0.2',
    author: 'wankingSkeever',
    description:
      'Исправлена ошибка, из-за которой объекты LOD не выгружались при загрузке внешнего сохранения и быстрого перемещения.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/61251?',
    files: [
      {
        type: 'Main Files',
        name: 'LOD Unloading Bug Fix',
        version: '0.2',
      },
    ],
    translation: {
      version: '0.2',
      author: 'AlexGreat007',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/150484',
      files: [
        {
          type: 'Main Files',
          name: 'LOD Unloading Bug Fix',
          version: '0.2',
        },
      ],
    },
  },
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
];
