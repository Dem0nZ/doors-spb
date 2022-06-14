import React from 'react';
import tw from 'twin.macro';
import { useNavigate } from 'react-router-dom';

import img1 from '../../../assets/slider/closet/build/closed_build_12.jpg';
import img2 from '../../../assets/slider/closet/build/closed_build_08.jpg';
import img3 from '../../../assets/slider/closet/build/closed_build_09.jpg';
import img4 from '../../../assets/slider/closet/build/closed_build_02.jpg';
import img5 from '../../../assets/slider/closet/build/closed_build_0003.jpg';
import img6 from '../../../assets/slider/closet/build/closed_build_14.jpg';
import img7 from '../../../assets/slider/closet/build/closed_build_17.jpg';

const Screen_1 = () => {

  return (
    <ScreenWrapper>
      <ScreenTitle>
        КАФЫ-КУПЕ ВСТРОЕННЫЕ
      </ScreenTitle>
      <ScreenImgBlock>
        <Block_1>
          <ScreenImg1 src={img1} alt='img' />
        </Block_1>
        <Block_2>
          Встроенные шкафы-купе занимают минимум полезной площади
          и идеально вписываются в отведенную под мебель зону.
          Встроенный шкаф купе чаще всего устанавливают в нише,
          или вплотную к стенам.
          В таких шкафах нет стенок,
          вся конструкция шкафа крепится к стенкам,\ потолку и полу.
        </Block_2>
        <Block_3>
          <ScreenImg2 src={img2} alt='img' />
        </Block_3>
        <Block_4>
          <ScreenImg3 src={img3} alt='img' />
          <ScreenImg4 src={img4} alt='img' />
        </Block_4>
        <Block_5>
          <img src={img5} alt='img' />
        </Block_5>
        <Block_6>
          <ScreenImg6 src={img7} alt='img' />
          <ScreenImg7 src={img6} alt='img' />
        </Block_6>
      </ScreenImgBlock>
    </ScreenWrapper>

  );
};

const ScreenWrapper = tw.div`flex flex-col mb-16 mx-[1px]`;
const ScreenTitle = tw.div`flex mt-10 text-6xl font-medium`;
const ScreenImgBlock = tw.div`grid grid-cols-[42% 1fr] mt-10`;

const Block_1 = tw.div`col-span-2 `;
const ScreenImg1 = tw.img`w-full h-full`;

const Block_2 = tw.p`  flex flex-col justify-between mt-40  pl-5 text-2xl leading-8`;
const ScreenImg2 = tw.img`w-[525px] h-[350px]`;

const Block_3 = tw.div`mt-40 ml-auto`;
const ScreenImg3 = tw.img`w-[480px] h-[430px]`;

const Block_4 = tw.div`col-span-2 flex justify-between mt-40`;
const ScreenImg4 = tw.img`w-[480px] h-[430px]`;

const Block_5 = tw.div`col-span-2 mt-40`;

const Block_6 = tw.div`col-span-2 flex justify-between mt-40`;
const ScreenImg6 = tw.img`w-[480px] h-[640px]`;
const ScreenImg7 = tw.img`w-[480px] h-[640px]`;


export default Screen_1;
