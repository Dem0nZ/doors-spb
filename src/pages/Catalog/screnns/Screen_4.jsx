import React from 'react';
import tw from 'twin.macro';

import img1 from '../../../assets/slider/closet/non_standart/closetNonStd_1.jpg';
import img2 from '../../../assets/slider/closet/non_standart/closetNonStd_6.jpg';
import img3 from '../../../assets/slider/closet/non_standart/closetNonStd_7.jpg';
import img4 from '../../../assets/slider/closet/non_standart/closetNonStd_4.jpg';
import img6 from '../../../assets/slider/closet/non_standart/closetNonStd_8.jpg';

const Screen_4 = () => {
  return (
    <Wrapper>
      <Title>ШКАФЫ-КУПЕ НЕСТАНДАРТНЫЕ</Title>
      <Content>
        <Img className='col-span-2' src={img1} alt='img' />
        <Img src={img2} alt='img' />
        <Img src={img3} alt='img' />
        <Img className='col-span-2' src={img6} alt='img' />
        <Text>
          Были времена, когда шкаф-купе считался предметом роскоши.
          Сегодня же это предмет мебели, который отлично вписывается в любой интерьер.
          Наша компания изготавливает шкафы-купе из материалов,
          имеющих отличное качество и долгий срок службы.
          Несомненными преимуществами шкафов-купе является экономия пространства,
          функциональность и привлекательный внешний вид.
          А это очень актуально в современной жизни.
        </Text>
        <Img src={img4} alt='img' />
      </Content>
    </Wrapper>
  );
};

const Wrapper = tw.div`flex flex-col mb-16 mx-px`;
const Title = tw.div`flex mt-10 text-5xl font-medium sm:text-3xl sm:font-light sm:px-4`;
const Content = tw.div`grid grid-cols-2 mt-10 gap-20 place-items-stretch sm:gap-4`;
const Text = tw.p`text-2xl sm:text-xs sm:pl-2`;
const Img = tw.img`object-cover`;

export default Screen_4;
