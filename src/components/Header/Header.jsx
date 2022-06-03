import React from 'react';
import logo from '../../assets/logo.svg';
import linc from '../../assets/link.svg';
import fcb_1 from '../../assets/fcb_1.svg';
import inst_1 from '../../assets/inst_1.svg';
import tw, { styled } from 'twin.macro';
import { NavLink, useNavigate, useMatch } from 'react-router-dom';
import Scroll, { Link } from 'react-scroll';


let scroller = Scroll.scroller;

const Header = () => {
  const match = useMatch('/');

  const navigate = useNavigate();

  function goTo() {
    navigate('/');
    setTimeout(() => scroller.scrollTo('catalogue'), 100);
  }

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
            <NavLinkDiv>
              {match ? <Link className='cursor-pointer' to='catalogue' spy={true} smooth={true} duration={500}>
                  КАТАЛОГ
                </Link> :
                <button onClick={() => goTo()}>КАТАЛОГ</button>
              }
            </NavLinkDiv>
            <StyledNav to='/gallery'>
              НАШИ РАБОТЫ
            </StyledNav>
            <StyledNav to='/contacts'>
              КОНТАКТЫ
            </StyledNav>
            <StyledNav to='/calculate'>
              РАСЧИТАТЬ СТОИМОСТЬ
            </StyledNav>

            <Link to='#' className='flex flex-grow'>
              <Share className='cursor-pointer'>
                <ShareIcon src={linc} />
                <NavLinkDiv>
                  ПОДЕЛИТЬСЯ
                </NavLinkDiv>
              </Share>
            </Link>
            <ShareLinks>
              <Link to='#'>
                <LinkImg className='hover:pb-[1px] cursor-pointer' src={inst_1} alt='img' />
              </Link>
              <Link to='#'>
                <LinkImg className='hover:pb-[1px] cursor-pointer' src={fcb_1} alt='img' />
              </Link>
            </ShareLinks>
          </Menu>
        </Body>
      </BodyContainer>
    </Wrapper>
  );
};

const NavLinkDiv = styled.div(({ isActive }) => [
  tw`py-2 px-1 hover:bg-gray-100`,
  isActive && tw`underline`,
]);
const StyledNav = styled(NavLink)`
  ${tw`py-2 px-1 hover:bg-gray-100`}
  &.active {
    ${tw`underline`}
  }
`

const Wrapper = tw.div`flex flex-col justify-center`;
const BodyContainer = tw.div`flex justify-center w-screen border-b border-black`;
const Body = tw.div`flex justify-between items-center w-[1200px] h-14`;
const Logo = tw.div`flex justify-between max-w-[100px] min-w-[70px]`;
const LogoImage = tw.img`h-6 w-6 mt-1`;
const LogoName = tw.div`border-l-2 border-current pl-2 text-right text-xs`;
const Menu = tw.div`relative pl-4 flex justify-start gap-4 w-full text-xs  md:text-base`;
const Share = tw.div`flex flex-grow justify-end`;
const ShareIcon = tw.img`h-4 w-4 mt-[3px ] mr-1`;
const ShareLinks = tw.div`absolute top-11 right-20 bg-white p-4 flex gap-2 shadow-md`;
const LinkImg = tw.img`w-[24px] h-[24px] mx-[11px]`;

export default Header;
