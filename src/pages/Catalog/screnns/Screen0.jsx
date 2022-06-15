import React from 'react';
import tw from 'twin.macro';

import img1 from '../../../assets/slider/closet/build/closed_build_12.jpg';
import img2 from '../../../assets/slider/closet/build/closed_build_08.jpg';
import img3 from '../../../assets/slider/closet/build/closed_build_09.jpg';
import img4 from '../../../assets/slider/closet/build/closed_build_02.jpg';
import img5 from '../../../assets/slider/closet/build/closed_build_0003.jpg';
import img6 from '../../../assets/slider/closet/build/closed_build_14.jpg';
import img7 from '../../../assets/slider/closet/build/closed_build_17.jpg';

const Screen0 = () => {
  return (
    <Wrapper>
      <Title>ШКАФЫ-КУПЕ ВСТРОЕННЫЕ</Title>
      <Content>
        <Img className='col-span-2' src={img1} alt='img' />
        <Text className='col-span-2'>
          Были времена, когда шкаф-купе считался предметом роскоши. Сегодня же это предмет мебели, который отлично
          вписывается в любой интерьер. Наша компания изготавливает шкафы-купе из материалов, имеющих отличное качество
          и долгий срок службы. Несомненными преимуществами шкафов-купе является экономия пространства, функциональность
          и привлекательный внешний вид. А это очень актуально в современной жизни. Шкафы-купе могут быть прямыми и
          угловыми. Встроенными и отдельно-стоящими. Шкафы-купе - незаменимая вещь как для дома, так и для офиса.
        </Text>
        <Img src={img3} alt='img' />
        <Text>
          Встроенные шкафы-купе занимают минимум полезной площади и идеально вписываются в отведенную под мебель зону.
          Встроенный шкаф купе чаще всего устанавливают в нише, или вплотную к стенам. В таких шкафах нет стенок, вся
          конструкция шкафа крепится к стенкам, потолку и полу.
        </Text>
        <Img className='col-span-2' src={img5} alt='img' />
      </Content>
    </Wrapper>);
};

const Wrapper = tw.div`flex flex-col mb-16 mx-px`;
const Content = tw.div`grid grid-cols-2 mt-10 gap-20 place-items-stretch sm:gap-4`;
const Title = tw.div`flex mt-10 text-5xl font-medium sm:text-3xl sm:font-light sm:px-4`;
const Text = tw.p`text-2xl font-extralight sm:text-xs sm:px-2 sm:col-span-2`;
const Img = tw.img`object-cover`;

export default Screen0;
