import React from 'react';
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
  return (
    <Wrapper>
      <Columns>
        <Accordion>
          <Step1 />
          <Step2 />
          <Step3 />
          <Step4 />
          <Step5 />
        </Accordion>
        <PreviewDoors />
      </Columns>
    </Wrapper>
  );
};

const Wrapper = tw.div`flex justify-center mt-16 max-w-[1000px] w-full flex-grow`;
const Columns = tw.div`grid grid-cols-2 w-full sm:px-4 sm:flex sm:flex-col`;

export default Calculator;
