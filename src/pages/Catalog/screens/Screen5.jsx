import React from 'react';
import tw from 'twin.macro';

import photo1 from '../../../assets/catalog/hinged-closets/001.jpg';
import photo2 from '../../../assets/catalog/hinged-closets/002.jpg';
import photo3 from '../../../assets/catalog/hinged-closets/003.jpg';
import photo4 from '../../../assets/catalog/hinged-closets/004.jpg';
import photo5 from '../../../assets/catalog/hinged-closets/005.jpg';

const Screen5 = () => {
  return (
    <Wrapper>
      <Title>РАСПАШНЫЕ ШКАФЫ</Title>
      <Content>
        <Img className='col-span-2' src={photo1} alt='img' />
        <div className='col-span-2 indent-6'>
          <Text>
            Шкафы-купе в современных интерьерах смотрятся стильно и оригинально, однако шкафы с  классическими распашными дверями не перестают быть популярными среди покупателей.
          </Text>
          <Text>
            Современный шкаф с распашными дверями гармонично впишется в любой дизайн комнаты благодаря большому разнообразию моделей. Распашные шкафы  имеют презентабельный вид, при этом являются удобными и вместительными.
          </Text>
        </div>
        <Img src={photo3} alt='img' />
        <Img src={photo4} alt='img' />
        <div className='col-span-2 indent-6'>
        <Text>
          В MEBEL-178 Вы можете заказать распашной шкаф в спальню, гостиную, детскую или прихожую по индивидуальному проекту. Наши опытные дизайнеры помогут Вам на любом этапе от выбора материала и цвета изделия до наполнения.
        </Text>
        <Text>
          Быстро рассчитать распашной шкаф можно позвонив по телефону +7(911)997-82-57, а так же заполнив форму обратной связи на нашем сайте.
        </Text>
        </div>
        <Img className='col-span-2' src={photo2} alt='img' />
      </Content>
    </Wrapper>);
};

const Wrapper = tw.div`flex flex-col mb-16 mx-px`;
const Content = tw.div`grid grid-cols-2 mt-10 gap-20 place-items-stretch sm:gap-4`;
const Title = tw.div`flex mt-10 text-5xl font-medium sm:text-3xl sm:font-light sm:px-4`;
const Text = tw.p`text-2xl font-extralight sm:text-xs sm:px-2 sm:col-span-2`;
const Img = tw.img`object-cover`;

export default Screen5;
