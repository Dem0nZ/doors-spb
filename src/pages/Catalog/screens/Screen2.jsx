import React from 'react';
import tw from 'twin.macro';

import photo1 from '../../../assets/catalog/freestanding-closets/001.jpeg';
import photo2 from '../../../assets/catalog/freestanding-closets/002.jpeg';
import photo3 from '../../../assets/catalog/freestanding-closets/003.jpeg';
import photo4 from '../../../assets/catalog/freestanding-closets/004.jpeg';

const Screen2 = () => {
  return (
    <Wrapper>

      <Title>ШКАФЫ-КУПЕ ОТДЕЛЬНО СТОЯЩИЕ</Title>
      <Content>
        <Img className='col-span-2' src={photo2} alt='img' />
          <Text className='indent-6'>
            Это полноценный шкаф состоящий из корпуса(задняя стенка, боковые стенки, цоколь) и дверей-купе.
            Такой шкаф при необходимости можно легко переставить в другое место. Мы изготавливаем шкафы-купе из
            качественных и современных материалов, с хорошими комплектующими и фурнитурой. Такие шкафы можно
            эксплуатировать очень долго. Поэтому следует заранее решить, какой дизайн шкафа выбрать. А наши менеджеры с
            радостью Вам в этом помогут.
          </Text>
          <Img src={photo3} alt='img' />
        <Img src={photo1} alt='img' />
        <Text className='indent-6'>
          Наша компания предлагает огромный выбор фасадов и внутреннего наполнения для гардеробных и шкафов-купе. Для
          того, чтобы каждый наш клиент смог воплотить в реальность свою дизайнерскую задумку. Варианты исполнения
          дверей можно посмотреть в наших работах.
        </Text>
        <Img className='col-span-2' src={photo4} alt='img' />
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
