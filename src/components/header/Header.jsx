import React from 'react'
import classes from './Header.module.css'
import logo from '../images/logo.png'
import linc from '../images/linc.png'

const Header = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.logo}>
                <div><img src={logo} alt="img" />  </div>
                <div className={classes.logo__separator}></div>
                <div className={classes.logo__name}>
                    your<br />
                    door
                </div>

            </div>
            <ul className={classes.menu}>
                <li>
                   <a href="#">КАТАЛОГ</a> 
                </li>
                <li>
                        <a href="#">КОНТАКТЫ</a>
                </li>
                <li>
                    <a href="#">РАСЧИТАТЬ СТОИМОСТЬ</a>
                </li>
                <li>
                    <img src={linc} alt="img" />
                   <a href="#">ПОДЕЛИТЬСЯ</a> 
                </li>
            </ul>
        </div>
    )
}

export default Header