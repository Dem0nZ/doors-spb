import React from 'react'
import tw from 'twin.macro'
import img1 from '../../../assets/slider/img1.svg'
import img2 from '../../../assets/slider/img2.svg'
import img3 from '../../../assets/slider/img3.svg'
import img4 from '../../../assets/slider/img4.svg'
import img5 from '../../../assets/slider/img5.svg'
import img6 from '../../../assets/slider/img6.svg'
import img7 from '../../../assets/slider/img7.svg'

const Screen_4 = (props) => {
    return (
        <ScreenWrapper_4>

            <ScreenTitle_4>
                ДВЕРИ ТАКИЕ
            </ScreenTitle_4>
            <ScreenImgBlock_4>

                <ScreenRow1_4>
                    <ScreenImg1_4 src={img1} alt="img" />
                </ScreenRow1_4>

                <ScreenRow2_4>
                    <ScreenRow2ImgContainer_4>
                        <ScreenImgWrapper2_4>
                            <ScreenImg2_4 src={img2} alt="img" />
                        </ScreenImgWrapper2_4>
                        <ScreenImgWrapper3_4>
                            <ScreenImg3_4 src={img3} alt="img" />
                        </ScreenImgWrapper3_4>

                    </ScreenRow2ImgContainer_4>
                    <div>
                        <ScreenImg4_4 src={img4} alt="img" />
                    </div>
                </ScreenRow2_4>

                <ScreenRow3_4>
                    <ScreenImg5_4 src={img5} alt="img" />
                    <ScreenRow3Block2_4>
                        <ScreenRow3Text_4>
                            Идеальный вариант для жизни.
                            Идеальный вариант для жизни.
                            Идеальный вариант для жизни.
                            Идеальный вариант для жизни.
                            Идеальный вариант для жизни.
                            Идеальный вариант для жизни.
                            Идеальный вариант для жизни.
                        </ScreenRow3Text_4>
                        <div>
                            <ScreenImg6_4  src={img6} alt="img" />
                        </div>
                    </ScreenRow3Block2_4>
                </ScreenRow3_4>

                <ScreenRow4_4>
                    <ScreenRow4LeftBlock_4>
                        <ul>
                            <ScreenRow4Li_4>Изготовлен из одного  20Ft контейнера площадью 15 кв.м;</ScreenRow4Li_4>
                            <ScreenRow4Li_4>Сделаны на супер производстве</ScreenRow4Li_4>
                            <ScreenRow4Li_4>Куча крутых технологий</ScreenRow4Li_4>
                            <ScreenRow4Li_4>Есть все и немного больше</ScreenRow4Li_4>
                            <ScreenRow4Li_4>и еще</ScreenRow4Li_4>
                            <ScreenRow4Li_4>И много фактов об этих перегородках</ScreenRow4Li_4>
                            <ScreenRow4Li_4>Куча крутых технологий</ScreenRow4Li_4>
                            <ScreenRow4Li_4>Есть все и немного больше</ScreenRow4Li_4>
                            <ScreenRow4Li_4>и еще</ScreenRow4Li_4>
                            <ScreenRow4Li_4>И много фактов об этих перегородках</ScreenRow4Li_4>
                        </ul>
                        
                        <div>
                            <ScreenBtnCalc>
                                РАСЧИТАТЬ СТОИМОСТЬ
                            </ScreenBtnCalc>
                        </div>
                    </ScreenRow4LeftBlock_4>
                    <div>
                        <ScreenImg7_4 src={img7} alt="img" />
                    </div>
                </ScreenRow4_4>
            </ScreenImgBlock_4>
        </ScreenWrapper_4>

    )
}

const ScreenWrapper_4 =tw.div`flex flex-col`
const ScreenTitle_4 =tw.div`flex mt-10 text-6xl font-medium`
const ScreenImgBlock_4 =tw.div`flex flex-col mt-10`

const ScreenRow1_4 =tw.div`flex `
const ScreenImg1_4 =tw.img`w-full h-full `

const ScreenRow2_4 =tw.div`flex justify-between mt-36 h-[600px]`
const ScreenRow2ImgContainer_4 =tw.div`flex flex-col justify-between`
const ScreenImgWrapper2_4 =tw.div`flex w-72 h-72`
const ScreenImg2_4 =tw.img``
const ScreenImgWrapper3_4 =tw.div`flex w-72 h-72`
const ScreenImg3_4 =tw.img``
const ScreenImg4_4 =tw.img``

const ScreenRow3_4 =tw.div`flex justify-between w-full mt-36 h-[750px]`
const ScreenImg5_4 =tw.img``
const ScreenRow3Block2_4 =tw.div`flex flex-col justify-between w-96`
const ScreenRow3Text_4 =tw.div``
const ScreenImg6_4 =tw.img``

const ScreenRow4_4 = tw.div`flex justify-between my-8 pl-10`
const ScreenImg7_4 = tw.img` w-[385px]`
const ScreenRow4LeftBlock_4 = tw.div`flex flex-col w-[535px] justify-end`
const ScreenBtnCalc = tw.button` mt-[30px] w-[400px] h-[60px] text-sm border`
const ScreenRow4Li_4 = tw.li` mt-2 list-disc`

 

export default Screen_4
