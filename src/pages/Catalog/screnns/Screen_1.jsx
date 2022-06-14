import React from 'react';
import tw from 'twin.macro';

import img1 from '../../../assets/slider/closet/build/closed_build_12.jpg';
import img2 from '../../../assets/slider/closet/build/closed_build_08.jpg';
import img3 from '../../../assets/slider/closet/build/closed_build_09.jpg';
import img4 from '../../../assets/slider/closet/build/closed_build_02.jpg';
import img5 from '../../../assets/slider/closet/build/closed_build_0003.jpg';
import img6 from '../../../assets/slider/closet/build/closed_build_14.jpg';
import img7 from '../../../assets/slider/closet/build/closed_build_17.jpg';

const Screen_1 = () => {
  return (
    <Wrapper>
      <Title>КАФЫ-КУПЕ ВСТРОЕННЫЕ</Title>
      <Content>
        <Img className='col-span-2' src={img1} alt='img' />
        <Text>
          Встроенные шкафы-купе занимают минимум полезной площади
          и идеально вписываются в отведенную под мебель зону.
          Встроенный шкаф купе чаще всего устанавливают в нише,
          или вплотную к стенам.
          В таких шкафах нет стенок,
          вся конструкция шкафа крепится к стенкам, потолку и полу.
        </Text>
        <div className='sm:hidden'><Img src={img2} alt='img' /></div>
        <Img src={img3} alt='img' />
        <Img src={img4} alt='img' />
        <Img className='col-span-2' src={img5} alt='img' />
        <Img src={img7} alt='img' />
        <Img src={img6} alt='img' />
      </Content>
    </Wrapper>);
};

const Wrapper = tw.div`flex flex-col mb-16 mx-px`;
const Content = tw.div`grid grid-cols-2 mt-10 gap-20 place-items-stretch sm:gap-4`;
const Title = tw.div`flex mt-10 text-5xl font-medium sm:text-3xl sm:font-light sm:px-4`;
const Text = tw.p`text-2xl sm:text-xs sm:pl-2 sm:col-span-2`;
const Img = tw.img`object-cover`;

export default Screen_1;
