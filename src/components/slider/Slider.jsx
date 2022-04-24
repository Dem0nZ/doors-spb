import React from 'react'
import classes from './Slider.module.css'
import arrows from '../../images/slider/arrows.svg'
import img1 from '../../images/slider/img1.svg'
import img2 from '../../images/slider/img2.svg'
import img3 from '../../images/slider/img3.svg'
import img4 from '../../images/slider/img4.svg'
import img5 from '../../images/slider/img5.svg'
import img6 from '../../images/slider/img6.svg'
import img7 from '../../images/slider/img7.svg'

const Slider = (props) => {
    return (
        <div className={classes.slider__wrapper}>
            <div className={classes.slider__body}>
                <div className={classes.slider__separator}></div>
                <div className={classes.slider__title}>
                    ДВЕРИ ТАКИЕ
                </div>
                <div className={classes.slider__imgBlock}>

                    <div className={classes.slider__row1} >
                        <img className={classes.slider__img1} src={img1} alt="img" />
                    </div>

                    <div className={classes.slider__row2}>
                        <div>
                            <div className={classes.slider__img2}>
                            <img className={classes.slider__img2} src={img2} alt="img" />
                            </div>
                            <div className={classes.slider__img3}>
                            <img className={classes.slider__img3} src={img3} alt="img" />
                            </div>
                            
                        </div>
                        <div>
                            <img className={classes.slider__img4} src={img4} alt="img" />
                        </div>
                    </div>

                    <div className={classes.slider__row3}>
                            <img className={classes.slider__img5} src={img5} alt="img" />
                        <div className={classes.slider__row3_block2}>
                            <div className={classes.slider__row3__text}>
                                Идеальный вариант для жизни.
                                Идеальный вариант для жизни.
                                Идеальный вариант для жизни.
                                Идеальный вариант для жизни.
                                Идеальный вариант для жизни.
                                Идеальный вариант для жизни.
                                Идеальный вариант для жизни.
                            </div>
                            <div>
                                <img className={classes.slider__img6} src={img6} alt="img" />
                            </div>
                        </div>
                    </div>
                    <div className={classes.slider__row4}>
                        <div>
                            <ul>
                                <li>Изготовлен из одного  20Ft контейнера площадью 15 кв.м;</li>
                                <li>Сделаны на супер производстве</li>
                                <li>Куча крутых технологий</li>
                                <li>Есть все и немного больше</li>
                                <li>и еще</li>
                                <li>И много фактов об этих перегородках</li>
                                <li>Куча крутых технологий</li>
                                <li>Есть все и немного больше</li>
                                <li>и еще</li>
                                <li>И много фактов об этих перегородках</li>
                            </ul>
                            <div>
                                <button>
                                    РАСЧИТАТЬ СТОИМОСТЬ
                                </button>
                            </div>
                        </div>
                        <div>
                            <img className={classes.slider__img7} src={img7} alt="img" />
                        </div>
                    </div>

                </div>
                <div className={classes.slider__separator_down}></div>
                <div className={classes.slider__button}>
                    <img src={arrows} alt="img" />
                </div>
            </div>

        </div>
    )
}

export default Slider