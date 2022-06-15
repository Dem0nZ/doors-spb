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

const Screen2 = () => {
  return (
    <Wrapper>

      <Title>ШКАФЫ-КУПЕ ОТДЕЛЬНО СТОЯЩИЕ</Title>
      <Content>
        <Img className='col-span-2' src={img1} alt='img' />
          <Text>
            Это полноценный шкаф состоящий из корпуса (задняя стенка, боковые стенки, низ), наполнения и дверей-купе.
            Такой шкаф при необходимости можно легко переставить в другое место. Мы изготавливаем шкафы-купе из
            качественных и современных материалов, с хорошими комплектующими и фурнитурой. Такие шкафы можно
            эксплуатировать очень долго. Поэтому следует заранее решить, какой дизайн шкафа выбрать . А наши менеджеры с
            радостью Вам в этом помогут.
          </Text>
          <Img src={img5} alt='img' />
        <Img src={img6} alt='img' />
        <Text>
          Наша компания предлагает огромный выбор фасадов и внутреннего наполнения для гардеробных и шкафов-купе. Для
          того, чтоб каждый наш клиент смог воплотить в реальность свою дизайнерскую задумку. Варианты исполнения
          дверей можно посмотреть в наших работах.
        </Text>
        <Img className='col-span-2' src={img4} alt='img' />
      </Content>
    </Wrapper>
  );
};

const Wrapper = tw.div`flex flex-col mb-16 mx-px`;
const Title = tw.div`flex mt-10 text-5xl font-medium sm:text-3xl sm:font-light sm:px-4`;
const Content = tw.div`grid grid-cols-2 mt-10 gap-20 place-items-stretch sm:gap-4`;
const Text = tw.p`text-2xl font-extralight sm:text-xs sm:px-2`;
const Img = tw.img`object-cover`;

export default Screen2;
