import { type ModProps } from '../../components/Mod/Mod';

// Секция: "Оптимизированные базовые текстуры"
export const optimizedBaseTextures: ModProps[] = [
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
];
