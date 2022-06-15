import React from 'react';
import tw from 'twin.macro';
import img1 from '../../../assets/slider/doors/checkroom/checkroom_010.jpg';
import img2 from '../../../assets/slider/doors/checkroom/checkroom_02.jpg';
import img3 from '../../../assets/slider/doors/checkroom/checkroom_03.jpg';
import img4 from '../../../assets/slider/doors/checkroom/checkroom_04.jpg';
import img5 from '../../../assets/slider/doors/checkroom/checkroom_05.jpg';
import img6 from '../../../assets/slider/doors/checkroom/checkroom_007.jpg';
import img7 from '../../../assets/slider/doors/checkroom/checkroom_07.jpg';
import img9 from '../../../assets/slider/doors/checkroom/checkroom_09.jpg';
import img10 from '../../../assets/slider/doors/checkroom/checkroom_013.jpg';
import img11 from '../../../assets/slider/doors/checkroom/checkroom_015.jpg';
import { useNavigate } from 'react-router-dom';

const Screen3 = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Title>ДВЕРИ-КУПЕ</Title>
      <Content>
        <Img className='col-span-2' src={img1} alt='img' />
        <div className='flex flex-col gap-4 sm:col-span-2'>
          <Text>
            В современной жизни сложно представить помещение, в котором не было бы дверей-купе. Ведь двери-купе это
            незаменимая вещь для закрытия ниш, гардеробных комнат и шкафов-купе. Наша компания изготавливает двери-купе
            любых размеров. Мы предлагаем огромный выбор качественных и современных материалов для изготовления
            дверей-купе. Варианты исполнения можно посмотреть на фото. А рассчитать стоимость быстро и очень просто
            можно воспользовавшись нашим калькулятором.
          </Text>
          <Button>РАСЧИТАТЬ СТОИМОСТЬ</Button>
        </div>
        <Img className='sm:col-span-2' src={img6} alt='img' />
        <Img className='col-span-2' src={img7} alt='img' />
        <Img src={img4} alt='img' />
        <div className='flex flex-col gap-4'>
          <Img src={img2} alt='img' />
          <Img src={img9} alt='img' />
        </div>
        <Img src={img10} alt='img' />
        <Img src={img11} alt='img' />
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
