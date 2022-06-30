import React from 'react';
import tw from 'twin.macro';
import Map from './local-components/Map';
import { useForm } from 'react-hook-form';
import facade_view from '../../assets/office.jpg';
import { VkIcon, WhatsappIcon } from '../../assets';

const Contacts = ({ contacts }) => {
  const { register, handleSubmit, reset,  formState: { errors }} = useForm();
  const onSubmit = async (data) => {
  console.log(data);
    try {
      let response = await fetch('http://mebel-178.ru/mailscript/send_email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({type:"callback", contacts: data })
      })
      if (response.status === 200) {
        console.log('Ваша заявка отправлена');
        reset();
      }
    } catch (e) {
      console.log('Упс. Что-то пошло не так.');
    }
  }

  return (
    <Wrapper>
      <Container>
        <div className='sm:p-4'>
          <p className='text-3xl font-normal'>КОНТАКТЫ</p>
          <p className='text-5xl font-medium'>МЕБЕЛЬ 178</p>
        </div>
        <ContactsInfo>
          <Column>
            <div className='flex'><ColumnLine />ПРИЕЗЖАЙТЕ</div>
            <p>{contacts?.adress}</p>
          </Column>
          <Column>
            <div className='flex'><ColumnLine />ПИШИТЕ</div>
            <a href={`mailto:${contacts?.email}`}>{contacts?.email}</a>
          </Column>

          <Column>
            <div className='flex'><ColumnLine />ЗВОНИТЕ</div>
            <a href={`tel:${contacts?.phone1}`}>{contacts?.phone1}</a>
          </Column>
          <Column>
            <div className='flex'><ColumnLine />КАК ДОБРАТЬСЯ</div>
            <p>От м. Озерки: автобус № 109, маршрутное такси № 259,№ 673</p>
            <p>От м. Пр. Просвещения: автобус № 104, 173, маршрутное такси № 01, 434, 455, 555, 676</p>
          </Column>
          <Column className='col-span-2'>
            <div className='flex'><ColumnLine />СОЦИАЛЬНЫЕ СЕТИ</div>
            <div className='flex py-4 px-8 gap-4'>
            <a target="_blank" rel="noopener noreferrer" href='https://vk.com/mebel_comfort_spb'>
              <VkIcon
                className='h-8 text-blue-500 hover:animate-pulse transition-all' />
            </a>
            <a target="_blank" rel="noopener noreferrer" href='https://wa.me/79119978257'>
              <WhatsappIcon
                className='h-8 text-green-500 hover:animate-pulse transition-all'/>
            </a>
            </div>
          </Column>
        </ContactsInfo>

        <Location>
          <img src={facade_view} alt='img' />
          <Map lat={contacts?.lat} lon={contacts?.lan}/>
        </Location>
        <Feedback>
          <div>
            <FeedbackTitle>ВЫ ВСЕГДА МОЖЕТЕ СВЯЗАТЬСЯ С НАМИ</FeedbackTitle>
            <div>
              <p>Решили присоединиться к нашей команде или задать вопрос?</p>
              <p>Заполните форму, и наш менеджер свяжется с Вами в ближайшее время.</p>
            </div>
          </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <input className='border-b-2 outline-none' placeholder='Имя' {...register('name', { required: true })}/>
            <input className='border-b-2 outline-none' placeholder='Фамилия' {...register('surname')}/>
            <input className='col-span-2 border-b-2 outline-none' placeholder='Ваш Email*'{...register('email', { required: true })}/>
            <input className='col-span-2 border-b-2 outline-none' placeholder='Ваш телефон*' {...register('phone', { required: true })}/>
            <textarea className='col-span-2 border-b-2 outline-none resize-none' rows={4} placeholder='Ваше сообщение' {...register('message', { required: true })}/>
              {(Object.keys(errors).length >0)&& <ErrorMessage>{ errors?.name && 'имя'} { errors?.email && 'почта'} { errors?.phone && 'телефон'} { errors?.message && 'сообщение'} обязательны для отправки формы</ErrorMessage>}
            <ButtonSend type='submit' value='ОТПРАВИТЬ'/>
            </Form>
        </Feedback>
      </Container>
    </Wrapper>
  );
};

const Wrapper = tw.div` flex w-screen justify-center`;
const Container = tw.div`flex flex-col max-w-[1000px] py-20  bg-white shadow-lg p-6 my-6`;
const ContactsInfo = tw.div`grid grid-cols-[1fr 20% 20%] mt-16 sm:flex sm:flex-col sm:px-4`;
const Column = tw.div`flex flex-col mt-8 pr-5 font-light`;
const ColumnLine = tw.div`w-8 h-[1px] mt-[10px] mr-[14px] bg-black`;
const Location = tw.div`flex justify-between gap-16 mt-10 sm:flex-col`;
const Feedback = tw.div`flex gap-20 mt-20 sm:flex-col sm:px-4`;
const FeedbackTitle = tw.p`text-4xl font-medium `;
const Form = tw.form`grid grid-cols-2 gap-y-12 gap-x-4 `;
const ErrorMessage = tw.span`col-span-2 text-red-500 text-xs`
const ButtonSend = tw.input`mt-10 border text-center py-4 hover:bg-gray-300 active:bg-gray-500`;


export default Contacts;
