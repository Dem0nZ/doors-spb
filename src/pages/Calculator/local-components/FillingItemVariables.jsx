import React from 'react';
import tw, { styled } from 'twin.macro';
import { Popover } from '@headlessui/react';

const FillingItemVariables = ({ item, section, calculatorData, setCalculatorData }) => {

  const variablesOptions = item.variables.map(variable =>
    <FillerImage key={variable.id} image={variable?.image} active={variable.id === calculatorData.filler?.filler.id && section === calculatorData.filler?.section}
                 onClick={() => setCalculatorData({...calculatorData, filler: { filler: variable, section, subsection: item.id }})} />);
  return (
    <Popover>
      <Trigger active={item.id === calculatorData.filler?.subsection}><><FillerImage/>{item.name}</>
      </Trigger>

      <Popover.Panel className='flex flex-wrap absolute z-10 bg-gray-100 border border-gray-300 p-4 gap-2 max-w-xs'>
        {variablesOptions}
      </Popover.Panel>
    </Popover>
  );
};

const Trigger = styled(Popover.Button)(({ active }) => [
  tw`flex gap-4 p-2 uppercase text-lg font-extralight`,
  active && tw`ring ring-pink-500`,
]);
const FillerImage = styled.div(({ image, active }) => [
  tw`flex-shrink-0 h-8 w-8 border border-gray-700 bg-gray-500`,
  `background-image: url(${image});`,
  active && tw`ring ring-pink-500`,
]);

export default FillingItemVariables;
