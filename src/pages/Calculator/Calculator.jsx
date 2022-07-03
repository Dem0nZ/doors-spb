import React, { useState } from 'react';
import tw from 'twin.macro';
import { Accordion } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import PreviewDoors from './local-components/PreviewDoors';
import Step1 from './local-components/Step1';
import Step2 from './local-components/Step2';
import Step3 from './local-components/Step3';
import Step4 from './local-components/Step4';
import Step5 from './local-components/Step5';

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    height: '1000',
    width: '1000',
    numberOfDoors: '3',
    filler: null,
    dividers: {
      enabled: false,
      qty: '1',
    },
  });
  console.log('doors',calculatorData);
  return (
    <Wrapper>
      <Columns>
        <Accordion className='col-span-3 border-none' preExpanded={['sizes']}>
          <Step1 calculatorData={calculatorData} setCalculatorData={setCalculatorData}/>
          <Step2 calculatorData={calculatorData} setCalculatorData={setCalculatorData}/>
          <Step3 calculatorData={calculatorData} setCalculatorData={setCalculatorData}/>
          <Step4 calculatorData={calculatorData} setCalculatorData={setCalculatorData}/>
          <Step5 />
        </Accordion>
        <PreviewDoors />
      </Columns>
    </Wrapper>
  );
};

const Wrapper = tw.div`flex justify-center mt-16 max-w-[1000px] w-full flex-grow`;
const Columns = tw.div`grid grid-cols-5 w-full sm:px-4 sm:flex sm:flex-col`;

export default Calculator;
