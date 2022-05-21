import React from 'react'
import tw from 'twin.macro'
import img1 from '../../../assets/slider/partition/p01.jpg'
import img2 from '../../../assets/slider/partition/p02.jpg'
import img3 from '../../../assets/slider/partition/p03.jpg'
import img4 from '../../../assets/slider/partition/p04-01.jpg'
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

                

                <Block_6>
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
                </Block_6>
                
                <Block_7>
                    <ScreenImg7 src={img7} alt="img" />
                </Block_7>

                <Block_4>
                    <ScreenImg5 src={img5} alt="img" />
                </Block_4>
                
                <Block_5>
                    <ScreenRow3Text>
                        Идеальный вариант для жизни.
                        Идеальный вариант для жизни.
                        Идеальный вариант для жизни.
                        Идеальный вариант для жизни.
                        Идеальный вариант для жизни.
                        Идеальный вариант для жизни.
                        Идеальный вариант для жизни.
                    </ScreenRow3Text>
                    <div>
                        <ScreenImg6 src={img6} alt="img" />
                    </div>
                </Block_5>

                <Block_2>
                    <ScreenImgWrapper2>
                        <ScreenImg2 src={img2} alt="img" />
                    </ScreenImgWrapper2>
                    <ScreenImgWrapper3>
                        <ScreenImg3 src={img3} alt="img" />
                    </ScreenImgWrapper3>
                </Block_2>

                <Block_3>
                    <ScreenImg4 src={img4} alt="img" />
                </Block_3>

            </ScreenImgBlock>
        </ScreenWrapper>

    )
}

const ScreenWrapper = tw.div`flex flex-col mb-16 `
const ScreenTitle = tw.div`flex mt-10 text-6xl font-medium`
const ScreenImgBlock = tw.div`grid grid-cols-[42% 60fr] mt-10`

const Block_1 = tw.div`col-span-2 `
const ScreenImg1 = tw.img`w-full h-full `

const Block_2 = tw.div`flex flex-col justify-between mt-36`

const Block_3 = tw.div` mt-36`

const ScreenImg4 = tw.img`w-[600px] h-[583px] ml-auto`
const Block_4 = tw.div` mt-36`
const ScreenImgWrapper2 = tw.div``
const ScreenImg2 = tw.img`w-[17rem] h-[17rem]`
const ScreenImgWrapper3 = tw.div``
const ScreenImg3 = tw.img`w-[17rem] h-[17rem]`

const ScreenImg5 = tw.img` w-[400px] h-[750px]`
const Block_5 = tw.div` flex flex-col justify-between mt-36`
const ScreenRow3Text = tw.div` w-96 ml-auto`
const ScreenImg6 = tw.img` w-[400px] h-[500px] ml-auto`

const ScreenImg7 = tw.img`w-[400px] h-[500px]`
const Block_6 = tw.div` mt-24 flex flex-col justify-between mt-36  pl-5`
const Block_7 = tw.div`mt-36 ml-auto`
const ScreenBtnCalc = tw.button` mt-[30px] w-[400px] h-[60px] text-sm border`
const ScreenRow4Li = tw.li` mt-2 list-disc`



export default Screen_2
