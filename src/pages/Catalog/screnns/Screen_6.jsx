import React from 'react'
import tw from 'twin.macro'
import img1 from '../../../assets/slider/doors/checkroom/checkroom_010.jpg'
import img2 from '../../../assets/slider/doors/checkroom/checkroom_02.jpg'
import img3 from '../../../assets/slider/doors/checkroom/checkroom_03.jpg'
import img4 from '../../../assets/slider/doors/checkroom/checkroom_04.jpg'
import img5 from '../../../assets/slider/doors/checkroom/checkroom_05.jpg'
import img6 from '../../../assets/slider/doors/checkroom/checkroom_007.jpg'
import img7 from '../../../assets/slider/doors/checkroom/checkroom_07.jpg'
import img9 from '../../../assets/slider/doors/checkroom/checkroom_09.jpg'
import img10 from '../../../assets/slider/doors/checkroom/checkroom_013.jpg'
import img11 from '../../../assets/slider/doors/checkroom/checkroom_015.jpg'

const Screen_6 = (props) => {
    return (
        <ScreenWrapper>

            <ScreenTitle>
                ДВЕРИ-КУПЕ ДЛЯ ГАРДЕРОБНОЙ
            </ScreenTitle>
            <ScreenImgBlock>

                <Block_1>
                    <ScreenImg1 src={img1} alt='img' />
                </Block_1>

                <Block_2>
                    <img src={img5} alt='img' />
                    <img src={img9} alt='img' />

                </Block_2>

                <Block_3>
                    <ScreenImg6 src={img6} alt='img' />
                </Block_3>

                <Block_4>
                    <img src={img7} alt='img' />
                </Block_4>

                <Block_5>
                    <ScreenImg2 src={img2} alt='img' />
                    <ScreenImg3 src={img3} alt='img' />
                </Block_5>

                <Block_6>
                    <ScreenImg4 src={img4} alt='img' />
                </Block_6>

                <Block_7>
                    <ScreenImg10 src={img10} alt='img' />
                    <ScreenImg11 src={img11} alt='img' />
                </Block_7>

            </ScreenImgBlock>
        </ScreenWrapper>

    )
}

const ScreenWrapper = tw.div`flex flex-col mb-16 mx-[1px]`
const ScreenTitle = tw.div`flex mt-10 text-6xl font-medium`
const ScreenImgBlock = tw.div`grid grid-cols-[35% 1fr] mt-10`

const Block_1 = tw.div`col-span-2 `
const ScreenImg1 = tw.img`w-full h-full `

const Block_5 = tw.div`flex flex-col justify-between mt-36`

const Block_6 = tw.div` mt-36`

const ScreenImg4 = tw.img`w-[600px] h-[583px] ml-auto`
const Block_2 = tw.div`flex flex-col justify-between mt-36`
const ScreenImg2 = tw.img`w-96 h-[17rem]`
const ScreenImg3 = tw.img`w-96 h-[17rem]`

const Block_3 = tw.div`  justify-between mt-36`
const ScreenImg6 = tw.img` w-[600px] h-[600px] ml-auto`

const Block_4 = tw.div`col-span-2   mt-36`

const Block_7 = tw.div`col-span-2 flex justify-between   mt-36`
const ScreenImg10 = tw.img`w-[480px]`
const ScreenImg11 = tw.img`w-[480px]`





export default Screen_6
