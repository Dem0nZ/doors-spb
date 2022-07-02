import React from 'react';
import tw from 'twin.macro';
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Step1 = ({calculatorData, setCalculatorData}) => {
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
          <div className='flex gap-4 items-center'>
            <ValueName>Ширина</ValueName>
            <InputSize type='text' value={calculatorData?.width} onChange={(e)=>setCalculatorData({
              ...calculatorData,
              width: e.target.value,
            })}/>
          </div>
          <div className='flex gap-4 items-center'>
            <ValueName>Высота</ValueName>
            <InputSize type='text' value={calculatorData?.height} onChange={(e)=>setCalculatorData({
              ...calculatorData,
              height: e.target.value,
            })}/>
          </div>
        </WidowInputSize>

      </AccordionItemPanel>
    </AccordionItem>
  );
};

const TitleTab = tw.div`text-4xl font-thin`;
const WidowInputSize = tw.div`flex flex-col mt-10 items-end gap-4`;
const ValueName = tw.div`text-xl font-light py-3 pl-4`;
const InputSize = tw.input`pl-4 py-3 focus:outline-none`;

export default Step1;
