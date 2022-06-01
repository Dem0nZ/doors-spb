import React from 'react'
import tw from 'twin.macro';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import PreviewDoors from './local-components/PreviewDoors';
import DropDownList from './DropDownList/DropDownList';

const Calculate = () => {
  return (
    <Wrapper>
      <TwoColumns>
        <Accordion>

          <AccordionItem>
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
                <InputValue><InputSize className='h-full ' type="text" placeholder='1000'/></InputValue>
                <ValueName>Высота</ValueName>
                <InputValue><InputSize className='h-full focus:outline-none'    type="text" placeholder='2000'/></InputValue>
              </WidowInputSize>

            </AccordionItemPanel>
          </AccordionItem>

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
                <option>1</option>
                <option>3</option>
                <option>4</option>
              </SelectDoorsCount>
             </div>
              
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                ШАГ 3: НАПОЛНЕНИЕ
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <TitleTab>
                Выберете наполнение
                <DropDownList/>
                <DropDownList/>
                <DropDownList/>
                <DropDownList/>
              </TitleTab>
              <Filling>

              </Filling>
            </AccordionItemPanel>
          </AccordionItem>

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

        </Accordion>
        <PreviewDoors />
      </TwoColumns>
    </Wrapper>
  )
}

const Wrapper = tw.div`flex justify-center mt-[110px] max-w-[1200px]`
const TwoColumns = tw.div`grid grid-cols-2 px-10`

const TitleTab = tw.div`text-4xl font-thin`
const WidowInputSize = tw.div`grid grid-cols-8 mt-10`
const ValueName = tw.div`col-start-3 col-end-6 border text-xl font-light py-3 pl-4`
const InputValue = tw.div`col-start-6 col-end-8 border  pl-4`
const InputSize = tw.input`h-full w-full focus:outline-none `
const SelectDoorsCount = tw.select`w-1/3 py-4 mt-10`
const Filling = tw.div`grid grid-cols-2`

export default Calculate
