import React from 'react'
import classes from './Slider.module.css'
import arrows from '../../images/slider/arrows.svg'
import Screen_1 from './screnns/Screen_1'

const Slider = (props) => {
    return (
        <div className={classes.slider__wrapper}>
            <div className={classes.slider__body}>
                <div className={classes.slider__separator}></div>
                <Screen_1/>
                <div className={classes.slider__separator_down}></div>
                <div className={classes.slider__button}>
                    <img src={arrows} alt="img" />
                </div>
            </div>

        </div>
    )
}

export default Slider