import React from 'react'
import logo from '../../assets/logo.svg'
import linc from '../../assets/linc.svg'
import fcb_1 from '../../assets/fcb_1.svg'
import inst_1 from '../../assets/inst_1.svg'
import tw from 'twin.macro';
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'

const Header = () => {

  return (
    <Wrapper>
      <BodyContainer>
        <Body>
          <NavLink to='/'>
            <Logo>
              <LogoImage src={logo} />
              <LogoName>
                your<br />
                door
              </LogoName>
            </Logo>

          </NavLink>
          <Menu>
            <div>
              <Link activeClass='active' to='catalogue' spy={true} smooth={true} duration={500}>
                КАТАЛОГ
              </Link>
            </div>
            <div>
              <NavLink to='/gallery'>
                НАШИ РАБОТЫ
              </NavLink>
            </div>
            <div>
              <Link Link activeClass='active' to='contacts' spy={true} smooth={true} duration={500}>
                КОНТАКТЫ
              </Link>
            </div>
            <div >РАСЧИТАТЬ СТОИМОСТЬ</div>
            <Link href='#' className='flex flex-grow'>
              <Share>
                <ShareIcon src={linc} />
                ПОДЕЛИТЬСЯ
              </Share>
            </Link>
            <ShareLinks>
              <Link href='#'>
                <LinkImg src={inst_1} alt='img' />
              </Link>
              <Link href='#'>
                <LinkImg src={fcb_1} alt='img' />
              </Link >
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
const LogoImage = tw.img`h-6 w-6 mt-1`
const LogoName = tw.div`border-l-2 border-current pl-2 text-right text-xs`
const Menu = tw.div`relative pl-4 flex justify-start gap-4 w-full text-xs  md:text-base`
const Share = tw.div`flex flex-grow justify-end`
const ShareIcon = tw.img`h-4 w-4 mt-[3px ] mr-1`
const ShareLinks = tw.div`absolute top-11 right-20 bg-white p-4 flex gap-2 shadow-md`
const LinkImg = tw.img`w-[24px] h-[24px] mx-[11px]`

export default Header
