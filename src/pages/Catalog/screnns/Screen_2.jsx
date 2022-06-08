import React from 'react'
import tw from 'twin.macro'
import { useNavigate } from "react-router-dom";

import img4 from '../../../assets/slider/partition/partition_10.jpg'
import img3 from '../../../assets/slider/partition/partition_11.jpg'
import img1 from '../../../assets/slider/partition/partition_19.jpg'
import img2 from '../../../assets/slider/partition/partition_27.jpg'
import img7 from '../../../assets/slider/partition/partition_21.jpg'


const Screen_2 = (props) => {
    const navigate = useNavigate();

    return (
        <ScreenWrapper>

            <ScreenTitle>
                ПЕРЕГОРОДКИ МЕЖКОМНАТНЫЕ
            </ScreenTitle>
            <ScreenImgBlock>

                <Block_1>
                    <ScreenImg1 src={img1} alt="img" />
                </Block_1>

                <Block_3>
                    <ScreenImg2 src={img2} alt="img" />
                </Block_3>

                <Block_2>
                    <p>
                        Основная функция межкомнатных перегородок это разграничение площади помещения.
                        Проще говоря - зонирования.
                        Раздвижные межкомнатные перегородки это отличное решение,
                        а так же  простой и легкий способ деления открытого пространства.
                        Они добавляют эстетические и художественные акценты в обстановку.
                        Такие перегородки служат одновременно и стенами, и дверями.
                    </p>
                </Block_2>
                
                <Block_4>
                    <ScreenImg3 src={img3} alt="img" />
                    <img src={img4} alt="img" />


                </Block_4>

                <Block_5>
                    <ScreenImg6 src={img7} alt="img" />

                </Block_5>

            </ScreenImgBlock>
        </ScreenWrapper>

    )
}

const ScreenWrapper = tw.div`flex flex-col mb-16 mx-[1px]`
const ScreenTitle = tw.div`flex mt-10 text-6xl font-medium`
const ScreenImgBlock = tw.div`grid grid-cols-[55% 1fr] mt-10`

const Block_1 = tw.div`col-span-2 `
const ScreenImg1 = tw.img`w-full h-full`

const Block_2 = tw.div` flex flex-col justify-between mt-40  pl-5 pl-5 text-2xl leading-8`

const Block_3 = tw.div`mt-40 ml-auto`

const Block_4 = tw.div`col-span-2 grid grid-cols-2 gap-28 mt-40`

const ScreenImg2 = tw.img`h-full  ml-auto`

const ScreenImg3 = tw.img`w-[480px] h-auto`
const ScreenImg6 = tw.img`w-full`

const Block_5 = tw.div`mt-40 col-span-2`





export default Screen_2
