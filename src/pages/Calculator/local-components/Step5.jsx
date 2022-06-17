import React from 'react';
import tw from 'twin.macro';
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Step5 = () => {
  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>
          ШАГ 5: ЦВЕТ ПРОФИЛЯ
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <p>
          In ad velit in ex nostrud dolore cupidatat consectetur
          ea in ut nostrud velit in irure cillum tempor laboris
          sed adipisicing eu esse duis nulla non.
        </p>
      </AccordionItemPanel>
    </AccordionItem>
  );
};

export default Step5;
