import { type ModProps } from '../../components/Mod/Mod';

// Секция: "Интерфейс - Иконки"
export const interfaceIcons: ModProps[] = [
  {
    name: 'B.O.O.B.I.E.S (aka Immersive Icons)',
    version: '2.1.3',
    author: 'WhereDeadAngelsLie and Discrepancy',
    description:
      'Представляем красиво переработанные и объективно улучшенные иконки, обогащенные для SkyUI (или сокращенно BOOBIES) — абсолютный улучшитель впечатлений от иконок! Больше типов предметов, больше цветов, больше иконок... Привнесите индивидуальность в свой инвентарь',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/89241',
    files: [
      {
        type: 'Main Files',
        name: 'B.O.O.B.I.E.S (Immsersive Icons) 2.1.3',
        version: '2.1.3',
      },
    ],
    fomods: [
      {
        title: 'B.O.O.B.I.E.S (Immsersive Icons) 2.1.3',
        pages: [
          {
            title: 'Beautifully Overhauled and Objectively Better Icons Enhanced for SkyUI',
            sections: [
              {
                title: 'Main Module',
                type: 'radio',
                items: [
                  {
                    label: 'Only Files for AIT',
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
    name: 'The Handy Icon Collection Collective',
    version: '1.7.0',
    author: 'GroundAura',
    description:
      'Handy Icon Collection Collective (или T.H.I.C.C.) — это мод активов, который предоставляет иконки для использования в модах пользовательского интерфейса. В настоящее время THICC содержит иконки, упакованные во флэш-фильмы (. SWF), которые структурированы таким образом, что их можно использовать для значков предметов инвентаря/заклинаний с помощью инжектора информации интерфейса инвентаря (I4) или для создания иконок категорий с помощью пользовательской системы ключевых слов конструируемых объектов (C.O.C.K.S.).',
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/90508?',
    files: [
      {
        type: 'Main Files',
        name: 'The Handy Icon Collection Collective',
        version: '1.7.0',
      },
    ],
    fomods: [
      {
        title: 'The Handy Icon Collection Collective',
        pages: [
          {
            title: 'The Handy Icon Collection Collective',
            sections: [
              {
                title: 'Core Files',
                type: 'checkbox',
                items: [
                  {
                    label: 'Install Core Files',
                    checked: true,
                  },
                ],
              },
              {
                title: 'Licenses',
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
  },
  {
    name: "Aura's Inventory Tweaks (More SkyUI Icons Sorting Options and Columns)",
    version: '4.5.0',
    author: 'GroundAura',
    description:
      "Aura's Inventory Tweaks (AIT) — это проект, целью которого является улучшение инвентаря Skyrim и связанных с ним меню, уделяя особое внимание качеству жизни. AIT улучшает сортировку инвентаря, типы, значки, информацию о столбцах и многое другое.",
    downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/68557?',
    files: [
      {
        type: 'Main Files',
        name: "Aura's Inventory Tweaks",
        version: '4.5.0',
      },
    ],
    fomods: [
      {
        title: "Aura's Inventory Tweaks",
        pages: [
          {
            title: "Aura's Inventory Tweaks",
            sections: [
              {
                title: 'I4 Install Type',
                type: 'radio',
                items: [
                  {
                    label: 'All-In-One (recommended)',
                    checked: true,
                  },
                ],
              },
              {
                title: 'SkyUI Config Install Type',
                type: 'radio',
                items: [
                  {
                    label: 'Alternate Advanced Sorting',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'More I4 Options',
            sections: [
              {
                title: 'Icon Color Patch',
                type: 'radio',
                items: [
                  {
                    label: 'None',
                    checked: true,
                  },
                ],
              },
              {
                title: 'Survival Mod (Apparel)',
                type: 'checkbox',
                items: [
                  {
                    label: 'None or Unsupported or SAS',
                    checked: true,
                  },
                ],
              },
              {
                title: 'Survival Mod (Food)',
                type: 'radio',
                items: [
                  {
                    label: 'SunHelm',
                    checked: true,
                  },
                ],
              },
            ],
          },
          {
            title: 'More Config Options',
            sections: [
              {
                title: 'Text Colors (and Menu Width)',
                type: 'radio',
                items: [
                  {
                    label: 'Edge UI (v0.55)',
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
      version: '4.5.0',
      author: 'GroundAura - ArVol96',
      downloadLink: 'https://www.nexusmods.com/skyrimspecialedition/mods/99454',
      files: [
        {
          type: 'Main Files',
          name: 'AIT - Russian',
          version: '4.5.0',
        },
      ],
    },
  },
];
