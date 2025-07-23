import { type ModProps } from '../../components/Mod/Mod';

// Секция: "Мир Скайрима - Динамические LOD"
export const dynamicLOD: ModProps[] = [
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
];
