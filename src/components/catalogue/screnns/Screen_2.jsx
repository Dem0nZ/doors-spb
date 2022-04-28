import React from 'react'
import classes from './Screen_2.module.css'
import img1 from '../../../assets/slider/img1.svg'
import img2 from '../../../assets/slider/img2.svg'
import img3 from '../../../assets/slider/img3.svg'
import img4 from '../../../assets/slider/img4.svg'
import img5 from '../../../assets/slider/img5.svg'
import img6 from '../../../assets/slider/img6.svg'
import img7 from '../../../assets/slider/img7.svg'

const Screen_2 = (props) => {
    return (
        <div className={classes.screen2__wrapper}>

            <div className={classes.screen2__title}>
                ДВЕРИ СЯКИЕ
            </div>
            <div className={classes.screen2__imgBlock}>

                <div className={classes.screen2__row1} >
                    <img className={classes.screen2__img1} src={img1} alt="img" />
                </div>

                <div className={classes.screen2__row2}>
                    <div>
                        <div className={classes.screen2__img2}>
                            <img className={classes.screen2__img2} src={img2} alt="img" />
                        </div>
                        <div className={classes.screen2__img3}>
                            <img className={classes.screen2__img3} src={img3} alt="img" />
                        </div>

                    </div>
                    <div>
                        <img className={classes.screen2__img4} src={img4} alt="img" />
                    </div>
                </div>

                <div className={classes.screen2__row3}>
                    <img className={classes.screen2__img5} src={img5} alt="img" />
                    <div className={classes.screen2__row3_block2}>
                        <div className={classes.screen2__row3__text}>
                            Идеальный вариант для жизни.
                            Идеальный вариант для жизни.
                            Идеальный вариант для жизни.
                            Идеальный вариант для жизни.
                            Идеальный вариант для жизни.
                            Идеальный вариант для жизни.
                            Идеальный вариант для жизни.
                        </div>
                        <div>
                            <img className={classes.screen2__img6} src={img6} alt="img" />
                        </div>
                    </div>
                </div>
                <div className={classes.screen2__row4}>
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
                        <img className={classes.screen2__img7} src={img7} alt="img" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Screen_2
