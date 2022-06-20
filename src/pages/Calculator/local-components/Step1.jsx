import React from 'react';
import tw from 'twin.macro';
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Step1 = () => {
  return (
    <AccordionItem uuid={'sizes'}>
      <AccordionItemHeading>
        <AccordionItemButton>
          ШАГ 1:РАЗМЕРЫ
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <TitleTab>
          Введите размер проема
        </TitleTab>
        <WidowInputSize>
          <ValueName>Ширина</ValueName>
          <InputValue><InputSize className='h-full ' type='text' /></InputValue>
          <ValueName>Высота</ValueName>
          <InputValue><InputSize className='h-full focus:outline-none' type='text' /></InputValue>
        </WidowInputSize>

      </AccordionItemPanel>
    </AccordionItem>
  );
};

const TitleTab = tw.div`text-4xl font-thin`;
const WidowInputSize = tw.div`grid grid-cols-8 mt-10`;
const ValueName = tw.div`col-start-3 col-end-6 border text-xl font-light py-3 pl-4`;
const InputValue = tw.div`col-start-6 col-end-8 border  pl-4`;
const InputSize = tw.input`h-full w-full focus:outline-none `;

export default Step1;
