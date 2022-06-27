import React from 'react';
import tw, { styled } from 'twin.macro';
import { Popover } from '@headlessui/react';
import FillingItemVariables from './FillingItemVariables';

const FillingItem = ({ filler, currentFiller, setCurrentFiller}) => {

  const fillerOptions = filler.fillers?.map(item => {
    return (item.variables?.length > 0)
      ? (<FillingItemVariables item={item} setCurrentFiller={setCurrentFiller} section={filler.id} currentFiller={currentFiller}/>)
      : (<div className='flex gap-4 p-2 uppercase text-lg font-extralight' key={item.id}
              onClick={() => setCurrentFiller({ filler:item, section: filler.id, subsection: null })}>
        <FillerImage image={item?.image} active={item.id === currentFiller?.filler.id}/>{item.name}
      </div>);
  });
  return (
    <Popover>
      <Trigger
        active={currentFiller?.section === filler.id}>{filler.name}</Trigger>

      <Popover.Panel className='absolute z-10 bg-gray-100 border border-gray-300 p-6 gap-2'>
        {fillerOptions}
      </Popover.Panel>
    </Popover>
  );
};

const Trigger = styled(Popover.Button)(({ active }) => [
  tw`px-4 py-2 border border-gray-300 text-lg font-extralight uppercase text-center hover:bg-gray-300 hover:border-gray-500`,
  active && tw`bg-gray-500 text-white`,
]);
const FillerImage = styled.div(({ image, active }) => [
  tw`flex-shrink-0 h-8 w-8 border border-gray-700 bg-gray-500`,
  `background-image: url(${image});`,
  active && tw`ring ring-pink-500`,
]);

export default FillingItem;
