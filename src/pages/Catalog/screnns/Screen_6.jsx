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

const Screen_6 = () => {
  return (
    <Wrapper>
      <Title>ДВЕРИ-КУПЕ ДЛЯ ГАРДЕРОБНОЙ</Title>
      <Content>
        <Img className='col-span-2' src={img1} alt='img' />
        <div className='flex flex-col gap-4'>
          <Img src={img5} alt='img' />
          <Img src={img9} alt='img' />
        </div>
        <Img src={img6} alt='img' />
        <Img className='col-span-2' src={img7} alt='img' />
        <div className='flex flex-col gap-4'>
          <Img src={img2} alt='img' />
          <Img src={img3} alt='img' />
        </div>
        <Img src={img4} alt='img' />
        <Img src={img10} alt='img' />
        <Img src={img11} alt='img' />
      </Content>
    </Wrapper>);
};

const Wrapper = tw.div`flex flex-col mb-16 mx-px`;
const Title = tw.div`flex mt-10 text-5xl font-medium`;
const Content = tw.div`grid grid-cols-2 mt-10 gap-20 place-items-stretch`;
const Img = tw.img`object-cover`;


export default Screen_6;
