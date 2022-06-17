import React from 'react';
import tw from 'twin.macro';
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Step3 = () => {
  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>
          ШАГ 3: НАПОЛНЕНИЕ
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <TitleTab>
          Выберете наполнение

        </TitleTab>
        <Filling>

        </Filling>
      </AccordionItemPanel>
    </AccordionItem>
  );
};

const TitleTab = tw.div`flex flex-col text-4xl font-thin`;
const Filling = tw.div`grid grid-cols-2`

export default Step3;
