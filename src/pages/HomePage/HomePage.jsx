import React from 'react';
import tw from 'twin.macro';
import Catalog from '../Catalog/Catalog';
import BenefitsBlock from './local-components/BenefitsBlock';
import Intro from './local-components/Intro';
import CalculatorBlock from './local-components/CalculatorBlock';

const HomePage = () => {
  return (<>
    <Intro/>
    <Wrapper>
      <BenefitsBlock />
      <CalculatorBlock />
      <Catalog />
    </Wrapper>
  </>);
};

const Wrapper = tw.div`flex flex-col pb-32 max-w-[1000px] bg-white shadow-lg p-6 my-6`;

export default HomePage;
