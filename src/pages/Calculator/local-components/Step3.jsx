import React from 'react';
import tw from 'twin.macro';
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import { data } from '../../../mocks/calculator_data';
import FillingItem from './FillingItem';

const Step3 = ({calculatorData, setCalculatorData}) => {

  const fillers = data.map(filler => <FillingItem key={filler.id} filler={filler} calculatorData={calculatorData} setCalculatorData={setCalculatorData}/>);

  return (
    <AccordionItem uuid={'fillers'}>
      <AccordionItemHeading>
        <AccordionItemButton>
          ШАГ 3: НАПОЛНЕНИЕ
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <TitleTab>
          Выберете наполнение
        </TitleTab>
        <FillingContainer>
          {fillers}
        </FillingContainer>
      </AccordionItemPanel>
    </AccordionItem>
  );
};

const TitleTab = tw.div`text-4xl font-thin mb-6`;
const FillingContainer = tw.div`flex flex-wrap gap-4 w-full`;

export default Step3;
