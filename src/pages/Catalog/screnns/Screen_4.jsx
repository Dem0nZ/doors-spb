import React from 'react'
import tw from 'twin.macro'
import { useNavigate } from "react-router-dom";

import img1 from '../../../assets/slider/closet/non_standart/closetNonStd_1.jpg'
import img2 from '../../../assets/slider/closet/non_standart/closetNonStd_6.jpg'
import img3 from '../../../assets/slider/closet/non_standart/closetNonStd_7.jpg'
import img4 from '../../../assets/slider/closet/non_standart/closetNonStd_4.jpg'
import img5 from '../../../assets/slider/closet/non_standart/closetNonStd_5.jpg'
import img6 from '../../../assets/slider/closet/non_standart/closetNonStd_8.jpg'


const Screen_4 = (props) => {
    const navigate = useNavigate();

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

                <Block_4>
                <ScreenImg6 src={img6} alt="img" />
                </Block_4>

                <Block_5>
                    <p>
                        Были времена, когда шкаф-купе считался предметом роскоши.
                        Сегодня же это предмет мебели,
                        который отлично вписывается в любой интерьер.
                        Наша компания изготавливает шкафы-купе из материалов,
                        имеющих отличное качество и долгий срок службы.
                    </p>

                    <p>
                        Несомненными преимуществами шкафов-купе является экономия пространства,
                        функциональность и привлекательный внешний вид.
                        А это очень актуально в современной жизни.
                    </p>
                </Block_5>

                <Block_6>
                    <img src={img4} alt="img" />
                </Block_6>

               

            </ScreenImgBlock>
        </ScreenWrapper>

    )
}

const ScreenWrapper = tw.div`flex flex-col mb-16 mx-[1px]`
const ScreenTitle = tw.div`flex mt-10 text-6xl font-medium`
const ScreenImgBlock = tw.div`grid grid-cols-[45% 1fr] mt-10`

const Block_1 = tw.div`col-span-2`
const ScreenImg1 = tw.img`w-full h-full`

const Block_2 = tw.div`col-span-2 flex justify-between mt-28`

const Block_4 = tw.div`col-span-2 mt-28`
const ScreenImg6 = tw.img`w-full`

const Block_5 = tw.div` mt-28 text-2xl leading-8 pr-10 `
const ScreenImg2 = tw.img`w-[470px] `
const ScreenImg3 = tw.img`w-[470px] `

const Block_6 = tw.div`mt-28`





export default Screen_4
