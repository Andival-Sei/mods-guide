import { type ModProps } from '../../components/Mod/Mod';

// Секция: "Фреймворки расширений - Анимации и Движок поведения"
export const animationBehaviorEngine: ModProps[] = [
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
];
