import React from 'react'
import classes from './Header.module.css'
import logo from '../../assets/logo.png'
import linc from '../../assets/linc.png'
import fcb_1 from '../../assets/fcb_1.png'
import inst_1 from '../../assets/inst_1.png'
import tw from 'twin.macro';


const Header = (props) => {
    return (
        <div>
            <HeaderBody>
                <div className={classes.header__logo}>
                    <img src={logo} alt="img" />
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
            </HeaderBody>
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

const HeaderBody = tw.div`flex justify-center mb-2 h-[56px] py-2 px-4 bg-white font-medium text-sm text-[#161616] border-b-2 border-blacked`;

export default Header
