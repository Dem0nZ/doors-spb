import React from 'react';
import tw from 'twin.macro';

import photo1 from '../../../assets/catalog/compartment-doors/001.jpg';
import photo2 from '../../../assets/catalog/compartment-doors/002.jpg';
import photo3 from '../../../assets/catalog/compartment-doors/003.jpg';
import photo4 from '../../../assets/catalog/compartment-doors/004.jpg';
import photo5 from '../../../assets/catalog/compartment-doors/005.jpg';
import photo6 from '../../../assets/catalog/compartment-doors/006.jpg';

const Screen3 = () => {
  return (
    <Wrapper>
      <Title>ДВЕРИ-КУПЕ</Title>
      <Content>
        <Img className='col-span-2' src={photo6} alt='img' />
        <div className='flex flex-col gap-4 sm:col-span-2'>
          <Text className='indent-6'>
            В современной жизни сложно представить помещение, в котором не было бы дверей-купе. Ведь двери-купе это
            незаменимая вещь для закрытия ниш, гардеробных комнат и шкафов-купе. Наша компания изготавливает двери-купе
            любых размеров. Мы предлагаем огромный выбор качественных и современных материалов для изготовления
            дверей-купе. Варианты исполнения можно посмотреть на фото. А рассчитать стоимость быстро и очень просто
            можно воспользовавшись нашим калькулятором.
          </Text>
          <Button>РАСЧИТАТЬ СТОИМОСТЬ</Button>
        </div>
        <Img className='sm:col-span-2' src={photo4} alt='img' />
        <Img className='col-span-2' src={photo3} alt='img' />
        <Img src={photo2} alt='img' />
        <div className='flex flex-col gap-4'>
          <Img src={photo1} alt='img' />
          <Img src={photo5} alt='img' />
        </div>
      </Content>
    </Wrapper>);
};

const Wrapper = tw.div`flex flex-col mb-16 mx-px`;
const Title = tw.div`flex mt-10 text-5xl font-medium sm:text-3xl sm:font-light sm:px-4`;
const Content = tw.div`grid grid-cols-2 mt-10 gap-20 place-items-stretch sm:gap-4`;
const Img = tw.img`object-cover`;
const Text = tw.p`text-2xl font-extralight sm:text-xs sm:px-2`;
const Button = tw.button` p-6 text-sm border hover:shadow-md active:bg-gray-200 sm:mt-6 sm:text-transparent sm:text-2xl sm:font-bold sm:bg-clip-text sm:bg-gradient-to-r sm:from-purple-400 sm:to-pink-600`;

export default Screen3;
