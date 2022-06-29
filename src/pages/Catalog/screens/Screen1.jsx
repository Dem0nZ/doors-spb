import React from 'react';
import tw from 'twin.macro';

import photo1 from '../../../assets/catalog/interrior-walls/001.jpeg';
import photo2 from '../../../assets/catalog/interrior-walls/002.jpeg';
import photo3 from '../../../assets/catalog/interrior-walls/003.jpeg';
import photo4 from '../../../assets/catalog/interrior-walls/004.jpeg';

const Screen1 = () => {
  return (
    <Wrapper>
      <Title>
        ПЕРЕГОРОДКИ МЕЖКОМНАТНЫЕ
      </Title>
      <Content>
        <Img className='col-span-2' src={photo1} alt='img' />
        <Text className='indent-6'>
          Основная функция межкомнатных перегородок это разграничение площади помещения. Проще говоря - зонирования.
          Раздвижные межкомнатные перегородки это отличное решение, а так же простой и легкий способ деления открытого
          пространства. Они добавляют эстетические и художественные акценты в обстановку. Такие перегородки служат
          одновременно и стенами, и дверями.
        </Text>
        <Img src={photo4} alt='img' />
        <Img src={photo2} alt='img' />
        <Img className='col-span-2 w-full' src={photo3} alt='img' />
      </Content>
    </Wrapper>
  );
};

const Wrapper = tw.div`flex flex-col mb-16 mx-px`;
const Title = tw.div`flex mt-10 text-5xl font-medium sm:text-3xl sm:font-light sm:px-4`;
const Content = tw.div`grid grid-cols-2 mt-10  gap-20 place-items-stretch sm:gap-4`;
const Text = tw.p`text-2xl font-extralight sm:text-xs sm:px-2 col-span-2`;
const Img = tw.img`object-cover`;


export default Screen1;
