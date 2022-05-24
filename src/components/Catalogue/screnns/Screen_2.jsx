import React from 'react'
import tw from 'twin.macro'
import img1 from '../../../assets/slider/partition/p01.jpg'
import img2 from '../../../assets/slider/partition/p02.jpg'
import img3 from '../../../assets/slider/partition/p03-01.jpg'
import img4 from '../../../assets/slider/partition/p04.jpg'
import img5 from '../../../assets/slider/partition/p05.jpg'
import img6 from '../../../assets/slider/partition/p06.jpg'
import img7 from '../../../assets/slider/partition/p07.jpg'

const Screen_2 = (props) => {
    return (
        <ScreenWrapper>

            <ScreenTitle>
                ПЕРЕГОРОДКИ МЕЖКОМНАТНЫЕ
            </ScreenTitle>
            <ScreenImgBlock>

                <Block_1>
                    <ScreenImg1 src={img1} alt="img" />
                </Block_1>



                <Block_2>
                    <ul>
                        <ScreenRow4Li>Собственное производство.</ScreenRow4Li>
                        <ScreenRow4Li>Работаем с _____ года</ScreenRow4Li>
                        <ScreenRow4Li>Высокий профессионализм всей команды</ScreenRow4Li>
                        <ScreenRow4Li>Огромный выбор материалов</ScreenRow4Li>
                        <ScreenRow4Li>Выезд замерщика с образцами</ScreenRow4Li>
                        <ScreenRow4Li>Минимальные сроки производства</ScreenRow4Li>
                        <ScreenRow4Li>Установка в день доставки</ScreenRow4Li>
                        <ScreenRow4Li>Гарантия ____ года</ScreenRow4Li>
                    </ul>

                    <div>
                        <ScreenBtnCalc>
                            РАСЧИТАТЬ СТОИМОСТЬ
                        </ScreenBtnCalc>
                    </div>
                </Block_2>

                <Block_3>
                    <ScreenImg7 src={img7} alt="img" />
                </Block_3>



                <Block_4>
                    <ScreenImg3 src={img3} alt="img" />
                    <ScreenImg5 src={img5} alt="img" />
                    <ScreenImg6 src={img6} alt="img" />
                    <ScreenImg2 src={img2} alt="img" />

                </Block_4>

                <Block_5>
                    <ScreenImg4 src={img4} alt="img" />

                </Block_5>

            </ScreenImgBlock>
        </ScreenWrapper>

    )
}

const ScreenWrapper = tw.div`flex flex-col mb-16 `
const ScreenTitle = tw.div`flex mt-10 text-6xl font-medium`
const ScreenImgBlock = tw.div`grid grid-cols-[42% 60fr] mt-10`

const Block_1 = tw.div`col-span-2 `
const ScreenImg1 = tw.img`w-full h-full`

const Block_2 = tw.div` mt-24 flex flex-col justify-between mt-36  pl-5`

const Block_3 = tw.div`mt-36 ml-auto`

const Block_4 = tw.div`col-span-2 grid grid-cols-2 gap-28 mt-36`

const ScreenImg4 = tw.img``
const ScreenImg2 = tw.img``
const ScreenImg3 = tw.img`h-full  ml-auto`

const Block_5 = tw.div` col-span-2 mt-36 ml-auto`

const ScreenImg5 = tw.img` `
const ScreenImg6 = tw.img` ml-auto`

const ScreenImg7 = tw.img`w-[564px] h-[500px]`
const ScreenBtnCalc = tw.button` mt-[30px] w-[400px] h-[60px] text-sm border`
const ScreenRow4Li = tw.li` mt-2 list-disc`



export default Screen_2
