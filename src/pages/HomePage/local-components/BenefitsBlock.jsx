import React from 'react';
import tw from 'twin.macro';
import { benefits } from '../../../moks/benefits';

const BenefitsBlock = () => {

  const benefitsArray = benefits.map(benefit => <ItemBlock key={benefit.description}>
    <div className='p-2 border border-blacked'>{benefit?.icon}</div>
    <p>{benefit?.description}</p>
  </ItemBlock>);

  return (
    <div className='flex flex-col'>
      <Title>
        КАК ВЫ МОЖЕТЕ ИХ ИСПОЛЬЗОВАТЬ
      </Title>
      <Benefits>
        {benefitsArray}
      </Benefits>
    </div>
  );
};

const Title = tw.h1`text-5xl font-medium pb-20`;
const Benefits = tw.div`flex flex-wrap text-xl font-medium gap-10`;
const ItemBlock = tw.div`flex gap-4 w-[400px]`;


export default BenefitsBlock;
