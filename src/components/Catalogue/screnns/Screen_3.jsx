import React from 'react'
import tw from 'twin.macro'
import img1 from '../../../assets/slider/img1.svg'
import img2 from '../../../assets/slider/img2.svg'
import img3 from '../../../assets/slider/img3.svg'
import img4 from '../../../assets/slider/img4.svg'
import img5 from '../../../assets/slider/img5.svg'
import img6 from '../../../assets/slider/img6.svg'
import img7 from '../../../assets/slider/img7.svg'

const Screen_3 = (props) => {
    return (
        <ScreenWrapper_3>

            <ScreenTitle_3>
                ДВЕРИ ТАКИЕ
            </ScreenTitle_3>
            <ScreenImgBlock_3>

                <ScreenRow1_3>
                    <ScreenImg1_3 src={img1} alt="img" />
                </ScreenRow1_3>

                <ScreenRow2_3>
                    <ScreenRow2ImgContainer_3>
                        <ScreenImgWrapper2_3>
                            <ScreenImg2_3 src={img2} alt="img" />
                        </ScreenImgWrapper2_3>
                        <ScreenImgWrapper3_3>
                            <ScreenImg3_3 src={img3} alt="img" />
                        </ScreenImgWrapper3_3>

                    </ScreenRow2ImgContainer_3>
                    <div>
                        <ScreenImg4_3 src={img4} alt="img" />
                    </div>
                </ScreenRow2_3>

                <ScreenRow3_3>
                    <ScreenImg5_3 src={img5} alt="img" />
                    <ScreenRow3Block2_3>
                        <ScreenRow3Text_3>
                            Идеальный вариант для жизни.
                            Идеальный вариант для жизни.
                            Идеальный вариант для жизни.
                            Идеальный вариант для жизни.
                            Идеальный вариант для жизни.
                            Идеальный вариант для жизни.
                            Идеальный вариант для жизни.
                        </ScreenRow3Text_3>
                        <div>
                            <ScreenImg6_3  src={img6} alt="img" />
                        </div>
                    </ScreenRow3Block2_3>
                </ScreenRow3_3>

                <ScreenRow4_3>
                    <ScreenRow4LeftBlock_3>
                        <ul>
                            <ScreenRow4Li_3>Изготовлен из одного  20Ft контейнера площадью 15 кв.м;</ScreenRow4Li_3>
                            <ScreenRow4Li_3>Сделаны на супер производстве</ScreenRow4Li_3>
                            <ScreenRow4Li_3>Куча крутых технологий</ScreenRow4Li_3>
                            <ScreenRow4Li_3>Есть все и немного больше</ScreenRow4Li_3>
                            <ScreenRow4Li_3>и еще</ScreenRow4Li_3>
                            <ScreenRow4Li_3>И много фактов об этих перегородках</ScreenRow4Li_3>
                            <ScreenRow4Li_3>Куча крутых технологий</ScreenRow4Li_3>
                            <ScreenRow4Li_3>Есть все и немного больше</ScreenRow4Li_3>
                            <ScreenRow4Li_3>и еще</ScreenRow4Li_3>
                            <ScreenRow4Li_3>И много фактов об этих перегородках</ScreenRow4Li_3>
                        </ul>
                        
                        <div>
                            <ScreenBtnCalc>
                                РАСЧИТАТЬ СТОИМОСТЬ
                            </ScreenBtnCalc>
                        </div>
                    </ScreenRow4LeftBlock_3>
                    <div>
                        <ScreenImg7_3 src={img7} alt="img" />
                    </div>
                </ScreenRow4_3>
            </ScreenImgBlock_3>
        </ScreenWrapper_3>

    )
}

const ScreenWrapper_3 =tw.div`flex flex-col`
const ScreenTitle_3 =tw.div`flex mt-10 text-6xl font-medium`
const ScreenImgBlock_3 =tw.div`flex flex-col mt-10`

const ScreenRow1_3 =tw.div`flex `
const ScreenImg1_3 =tw.img`w-full h-full `

const ScreenRow2_3 =tw.div`flex justify-between mt-36 h-[600px]`
const ScreenRow2ImgContainer_3 =tw.div`flex flex-col justify-between`
const ScreenImgWrapper2_3 =tw.div`flex w-72 h-72`
const ScreenImg2_3 =tw.img``
const ScreenImgWrapper3_3 =tw.div`flex w-72 h-72`
const ScreenImg3_3 =tw.img``
const ScreenImg4_3 =tw.img``

const ScreenRow3_3 =tw.div`flex justify-between w-full mt-36 h-[750px]`
const ScreenImg5_3 =tw.img``
const ScreenRow3Block2_3 =tw.div`flex flex-col justify-between w-96`
const ScreenRow3Text_3 =tw.div``
const ScreenImg6_3 =tw.img``

const ScreenRow4_3 = tw.div`flex justify-between my-8 pl-10`
const ScreenImg7_3 = tw.img` w-[385px]`
const ScreenRow4LeftBlock_3 = tw.div`flex flex-col w-[535px] justify-end`
const ScreenBtnCalc = tw.button` mt-[30px] w-[400px] h-[60px] text-sm border`
const ScreenRow4Li_3 = tw.li` mt-2 list-disc`

 

export default Screen_3
