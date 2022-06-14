import React from 'react';
import tw, { styled } from 'twin.macro';
import { NavLink } from 'react-router-dom';
import { Logo } from '../../assets';

const Header = () => {

  return (
    <Wrapper>
      <Container>
        <NavLink className='hover:text-gray-300 pr-6' to='/' end>
          <Logo className='h-20' />
        </NavLink>
        <SiteMenu>
          <StyledNav to='/' end>
            КАТАЛОГ
          </StyledNav>
          <StyledNav to='/gallery'>
            НАШИ РАБОТЫ
          </StyledNav>
          <StyledNav to='/contacts'>
            КОНТАКТЫ
          </StyledNav>
          {/*<StyledNav to='/calculate'>*/}
          {/*  РАСЧИТАТЬ СТОИМОСТЬ*/}
          {/*</StyledNav>*/}
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

const Wrapper = tw.div`flex bg-white justify-center pt-4 w-screen border-b border-black`;
const Container = tw.div`flex max-w-[1000px] justify-between items-end w-full sm:flex-col sm:items-center`;
const SiteMenu = tw.div`flex`;

export default Header;
