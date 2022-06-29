import React from 'react';
import tw from 'twin.macro';

import photo1 from '../../../assets/catalog/attic-closets/001.jpg';
import photo2 from '../../../assets/catalog/attic-closets/002.jpg';
import photo3 from '../../../assets/catalog/attic-closets/003.jpg';
import photo4 from '../../../assets/catalog/attic-closets/004.jpg';

const Screen4 = () => {
  return (
    <Wrapper>
      <Title>МАНСАРДНЫЕ ШКАФЫ</Title>
      <Content>
        <Img className='col-span-2' src={photo1} alt='img' />
        <Text className='col-span-2 indent-6'>
          Есть загородный дом? Не знаешь как грамотно организовать пространство под скатом крыши чтоб с пользой
          использовать каждый сантиметр площади? Хватит это терпеть! Мансардный шкаф - вот то, что Вам нужно! Такой шкаф
          можно вписать в самые разные нестандартные зоны, не теряя при этом практичности и функциональности. В Mebel-178 Вы можете заказать мансардный шкаф по индивидуальным размерам, который идеально впишется под Вашу крышу. А наши опытные дизайнеры с радостью помогут на любом этапе выбора от материалов до внутреннего наполнения. 🔥Посмотрите какие прекрасные идеи можно реализовать, разместив шкаф в наклонной части под крышей 😍
        </Text>
        <Img src={photo3} alt='img' />
        <Img src={photo4} alt='img' />
        <Img className='col-span-2' src={photo2} alt='img' />
      </Content>
    </Wrapper>);
};

const Wrapper = tw.div`flex flex-col mb-16 mx-px`;
const Content = tw.div`grid grid-cols-2 mt-10 gap-20 place-items-stretch sm:gap-4`;
const Title = tw.div`flex mt-10 text-5xl font-medium sm:text-3xl sm:font-light sm:px-4`;
const Text = tw.p`text-2xl font-extralight sm:text-xs sm:px-2 sm:col-span-2`;
const Img = tw.img`object-cover`;

export default Screen4;
