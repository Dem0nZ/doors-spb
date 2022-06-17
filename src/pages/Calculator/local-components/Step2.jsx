import React from 'react';
import tw from 'twin.macro';
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Step2 = () => {
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
          <SelectDoorsCount>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </SelectDoorsCount>
        </div>
      </AccordionItemPanel>
    </AccordionItem>
  );
};

const TitleTab = tw.div`flex flex-col text-4xl font-thin`;
const SelectDoorsCount = tw.select`w-1/3 py-4 mt-10`

export default Step2;
