import { Input } from 'antd';
import React from 'react';
import tw from 'twin.macro';
import Map from './local-components/Map';
import facade_view from '../../assets/office.jpg';

const Contacts = () => {

  return (
    <Wrapper>
      <Container>
        <div>
          <p className='text-3xl font-normal'>
            КОНТАКТЫ
          </p>
          <p className=' text-5xl font-medium'>
            МЕБЕЛЬ 178
          </p>
        </div>

        <ContactsInfo>
          <Column>
            <ColumnTitle>
              <ColumnLine />
              <div>
                ПРИЕЗЖАЙТЕ
              </div>
            </ColumnTitle>
            <ColumnText>
              <p>
                Санкт-Петербург
              </p>
              <p>
                Коттеджный посёлок
              </p>
              Северные террасы, 22
            </ColumnText>
          </Column>
          <Column>
            <ColumnTitle>
              <ColumnLine />
              <div>
                ПИШИТЕ
              </div>
            </ColumnTitle>
            <ColumnText>
              <a href='mailto:info@info@mebel-178.ru'>info@info@mebel-178.ru</a>
            </ColumnText>
          </Column>
          <Column>
            <ColumnTitle>
              <ColumnLine />
              <div>
                ЗВОНИТЕ
              </div>
            </ColumnTitle>
            <ColumnText>
              <a href='tel:RU79119978257'>RU +7 911 997 82 57</a>
            </ColumnText>
          </Column>

        </ContactsInfo>
        <Location>
          <img className='' src={facade_view} alt='img' />
          <Map />
        </Location>

        <Feedback>
          <div>
            <FeedbackTitle>
              <p>ВЫ ВСЕГДА МОЖЕТЕ</p>
              <p>СВЯЗАТЬСЯ С НАМИ</p>
            </FeedbackTitle>
            <Questions>
              <div>
                <p>Решили присоединиться к нашей команде или </p>
                <p>задать вопрос?</p>

              </div>
              <div className='mt-8'>
                <p>Заполните форму, и наш менеджер свяжется с</p>
                <p>Вами в ближайшее время</p>
              </div>
            </Questions>
          </div>
          <InputWrapper>
            <div className='border-b-2'><Input className='outline-none' placeholder='Имя' bordered={false} /></div>
            <div className='border-b-2'><Input className='outline-none' placeholder='Фамилия' bordered={false} /></div>
            <div className='col-span-2 border-b-2'><Input className='outline-none' placeholder='Ваш Email*'
                                                          bordered={false} /></div>
            <div className='col-span-2 border-b-2'><Input className='outline-none' placeholder='Ваш телефон*'
                                                          bordered={false} /></div>
            <div className='col-span-2 border-b-2'><Input className='outline-none' placeholder='Ваше сообщение'
                                                          bordered={false} /></div>
            <div className='col-span-2 mt-10'><ButtonSend>ОТПРАВИТЬ</ButtonSend></div>
          </InputWrapper>

        </Feedback>

      </Container>
    </Wrapper>

  );

};
const Wrapper = tw.div` flex w-screen h-screen min-h-[1500px] justify-center`;
const Container = tw.div`flex flex-col w-[1000px] mt-40`;

const ContactsInfo = tw.div`grid grid-cols-[1fr 20% 20%] mt-16`;
const Column = tw.div`flex flex-col mt-8 pr-5`;
const ColumnTitle = tw.div`flex`;
const ColumnText = tw.div`flex flex-col mt-[40px] leading-6`;
const ColumnLine = tw.div`w-8 h-[1px] mt-[10px] mr-[14px] bg-black`;

const Location = tw.div`flex justify-between gap-16 mt-10 `;

const Feedback = tw.div`flex justify-between mt-32`;
const FeedbackTitle = tw.div`text-4xl font-medium `;
const Questions = tw.div`mt-8`;

const InputWrapper = tw.div`grid grid-cols-2 gap-y-12 gap-x-4 `;
const ButtonSend = tw.div`border text-center py-4 hover:bg-gray-300 active:bg-gray-500`;


export default Contacts;
