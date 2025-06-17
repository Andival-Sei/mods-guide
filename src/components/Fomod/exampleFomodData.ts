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
            id: 'section1-checkbox1',
            label: 'Выбранный чекбокс',
            checked: true,
          },
          {
            id: 'section1-checkbox2',
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
            id: 'section2-radio1',
            name: 'section2',
            label: 'Выбранная радио-кнопка',
            checked: true,
          },
          {
            id: 'section2-radio2',
            name: 'section2',
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
            id: 'page2-section1-checkbox1',
            label: 'Выбранный чекбокс',
            checked: true,
          },
          {
            id: 'page2-section1-checkbox2',
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
            id: 'page2-section2-radio1',
            name: 'page2-section2',
            label: 'Выбранная радио-кнопка',
            checked: true,
          },
          {
            id: 'page2-section2-radio2',
            name: 'page2-section2',
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
            id: 'page2-section3-radio1',
            name: 'page2-section3',
            label: 'Выбранная радио-кнопка',
            checked: true,
          },
          {
            id: 'page2-section3-radio2',
            name: 'page2-section3',
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
            id: 'page3-section1-checkbox1',
            label: 'Первый чекбокс',
            checked: true,
          },
          {
            id: 'page3-section1-checkbox2',
            label: 'Второй чекбокс',
            checked: true,
          },
          {
            id: 'page3-section1-checkbox3',
            label: 'Третий чекбокс',
            checked: false,
          },
          {
            id: 'page3-section1-checkbox4',
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
            id: 'page3-section2-radio1',
            name: 'page3-section2',
            label: 'Первая опция',
            checked: false,
          },
          {
            id: 'page3-section2-radio2',
            name: 'page3-section2',
            label: 'Вторая опция',
            checked: true,
          },
          {
            id: 'page3-section2-radio3',
            name: 'page3-section2',
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
            id: 'page4-section1-radio1',
            name: 'page4-section1',
            label: 'Высокое качество (2K)',
            checked: true,
          },
          {
            id: 'page4-section1-radio2',
            name: 'page4-section1',
            label: 'Среднее качество (1K)',
            checked: false,
          },
          {
            id: 'page4-section1-radio3',
            name: 'page4-section1',
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
            id: 'page4-section2-checkbox1',
            label: 'Включить нормал-мапы',
            checked: true,
          },
          {
            id: 'page4-section2-checkbox2',
            label: 'Включить спекуляр-мапы',
            checked: true,
          },
          {
            id: 'page4-section2-checkbox3',
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
            id: 'page4-section3-checkbox1',
            label: 'Патч для ENB',
            checked: true,
          },
          {
            id: 'page4-section3-checkbox2',
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
            id: 'page4-section4-radio1',
            name: 'page4-section4',
            label: 'Special Edition',
            checked: true,
          },
          {
            id: 'page4-section4-radio2',
            name: 'page4-section4',
            label: 'Legendary Edition',
            checked: false,
          },
          {
            id: 'page4-section4-radio3',
            name: 'page4-section4',
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
            id: 'page5-section1-checkbox1',
            label: 'Мечи',
            checked: true,
          },
          {
            id: 'page5-section1-checkbox2',
            label: 'Топоры',
            checked: true,
          },
          {
            id: 'page5-section1-checkbox3',
            label: 'Булавы',
            checked: false,
          },
          {
            id: 'page5-section1-checkbox4',
            label: 'Кинжалы',
            checked: true,
          },
          {
            id: 'page5-section1-checkbox5',
            label: 'Луки',
            checked: false,
          },
          {
            id: 'page5-section1-checkbox6',
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
            id: 'page5-section2-radio1',
            name: 'page5-section2',
            label: 'Легкая броня',
            checked: false,
          },
          {
            id: 'page5-section2-radio2',
            name: 'page5-section2',
            label: 'Средняя броня',
            checked: true,
          },
          {
            id: 'page5-section2-radio3',
            name: 'page5-section2',
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
            id: 'page5-section3-checkbox1',
            label: 'Щиты',
            checked: true,
          },
          {
            id: 'page5-section3-checkbox2',
            label: 'Амулеты',
            checked: false,
          },
          {
            id: 'page5-section3-checkbox3',
            label: 'Кольца',
            checked: true,
          },
          {
            id: 'page5-section3-checkbox4',
            label: 'Зелья',
            checked: false,
          },
        ],
      },
    ],
  },
];
