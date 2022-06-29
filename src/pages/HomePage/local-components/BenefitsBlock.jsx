import React from 'react';
import tw from 'twin.macro';
import { benefits } from './benefits';

const BenefitsBlock = () => {

  const benefitsArray = benefits.map(benefit => <ItemBlock key={benefit.description}>
    <div className='p-2 border border-blacked'>{benefit?.icon}</div>
    <p>{benefit?.description}</p>
  </ItemBlock>);

  return (
    <div className='flex flex-col'>
      <Title>
        НАШИ ГЛАВНЫЕ ПРЕИМУЩЕСТВА
      </Title>
      <Benefits>
        {benefitsArray}
      </Benefits>
    </div>
  );
};

const Title = tw.h1`text-5xl font-medium py-20 sm:text-3xl sm:px-4`;
const Benefits = tw.div`flex flex-wrap text-xl font-light gap-10 sm:px-2`;
const ItemBlock = tw.div`flex gap-4 w-[390px] hover:animate-pulse`;


export default BenefitsBlock;
