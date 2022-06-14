import React from 'react';
import tw from 'twin.macro';
import img1 from '../../../assets/slider/doors/doors_1.jpg';
import img2 from '../../../assets/slider/doors/doors_2.jpg';
import img3 from '../../../assets/slider/doors/doors_3.jpg';
import img4 from '../../../assets/slider/doors/doors_4.jpg';
import img5 from '../../../assets/slider/doors/doors_9.jpg';
import img6 from '../../../assets/slider/doors/doors_6-01.jpg';
import img8 from '../../../assets/slider/doors/doors_8.jpg';
import img7 from '../../../assets/slider/doors/doors_7.jpg';

const Screen_3 = () => {
  return (
    <Wrapper>
      <Title>
        ДВЕРИ-КУПЕ МЕЖКОМНАТНЫЕ
      </Title>
      <Content>
          <Img className='col-span-2' src={img1} alt='img' />
          <Img src={img7} alt='img' />
          <Img src={img6} alt='img' />
          <Img className='col-span-2' src={img5} alt='img' />
          <Img className='col-span-2' src={img8} alt='img' />
        <div className='flex flex-col justify-between gap-4'>
          <Img src={img2} alt='img' />
          <Img src={img3} alt='img' />
        </div>
          <Img src={img4} alt='img' />
      </Content>
    </Wrapper>
  );
};

const Wrapper = tw.div`flex flex-col mb-16 mx-[1px]`;
const Title = tw.div`flex mt-10 text-6xl font-medium sm:text-3xl sm:font-light sm:px-4`;
const Content = tw.div`grid grid-cols-2 mt-10 gap-20 place-items-stretch sm:gap-4`;
const Img = tw.img`object-cover`;

export default Screen_3;
