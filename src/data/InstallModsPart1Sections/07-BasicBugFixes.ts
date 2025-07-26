import { type ModProps } from '../../components/Mod/Mod';

// Секция: "Основные исправления ошибок"
export const basicBugFixes: ModProps[] = [
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
    name: 'Alain Dufont - Delayed Spawn',
    version: '1',
    author: 'Soranotsora',
    description:
      'Этот мод просто откладывает появление Алена Дюфона до тех пор, пока вы не начнете задание «Траур никогда не наступает», чтобы вы не пропустили дополнительную цель — убить Нильсин и награду за кольцо Муири.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/149988',
    files: [
      {
        type: 'Main Files',
        name: 'Alain Dufont',
        version: '1',
      },
    ],
    translation: {
      version: '1',
      author: 'Andiewahl',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/155529',
      files: [
        {
          type: 'Main Files',
          name: 'Alain Dufont - RU',
          version: '1',
        },
      ],
    },
  },
  {
    name: 'World Encounter Noble Riding Horse Fix - WERoad02',
    version: '0.1.1',
    author: 'wankingSkeever',
    description: 'Исправлена ошибка, из-за которой дворяне бросали свою лошадь.',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/150951?',
    files: [
      {
        type: 'Main Files',
        name: 'World Encounter Noble Riding Horse Fix - WERoad02',
        version: '0.1.1',
      },
    ],
  },
];
