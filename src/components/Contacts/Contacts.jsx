import { Input } from 'antd';
import React from 'react'
import { useEffect } from 'react/cjs/react.development';
import tw from 'twin.macro';

const Contacts = () => {

    useEffect(()=>{const script = document.createElement("script")

    script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A053bd947d462cc1a45aeba4070defff75501905071c0eaf68436ac9976ec698c&amp;width=1000&amp;height=400&amp;id=mymap&amp;lang=ru_RU&amp;apikey=<API-ключ>"
    script.async = true

    document.body.appendChild(script)
})


    return (
        <Wrapper>
            <Container>
                <Title>
                    <p>
                        КОНТАКТЫ
                    </p>
                    <p>
                        YOUR DOORS
                    </p>
                </Title>

                <ContactsInfo>
                    <Column>
                        <ColumnTitle>
                            <ColumnLine />
                            <div>
                                ПРИЕЗЖАЙТЕ
                            </div>
                        </ColumnTitle>
                        <ColumnText>
                            Санкт-Петербург<br />
                            какой-то адрес<br />
                            какаято улица и дом
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
                            yourdoors@gmail.com
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
                            <p>RU +7 977 777 7777</p>
                            <p>RU +7 966 666 6666</p>
                        </ColumnText>
                    </Column>

                </ContactsInfo>

                <Maps>
                    <div id='mymap'></div>
                </Maps>

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
                        <div className='border-b-2'><Input placeholder='Имя' bordered={false} /></div>
                        <div className='border-b-2'><Input placeholder='Фамилия' bordered={false} /></div>
                        <div className='col-span-2 border-b-2'><Input placeholder='Ваш Email*' bordered={false} /></div>
                        <div className='col-span-2 border-b-2'><Input placeholder='Ваш телефон*' bordered={false} /></div>
                        <div className='col-span-2 border-b-2'><Input placeholder='Ваше сообщение' bordered={false} /></div>
                        <div className='col-span-2 mt-10'> <ButtonSend>ОТПРАВИТЬ</ButtonSend></div>
                    </InputWrapper>

                </Feedback>

            </Container>
        </Wrapper>

    )

}
const Wrapper = tw.div` flex w-screen justify-center`
const Container = tw.div`flex flex-col w-[1000px] mt-40`
const Title = tw.div` text-5xl font-medium`

const ContactsInfo = tw.div`grid grid-cols-[1fr 20% 20%] mt-16`
const Column = tw.div`flex flex-col mt-[30px] pr-5`
const ColumnTitle = tw.div`flex`
const ColumnText = tw.div`flex flex-col mt-[40px] leading-6`
const ColumnLine = tw.div`w-[32px] h-[1px] mt-[10px] mr-[14px] bg-black`

const Maps = tw.div` max-w-full h-96 bg-green-50 mt-16`

const Feedback = tw.div`flex justify-between mt-32`
const FeedbackTitle = tw.div`text-4xl font-medium `
const Questions = tw.div`mt-8`

const InputWrapper = tw.div`grid grid-cols-2 gap-y-12 gap-x-4 `
const ButtonSend = tw.div`border text-center py-4 hover:shadow-md active:bg-red-50`




export default Contacts