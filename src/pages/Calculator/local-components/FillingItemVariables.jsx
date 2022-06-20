import React from 'react';
import tw, { styled } from 'twin.macro';
import { Popover } from '@headlessui/react';

const FillingItemVariables = ({ item }) => {
  const variablesOptions = item.variables.map(variable => <div className='flex gap-4 p-2 uppercase text-lg font-extralight' key={variable.id}>
    <FillerImage />{variable.name}
  </div>);
  return (
    <Popover>
      <Trigger><><FillerImage />{item.name}</></Trigger>

      <Popover.Panel className='absolute z-10 bg-gray-100 border border-gray-300 p-6 gap-2'>
        {variablesOptions}
      </Popover.Panel>
    </Popover>
  );
};

const Trigger = styled(Popover.Button)`${tw`flex gap-4 p-2 uppercase text-lg font-extralight`}`;
const FillerImage = tw.div`flex-shrink-0 h-8 w-8 border border-gray-700 bg-gray-500`;

export default FillingItemVariables;
