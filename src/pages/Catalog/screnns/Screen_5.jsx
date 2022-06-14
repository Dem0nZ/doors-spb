import React from 'react';
import tw from 'twin.macro';
import { useNavigate } from 'react-router-dom';

import img1 from '../../../assets/slider/closet/stand_alone/closed_alone_03.jpg';
import img2 from '../../../assets/slider/closet/stand_alone/closed_alone_011.jpg';
import img3 from '../../../assets/slider/closet/stand_alone/closed_alone_012.jpg';
import img4 from '../../../assets/slider/closet/stand_alone/closed_alone_04.jpg';
import img5 from '../../../assets/slider/closet/stand_alone/closed_alone_05.jpg';
import img6 from '../../../assets/slider/closet/stand_alone/closed_alone_06.jpg';
import img7 from '../../../assets/slider/closet/stand_alone/closed_alone_07.jpg';
import img8 from '../../../assets/slider/closet/stand_alone/closed_alone_08.jpg';
import img9 from '../../../assets/slider/closet/stand_alone/closed_alone_10.jpg';

const Screen_5 = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>

      <Title>ШКАФЫ-КУПЕ ОТДЕЛЬНО СТОЯЩИЕ</Title>
      <Content>
        <Img className='col-span-2' src={img1} alt='img' />
        <div className='flex flex-col justify-between'>
          <Text>
            Встроенные шкафы-купе занимают минимум полезной площади
            и идеально вписываются в отведенную под мебель зону.
            Встроенный шкаф купе чаще всего устанавливают в нише,
            или вплотную к стенам.
            В таких шкафах нет стенок,
            вся конструкция шкафа крепится к стенкам, потолку и полу.
          </Text>
          <Button onClick={() => navigate('/calculate')}>РАСЧИТАТЬ СТОИМОСТЬ</Button>
        </div>
        <Img src={img7} alt='img' />
            <div>
                <Img src={img3} alt='img' />
                <Img src={img5} alt='img' />
            </div>
            <div>
                <Img src={img6} alt='img' />
                <Img src={img2} alt='img' />
            </div>
        <Img className='col-span-2' src={img4} alt='img' />
        <Img src={img8} alt='img' />
        <Img src={img9} alt='img' />
      </Content>
    </Wrapper>
  );
};

const Wrapper = tw.div`flex flex-col mb-16 mx-px`;
const Title = tw.div`flex mt-10 text-5xl font-medium`;
const Content = tw.div`grid grid-cols-2 mt-10 gap-20 place-items-stretch`;
const Text = tw.p`text-2xl`;
const Img = tw.img`object-cover`;
const Block_4 = tw.div`col-span-2 grid grid-cols-2 gap-24 mt-20`;
const Button = tw.button` p-6 text-sm border hover:shadow-md active:bg-red-50`;

export default Screen_5;
