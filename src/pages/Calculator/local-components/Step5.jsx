import React from 'react';
import tw, { styled } from 'twin.macro';
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
          ШАГ 5: ПРОФИЛЬ
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <TitleTab>
          ЦВЕТ И ТИП ПРОФИЛЯ
        </TitleTab>
        <P>
          выберете цвет профиля:
        </P>
        <Colors>

        </Colors>
        <div>

        </div>
        <P>
          выберете тип профиля:
        </P>
        <Profiles>

        </Profiles>
      </AccordionItemPanel>
    </AccordionItem>
  );
};

const TitleTab = tw.h1`text-4xl font-thin`;
const P = tw.p`text-xl font-thin uppercase pt-6 text-center`;
const Colors = tw.div``;
const Profiles = tw.div``;
const ProfileColor = styled.div(({  active }) => [
  tw`flex-shrink-0 h-8 w-8 border border-gray-700 bg-gray-500`,
  `background-image: url(${image});`,
  active && tw`ring ring-pink-500`,
]);


export default Step5;
