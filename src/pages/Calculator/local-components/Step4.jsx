import React from 'react';
import tw, { styled } from 'twin.macro';
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Step4 = ({calculatorData, setCalculatorData}) => {
  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>
          ШАГ 4: РАЗДЕЛИТЕЛИ НА ДВЕРЯХ
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <TitleTab>
          РАЗДЕЛИТЕЛИ НА ДВЕРЯХ
        </TitleTab>
        <div className='flex gap-4 mt-10 justify-between'>
          <Divider active={!calculatorData.dividers.enabled} onClick={()=> setCalculatorData({
            ...calculatorData,
            dividers: {
              ...calculatorData.dividers,
              enabled: false,
            }
          })}>
            <Description>
              Без разделителей
            </Description>
            <div className='w-24 h-44 border border-black bg-gray-300 bg-opacity-50'>
            </div>
          </Divider>
          <Divider active={calculatorData.dividers.enabled} onClick={()=> setCalculatorData({
            ...calculatorData,
            dividers: {
              ...calculatorData.dividers,
              enabled: true,
            }
          })}>
            <Description>
              С разделителями
            </Description>
            <div className='flex gap-4'>
              <div className='w-24 h-44 border border-black bg-gray-300 bg-opacity-50'>
              </div>
              <div>
                <p className='text-xs'>Количество вставок в двери-купе</p>
                <SelectDividers defaultValue={calculatorData?.dividers.qty} onChange={(e)=>setCalculatorData({
                  ...calculatorData,
                  dividers: {
                    ...calculatorData.dividers,
                    qty:e.target.value,
                  },
                })}>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                </SelectDividers>
              </div>
            </div>
          </Divider>
        </div>
      </AccordionItemPanel>
    </AccordionItem>
  );
};

const Description = tw.p`uppercase font-light text-sm`;
const TitleTab = tw.h1`text-4xl font-thin`;
const SelectDividers = tw.select`w-4/5 py-4 mt-10`;
const Divider = styled.div(({  active }) => [
  tw`flex flex-col gap-4 items-center border border-gray-500 px-2 pb-6 pt-2`,
  active && tw`ring ring-pink-500`,
]);

export default Step4;
