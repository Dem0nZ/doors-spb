import React from 'react';
import tw from 'twin.macro';
import { TelegramIcon, VkIcon, WhatsappIcon } from '../../assets';
import { useMatch } from 'react-router-dom';

const SocialBlock = () => {
  const match = useMatch('/');
  return (
    match && (
      <Wrapper className='group'>
        <div className='h-12 w-1 bg-gray-500 opacity-40 sm:hidden'></div>
        <a target="_blank" rel="noopener noreferrer" href='https://vk.com/mebel_comfort_spb'>
        <VkIcon
          className='h-6 group-hover:h-8 group-hover:text-blue-500 hover:opacity-100 opacity-40 sm:group-hover:h-8 hover:animate-pulse transition-all' />
        </a>
        <a target="_blank" rel="noopener noreferrer" href='https://wa.me/79119978257'>
        <WhatsappIcon
          className='h-6 group-hover:h-8 group-hover:text-green-500 opacity-40 hover:opacity-100 sm:group-hover:h-8 hover:animate-pulse transition-all'/>
        </a>
        <a target="_blank" rel="noopener noreferrer" href='https://t.me/mebel_178'>
          <TelegramIcon
            className='h-6 group-hover:h-8 group-hover:text-blue-400 opacity-40 hover:opacity-100 sm:group-hover:h-8 hover:animate-pulse transition-all'/>
        </a>
        <div className='h-12 w-1 bg-gray-500 opacity-40 sm:hidden'></div>
      </Wrapper>
    )
  );
};

const Wrapper = tw.div`fixed flex flex-col items-center gap-4 z-40 right-10 bottom-1/2 text-gray-500 shadow-md hover:bg-gray-200 hover:bg-opacity-40 p-4 sm:right-0`;

export default SocialBlock;
