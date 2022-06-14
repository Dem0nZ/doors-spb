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
    <ScreenWrapper>
      <Title>
        ДВЕРИ-КУПЕ МЕЖКОМНАТНЫЕ
      </Title>
      <ScreenImgBlock>
          <ScreenImg className='col-span-2' src={img1} alt='img' />
          <ScreenImg src={img7} alt='img' />
          <ScreenImg src={img6} alt='img' />
          <ScreenImg className='col-span-2' src={img5} alt='img' />
          <ScreenImg className='col-span-2' src={img8} alt='img' />
        <div className='flex flex-col justify-between gap-4'>
          <ScreenImg src={img2} alt='img' />
          <ScreenImg src={img3} alt='img' />
        </div>
          <ScreenImg src={img4} alt='img' />
      </ScreenImgBlock>
    </ScreenWrapper>
  );
};

const ScreenWrapper = tw.div`flex flex-col mb-16 mx-[1px]`;
const Title = tw.div`flex mt-10 text-6xl font-medium`;
const ScreenImgBlock = tw.div`grid grid-cols-2 mt-10 gap-20 place-items-stretch`;
const ScreenImg = tw.img`object-cover`;

export default Screen_3;
