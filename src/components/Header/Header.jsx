import React from 'react';
import tw, { styled } from 'twin.macro';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { Logo } from '../../assets';

const Header = () => {

  return (
      <BodyContainer>
        <Body>
          <NavLink className='hover:text-gray-300 pr-8' to='/' end>
            <Logo />
          </NavLink>
          <Menu>
            <Link className='py-2 px-1 cursor-pointer hover:bg-gray-300 border-t-2 border-white' to='catalogue' spy={true} smooth={true} duration={500}>
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
  ${tw`py-2 px-1 hover:bg-gray-300 border-t-2 border-white`}
  &.active {
    ${tw`text-gray-500 border-gray-500`}
  }
`;

const BodyContainer = tw.div`flex justify-center pt-4 w-screen border-b border-black`;
const Body = tw.div`flex justify-between items-center`;
const Menu = tw.div`flex gap-4 w-full`;

export default Header;
