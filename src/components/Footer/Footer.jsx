import React from 'react'
import logo from '../../assets/logo_white.svg'
import tw from 'twin.macro';

const Footer = (props) => {
    return (
        <FooterWrapper id='contacts'>

            <FooterBody>

                <FooterTitle>

                    <FooterLogo>    
                        <FooterLogoImg src={logo} alt="img" />
                        <FooterLogoSeparator></FooterLogoSeparator>
                        <FooterLogoName>
                            your<br />
                            door
                        </FooterLogoName>

                    </FooterLogo>

                    <FooterTitleText>
                        Наша команда берет на себя все: от разработки идеи
                        и до реализации. Функциональность и традиции — это
                        то, что мы внедряем в каждый наш проект.
                    </FooterTitleText>

                </FooterTitle>

                <FooterBodyCol>
                    <FooterColumnTitle>
                        <FooterColumnLine />
                        <div>
                            ЗВОНИТЕ
                        </div>
                    </FooterColumnTitle>
                    <FooterColumnText>
                        <a href="tel:RU74993227009">RU +7 499 3227009</a>
                        <a href="tel:RU74993227009">RU +7 499 3227009</a>
                    </FooterColumnText>
                </FooterBodyCol>

                <FooterBodyCol>
                    <FooterColumnTitle>
                        <FooterColumnLine />
                        <div>
                            ПИШИТЕ
                        </div>
                    </FooterColumnTitle>
                    <FooterColumnText>
                        <a href="mailto:test@gmail.com">test@gmail.com</a>
                    </FooterColumnText>
                </FooterBodyCol>

                <FooterBodyColLast>

                    <FooterColumnTitle>
                        <FooterColumnLine />
                        <div>
                            ПРИЕЗЖАЙТЕ
                        </div>
                    </FooterColumnTitle>
                    <FooterColumnText>
                        Санкт-Петербург<br />
                        какой-то адрес<br />
                        какаято улица и дом
                    </FooterColumnText>

                </FooterBodyColLast>
            </FooterBody>


            <FooterBottomWrapper>



                <FooterBottom>


                    <FooterCopirateBlock>
                            © your doors. all rights reserved          
                    </FooterCopirateBlock>


                </FooterBottom>


            </FooterBottomWrapper>

        </FooterWrapper>
    )
}

const FooterWrapper = tw.div`flex flex-col  items-center w-screen  h-[323px] mt-[150px] mb-0 bg-black text-white text-sm`
const FooterBody = tw.div`flex flex-row w-full justify-center pt-[50px]`

const FooterTitle = tw.div`flex flex-col w-[600px]`
const FooterLogo = tw.div`flex h-[55.6px] font-bold`
const FooterLogoImg = tw.img` mt-[15px] w-[45px] h-[45px]`
const FooterLogoSeparator = tw.div` mt-[11px] w-[2px] h-[60px] bg-white ml-[15px]`
const FooterLogoName = tw.div` mt-[9px] pl-[15px] leading-6`
const FooterTitleText = tw.div`flex mt-[38px] max-w-[450px] pl-[50px]`

const FooterBodyCol = tw.div`flex flex-col mt-[30px] pr-5`
const FooterBodyColLast = tw.div`flex flex-col mt-[30px] max-w-[200px]`
const FooterColumnTitle = tw.div`flex`
const FooterColumnLine = tw.div`w-[32px] h-[1px] mt-[7px] mr-[14px] bg-white`
const FooterColumnText = tw.div`flex flex-col mt-[40px] leading-6`

const FooterBottomWrapper = tw.div`flex flex-row justify-center w-full`

const FooterBottom = tw.div`flex flex-col w-[1200px] h-[50px] mt-[48px] `
const FooterCopirateBlock = tw.div`flex justify-between ml-[53px] pt-3 pl-10 border-t-2 `

export default Footer