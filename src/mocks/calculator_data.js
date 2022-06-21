import { v4 as uuidv4 } from 'uuid';

const oracal = [
  {
    id: uuidv4(),
    name: '',
    image: '',
  },
];
export const data = [
  {
    id: uuidv4(),
    name: 'зеркало',
    cost: '3000',
    fillers: [
      {
        id: uuidv4(),
        name: 'серебро agc glass',
        image: '',
        variables: [],
      },
      {
        id: uuidv4(),
        name: 'бронза agc glass',
        image: '',
        variables: [],
      },
      {
        id: uuidv4(),
        name: 'графит agc glass',
        image: '',
        variables: [],
      },
      {
        id: uuidv4(),
        name: 'сербро + пленка 641',
        image: '',
        variables: oracal,
      },
      {
        id: uuidv4(),
        name: 'бронза + пленка 641',
        image: '',
        variables: oracal,
      },
      {
        id: uuidv4(),
        name: 'графит + пленка 641',
        image: '',
        variables: oracal,
      },
      {
        id: uuidv4(),
        name: 'серебро matelac',
        image: '',
        variables: [],
      },
      {
        id: uuidv4(),
        name: 'бронза matelac',
        image: '',
        variables: [],
      },
      {
        id: uuidv4(),
        name: 'графит matelac',
        image: '',
        variables: [],
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'стекло с пленкой',
    cost: '2000',
    fillers: [
      {
        id: uuidv4(),
        name: 'на обычном стекле',
        image: '',
        variables: oracal,
      },
      {
        id: uuidv4(),
        name: 'сатинат',
        image: '',
        variables: oracal,
      },
      {
        id: uuidv4(),
        name: 'оптивайт',
        image: '',
        variables: oracal,
      },
      {
        id: uuidv4(),
        name: 'сатинат выбеленный',
        image: '',
        variables: oracal,
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'панели лдсп/мдф',
    cost: '1600',
    fillers: [
      {
        id: uuidv4(),
        name: 'шексна',
        image: '',
        variables: [
          {
            id: uuidv4(),
            name: 'черный',
            cost: '1200',
            image: '',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'egger kat.1',
        image: '',
        variables: [],
      },
      {
        id: uuidv4(),
        name: 'egger kat.2',
        image: '',
        variables: [],
      },
      {
        id: uuidv4(),
        name: 'egger kat.3',
        image: '',
        variables: [],
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'панели мдф глянец',
    cost: '1600',
    fillers: [
      {
        id: uuidv4(),
        name: 'стандарт',
        image: '',
        variables: [],
      },
      {
        id: uuidv4(),
        name: 'премиум',
        image: '',
        variables: [],
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'пескоструйный рисунок',
    cost: '1600',
    fillers: [
      {
        id: uuidv4(),
        name: 'на зеркале серебро',
        image: '',
        variables: [],
      },
      {
        id: uuidv4(),
        name: 'на зеркале бронза',
        image: '',
        variables: [],
      },
      {
        id: uuidv4(),
        name: 'на зеркале графит',
        image: '',
        variables: [],
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'фотопечать',
    cost: '1600',
    fillers: [
      {
        id: uuidv4(),
        name: 'на обычном стекле',
        image: '',
        variables: [],
      },
      {
        id: uuidv4(),
        name: 'на стекле оптивайт',
        image: '',
        variables: [],
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'лакобель',
    cost: '1600',
    fillers: [
      {
        id: uuidv4(),
        name: 'стандарт',
        image: '',
        variables: [],
      },
      {
        id: uuidv4(),
        name: 'классик',
        image: '',
        variables: [],
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'стекло прозрачное',
    cost: '1600',
    fillers: [
      {
        id: uuidv4(),
        name: 'закаленное 4мм',
        image: '',
        variables: [],
      },
      {
        id: uuidv4(),
        name: 'обычное + пленка б/ц',
        image: '',
        variables: [],
      },
      {
        id: uuidv4(),
        name: 'бронза + пленка б/ц',
        image: '',
        variables: [],
      },
      {
        id: uuidv4(),
        name: 'графит + пленка б/ц',
        image: '',
        variables: [],
      },
      {
        id: uuidv4(),
        name: 'сатинат + пленка б/ц',
        image: '',
        variables: [],
      },
      {
        id: uuidv4(),
        name: 'сатинат бронза + пленка б/ц',
        image: '',
        variables: [],
      },
      {
        id: uuidv4(),
        name: 'сатинат графит + пленка б/ц',
        image: '',
        variables: [],
      },
    ],
  },
];
