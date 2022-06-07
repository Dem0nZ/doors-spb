import React from 'react';
import tw from 'twin.macro';
import Catalog from '../Catalog/Catalog';
import BenefitsBlock from './local-components/BenefitsBlock';
import Intro from './local-components/Intro';
import CalculatorBlock from './local-components/CalculatorBlock';

const HomePage = () => {
  return (
    <Wrapper>
      <Intro />
      <BenefitsBlock />
      <CalculatorBlock />
      <Catalog />
    </Wrapper>
  );
};

const Wrapper = tw.div`flex flex-col pb-32 max-w-[1000px]`;


export default HomePage;
