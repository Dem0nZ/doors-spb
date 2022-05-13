import React from 'react'
import tw from 'twin.macro'
import img1 from '../../../assets/slider/img1.svg'
import img2 from '../../../assets/slider/img2.svg'
import img3 from '../../../assets/slider/img3.svg'
import img4 from '../../../assets/slider/img4.svg'
import img5 from '../../../assets/slider/img5.svg'
import img6 from '../../../assets/slider/img6.svg'
import img7 from '../../../assets/slider/img7.svg'

const Screen_2 = (props) => {
    return (
        <ScreenWrapper_2>

            <ScreenTitle_2>
                ДВЕРИ ТАКИЕ
            </ScreenTitle_2>
            <ScreenImgBlock_2>

                <ScreenRow1_2>
                    <ScreenImg1_2 src={img1} alt="img" />
                </ScreenRow1_2>

                <ScreenRow2_2>
                    <ScreenRow2ImgContainer_2>
                        <ScreenImgWrapper2_2>
                            <ScreenImg2_2 src={img2} alt="img" />
                        </ScreenImgWrapper2_2>
                        <ScreenImgWrapper3_2>
                            <ScreenImg3_2 src={img3} alt="img" />
                        </ScreenImgWrapper3_2>

                    </ScreenRow2ImgContainer_2>
                    <div>
                        <ScreenImg4_2 src={img4} alt="img" />
                    </div>
                </ScreenRow2_2>

                <ScreenRow3_2>
                    <ScreenImg5_2 src={img5} alt="img" />
                    <ScreenRow3Block2_2>
                        <ScreenRow3Text_2>
                            Идеальный вариант для жизни.
                            Идеальный вариант для жизни.
                            Идеальный вариант для жизни.
                            Идеальный вариант для жизни.
                            Идеальный вариант для жизни.
                            Идеальный вариант для жизни.
                            Идеальный вариант для жизни.
                        </ScreenRow3Text_2>
                        <div>
                            <ScreenImg6_2  src={img6} alt="img" />
                        </div>
                    </ScreenRow3Block2_2>
                </ScreenRow3_2>

                <ScreenRow4_2>
                    <ScreenRow4LeftBlock_2>
                        <ul>
                            <ScreenRow4Li_2>Изготовлен из одного  20Ft контейнера площадью 15 кв.м;</ScreenRow4Li_2>
                            <ScreenRow4Li_2>Сделаны на супер производстве</ScreenRow4Li_2>
                            <ScreenRow4Li_2>Куча крутых технологий</ScreenRow4Li_2>
                            <ScreenRow4Li_2>Есть все и немного больше</ScreenRow4Li_2>
                            <ScreenRow4Li_2>и еще</ScreenRow4Li_2>
                            <ScreenRow4Li_2>И много фактов об этих перегородках</ScreenRow4Li_2>
                            <ScreenRow4Li_2>Куча крутых технологий</ScreenRow4Li_2>
                            <ScreenRow4Li_2>Есть все и немного больше</ScreenRow4Li_2>
                            <ScreenRow4Li_2>и еще</ScreenRow4Li_2>
                            <ScreenRow4Li_2>И много фактов об этих перегородках</ScreenRow4Li_2>
                        </ul>
                        
                        <div>
                            <ScreenBtnCalc>
                                РАСЧИТАТЬ СТОИМОСТЬ
                            </ScreenBtnCalc>
                        </div>
                    </ScreenRow4LeftBlock_2>
                    <div>
                        <ScreenImg7_2 src={img7} alt="img" />
                    </div>
                </ScreenRow4_2>
            </ScreenImgBlock_2>
        </ScreenWrapper_2>

    )
}

const ScreenWrapper_2 =tw.div`flex flex-col`
const ScreenTitle_2 =tw.div`flex mt-10 text-6xl font-medium`
const ScreenImgBlock_2 =tw.div`flex flex-col mt-10`

const ScreenRow1_2 =tw.div`flex `
const ScreenImg1_2 =tw.img`w-full h-full `

const ScreenRow2_2 =tw.div`flex justify-between mt-36 h-[600px]`
const ScreenRow2ImgContainer_2 =tw.div`flex flex-col justify-between`
const ScreenImgWrapper2_2 =tw.div`flex w-72 h-72`
const ScreenImg2_2 =tw.img``
const ScreenImgWrapper3_2 =tw.div`flex w-72 h-72`
const ScreenImg3_2 =tw.img``
const ScreenImg4_2 =tw.img``

const ScreenRow3_2 =tw.div`flex justify-between w-full mt-36 h-[750px]`
const ScreenImg5_2 =tw.img``
const ScreenRow3Block2_2 =tw.div`flex flex-col justify-between w-96`
const ScreenRow3Text_2 =tw.div``
const ScreenImg6_2 =tw.img``

const ScreenRow4_2 = tw.div`flex justify-between my-8 pl-10`
const ScreenImg7_2 = tw.img` w-[385px]`
const ScreenRow4LeftBlock_2 = tw.div`flex flex-col w-[535px] justify-end`
const ScreenBtnCalc = tw.button` mt-[30px] w-[400px] h-[60px] text-sm border`
const ScreenRow4Li_2 = tw.li` mt-2 list-disc`

 

export default Screen_2
