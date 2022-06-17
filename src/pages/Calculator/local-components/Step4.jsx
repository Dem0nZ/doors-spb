import React from 'react';
import tw from 'twin.macro';
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Step4 = () => {
  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>
          ШАГ 4: РАЗДЕЛИТЕЛИ НА ДВЕРЯХ
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <p>
          Exercitation in fugiat est ut ad ea cupidatat ut in
          cupidatat occaecat ut occaecat consequat est minim minim
          esse tempor laborum consequat esse adipisicing eu
          reprehenderit enim.
        </p>
      </AccordionItemPanel>
    </AccordionItem>
  );
};

export default Step4;
