import React from 'react'
import classes from './Header.module.css'
import logo from '../../assets/logo.png'
import linc from '../../assets/linc.png'
import fcb_1 from '../../assets/fcb_1.png'
import inst_1 from '../../assets/inst_1.png'
import tw from 'twin.macro';


const Header = (props) => {
    return (
        <Test >
            d
            {/*<HeaderBody>*/}
            {/*    <HeaderLogo>*/}
            {/*        <LogoImage src={logo} />*/}
            {/*        <LogoSeparator></LogoSeparator>*/}
            {/*        <LogoName>*/}
            {/*            your<br />*/}
            {/*            door*/}
            {/*        </LogoName>*/}
            {/*    </HeaderLogo>*/}
            {/*    <HeaderMenu>*/}
            {/*        <HeaderMenuLi>*/}
            {/*            <HeaderMenuCatalogue href="#">КАТАЛОГ</HeaderMenuCatalogue>*/}
            {/*        </HeaderMenuLi>*/}
            {/*        <HeaderMenuLi>*/}
            {/*            <HeaderMenuContakts href="#">КОНТАКТЫ</HeaderMenuContakts>*/}
            {/*        </HeaderMenuLi>*/}
            {/*        <HeaderMenuLi>*/}
            {/*            <HeaderMenuCalculator href="#">РАСЧИТАТЬ СТОИМОСТЬ</HeaderMenuCalculator>*/}
            {/*        </HeaderMenuLi>*/}
            {/*        <HeaderMenuLi>*/}
            {/*            <HeaderMenuLink src={linc} />*/}
            {/*        </HeaderMenuLi>*/}
            {/*        <HeaderMenuLi>*/}
            {/*            <HeaderMenuShare href="#">ПОДЕЛИТЬСЯ</HeaderMenuShare>*/}
            {/*        </HeaderMenuLi>*/}
            {/*    </HeaderMenu>*/}
            {/*</HeaderBody>*/}
            {/*<HeaderSeparator />*/}
            {/*<Headerlinkwrapper>*/}
            {/*    <Headerlinks>*/}
            {/*        <LinkImg src={inst_1} alt="img" />*/}
            {/*        <LinkImg src={fcb_1} alt="img" />*/}
            {/*    </Headerlinks>*/}

            {/*</Headerlinkwrapper>*/}
        </Test>
    )
}
const Test = tw.header`bg-red-500 h-40`;
const HeaderBody = tw.div`flex justify-between items-center h-[56px]`
const HeaderLogo = tw.div`flex justify-between max-w-[100px] min-w-[70px]`
const LogoImage = tw.img`h-[24px] w-[24px]`
const LogoSeparator = tw.div`inline-block bg-current w-[1px] h-[30px]`
const LogoName = tw.div`text-right text-xs`
const HeaderMenu = tw.ul`flex w-full`
const HeaderMenuLi = tw.li`inline-block`
const HeaderMenuCatalogue = tw.div`  text-right w-[175px]`
const HeaderMenuContakts = tw.div` text-right w-[100px]`
const HeaderMenuCalculator = tw.div`text-center w-[700px]`
const HeaderMenuLink = tw.img`inline-block h-[17px] w-[17px]`
const HeaderMenuShare = tw.div`text-right w-[110px]`
const HeaderSeparator = tw.div`w-full min-w-[1200px] h-[1px] bg-black mx-auto`
const Headerlinkwrapper = tw.div`flex justify-end mx-auto w-[1000px] `
const Headerlinks = tw.div`flex justify-between w-[94px] h-[64px]  shadow-md`
const LinkImg = tw.img`w-[24px] h-[24px] left-[5px] mx-[11px] my-[20px]`

export default Header
