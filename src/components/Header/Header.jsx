import React from 'react';
import tw, { styled } from 'twin.macro';
import { NavLink, useNavigate } from 'react-router-dom';
import Scroll, { Link } from 'react-scroll';
import { Logo } from '../../assets';


let scroller = Scroll.scroller;

const Header = () => {
  const navigate = useNavigate();

  return (
      <BodyContainer>
        <Body>
          <NavLink className='hover:text-gray-500 pr-8' to='/' end>
            <Logo />
          </NavLink>
          <Menu>
            <Link className='py-2 px-1 cursor-pointer hover:bg-gray-100' to='catalogue' spy={true} smooth={true} duration={500}>
              КАТАЛОГ
            </Link>
            <StyledNav to='/gallery'>
              НАШИ РАБОТЫ
            </StyledNav>
            <StyledNav to='/contacts'>
              КОНТАКТЫ
            </StyledNav>
            <StyledNav to='/calculate'>
              РАСЧИТАТЬ СТОИМОСТЬ
            </StyledNav>
          </Menu>
        </Body>
      </BodyContainer>
  );
};

const StyledNav = styled(NavLink)`
  ${tw`py-2 px-1 hover:bg-gray-100`}
  &.active {
    ${tw`underline`}
  }
`;

const Wrapper = tw.div`flex flex-col justify-center`;
const BodyContainer = tw.div`flex justify-center w-screen border-b border-black`;
const Body = tw.div`flex justify-between items-center max-w-[1200px]`;
const Menu = tw.div`relative flex justify-start gap-4 w-full text-xs text-base`;

export default Header;
