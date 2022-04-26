import React from 'react'
import classes from './Header.module.css'
import logo from '../../images/logo.png'
import linc from '../../images/linc.png'
import fcb_1 from '../../images/fcb_1.png'
import inst_1 from '../../images/inst_1.png'


const Header = (props) => {
    return (
        <div className={classes.header__wrapper}>
            <div className={classes.header__body}>
                <div className={classes.header__logo}>
                    <img src={logo} alt="img" />
                    <div className={classes.header__logo__separator}></div>
                    <div className={classes.header__logo__name}>
                        your<br />
                        door
                    </div>
                </div>
                <ul className={classes.header__menu}>
                    <li>
                        <a className={classes.header__catalogue} href="#">КАТАЛОГ</a>
                    </li>
                    <li>
                        <a className={classes.header__contacts} href="#">КОНТАКТЫ</a>
                    </li>
                    <li>
                        <a className={classes.header__calculate} href="#">РАСЧИТАТЬ СТОИМОСТЬ</a>
                    </li>

                    <li>
                        <a className={classes.header__share} href="#">ПОДЕЛИТЬСЯ</a>
                    </li>
                </ul>
            </div>
            <div className={classes.header__separator} />
            <div className={classes.header__wrapper__links}>
                <div className={classes.header__links}>
                    <img className={classes.header__inst_1} src={inst_1} alt="img" />

                    <img className={classes.header__fcb_1} src={fcb_1} alt="img" />
                </div>

            </div>

        </div>
    )
}

export default Header