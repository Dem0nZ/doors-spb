import React from 'react'
import tw from 'twin.macro';
import intro from '../../assets/intro.jpg'


const Intro = (props) => {
    return (
        <IntroWrapper>
                <IntroHeader>
                    <IntroTitleWrapper>
                        <IntroTitleUp>
                            КТО МЫ ТАКИЕ?
                        </IntroTitleUp>
                        <IntroTitleDown>
                            YOUR DOORS
                        </IntroTitleDown>
                    </IntroTitleWrapper>
                    <IntroTitleNote>
                    Наша компания предлагает двери-купе,
                     межкомнатные перегородки,
                      шкафы-купе в Санкт-Петербурге и Москве.
                       Стильно! Качественно! Доступно!
                        Всего за 7 дней!
                    </IntroTitleNote>
                </IntroHeader>
                <IntriImageWrapper>
                <IntroImage src={intro} alt="img" />

                </IntriImageWrapper>
                <IntroFooter>
                    <IntroFooterText>
                    Делаем дом красивым, Мы воплощаем мечты,
                     Придаем форму вашим идеям,
                      Измените свой дом, Двери с историей
                    </IntroFooterText>

                </IntroFooter>
        </IntroWrapper>

    )
}

const IntroWrapper = tw.div`flex flex-col justify-center  h-[1120px] mt-[170px]`
const IntroHeader = tw.div`flex justify-between  h-[125px]`
const IntroTitleWrapper = tw.div`flex flex-col`
const IntroTitleUp = tw.div`flex text-sm font-semibold`
const IntroTitleDown = tw.div`flex text-6xl font-medium`
const IntroTitleNote = tw.div`flex w-1/2 text-lg `
const IntriImageWrapper = tw.div`flex mt-[144px]`
const IntroImage = tw.img`flex  w-full`
const IntroFooter = tw.div`flex justify-end mt-[150px] h-[70px] text-lg`
const IntroFooterText = tw.div` flex w-[450px]`

export default Intro
