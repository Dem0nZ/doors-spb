import React from 'react'
import tw from 'twin.macro'
import img1 from '../../../assets/slider/doors/doors_1.jpg'
import img2 from '../../../assets/slider/doors/doors_2.jpg'
import img3 from '../../../assets/slider/doors/doors_3.jpg'
import img4 from '../../../assets/slider/doors/doors_4.jpg'
import img5 from '../../../assets/slider/doors/doors_9.jpg'
import img6 from '../../../assets/slider/doors/doors_6-01.jpg'
import img8 from '../../../assets/slider/doors/doors_8.jpg'
import img7 from '../../../assets/slider/doors/doors_7.jpg'

const Screen_3 = (props) => {
    return (
        <ScreenWrapper>

            <ScreenTitle>
                ДВЕРИ-КУПЕ МЕЖКОМНАТНЫЕ
            </ScreenTitle>
            <ScreenImgBlock>

                <Block_1>
                    <ScreenImg1 src={img1} alt="img" />
                </Block_1>

                <Block_2>
                    <ScreenImg7 src={img7} alt="img" />

                </Block_2>

                <Block_3>
                    <ScreenImg6 src={img6} alt="img" />
                </Block_3>

                <Block_4>
                <img src={img5} alt="img" />

                </Block_4>

                <Block_5>
                    <img src={img8} alt="img" />
                </Block_5>

                <Block_6>
                    <ScreenImg2 src={img2} alt="img" />
                    <ScreenImg3 src={img3} alt="img" />
                </Block_6>

                <Block_7>
                    <ScreenImg4 src={img4} alt="img" />
                </Block_7>

            </ScreenImgBlock>
        </ScreenWrapper>

    )
}

const ScreenWrapper = tw.div`flex flex-col mb-16 mx-[1px]`
const ScreenTitle = tw.div`flex mt-10 text-6xl font-medium`
const ScreenImgBlock = tw.div`grid grid-cols-[42% 60fr] mt-10`

const Block_1 = tw.div`col-span-2 `
const ScreenImg1 = tw.img`w-full h-full `

const Block_6 = tw.div`flex flex-col justify-between mt-28`

const Block_7 = tw.div` mt-28`

const ScreenImg4 = tw.img`w-[600px] h-[583px] ml-auto`
const Block_2 = tw.div`flex flex-col justify-between mt-28`
const ScreenImg2 = tw.img`w-96 h-[17rem]`
const ScreenImg3 = tw.img`w-96 h-[17rem]`

const Block_3 = tw.div`  justify-between mt-28`
const ScreenImg6 = tw.img` w-[400px] h-[500px] ml-auto`

const Block_4 = tw.div`col-span-2   mt-28`

const ScreenImg7 = tw.img`w-[400px] h-[500px] ml-auto`
const Block_5 = tw.div`col-span-2   mt-28`



export default Screen_3