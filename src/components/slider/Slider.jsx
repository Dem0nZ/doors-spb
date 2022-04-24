import React from 'react'
import classes from './Slider.module.css'
import arrows from '../../images/arrows.svg'

const Slider = (props) => {
    return (
        <div className={classes.slider__wrapper}>
            <div className={classes.slider__body}>
                <div className={classes.slider__separator}></div>
                <div className={classes.slider__title}>
ДВЕРИ ТАКИЕ
                </div>
                <div className={classes.slider__separator}></div>
                <div className={classes.slider__button}>
                    <img src={arrows} alt="img" />
                </div>
            </div>

        </div>
    )
}

export default Slider