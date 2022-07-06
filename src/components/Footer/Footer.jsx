import React from 'react';
import { useMatch } from 'react-router-dom';

import tw from 'twin.macro';
import { Logo } from '../../assets';

const Footer = ({contacts}) => {
  const match = useMatch('/contacts');

  return (
    <Wrapper>
      {!match && <Content>
        <Logo className='text-white sm:self-center' />
        <Cell>
          <div className='flex'><ColumnLine />ЗВОНИТЕ</div>
          <a href={`tel:${contacts.phone1}`}>{contacts.phone1}</a>
        </Cell>
        <Cell>
          <div className='flex'><ColumnLine />ПИШИТЕ</div>
            <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
        </Cell>
        <Cell>
          <div className='flex'><ColumnLine />ПРИЕЗЖАЙТЕ</div>
            <p>{contacts.adress}</p>
        </Cell>
      </Content>}
      <Copyright>© MEBEL-178</Copyright>
    </Wrapper>
  );
};

const Wrapper = tw.footer`flex flex-col items-center w-screen bg-black bg-opacity-90 text-white text-sm`;
const Content = tw.div`grid grid-cols-[2fr 1fr 1fr 1fr] place-items-stretch max-w-[1100px] gap-5 justify-center sm:flex sm:flex-col py-10`;
const Cell = tw.div`flex flex-col gap-4 sm:text-lg sm:flex-row sm:items-stretch sm:gap-6`;
const ColumnLine = tw.div`w-8 h-px mt-2 mr-4 bg-white`;
const Copyright = tw.p`flex justify-center w-full border-t-2 py-4`;

export default Footer;
