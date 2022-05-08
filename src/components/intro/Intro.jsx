import React from 'react'
import tw from 'twin.macro';
import intro from '../../assets/intro.png'


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
                        Мы создаем в вашем доме комфорт, помогая разделить
                        на функциональные зоны пространства. Любые перегор
                        и самые разные двери от и до бескрайних полей. Все что
                        вам необходимо это позвонить нашему менеджеру илиы
                        сделать тот набор правил и техник что так или иначе...
                    </IntroTitleNote>
                </IntroHeader>
                <IntriImageWrapper>
                <IntroImage src={intro} alt="img" />

                </IntriImageWrapper>
                <IntroFooter>
                    <IntroFooterText>
                        В последнее время мир меняется
                        и совсем не понятно, что будет
                        дальше, поэтому мы объединяем
                        людей, которые хотят жить и
                        вести бизнес по своим правилам.
                    </IntroFooterText>

                </IntroFooter>
        </IntroWrapper>

    )
}

const IntroWrapper = tw.div`flex flex-col justify-center  h-[1120px] mt-[7vw]`
const IntroHeader = tw.div`flex justify-between  h-[125px]`
const IntroTitleWrapper = tw.div`flex flex-col`
const IntroTitleUp = tw.div`flex text-sm font-semibold`
const IntroTitleDown = tw.div`flex text-6xl font-medium`
const IntroTitleNote = tw.div`flex w-1/2 `
const IntriImageWrapper = tw.div`flex mt-[144px]`
const IntroImage = tw.img`flex  w-full`
const IntroFooter = tw.div`flex justify-end mt-[150px] h-[70px]`
const IntroFooterText = tw.div` flex w-[450px]`

export default Intro
