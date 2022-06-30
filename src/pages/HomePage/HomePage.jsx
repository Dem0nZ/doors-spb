import React from 'react';
import tw from 'twin.macro';
import Catalog from '../Catalog/Catalog';
import BenefitsBlock from './local-components/BenefitsBlock';
import Intro from './local-components/Intro';
import CalculatorBlock from './local-components/CalculatorBlock';
import { motion } from 'framer-motion';


const HomePage = () => {
  return (<motion.div className='flex flex-col items-center' initial={{width: 0}} animate={{width: '100%'}} exit={{x: window.innerWidth, transition:{duration: 0.4}}}>
    <Intro/>
    <Wrapper>
      <BenefitsBlock />
      <CalculatorBlock />
      <Catalog />
    </Wrapper>
  </motion.div>);
};

const Wrapper = tw.div`flex flex-col pb-32 max-w-[1000px] bg-white shadow-lg p-6 my-6`;

export default HomePage;
