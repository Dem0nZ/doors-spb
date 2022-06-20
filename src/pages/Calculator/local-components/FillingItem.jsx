import React from 'react';
import tw, { styled } from 'twin.macro';
import { Popover } from '@headlessui/react';
import FillingItemVariables from './FillingItemVariables';

const FillingItem = ({ filler }) => {
  const fillerOptions = filler.fillers?.map(item => {
    return (item.variables?.length > 0)
    ? (<FillingItemVariables item={item}/>)
    : (<div className='flex gap-4 p-2 uppercase text-lg font-extralight' key={item.id}>
      <FillerImage />{item.name}
    </div>)
  });
  return (
    <Popover>
      <Trigger>{filler.name}</Trigger>

      <Popover.Panel className='absolute z-10 bg-gray-100 border border-gray-300 p-6 gap-2'>
        {fillerOptions}
      </Popover.Panel>
    </Popover>
  );
};

const Trigger = styled(Popover.Button)`${tw`px-4 py-2 border border-gray-300 text-lg font-extralight uppercase text-center hover:bg-gray-300 hover:border-gray-500`}`;
const FillerImage = tw.div`flex-shrink-0 h-8 w-8 border border-gray-700 bg-gray-500`;

export default FillingItem;
