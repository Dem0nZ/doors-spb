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

const Calculate = () => {
  return (
    <Wrapper>
      <TwoColumns>
          <Accordion>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  What harsh truths do you prefer to ignore?
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
                  Is free will real or just an illusion?
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
        <PreviewDoors/>
      </TwoColumns>
    </Wrapper>
  )
}

const Wrapper = tw.div`flex justify-center mt-[110px] max-w-[1000px]`
const TwoColumns = tw.div`grid grid-cols-2 px-10`

export default Calculate
