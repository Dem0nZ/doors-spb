import React from 'react'
import tw from 'twin.macro'
import img1 from '../../../assets/slider/closet/non_standart/closetNonStd_1.jpg'
import img2 from '../../../assets/slider/closet/non_standart/closetNonStd_2.jpg'
import img3 from '../../../assets/slider/closet/non_standart/closetNonStd_3.jpg'
import img4 from '../../../assets/slider/closet/non_standart/closetNonStd_4.jpg'
import img5 from '../../../assets/slider/closet/non_standart/closetNonStd_5.jpg'


const Screen_4 = (props) => {
    return (
        <ScreenWrapper>

            <ScreenTitle>
                ШКАФЫ-КУПЕ НЕСТАНДАРТНЫЕ
            </ScreenTitle>
            <ScreenImgBlock>

                <Block_1>
                    <ScreenImg1 src={img1} alt="img" />
                </Block_1>

                <Block_2>
                    <ScreenImg2 src={img2} alt="img" />
                    <ScreenImg3 src={img3} alt="img" />
                </Block_2>
                

                <Block_3>
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
                </Block_3>

                <Block_4>
                    <ScreenImg4 src={img4} alt="img" />
                </Block_4>

                <Block_5>
                    <ScreenImg5 src={img5} alt="img" />
                </Block_5>

            </ScreenImgBlock>
        </ScreenWrapper>

    )
}

const ScreenWrapper = tw.div`flex flex-col mb-16 `
const ScreenTitle = tw.div`flex mt-10 text-6xl font-medium`
const ScreenImgBlock = tw.div`grid grid-cols-[45% 1fr] mt-10`

const Block_1 = tw.div`col-span-2`
const ScreenImg1 = tw.img`w-full h-full`

const Block_2 = tw.div`col-span-2 flex justify-between mt-40`

const Block_3 = tw.div`mt-24 flex flex-col justify-between mt-40  pl-5`
const ScreenImg2 = tw.img`w-[470px] h-[320px]`
const ScreenImg3 = tw.img`w-[470px] h-[320px]`
const ScreenImg4 = tw.img``

const Block_4 = tw.div`mt-40`

const Block_5 = tw.div`col-span-2 mt-36`
const ScreenImg5 = tw.img`h-[720px] `

const ScreenBtnCalc = tw.button` mt-[30px] w-[400px] h-[60px] text-sm border`
const ScreenRow4Li = tw.li` mt-2 list-disc`



export default Screen_4
