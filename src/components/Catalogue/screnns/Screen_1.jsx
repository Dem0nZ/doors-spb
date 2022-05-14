import React from 'react'
import tw from 'twin.macro'
import img1 from '../../../assets/slider/img1.svg'
import img2 from '../../../assets/slider/img2.svg'
import img3 from '../../../assets/slider/img3.svg'
import img4 from '../../../assets/slider/img4.svg'
import img5 from '../../../assets/slider/img5.svg'
import img6 from '../../../assets/slider/img6.svg'
import img7 from '../../../assets/slider/img7.svg'

const Screen_1 = (props) => {
    return (
        <ScreenWrapper_1>
            <ScreenTitle_1>
                ДВЕРИ ТАКИЕ
            </ScreenTitle_1>
            <ScreenImgBlock_1>

                <ScreenRow1_1>
                    <ScreenImg1_1 src={img1} alt="img" />
                </ScreenRow1_1>

                <ScreenRow2_1>
                    <ScreenRow2ImgContainer_1>
                        <ScreenImgWrapper2_1>
                            <ScreenImg2_1 src={img2} alt="img" />
                        </ScreenImgWrapper2_1>
                        <ScreenImgWrapper3_1>
                            <ScreenImg3_1 src={img3} alt="img" />
                        </ScreenImgWrapper3_1>

                    </ScreenRow2ImgContainer_1>
                    <div>
                        <ScreenImg4_1 src={img4} alt="img" />
                    </div>
                </ScreenRow2_1>

                <ScreenRow3_1>
                    <ScreenImg5_1 src={img5} alt="img" />
                    <ScreenRow3Block2_1>
                        <ScreenRow3Text_1>
                            Идеальный вариант для жизни.
                            Идеальный вариант для жизни.
                            Идеальный вариант для жизни.
                            Идеальный вариант для жизни.
                            Идеальный вариант для жизни.
                            Идеальный вариант для жизни.
                            Идеальный вариант для жизни.
                        </ScreenRow3Text_1>
                        <div>
                            <ScreenImg6_1  src={img6} alt="img" />
                        </div>
                    </ScreenRow3Block2_1>
                </ScreenRow3_1>
                
                <ScreenRow_4>
                    <ScreenRow4LeftBlock_1>
                        <ul>
                            <ScreenRow4Li_1>Изготовлен из одного  20Ft контейнера площадью 15 кв.м;</ScreenRow4Li_1>
                            <ScreenRow4Li_1>Сделаны на супер производстве</ScreenRow4Li_1>
                            <ScreenRow4Li_1>Куча крутых технологий</ScreenRow4Li_1>
                            <ScreenRow4Li_1>Есть все и немного больше</ScreenRow4Li_1>
                            <ScreenRow4Li_1>и еще</ScreenRow4Li_1>
                            <ScreenRow4Li_1>И много фактов об этих перегородках</ScreenRow4Li_1>
                            <ScreenRow4Li_1>Куча крутых технологий</ScreenRow4Li_1>
                            <ScreenRow4Li_1>Есть все и немного больше</ScreenRow4Li_1>
                            <ScreenRow4Li_1>и еще</ScreenRow4Li_1>
                            <ScreenRow4Li_1>И много фактов об этих перегородках</ScreenRow4Li_1>
                        </ul>
                        
                        <div>
                            <ScreenBtnCalc>
                                РАСЧИТАТЬ СТОИМОСТЬ
                            </ScreenBtnCalc>
                        </div>
                    </ScreenRow4LeftBlock_1>
                    <div>
                        <ScreenImg7_1 src={img7} alt="img" />
                    </div>
                </ScreenRow_4>

            </ScreenImgBlock_1>
        </ScreenWrapper_1>

    )
}

const ScreenWrapper_1 =tw.div`flex flex-col`
const ScreenTitle_1 =tw.div`flex mt-10 text-6xl font-medium`
const ScreenImgBlock_1 =tw.div`flex flex-col mt-10`

const ScreenRow1_1 =tw.div`flex `
const ScreenImg1_1 =tw.img`w-full h-full `

const ScreenRow2_1 =tw.div`flex justify-between mt-36 h-[600px]`
const ScreenRow2ImgContainer_1 =tw.div`flex flex-col justify-between`
const ScreenImgWrapper2_1 =tw.div`flex w-72 h-72`
const ScreenImg2_1 =tw.img``
const ScreenImgWrapper3_1 =tw.div`flex w-72 h-72`
const ScreenImg3_1 =tw.img``
const ScreenImg4_1 =tw.img``

const ScreenRow3_1 =tw.div`flex justify-between w-full mt-36 h-[750px]`
const ScreenImg5_1 =tw.img``
const ScreenRow3Block2_1 =tw.div`flex flex-col justify-between w-96`
const ScreenRow3Text_1 =tw.div``
const ScreenImg6_1 =tw.img``

const ScreenRow_4 = tw.div`flex justify-between my-8 pl-10`
const ScreenImg7_1 = tw.img` w-[385px]`
const ScreenRow4LeftBlock_1 = tw.div`flex flex-col w-[535px] justify-end`
const ScreenBtnCalc = tw.button` mt-[30px] w-[400px] h-[60px] text-sm border`
const ScreenRow4Li_1 = tw.li` mt-2 list-disc`

 

export default Screen_1
