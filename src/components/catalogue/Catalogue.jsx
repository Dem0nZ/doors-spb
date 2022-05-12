import React from 'react'
import { useState } from 'react'
import arrows_left from '../../assets/slider/arrow_left.png'
import arrows_right from '../../assets/slider/arrow_right.png'
import SlideRoutes from 'react-slide-routes'
import { Route, NavLink } from 'react-router-dom'
import Screen_1 from './screnns/Screen_1'
import Screen_2 from './screnns/Screen_2'
import Screen_3 from './screnns/Screen_3'
import Screen_4 from './screnns/Screen_4'
import tw from 'twin.macro';



const Catalogue = () => {
  const [number, setNumber] = useState(0)

  const screens = ['/screen_1', '/screen_2', '/screen_3', '/screen_4']

  function counter(value) {
    if (value) {
      if (number === screens.length - 1) {
        setNumber(0)
      } else {
        setNumber(number + 1)
      }
    } else {
      if (number === 0) {
        setNumber(screens.length - 1)
      } else {
        setNumber(number - 1)
      }
    }
  }

  return (
    <CatalogueWrapper>
      <CatalogueUpperBlock>
        <CatalogueTitle>
          КАТАЛОГ
        </CatalogueTitle>
        <CatalogueBody>
          <CatalogueNav>
            <CatalogueBodyRow>
              <NavLink to='/' end>
                ДВЕРИ ТАКИЕ
              </NavLink>
              <NavLink to='/screen_2'>
                ДВЕРИ СЯКИЕ
              </NavLink>
              <NavLink to='/screen_3'>
                ПЕРЕГОРОДКИ ТАКИЕ
              </NavLink>
              <NavLink to='/screen_4'>
                ПЕРЕГОРОДКИ СЯКИЕ
              </NavLink>
              <NavLink to='/screen_1'>
                ПЕРЕГОРОДКИ СЯКИЕ
              </NavLink>

              <NavLink to='/' end>
                ДВЕРИ ТАКИЕ
              </NavLink>
              <NavLink to='/screen_2'>
                ДВЕРИ СЯКИЕ
              </NavLink>
              <NavLink to='/screen_3'>
                ПЕРЕГОРОДКИ ТАКИЕ
              </NavLink>
              <NavLink to='/screen_4'>
                ПЕРЕГОРОДКИ СЯКИЕ
              </NavLink>
            </CatalogueBodyRow>
          </CatalogueNav  >
        </CatalogueBody>
        <CatalogueBtn>
          РАСЧИТАТЬ СТОИМОСТЬ
        </CatalogueBtn>
      </CatalogueUpperBlock>

      <SliderWrapper>

        <SliderBody>
          <SliderSeparator />
          {/* <div className={classes.slider__sliderrouter}>

            <SlideRoutes>
              <Route path='/' element={<Screen_1 />} />
              <Route path='/screen_1' element={<Screen_1 />} />
              <Route path='/screen_2' element={<Screen_2 />} />
              <Route path='/screen_3' element={<Screen_3 />} />
              <Route path='/screen_4' element={<Screen_4 />} />
            </SlideRoutes>
          </div> */}

          <SliderSeparator />
          <SliderButtons>

            <SliderNawDown>
              {/* <NavLink to={screens[number]} onClick={() => counter(false)}>

                <div className={classes.slider__buttons_left}>
                  <img src={arrows_left} alt='img' />

                </div>
              </NavLink>
              <NavLink to={screens[number]} onClick={() => counter(true)}>

                <div className={classes.slider__buttons_right}>
                  <img src={arrows_right} alt='img' />

                </div>
              </NavLink> */}
            </SliderNawDown>

          </SliderButtons>
        </SliderBody>
      </SliderWrapper>

    </CatalogueWrapper>
  

  )
}

const CatalogueWrapper = tw.div`flex flex-col justify-center w-full mt-[25px]`
const CatalogueUpperBlock = tw.div`flex flex-col`
const CatalogueTitle = tw.div`flex text-6xl font-medium`
const CatalogueBody = tw.div`flex flex-col  mt-[70px]  text-base `
const CatalogueBodyRow = tw.div`flex flex-row flex-wrap gap-4 pr-36 mb-[26px]`
const CatalogueBtn = tw.button`w-[400px] h-[60px] border`
const CatalogueNav = tw.nav`flex flex-col`
const SliderBody = tw.div`flex flex-col w-full`
const SliderSeparator = tw.div`flex w-full h-px bg-black`
const SliderButtons = tw.div`flex justify-center w-full mt-16`
const SliderNawDown = tw.nav`flex w-44`


const SliderWrapper = tw.div`flex w-full mt-36`

export default Catalogue
