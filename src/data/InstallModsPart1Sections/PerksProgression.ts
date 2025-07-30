import { type ModProps } from '../../components/Mod/Mod';

// Секция: "Фреймворки расширений - Перки и прокачка"
export const perksProgression: ModProps[] = [
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
];
