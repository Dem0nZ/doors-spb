import React from 'react';
import tw, { styled } from 'twin.macro';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { Logo } from '../../assets';

const Header = () => {

  return (
    <Wrapper>
      <Container>
        <NavLink className='hover:text-gray-300 pr-6' to='/' end>
          <Logo className='h-20' />
        </NavLink>
        <SiteMenu>
          <Link className='pt-2 pb-4 px-2 cursor-pointer hover:bg-gray-300' to='catalogue' spy={true} smooth={true}
                duration={500}>
            КАТАЛОГ
          </Link>
          <StyledNav to='/gallery'>
            НАШИ РАБОТЫ
          </StyledNav>
          <StyledNav to='/contacts'>
            КОНТАКТЫ
          </StyledNav>
          <StyledNav to='#'>
            РАСЧИТАТЬ СТОИМОСТЬ
          </StyledNav>
        </SiteMenu>
      </Container>
    </Wrapper>
  );
};

const StyledNav = styled(NavLink)`
  ${tw`pt-2 pb-4 px-2 hover:bg-gray-300`}
  &.active {
    ${tw`text-white bg-gray-500`}
  }`;

const Wrapper = tw.div`flex justify-center pt-4 w-screen border-b border-black`;
const Container = tw.div`flex max-w-[1000px] justify-between items-end w-full`;
const SiteMenu = tw.div`flex`;

export default Header;
