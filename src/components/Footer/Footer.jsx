import React from 'react';
import { useMatch } from 'react-router-dom';

import tw from 'twin.macro';
import { Logo } from '../../assets';

const Footer = (props) => {
  const match = useMatch('/contacts');

  return (
    <FooterWrapper id='contacts'>
      {!match ? <FooterBody>

        <FooterTitle>
          <Logo className='text-white' />
        </FooterTitle>

        <FooterBodyCol>
          <FooterColumnTitle>
            <FooterColumnLine />
            <div>
              ЗВОНИТЕ
            </div>
          </FooterColumnTitle>
          <FooterColumnText>
            <a href='tel:RU79119978257'>RU +7 911 997 82 57</a>
          </FooterColumnText>
        </FooterBodyCol>

        <FooterBodyCol>
          <FooterColumnTitle>
            <FooterColumnLine />
            <div>
              ПИШИТЕ
            </div>
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
      </FooterBody>
        : null}


      <FooterBottomWrapper>


        <FooterBottom>


          <FooterCopirateBlock>
            <p>
              © MEBEL-178
            </p>
          </FooterCopirateBlock>


        </FooterBottom>


      </FooterBottomWrapper>

    </FooterWrapper>
  );
};

const FooterWrapper = tw.div`flex flex-col  items-center w-screen   mb-0 bg-black text-white text-sm`;
const FooterBody = tw.div`grid grid-cols-[45% 1fr 1fr 1fr] w-8/12 max-w-[1100px] justify-center pt-12`;

const FooterTitle = tw.div`flex flex-col `;
const FooterBodyCol = tw.div`flex flex-col mt-8 pr-5`;
const FooterBodyColLast = tw.div`flex flex-col mt-8 `;
const FooterColumnTitle = tw.div`flex`;
const FooterColumnLine = tw.div`w-8 h-[1px] mt-2 mr-4 bg-white`;
const FooterColumnText = tw.div`flex flex-col mt-10 leading-6`;

const FooterBottomWrapper = tw.div`flex flex-row justify-center w-full`;

const FooterBottom = tw.div`flex flex-col w-[1200px] h-12 mt-12 `;
const FooterCopirateBlock = tw.div`flex justify-between    pt-3 pl-10 border-t-2 `;

export default Footer;
