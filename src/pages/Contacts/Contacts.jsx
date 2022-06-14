import { Input } from 'antd';
import React from 'react';
import tw from 'twin.macro';
import Map from './local-components/Map';
import facade_view from '../../assets/office.jpg';

const Contacts = ({ contacts }) => {

  return (
    <Wrapper>
      <Container>
        <div>
          <p className='text-3xl font-normal'>КОНТАКТЫ</p>
          <p className='text-5xl font-medium'>МЕБЕЛЬ 178</p>
        </div>
        <ContactsInfo>
          <Column>
            <div className='flex'><ColumnLine />ПРИЕЗЖАЙТЕ</div>
            <p>Санкт-Петербург, Коттеджный посёлок Северные террасы, 22</p>
          </Column>
          <Column>
            <div className='flex'><ColumnLine />ПИШИТЕ</div>
            <a href='mailto:info@info@mebel-178.ru'>info@info@mebel-178.ru</a>
          </Column>
          <Column>
            <div className='flex'><ColumnLine />ЗВОНИТЕ</div>
            <a href='tel:RU79119978257'>RU +7 911 997 82 57</a>
          </Column>
        </ContactsInfo>
        <Location>
          <img src={facade_view} alt='img' />
          <Map />
        </Location>
        <Feedback>
          <div>
            <FeedbackTitle>ВЫ ВСЕГДА МОЖЕТЕ СВЯЗАТЬСЯ С НАМИ</FeedbackTitle>
            <div>
              <p>Решили присоединиться к нашей команде или задать вопрос?</p>
              <p>Заполните форму, и наш менеджер свяжется с Вами в ближайшее время.</p>
            </div>
          </div>
          <InputWrapper>
            <Input className='border-b-2 outline-none' placeholder='Имя' bordered={false} />
            <Input className='border-b-2 outline-none' placeholder='Фамилия' bordered={false} />
            <Input className='col-span-2 border-b-2 outline-none' placeholder='Ваш Email*'
                   bordered={false} />
            <Input className='col-span-2 border-b-2 outline-none' placeholder='Ваш телефон*'
                   bordered={false} />
            <Input className='col-span-2 border-b-2 outline-none' placeholder='Ваше сообщение'
                   bordered={false} />
            <ButtonSend>ОТПРАВИТЬ</ButtonSend>
          </InputWrapper>
        </Feedback>
      </Container>
    </Wrapper>
  );
};

const Wrapper = tw.div` flex w-screen justify-center`;
const Container = tw.div`flex flex-col max-w-[1000px] mt-40`;
const ContactsInfo = tw.div`grid grid-cols-[1fr 20% 20%] mt-16`;
const Column = tw.div`flex flex-col mt-8 pr-5`;
const ColumnLine = tw.div`w-8 h-[1px] mt-[10px] mr-[14px] bg-black`;
const Location = tw.div`flex justify-between gap-16 mt-10`;
const Feedback = tw.div`flex justify-between mt-32`;
const FeedbackTitle = tw.p`text-4xl font-medium `;
const InputWrapper = tw.div`grid grid-cols-2 gap-y-12 gap-x-4 `;
const ButtonSend = tw.div`col-span-2 mt-10 border text-center py-4 hover:bg-gray-300 active:bg-gray-500`;


export default Contacts;
