import type { FomodPageProps } from './FomodTypes';

export const exampleFomodData: FomodPageProps[] = [
  {
    title: 'Страница 1',
    sections: [
      {
        title: 'Секция 1',
        type: 'checkbox',
        items: [
          {
            label: 'Выбранный чекбокс',
            checked: true,
          },
          {
            label: 'Не выбранный чекбокс',
            checked: false,
          },
        ],
      },
      {
        title: 'Секция 2',
        type: 'radio',
        items: [
          {
            label: 'Выбранная радио-кнопка',
            checked: true,
          },
          {
            label: 'Не выбранная радио-кнопка',
            checked: false,
          },
        ],
      },
    ],
  },
  {
    title: 'Страница 2',
    sections: [
      {
        title: 'Секция 1',
        type: 'checkbox',
        items: [
          {
            label: 'Выбранный чекбокс',
            checked: true,
          },
          {
            label: 'Не выбранный чекбокс',
            checked: false,
          },
        ],
      },
      {
        title: 'Секция 2',
        type: 'radio',
        items: [
          {
            label: 'Выбранная радио-кнопка',
            checked: true,
          },
          {
            label: 'Не выбранная радио-кнопка',
            checked: false,
          },
        ],
      },
      {
        title: 'Секция 3',
        type: 'radio',
        items: [
          {
            label: 'Выбранная радио-кнопка',
            checked: true,
          },
          {
            label: 'Не выбранная радио-кнопка',
            checked: false,
          },
        ],
      },
    ],
  },
  {
    title: 'Страница 3',
    sections: [
      {
        title: 'Секция 1',
        type: 'checkbox',
        items: [
          {
            label: 'Первый чекбокс',
            checked: true,
          },
          {
            label: 'Второй чекбокс',
            checked: true,
          },
          {
            label: 'Третий чекбокс',
            checked: false,
          },
          {
            label: 'Четвертый чекбокс',
            checked: false,
          },
        ],
      },
      {
        title: 'Секция 2',
        type: 'radio',
        items: [
          {
            label: 'Первая опция',
            checked: false,
          },
          {
            label: 'Вторая опция',
            checked: true,
          },
          {
            label: 'Третья опция',
            checked: false,
          },
        ],
      },
    ],
  },
  {
    title: 'Страница 4',
    sections: [
      {
        title: 'Выбор текстур',
        type: 'radio',
        items: [
          {
            label: 'Высокое качество (2K)',
            checked: true,
          },
          {
            label: 'Среднее качество (1K)',
            checked: false,
          },
          {
            label: 'Низкое качество (512)',
            checked: false,
          },
        ],
      },
      {
        title: 'Дополнительные опции',
        type: 'checkbox',
        items: [
          {
            label: 'Включить нормал-мапы',
            checked: true,
          },
          {
            label: 'Включить спекуляр-мапы',
            checked: true,
          },
          {
            label: 'Включить параллакс-мапы',
            checked: false,
          },
        ],
      },
      {
        title: 'Совместимость',
        type: 'checkbox',
        items: [
          {
            label: 'Патч для ENB',
            checked: true,
          },
          {
            label: 'Патч для ReShade',
            checked: false,
          },
        ],
      },
      {
        title: 'Версия игры',
        type: 'radio',
        items: [
          {
            label: 'Special Edition',
            checked: true,
          },
          {
            label: 'Legendary Edition',
            checked: false,
          },
          {
            label: 'Anniversary Edition',
            checked: false,
          },
        ],
      },
    ],
  },
  {
    title: 'Страница 5',
    sections: [
      {
        title: 'Выбор оружия',
        type: 'checkbox',
        items: [
          {
            label: 'Мечи',
            checked: true,
          },
          {
            label: 'Топоры',
            checked: true,
          },
          {
            label: 'Булавы',
            checked: false,
          },
          {
            label: 'Кинжалы',
            checked: true,
          },
          {
            label: 'Луки',
            checked: false,
          },
          {
            label: 'Арбалеты',
            checked: true,
          },
        ],
      },
      {
        title: 'Выбор брони',
        type: 'radio',
        items: [
          {
            label: 'Легкая броня',
            checked: false,
          },
          {
            label: 'Средняя броня',
            checked: true,
          },
          {
            label: 'Тяжелая броня',
            checked: false,
          },
        ],
      },
      {
        title: 'Дополнительные предметы',
        type: 'checkbox',
        items: [
          {
            label: 'Щиты',
            checked: true,
          },
          {
            label: 'Амулеты',
            checked: false,
          },
          {
            label: 'Кольца',
            checked: true,
          },
          {
            label: 'Зелья',
            checked: false,
          },
        ],
      },
    ],
  },
];
