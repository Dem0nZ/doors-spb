import React from 'react';
import tw from 'twin.macro';
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Step2 = ({calculatorData, setCalculatorData}) => {
  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>
          ШАГ 2: КОЛИЧЕСТВО ДВЕРЕЙ
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <TitleTab>
          Выберете количество дверей
        </TitleTab>
        <div className='flex justify-center'>
          <SelectDoorsCount defaultValue={calculatorData?.numberOfDoors} onChange={(e)=>setCalculatorData({
            ...calculatorData,
            numberOfDoors: e.target.value,
          })}>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
          </SelectDoorsCount>
        </div>
      </AccordionItemPanel>
    </AccordionItem>
  );
};

const TitleTab = tw.div`flex flex-col text-4xl font-thin`;
const SelectDoorsCount = tw.select`w-1/3 py-4 mt-10`

export default Step2;
