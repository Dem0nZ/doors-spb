import React from 'react';
import tw from 'twin.macro';
import intro from '../../../assets/intro.jpg';

const Intro = () => {

  return (
    <Wrapper>
      <TextBlock className='absolute top-16 right-0 bg-gray-100 bg-opacity-40 p-2 mx-12'>
        Наша команда берет на себя все: от разработки идеи и до реализации. Функциональность и традиции — это то, что мы
        внедряем в каждый наш проект.
      </TextBlock>
      <div className='object-cover h-screen'>
        <Image src={intro} alt='img' />
      </div>
      <TextBlock>
        Делаем дом красивым, Мы воплощаем мечты,
        Придаем форму вашим идеям,
        Измените свой дом, Двери с историей
      </TextBlock>
    </Wrapper>
  );
};

const Wrapper = tw.div`relative flex flex-col justify-center gap-24`;
const Image = tw.img`h-screen`;
const TextBlock = tw.p`flex max-w-lg text-lg self-end`;

export default Intro;
