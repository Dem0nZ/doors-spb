import React from 'react'
import logo from '../../assets/logo.png'
import linc from '../../assets/linc.png'
import fcb_1 from '../../assets/fcb_1.png'
import inst_1 from '../../assets/inst_1.png'
import tw from 'twin.macro';

const Header = () => {
  return (
    <Wrapper>
      <BodyContainer>
        <Body>
          <Logo>
            <LogoImage src={logo}/>
            <LogoName>
              your<br/>
              door
            </LogoName>
          </Logo>
          <Menu>
            <div className='bg-red-700'>КАТАЛОГ</div>
            <div>КОНТАКТЫ</div>
            <div>РАСЧИТАТЬ СТОИМОСТЬ</div>
            <Share><ShareIcon src={linc}/>ПОДЕЛИТЬСЯ</Share>
            <ShareLinks>
              <LinkImg src={inst_1} alt='img'/>
              <LinkImg src={fcb_1} alt='img'/>
            </ShareLinks>
          </Menu>
        </Body>
      </BodyContainer>
    </Wrapper>
  )
}

const Wrapper = tw.div`flex flex-col justify-center`
const BodyContainer = tw.div`flex justify-center w-screen border-b border-black`
const Body = tw.div`flex justify-between items-center w-[1200px] h-14`
const Logo = tw.div`flex justify-between max-w-[100px] min-w-[70px]`
const LogoImage = tw.img`h-6 w-6`
const LogoName = tw.div`border-l-2 border-current pl-2 text-right text-xs`
const Menu = tw.div`relative pl-4 flex justify-start gap-4 w-full text-xs  md:text-base`
const Share = tw.div`flex flex-grow justify-end`
const ShareIcon = tw.img`h-4 w-4`
const ShareLinks = tw.div`absolute top-11 right-20 bg-white p-4 flex gap-2 shadow-md`
const LinkImg = tw.img`w-[24px] h-[24px] mx-[11px]`

export default Header
