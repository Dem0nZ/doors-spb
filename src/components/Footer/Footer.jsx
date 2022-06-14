import React from 'react';
import { useMatch } from 'react-router-dom';

import tw from 'twin.macro';
import { Logo } from '../../assets';

const Footer = (props) => {
  const match = useMatch('/contacts');

  return (
    <FooterWrapper id='contacts'>
      {!match && <FooterBody>
        <FooterTitle>
          <Logo className='text-white' />
        </FooterTitle>
        <FooterBodyCol>
          <FooterColumnTitle>
            <FooterColumnLine />
            <p>
              ЗВОНИТЕ
            </p>
          </FooterColumnTitle>
          <FooterColumnText>
            <a href='tel:+79119978257'>+79119978257</a>
          </FooterColumnText>
        </FooterBodyCol>

        <FooterBodyCol>
          <FooterColumnTitle>
            <FooterColumnLine />
            <p>
              ПИШИТЕ
            </p>
          </FooterColumnTitle>
          <FooterColumnText>
            <a href='mailto:info@info@mebel-178.ru'>
              <span>
                info@info@mebel-178.ru
              </span>
            </a>
          </FooterColumnText>
        </FooterBodyCol>
        <FooterBodyColLast>
          <FooterColumnTitle>
            <FooterColumnLine />
            <div>
              ПРИЕЗЖАЙТЕ
            </div>
          </FooterColumnTitle>
          <FooterColumnText>
            <p>
              Санкт-Петербург
            </p>
            <p>
              Коттеджный посёлок
            </p>
            <p>
              Северные террасы, 22
            </p>
          </FooterColumnText>
        </FooterBodyColLast>
      </FooterBody>}
          <Copyright>
              © MEBEL-178
          </Copyright>
    </FooterWrapper>
  );
};

const FooterWrapper = tw.div`flex flex-col  items-center w-screen   mb-0 bg-black text-white text-sm`;
const FooterBody = tw.div`grid grid-cols-[45% 1fr 1fr 1fr] sm:flex sm:flex-col w-8/12 max-w-[1100px] justify-center pt-12`;

const FooterTitle = tw.div`flex flex-col `;
const FooterBodyCol = tw.div`flex flex-col mt-8 pr-5`;
const FooterBodyColLast = tw.div`flex flex-col mt-8 `;
const FooterColumnTitle = tw.div`flex`;
const FooterColumnLine = tw.div`w-8 h-px mt-2 mr-4 bg-white`;
const FooterColumnText = tw.div`flex flex-col mt-10 leading-6`;
const Copyright = tw.p`flex justify-center w-full border-t-2 py-3 pl-10`;

export default Footer;
