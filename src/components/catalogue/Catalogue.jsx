import React from 'react'
import classes from './Catalogue.module.css'
import {useState} from 'react'
import arrows_left from '../../images/slider/arrow_left.png'
import arrows_right from '../../images/slider/arrow_right.png'
import SlideRoutes from 'react-slide-routes'
import {Route, NavLink} from 'react-router-dom'
import Screen_1 from './screnns/Screen_1'
import Screen_2 from './screnns/Screen_2'
import Screen_3 from './screnns/Screen_3'
import Screen_4 from './screnns/Screen_4'


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
    <div className={classes.catalogue__wrapper}>
      <div className={classes.catalogue__title}>
        КАТАЛОГ
      </div>
      <div className={classes.catalogue__body}>
        <nav>
          <div className={classes.catalogue__body__row}>
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
          </div>
          <div className={classes.catalogue__body__row}>
            <NavLink to='/' end>
              ДВЕРИ ТАКИЕs
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
          </div>
        </nav>
      </div>
      <button className={classes.catalogue__btnCalc}>
        РАСЧИТАТЬ СТОИМОСТЬ
      </button>
      <div className={classes.slider__wrapper}>

        <div className={classes.slider__body}>
          <div className={classes.slider__separator}></div>

          <div className={classes.slider__sliderrouter}>

            <SlideRoutes>
              <Route path='/' element={<Screen_1/>}/>
              <Route path='/screen_1' element={<Screen_1/>}/>
              <Route path='/screen_2' element={<Screen_2/>}/>
              <Route path='/screen_3' element={<Screen_3/>}/>
              <Route path='/screen_4' element={<Screen_4/>}/>
            </SlideRoutes>
          </div>

          <div className={classes.slider__separator_down}></div>
          <div className={classes.slider__buttons}>
            <nav>
              <NavLink to={screens[number]} onClick={() => counter(false)}>
                <div className={classes.slider__buttons_left}>
                  <img src={arrows_left} alt='img'/>

                </div>
              </NavLink>
              <NavLink to={screens[number]} onClick={() => counter(true)}>
                <div className={classes.slider__buttons_right}>
                  <img src={arrows_right} alt='img'/>

                </div>
              </NavLink>
            </nav>

          </div>
        </div>
      </div>

    </div>


  )
}

export default Catalogue
