import React from 'react'
import classes from './Footer.module.css'
import logo from '../../images/logo_white.svg'

const Footer = (props) => {
    return (
        <div className={classes.footer__wrapper}>

            <div className={classes.footer__body}>
                <div className={classes.footer__body_column_left}>
                    <div className={classes.footer__logo}>
                        <img src={logo} alt="img" />
                        <div className={classes.footer__logo__separator}></div>
                        <div className={classes.footer__logo__name}>
                            your<br />
                            door
                        </div>
                    </div>
                    <div className={classes.footer__body_column1__text}>
                        Наша команда берет на себя все: от разработки идеи
                        и до реализации. Функциональность и традиции — это
                        то, что мы внедряем в каждый наш проект.
                    </div>
                </div>
                <div className={classes.footer__body_column}>
                    <div className={classes.footer__body_column_title}>
                        <dix className={classes.footer__body__line}></dix>
                        <dix>
                            ЗВОНИТЕ
                        </dix>
                    </div>
                    <div className={classes.footer__body__column_text}>
                    <a href="tel:RU74993227009">RU +7 499 3227009</a>
                    <a href="tel:RU74993227009">RU +7 499 3227009</a>
                    </div>

                    
                </div>
                <div className={classes.footer__body_column}>
                <div className={classes.footer__body_column_title}>
                    <dix className={classes.footer__body__line}></dix>
                    <div>
                        ПИШИТЕ
                    </div>
                    </div>
                    <div className={classes.footer__body__column_text}>
                    <a href="#">info@wowowow.com</a>
                    </div>
                </div>
                <div className={classes.footer__body_column}>
                <div className={classes.footer__body_column_title}>
                    <dix className={classes.footer__body__line}></dix>
                    <div>
                        ПРИЕЗЖАЙТЕ
                    </div>
                    </div>
                    <div className={classes.footer__body__column_text}>
                        Санкт-Петербург<br />
                        какой-то адрес<br />
                        какаято улица и дом
                    </div>

                </div>
            </div>
            <div className={classes.footer__separator}></div>
            <div className={classes.footer__footer}>
                <div className={classes.footer__copyright}>
                    © your doors. all rights reserved
                </div>
                <div className={classes.footer__rules}>
                    ПРАВИЛА ИСПОЛЬЗОВАНИЯ
                </div>
                <div className={classes.footer__rules}>
                    ПРАВИЛА ИСПОЛЬЗОВАНИЯ
                </div>
                <div className={classes.footer__rules}>
                    ПРАВИЛА ИСПОЛЬЗОВАНИЯ
                </div>

            </div>


        </div>
    )
}

export default Footer