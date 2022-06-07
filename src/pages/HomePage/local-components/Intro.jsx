import React from 'react';
import tw from 'twin.macro';
import intro from '../../../assets/intro.jpg';

const Intro = () => {

  return (
    <Wrapper>
      <TextBlock>
        Наша команда берет на себя все: от разработки идеи и до реализации. Функциональность и традиции — это то, что мы
        внедряем в каждый наш проект.
      </TextBlock>
      <Image className='w-full' src={intro} alt='img' />
      <TextBlock>
        Делаем дом красивым, Мы воплощаем мечты,
        Придаем форму вашим идеям,
        Измените свой дом, Двери с историей
      </TextBlock>
    </Wrapper>

  );
};

const Wrapper = tw.div`flex flex-col justify-center gap-24 py-24`;
const Image = tw.img`flex  w-full`;
const TextBlock = tw.p`flex w-1/2 text-lg self-end`;

export default Intro;
