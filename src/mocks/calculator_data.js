import { v4 as uuidv4 } from 'uuid';

const oracal = [
  {
    id: uuidv4(),
    name: 'White',
    image: '#E8EAEE',
  },
  {
    id: uuidv4(),
    name: 'Signal Yellow',
    image: ' #E9AA22',
  },
  {
    id: uuidv4(),
    name: 'Golden Yellow',
    image: '#FAA71A',
  },
  {
    id: uuidv4(),
    name: 'Yellow',
    image: '#FFC808',
  },
  {
    id: uuidv4(),
    name: 'Dark Red',
    image: '#971B1E',
  },
  {
    id: uuidv4(),
    name: 'Light Red',
    image: '#CC2027',
  },
  {
    id: uuidv4(),
    name: 'Orange',
    image: '#E04926',
  },
  {
    id: uuidv4(),
    name: 'Light Orange',
    image: '#EF6923',
  },
  {
    id: uuidv4(),
    name: 'Violet',
    image: '#5F2B67',
  },
  {
    id: uuidv4(),
    name: 'Pink',
    image: '#CA2A69',
  },
  {
    id: uuidv4(),
    name: 'Deep Sea Blue',
    image: '#111D38',
  },
  {
    id: uuidv4(),
    name: 'Blue',
    image: '#203D76',
  },
  {
    id: uuidv4(),
    name: 'Ice Blue',
    image: '#40A1D3',
  },
  {
    id: uuidv4(),
    name: 'Light Green',
    image: '#028844',
  },
  {
    id: uuidv4(),
    name: 'Dark Green',
    image: ' #013C24',
  },
  {
    id: uuidv4(),
    name: 'Nut Brown',
    image: ' #B25B27',
  },
  {
    id: uuidv4(),
    name: 'Beige',
    image: ' #CCBF9E',
  },
  {
    id: uuidv4(),
    name: 'Cream',
    image: '#EAD294',
  },
  {
    id: uuidv4(),
    name: 'Black',
    image: '#070809',
  },
  {
    id: uuidv4(),
    name: 'Grey',
    image: '#747E7B',
  },
  {
    id: uuidv4(),
    name: 'Light Grey',
    image: '#C1C3C3',
  },
  {
    id: uuidv4(),
    name: 'Silver Grey (metallic)',
    image: '#6F7275',
  },
  {
    id: uuidv4(),
    name: 'Gold (metallic)',
    image: '#7A6531',
  },
  {
    id: uuidv4(),
    name: 'Copper (metallic)',
    image: '#6C411C',
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
          {
            id: uuidv4(),
            name: 'береза',
            cost: '1200',
            image: '',
          },
          {
            id: uuidv4(),
            name: 'ясень',
            cost: '1200',
            image: '',
          },
          {
            id: uuidv4(),
            name: 'клен',
            cost: '1200',
            image: '',
          },
          {
            id: uuidv4(),
            name: 'дуб',
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
