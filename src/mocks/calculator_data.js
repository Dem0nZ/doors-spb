import { v4 as uuidv4 } from 'uuid';

const BASE_URL = 'https://mebel-178.ru/fillers';
const mirror = `${BASE_URL}/mirror/`;
const mirrorGraphitFilm = `${BASE_URL}/mirror/graphit_film/`;
const sheksna = `${BASE_URL}/panel_mdf/sheksna/`;
const eggerkat1 = `${BASE_URL}/panel_mdf/eggerkat1/`;
const eggerkat2 = `${BASE_URL}/panel_mdf/eggerkat2/`;
const eggerkat3 = `${BASE_URL}/panel_mdf/eggerkat3/`;
const lakobelStandart = `${BASE_URL}/lakobel/standart/`;
const lakobelClassic = `${BASE_URL}/lakobel/classic/`;
const glass = `${BASE_URL}/glass/`;
const mdfGlosStandart = `${BASE_URL}/panel_mdf_gloss/standart/`;
const mdfGlosPremium = `${BASE_URL}/panel_mdf_gloss/premium/`;

const colors = [
  {
    id: uuidv4(),
    name: '010 Белый',
    cost: '1200',
    image: mirrorGraphitFilm + '531_image.jpg',
  },
  {
    id: uuidv4(),
    name: '000 Прозрачный',
    cost: '1200',
    image: mirrorGraphitFilm + '531_image.jpg',
  },
  {
    id: uuidv4(),
    name: '021 Желтый',
    cost: '1200',
    image: mirrorGraphitFilm + '533_image.jpg',
  },
  {
    id: uuidv4(),
    name: '312 Бургунд',
    cost: '1200',
    image: mirrorGraphitFilm + '312_image.jpg',
  },
  {
    id: uuidv4(),
    name: '030 Темно-красный',
    cost: '1200',
    image: mirrorGraphitFilm + '535_image.jpg',
  },
  {
    id: uuidv4(),
    name: '035 Пастельно-оранжевый',
    cost: '1200',
    image: mirrorGraphitFilm + '536_image.jpg',
  },
  {
    id: uuidv4(),
    name: '043 Лавандовый',
    cost: '1200',
    image: mirrorGraphitFilm + '538_image.jpg',
  },
  {
    id: uuidv4(),
    name: '042 Сиреневый',
    cost: '1200',
    image: mirrorGraphitFilm + '538_image.jpg',
  },
  {
    id: uuidv4(),
    name: '041 Малиновый',
    cost: '1200',
    image: mirrorGraphitFilm + '540_image.jpg',
  },
  {
    id: uuidv4(),
    name: '045 Светло-розовый',
    cost: '1200',
    image: mirrorGraphitFilm + '541_image.jpg',
  },
  {
    id: uuidv4(),
    name: '065 Кобальтовый',
    cost: '1200',
    image: mirrorGraphitFilm + '543_image.jpg',
  },
  {
    id: uuidv4(),
    name: '052 Лазурный',
    cost: '1200',
    image: mirrorGraphitFilm + '545_image.jpg',
  },
  {
    id: uuidv4(),
    name: '056 Светло-голубой ',
    cost: '1200',
    image: mirrorGraphitFilm + '547_image.jpg',
  },
  {
    id: uuidv4(),
    name: '055 Мятный',
    cost: '1200',
    image: mirrorGraphitFilm + '548_image.jpg',
  },
  {
    id: uuidv4(),
    name: '063 Мятно-зеленый',
    cost: '1200',
    image: mirrorGraphitFilm + '550_image.jpg',
  },
  {
    id: uuidv4(),
    name: '800 Коричневая нуга',
    cost: '1200',
    image: mirrorGraphitFilm + '551_image.jpg',
  },
  {
    id: uuidv4(),
    name: '082 Бежевый',
    cost: '1200',
    image: mirrorGraphitFilm + '552_image.jpg',
  },
  {
    id: uuidv4(),
    name: '023 Кремовый',
    cost: '1200',
    image: mirrorGraphitFilm + '553_image.jpg',
  },
  {
    id: uuidv4(),
    name: '072 Светло-серый',
    cost: '1200',
    image: mirrorGraphitFilm + '554_image.jpg',
  },
  {
    id: uuidv4(),
    name: '074 Средне-серый',
    cost: '1200',
    image: mirrorGraphitFilm + '555_image.jpg',
  },
  {
    id: uuidv4(),
    name: '070 Черный',
    cost: '1200',
    image: mirrorGraphitFilm + '600_image.jpg',
  },
  {
    id: uuidv4(),
    name: '073 Темно-серый',
    cost: '1200',
    image: mirrorGraphitFilm + '601_image.jpg',
  },
  {
    id: uuidv4(),
    name: '076 Серый телеком',
    cost: '1200',
    image: mirrorGraphitFilm + '653_image.jpg',
  },
  {
    id: uuidv4(),
    name: 'Белый матовый',
    cost: '1200',
    image: mirrorGraphitFilm + '668_image.jpg',
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
        image: mirror + '382_image.jpg',
        variables: [],
      },
      {
        id: uuidv4(),
        name: 'бронза agc glass',
        image: mirror + '383_image.jpg',
        variables: [],
      },
      {
        id: uuidv4(),
        name: 'графит agc glass',
        image: mirror + '2716_image.jpg',
        variables: [],
      },
      {
        id: uuidv4(),
        name: 'сербро + пленка 641',
        image: mirror + '2804_image.jpg',
        variables: colors,
      },
      {
        id: uuidv4(),
        name: 'бронза + пленка 641',
        image: mirror + '2805_image.jpg',
        variables: colors,
      },
      {
        id: uuidv4(),
        name: 'графит + пленка 641',
        image: '',
        variables: colors,
      },
      {
        id: uuidv4(),
        name: 'серебро matelac',
        image: mirror + '2807_image.jpg',
        variables: [],
      },
      {
        id: uuidv4(),
        name: 'бронза matelac',
        image: mirror + '2808_image.jpg',
        variables: [],
      },
      {
        id: uuidv4(),
        name: 'графит matelac',
        image: mirror + '2809_image.jpg',
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
        variables: colors,
      },
      {
        id: uuidv4(),
        name: 'сатинат',
        image: '',
        variables: colors,
      },
      {
        id: uuidv4(),
        name: 'оптивайт',
        image: '',
        variables: colors,
      },
      {
        id: uuidv4(),
        name: 'сатинат выбеленный',
        image: '',
        variables: colors,
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
            name: 'Венге темный',
            cost: '1200',
            image: sheksna + '284_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Дуб молочный',
            cost: '1200',
            image: sheksna + '285_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Клён танзау',
            cost: '1200',
            image: sheksna + '286_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Орех итальянский',
            cost: '1200',
            image: sheksna + '287_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Дуб атланта',
            cost: '1200',
            image: sheksna + '293_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Дуб сонома',
            cost: '1200',
            image: sheksna + '294_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Шимо тёмный',
            cost: '1200',
            image: sheksna + '295_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Белый',
            cost: '1200',
            image: sheksna + '502_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Либерика молочная',
            cost: '1200',
            image: sheksna + '560_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Серый',
            cost: '1200',
            image: sheksna + '561_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Шимо светлый',
            cost: '1200',
            image: sheksna + '562_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Бодега белый',
            cost: '1200',
            image: sheksna + '615_image.jpg',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'egger kat.1',
        image: '',
        variables: [
          {
            id: uuidv4(),
            name: 'H1277 ST9 Акация Лэйклэнд светлая',
            cost: '1200',
            image: eggerkat1 + '580_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'U702 HG Кашемир серый',
            cost: '1200',
            image: eggerkat1 + '561_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'U156 ST9 Бежевый песок',
            cost: '1200',
            image: 'eggerkat1 +.587_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'W1000 ST9 Белый песок',
            cost: '1200',
            image: eggerkat1 + '596_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'U763 ST9 Серый перламутровый',
            cost: '1200',
            image: eggerkat1 + '597_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'H1424 ST22 Файнлайн крем',
            cost: '1200',
            image: eggerkat1 + '614_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'U104 ST9 Белый алебастр',
            cost: '1200',
            image: eggerkat1 + '632 _image.jpg',
          },
          {
            id: uuidv4(),
            name: 'W1000 ST9 Белый премиум',
            cost: '1200',
            image: eggerkat1 + '636_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'H1137 ST12 Дуб сорано черно-коричневый',
            cost: '1200',
            image: eggerkat1 + '638_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'H3734 ST9 Орех дижон натуральный',
            cost: '1200',
            image: eggerkat1 + '639_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'H3840 ST9  Клен мандал натуральный',
            cost: '1200',
            image: eggerkat1 + '640_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'U216 ST9 Камель бежевый',
            cost: '1200',
            image: eggerkat1 + '641_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'U708 ST9 Светло серый',
            cost: '1200',
            image: eggerkat1 + '642_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'U732 ST9 Серый пыльный',
            cost: '1200',
            image: eggerkat1 + '643_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'U108 ST9 Ванильный желтый',
            cost: '1200',
            image: eggerkat1 + '650_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'H1145 ST10 Дуб бардолино натуральный ',
            cost: '1200',
            image: eggerkat1 + '655_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'H3398 ST12 Дуб кендал коньяк',
            cost: '1200',
            image: eggerkat1 + '656_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'U222 ST9 Крем бежевый',
            cost: '1200',
            image: eggerkat1 + '657_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'U767 ST9 Кубанит серый',
            cost: '1200',
            image: eggerkat1 + '658_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'U727 ST9 Серый камень',
            cost: '1200',
            image: eggerkat1 + '659_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'U7рюфель коричневый',
            cost: '1200',
            image: eggerkat1 + '660_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'U222 ST9 Крем бежевый',
            cost: '1200',
            image: eggerkat1 + '661_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'U963 ST9 Диамант серый',
            cost: '1200',
            image: eggerkat1 + '662_image.jpg',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'egger kat.2',
        image: '',
        variables: [
          {
            id: uuidv4(),
            name: 'W1100 ST9  Белый альпийский',
            cost: '1200',
            image: eggerkat2 + '668_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'W1000 ST19 Белый премиум',
            cost: '1200',
            image: eggerkat2 + '579_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'H358 ST22 Венге мали',
            cost: '1200',
            image: eggerkat2 + '_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'H3090 ST22 Древесина Шорвуд',
            cost: '1200',
            image: eggerkat2 + '583_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'H1401 ST22 Сосна Касцина',
            cost: '1200',
            image: eggerkat2 + '588_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'H3450 ST22 Флитвуд белый',
            cost: '1200',
            image: eggerkat2 + '589_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'H3451 ST22 Флитвуд шампань',
            cost: '1200',
            image: eggerkat2 + '590_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'U999 ST2 Черный',
            cost: '1200',
            image: eggerkat2 + '592_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'F186 ST9 Бетон Чикаго светло-серый',
            cost: '1200',
            image: eggerkat2 + '594_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'F501 ST2 Алюминий матированный (Титан)',
            cost: '1200',
            image: eggerkat2 + '595_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'F186 ST9 Бетон Чикаго темно-серый',
            cost: '1200',
            image: eggerkat2 + '610_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'H1122 ST22 Древесина белая',
            cost: '1200',
            image: eggerkat2 + '612_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'H3303 ST10 Дуб Гамильтон натуральный',
            cost: '1200',
            image: eggerkat2 + '613_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'H1113 ST10 Дуб Канзас коричневый',
            cost: '1200',
            image: eggerkat2 + '644_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'H1115 ST9 Баменда серо-бежевый',
            cost: '1200',
            image: eggerkat2 + '645_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'H1399 ST10 Дуб Денвер трюфель',
            cost: '1200',
            image: eggerkat2 + '646_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'H3331 ST10 Дуб Небраска натуральный',
            cost: '1200',
            image: eggerkat2 + '647_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'H3433 ST22 Сосна Аланд полярная',
            cost: '1200',
            image: eggerkat2 + '648_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'H3430 ST22 Сосна Аланд белая',
            cost: '1200',
            image: eggerkat2 + '654_image.jpg',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'egger kat.3',
        image: '',
        variables: [
          {
            id: uuidv4(),
            name: 'U998 ST38 Лес черный',
            cost: '1200',
            image: eggerkat3 + '563_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'H1180 ST37 Дуб галифакс натуральный',
            cost: '1200',
            image: eggerkat3 + '584_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'H1181 ST37 Дуб Галифакс табак',
            cost: '1200',
            image: eggerkat3 + '585_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'H1250 ST22 Ясень Наварра',
            cost: '1200',
            image: eggerkat3 + '591_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'H3309 ST28 Дуб Гладстоун песочный',
            cost: '1200',
            image: eggerkat3 + '593_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'H1486 ST22 Сосна Пасадена',
            cost: '1200',
            image: eggerkat3 + '611_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'W1000 ST38 Белый премиум',
            cost: '1200',
            image: eggerkat3 + '637_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'H1176 ST37 Дуб Галифакс белый',
            cost: '1200',
            image: eggerkat3 + '649_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'H3325 ST28 Дуб Гладстоун табак',
            cost: '1200',
            image: eggerkat3 + '651_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'H3326 ST28 Дуб Гладстоун серо-бежевый',
            cost: '1200',
            image: eggerkat3 + '663_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'H1345 ST32 Дуб Шерман серый',
            cost: '1200',
            image: eggerkat3 + '664_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'H1345 ST32 Дуб Шерман антрацит',
            cost: '1200',
            image: eggerkat3 + '665_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'H3154 ST36 Дуб Чарльстон темно-коричневый',
            cost: '1200',
            image: eggerkat3 + '666_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'H3133 ST12 Дуб Давос трюфель',
            cost: '1200',
            image: eggerkat3 + '667_image.jpg',
          },
        ],
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
        variables: [
          {
            id: uuidv4(),
            name: 'Белый Р100',
            cost: '1200',
            image: mdfGlosStandart + '564_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Бьянко Р101',
            cost: '1200',
            image: mdfGlosStandart + '565_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Вижен Р103',
            cost: '1200',
            image: mdfGlosStandart + '566_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Матовая мята Р010',
            cost: '1200',
            image: mdfGlosStandart + '567_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Белый Р001 матовый',
            cost: '1200',
            image: mdfGlosStandart + '603_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Вижен Р732 матовый',
            cost: '1200',
            image: mdfGlosStandart + '605_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Крем Р102',
            cost: '1200',
            image: mdfGlosStandart + '606_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Крем Р002 матовый',
            cost: '1200',
            image: mdfGlosStandart + '607_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'P003 Темно-серый матовый',
            cost: '1200',
            image: mdfGlosStandart + '608_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Р733 Мокко матовый',
            cost: '1200',
            image: mdfGlosStandart + '609_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Морская волна матовый Р011',
            cost: '1200',
            image: mdfGlosStandart + '616_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Серый шторм Р004',
            cost: '1200',
            image: mdfGlosStandart + '617_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Чёрный матовый Р006',
            cost: '1200',
            image: mdfGlosStandart + '618_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Матовый новый серый Р729',
            cost: '1200',
            image: mdfGlosStandart + '669_image.jpg',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'премиум',
        image: '',
        variables: [
          {
            id: uuidv4(),
            name: 'Земляной латте Р674',
            cost: '1200',
            image: mdfGlosPremium + '568_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Галакси золотой Р210',
            cost: '1200',
            image: mdfGlosPremium + '569_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Вьюн белый Р206',
            cost: '1200',
            image: mdfGlosPremium + '570_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Чёрный цветок Р207',
            cost: '1200',
            image: mdfGlosPremium + '571_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Иллюзия чёрная Р242',
            cost: '1200',
            image: mdfGlosPremium + '573_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Матрикс жемчужный Р218',
            cost: '1200',
            image: mdfGlosPremium + '574_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Кремовая галактика Р209',
            cost: '1200',
            image: mdfGlosPremium + '575_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Белая линия Р200',
            cost: '1200',
            image: mdfGlosPremium + '619_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Чёрная линия Р201',
            cost: '1200',
            image: mdfGlosPremium + '620_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Звезда кремовая Р245',
            cost: '1200',
            image: mdfGlosPremium + '622_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Звезда земляная Р244',
            cost: '1200',
            image: mdfGlosPremium + '623_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Матовая пустыня крем Р368',
            cost: '1200',
            image: mdfGlosPremium + '624_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Галактика металлик антрацит Р211',
            cost: '1200',
            image: mdfGlosPremium + '625_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Белая волна Р232',
            cost: '1200',
            image: mdfGlosPremium + '626_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Чёрная волна Р233',
            cost: '1200',
            image: mdfGlosPremium + '627_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Сахара крем Р236',
            cost: '1200',
            image: mdfGlosPremium + '628_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Сахара антрацит Р237',
            cost: '1200',
            image: mdfGlosPremium + '629_image.jpg',
          },
          {
            id: uuidv4(),
            name: 'Жемчужно бежевый Р212',
            cost: '1200',
            image: mdfGlosPremium + '630_image.jpg',
          },
        ],
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
        variables: [
          {
            id: uuidv4(),
            name: '1015 Светло-Бежевый',
            cost: '1200',
            image: lakobelStandart + '506_image.jpg',
          },
          {
            id: uuidv4(),
            name: '9005 Чёрный',
            cost: '1200',
            image: lakobelStandart + '510_image.jpg',
          },
          {
            id: uuidv4(),
            name: '1236 Светло-Коричневый',
            cost: '1200',
            image: lakobelStandart + '513_image.jpg',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'классик',
        image: '',
        variables: [
          {
            id: uuidv4(),
            name: '9003 Насыщенный Белый',
            cost: '1200',
            image: lakobelClassic + '504_image.jpg',
          },
          {
            id: uuidv4(),
            name: '1013 Жемчужно-Белый',
            cost: '1200',
            image: lakobelClassic + '505_image.jpg',
          },
        ],
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
        image: glass + '2814_image.jpg',
        variables: [],
      },
      {
        id: uuidv4(),
        name: 'обычное + пленка б/ц',
        image: glass + '393_image.jpg',
        variables: [],
      },
      {
        id: uuidv4(),
        name: 'бронза + пленка б/ц',
        image: glass + '2719_image.jpg',
        variables: [],
      },
      {
        id: uuidv4(),
        name: 'графит + пленка б/ц',
        image: glass + '2811_image.jpg',
        variables: [],
      },
      {
        id: uuidv4(),
        name: 'сатинат + пленка б/ц',
        image: glass + '390_image.jpg',
        variables: [],
      },
      {
        id: uuidv4(),
        name: 'сатинат бронза + пленка б/ц',
        image: glass + '2757_image.jpg',
        variables: [],
      },
      {
        id: uuidv4(),
        name: 'сатинат графит + пленка б/ц',
        image: glass + '2813_image.jpg',
        variables: [],
      },
    ],
  },
];

export const profiles = [
  {
    name: 'standart',
    image: `${BASE_URL}/profiles/standart.jpeg`,
    colors: [
      {
        id: uuidv4(),
        name: 'серебро аннодированное',
        color: '#D5D5D5',
      },
      {
        id: uuidv4(),
        name: 'Золото анодировка',
        color: '#DAC985',
      },
      {
        id: uuidv4(),
        name: 'шампань анодировка',
        color: '#A2A679',
      },
      {
        id: uuidv4(),
        name: 'Лиственница крем. структура',
        color: '#ffffe8',
      },
      {
        id: uuidv4(),
        name: 'Берёза структура',
        color: '#e2decb',
      },
      {
        id: uuidv4(),
        name: 'Дуб дымчатый структура',
        color: '#d6ceb6',
      },
      {
        id: uuidv4(),
        name: 'Дуб Галифакс структура',
        color: '#8c7f57',
      },
      {
        id: uuidv4(),
        name: 'Венге тёмный текстурный',
        color: '#4e4645',
      },
      {
        id: uuidv4(),
        name: 'Белый глянец',
        color: '#edeef2',
      },
      {
        id: uuidv4(),
        name: 'Платина',
        color: '#e6ebe1',
      },
      {
        id: uuidv4(),
        name: 'Коньяк',
        color: '#302702',
      },
      {
        id: uuidv4(),
        name: 'Графит',
        color: '#7a7878',
      },
      {
        id: uuidv4(),
        name: 'Чёрный',
        color: '#000000',
      },
      {
        id: uuidv4(),
        name: 'Софт-тач Капучино',
        color: '#fcf5dd',
      },
      {
        id: uuidv4(),
        name: 'Софт-тач Грей',
        color: '#a19999',
      },
      {
        id: uuidv4(),
        name: 'Серебро Браш',
        color: '#d5d5d5',
      },
      {
        id: uuidv4(),
        name: 'Золото Браш',
        color: '#ebd16e',
      },
      {
        id: uuidv4(),
        name: 'Шампань Браш',
        color: '#b2bd9b',
      },
    ],
  },
  {
    name: 'combo',
    image: `${BASE_URL}/profiles/combo.jpeg`,
    colors: [
      {
        id: uuidv4(),
        name: 'серебро аннодированное',
        color: '#D5D5D5',
      },
      {
        id: uuidv4(),
        name: 'Белый глянец',
        color: '#edeef2',
      },
      {
        id: uuidv4(),
        name: 'Платина',
        color: '#e6ebe1',
      },
      {
        id: uuidv4(),
        name: 'Чёрный',
        color: '#000000',
      },
    ],
  },
  {
    name: 'venezia',
    image: `${BASE_URL}/profiles/venezia.jpeg`,
    colors: [
      {
        id: uuidv4(),
        name: 'серебро аннодированное',
        color: '#D5D5D5',
      },
      {
        id: uuidv4(),
        name: 'Дуб Галифакс структура',
        color: '#8c7f57',
      },
      {
        id: uuidv4(),
        name: 'Белый глянец',
        color: '#edeef2',
      },
      {
        id: uuidv4(),
        name: 'Софт-тач Капучино',
        color: '#fcf5dd',
      },
      {
        id: uuidv4(),
        name: 'Софт-тач Грей',
        color: '#a19999',
      },
      {
        id: uuidv4(),
        name: 'Серебро Браш',
        color: '#d5d5d5',
      },
      {
        id: uuidv4(),
        name: 'Золото Браш',
        color: '#ebd16e',
      },
      {
        id: uuidv4(),
        name: 'Шампань Браш',
        color: '#b2bd9b',
      },
    ],
  },
  {
    name: 'akka',
    image: `${BASE_URL}/profiles/akka.jpeg`,
    colors: [
      {
        id: uuidv4(),
        name: 'серебро аннодированное',
        color: '#D5D5D5',
      },
      {
        id: uuidv4(),
        name: 'Белый глянец',
        color: '#edeef2',
      },
      {
        id: uuidv4(),
        name: 'Платина',
        color: '#e6ebe1',
      },
      {
        id: uuidv4(),
        name: 'Коньяк',
        color: '#302702',
      },
      {
        id: uuidv4(),
        name: 'Чёрный',
        color: '#000000',
      },
    ],
  },
  {
    name: 'pi',
    image: `${BASE_URL}/profiles/pi.jpeg`,
    colors: [
      {
        id: uuidv4(),
        name: 'серебро аннодированное',
        color: '#D5D5D5',
      },
      {
        id: uuidv4(),
        name: 'Белый глянец',
        color: '#edeef2',
      },
      {
        id: uuidv4(),
        name: 'Платина',
        color: '#e6ebe1',
      },
      {
        id: uuidv4(),
        name: 'Коньяк',
        color: '#302702',
      },
      {
        id: uuidv4(),
        name: 'Чёрный',
        color: '#000000',
      },
    ],
  },
  {
    name: 'omega',
    image: `${BASE_URL}/profiles/omega.jpeg`,
    colors: [
      {
        id: uuidv4(),
        name: 'серебро аннодированное',
        color: '#D5D5D5',
      },
      {
        id: uuidv4(),
        name: 'Золото анодировка',
        color: '#DAC985',
      },
      {
        id: uuidv4(),
        name: 'шампань анодировка',
        color: '#A2A679',
      },
      {
        id: uuidv4(),
        name: 'Белый глянец',
        color: '#edeef2',
      },
      {
        id: uuidv4(),
        name: 'Платина',
        color: '#e6ebe1',
      },
      {
        id: uuidv4(),
        name: 'Чёрный',
        color: '#000000',
      },
    ],
  },
  {
    name: 'quadro',
    image: `${BASE_URL}/profiles/quadro.jpeg`,
    colors: [
      {
        id: uuidv4(),
        name: 'серебро аннодированное',
        color: '#D5D5D5',
      },
      {
        id: uuidv4(),
        name: 'Берёза структура',
        color: '#e2decb',
      },
      {
        id: uuidv4(),
        name: 'Венге тёмный текстурный',
        color: '#4e4645',
      },
      {
        id: uuidv4(),
        name: 'Белый глянец',
        color: '#edeef2',
      },
      {
        id: uuidv4(),
        name: 'Платина',
        color: '#e6ebe1',
      },
      {
        id: uuidv4(),
        name: 'Коньяк',
        color: '#302702',
      },
      {
        id: uuidv4(),
        name: 'Чёрный',
        color: '#000000',
      },
    ],
  },
];
