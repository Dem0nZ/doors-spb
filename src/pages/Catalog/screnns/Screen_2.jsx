import React from 'react';
import tw from 'twin.macro';

import img4 from '../../../assets/slider/partition/partition_10.jpg';
import img3 from '../../../assets/slider/partition/partition_11.jpg';
import img1 from '../../../assets/slider/partition/partition_19.jpg';
import img2 from '../../../assets/slider/partition/partition_27.jpg';
import img7 from '../../../assets/slider/partition/partition_21.jpg';

const Screen_2 = () => {
  return (
    <ScreenWrapper>
      <Title>
        ПЕРЕГОРОДКИ МЕЖКОМНАТНЫЕ
      </Title>
      <ScreenImgBlock>
        <ScreenImg className='col-span-2' src={img1} alt='img' />
        <ScreenImg src={img2} alt='img' />
        <Text>
          Основная функция межкомнатных перегородок это разграничение площади помещения.
          Проще говоря - зонирования.
          Раздвижные межкомнатные перегородки это отличное решение,
          а так же простой и легкий способ деления открытого пространства.
          Они добавляют эстетические и художественные акценты в обстановку.
          Такие перегородки служат одновременно и стенами, и дверями.
        </Text>
        <ScreenImg src={img3} alt='img' />
        <ScreenImg src={img4} alt='img' />
        <ScreenImg className='col-span-2 w-full' src={img7} alt='img' />
      </ScreenImgBlock>
    </ScreenWrapper>
  );
};

const ScreenWrapper = tw.div`flex flex-col mb-16 mx-px`;
const Title = tw.div`flex mt-10 text-6xl font-medium`;
const ScreenImgBlock = tw.div`grid grid-cols-2 mt-10  gap-20 place-items-stretch`;
const Text = tw.p`text-2xl`;
const ScreenImg = tw.img`object-cover`;


export default Screen_2;
