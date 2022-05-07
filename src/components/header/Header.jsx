import React from 'react'
import logo from '../../assets/logo.png'
import linc from '../../assets/linc.png'
import fcb_1 from '../../assets/fcb_1.png'
import inst_1 from '../../assets/inst_1.png'
import tw from 'twin.macro';


const Header = (props) => {
    return (
        <HeaderWrapper >
            <HeaderBodyContainer>
                <HeaderBody>
                    <HeaderLogo>
                        <LogoImage src={logo} />
                        <LogoSeparator></LogoSeparator>
                        <LogoName>
                            your<br />
                            door
                        </LogoName>
                    </HeaderLogo>
                    <HeaderMenu>
                        <div>
                            <HeaderMenuLi>
                                <HeaderMenuCatalogue href="#">КАТАЛОГ</HeaderMenuCatalogue>
                            </HeaderMenuLi>
                            <HeaderMenuLi>
                                <HeaderMenuContakts href="#">КОНТАКТЫ</HeaderMenuContakts>
                            </HeaderMenuLi>
                        </div>

                        <HeaderMenuLi>
                            <HeaderMenuCalculator href="#">РАСЧИТАТЬ СТОИМОСТЬ</HeaderMenuCalculator>
                        </HeaderMenuLi>
                        <HeaderMenuLi>
                            <HeaderMenuLink src={linc} />
                            <HeaderMenuShare href="#">ПОДЕЛИТЬСЯ</HeaderMenuShare>
                        </HeaderMenuLi>
                    </HeaderMenu>
                </HeaderBody>
            </HeaderBodyContainer>
            <HeaderLinkContainer>
                <Headerlinkwrapper>
                    <Headerlinks>
                        <LinkImg src={inst_1} alt="img" />
                        <LinkImg src={fcb_1} alt="img" />
                    </Headerlinks>
                </Headerlinkwrapper>
            </HeaderLinkContainer>


        </HeaderWrapper>
    )
}

const HeaderWrapper = tw.div`flex flex-col justify-center`
const HeaderBodyContainer = tw.div`flex justify-center w-screen border-b border-black`
const HeaderBody = tw.div`flex justify-between items-center w-[1200px] h-[56px]`
const HeaderLogo = tw.div`flex justify-between max-w-[100px] min-w-[70px]`
const LogoImage = tw.img`h-[24px] w-[24px]`
const LogoSeparator = tw.div`inline-block bg-current w-[1px] h-[30px]`
const LogoName = tw.div`text-right text-xs`
const HeaderMenu = tw.ul`flex justify-around w-full`
const HeaderMenuLi = tw.li`inline-block`
const HeaderMenuCatalogue = tw.div`  text-right `
const HeaderMenuContakts = tw.div` text-right pl-[10px]`
const HeaderMenuCalculator = tw.div`text-center `
const HeaderMenuLink = tw.img`inline-block h-[17px] w-[17px]`
const HeaderMenuShare = tw.div`inline-block pl-2 text-right`
const HeaderLinkContainer = tw.div`flex justify-center w-full`
const Headerlinkwrapper = tw.div`flex justify-end  w-[1030px] `
const Headerlinks = tw.div`flex justify-between w-[94px] h-[64px]  shadow-md`
const LinkImg = tw.img`w-[24px] h-[24px] left-[5px] mx-[11px] my-[20px]`

export default Header
