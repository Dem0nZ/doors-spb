import React from 'react'
import tw from 'twin.macro'
import {data} from '../../../moks/data'
import img1 from '../../../assets/slider/img1.svg'
import img2 from '../../../assets/slider/img2.svg'
import img3 from '../../../assets/slider/img3.svg'
import img4 from '../../../assets/slider/img4.svg'
import img5 from '../../../assets/slider/img5.svg'
import img6 from '../../../assets/slider/img6.svg'
import img7 from '../../../assets/slider/img7.svg'

const Screen_1 = (props) => {
    return (
        <ScreenWrapper>
            <ScreenTitle>
                 ПЕРЕГОРОДКИ СТАЦИОНАРНЫЕ
            </ScreenTitle>
            <ScreenImgBlock>

                <ScreenRow1>
                    <ScreenImg1 src={img1} alt="img" />
                </ScreenRow1>

                <ScreenRow2>
                    <ScreenRow2ImgContainer>
                        <ScreenImgWrapper2>
                            <ScreenImg2 src={img2} alt="img" />
                        </ScreenImgWrapper2>
                        <ScreenImgWrapper3>
                            <ScreenImg3 src={img3} alt="img" />
                        </ScreenImgWrapper3>

                    </ScreenRow2ImgContainer>
                    <div>
                        <ScreenImg4 src={img4} alt="img" />
                    </div>
                </ScreenRow2>

                <ScreenRow3>
                    <ScreenImg5 src={img5} alt="img" />
                    <ScreenRow3Block2>
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
                            <ScreenImg6  src={img6} alt="img" />
                        </div>
                    </ScreenRow3Block2>
                </ScreenRow3>
                
                <ScreenRow_4>
                    <ScreenRow4LeftBlock>
                        <ul>
                            <ScreenRow4Li>Собственное производство. Работаем с …….года</ScreenRow4Li>
                            <ScreenRow4Li>Огромный выбор материалов</ScreenRow4Li>
                            <ScreenRow4Li>Выезд замерщика с образцами</ScreenRow4Li>
                            <ScreenRow4Li>Минимальные сроки производства</ScreenRow4Li>
                            <ScreenRow4Li>Установка в день доставки</ScreenRow4Li>
                            <ScreenRow4Li>Гарантия ….. года</ScreenRow4Li>
                            
                        </ul>
                        
                        <div>
                            <ScreenBtnCalc>
                                РАСЧИТАТЬ СТОИМОСТЬ
                            </ScreenBtnCalc>
                        </div>
                    </ScreenRow4LeftBlock>
                    <div>
                        <ScreenImg7 src={img7} alt="img" />
                    </div>
                </ScreenRow_4>

            </ScreenImgBlock>
        </ScreenWrapper>

    )
}

const ScreenWrapper =tw.div`flex flex-col`
const ScreenTitle =tw.div`flex mt-10 text-6xl font-medium`
const ScreenImgBlock =tw.div`flex flex-col mt-10`

const ScreenRow1 =tw.div`flex `
const ScreenImg1 =tw.img`h-full w-full`

const ScreenRow2 =tw.div`flex justify-between mt-36 h-[600px]`
const ScreenRow2ImgContainer =tw.div`flex flex-col justify-between`
const ScreenImgWrapper2 =tw.div`flex w-72 h-72`
const ScreenImg2 =tw.img``
const ScreenImgWrapper3 =tw.div`flex w-72 h-72`
const ScreenImg3 =tw.img``
const ScreenImg4 =tw.img``

const ScreenRow3 =tw.div`flex justify-between w-full mt-36 h-[750px]`
const ScreenImg5 =tw.img``
const ScreenRow3Block2 =tw.div`flex flex-col justify-between w-96`
const ScreenRow3Text =tw.div``
const ScreenImg6 =tw.img``

const ScreenRow_4 = tw.div`flex justify-between my-8 pl-10`
const ScreenImg7 = tw.img` w-[385px]`
const ScreenRow4LeftBlock = tw.div`flex flex-col w-[535px] justify-end`
const ScreenBtnCalc = tw.button` mt-[30px] w-[400px] h-[60px] text-sm border`
const ScreenRow4Li = tw.li` mt-2 list-disc`

 

export default Screen_1
