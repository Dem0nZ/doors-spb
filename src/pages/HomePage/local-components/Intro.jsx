import React from 'react';
import tw from 'twin.macro';
import intro from '../../../assets/intro.jpg';

const Intro = () => {

  return (
    <div className='relative'>
      <TextBlock className='absolute top-6 right-0 mx-12 sm:hidden'>
        Наша команда берет на себя все: от разработки идеи и до реализации. Функциональность и традиции — это то, что мы
        внедряем в каждый наш проект.
      </TextBlock>
      <img className='h-full w-full object-cover' src={intro} alt='img' />
      <TextBlock className='absolute bottom-6 left-0 mx-12 sm:right-0 sm:bottom-0 sm:mx-0'>
        Делаем дом красивым. Мы воплощаем мечты, придаем форму вашим идеям. Измените свой дом. Двери с историей.
      </TextBlock>
    </div>
  );
};

const TextBlock = tw.p`max-w-3xl text-lg bg-gray-100 bg-opacity-70 p-2 sm:bg-opacity-80 sm:text-sm font-light`;

export default Intro;
