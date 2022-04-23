import React from 'react'
import classes from './InfoBlock.module.css'
import arrowdown from '../../images/infoBlock/arrowDown.svg'
import bed from '../../images/infoBlock/bed.svg'
import home from '../../images/infoBlock/home.svg'
import pc from '../../images/infoBlock/pc.svg'
import fabric from '../../images/infoBlock/fabric.svg'
import hoot from '../../images/infoBlock/hoot.svg'
import say from '../../images/infoBlock/say.svg'

const InfoBlock = (props) => {
    return (
        <div className={classes.infoBlock__wrapper}>
            <div className={classes.infoBlock__title}>
                КАК ВЫ МОЖЕТЕ <br/>
                ИХ ИСПОЛЬЗОВАТЬ
            </div>
            <div className={classes.infoBlock__body}>
                <div className={classes.infoBlock__rowEl}>
                    <div className={classes.infoBlock__rowEl__item}>
                        <img src={arrowdown} alt="img" />
                        <div>
                        Дополнительное место для дополнительных опций
                        </div>
                    </div>
                    <div className={classes.infoBlock__rowEl__item}>
                        <img src={arrowdown} alt="img" />
                        <div>
                        Доход от аренды для мгновенного возврата вложений
                        </div>
                    </div>
                </div>
                <div className={classes.infoBlock__rowEl}>
                    <div className={classes.infoBlock__rowEl__item + ' ' +classes.infoBlock__smalltext}>
                        <img src={bed} alt="img" />
                        <div>
                        Приглашайте друзей без лишних хлопот
                        </div>
                    </div>
                    <div className={classes.infoBlock__rowEl__item + ' ' +classes.infoBlock__smalltext}>
                        <img src={home} alt="img" />
                        <div>
                        Сдавайте в аренду помещения для бизнеса
                        </div>
                    </div>

                </div>
                <div className={classes.infoBlock__rowEl}>
                    <div className={classes.infoBlock__rowEl__item + ' ' +classes.infoBlock__smalltext}>
                        <img src={pc} alt="img" />
                        <div>
                        Работайте, творите или тренируйтесь дома
                        </div>
                    </div>
                    <div className={classes.infoBlock__rowEl__item + ' ' +classes.infoBlock__smalltext}>
                        <img src={fabric} alt="img" />
                        <div>
                        Создайте свое пространство в вашем доме.
                        </div>
                    </div>

                </div>
                <div className={classes.infoBlock__rowEl}>
                    <div className={classes.infoBlock__rowEl__item + ' ' +classes.infoBlock__smalltext}>
                        <img src={hoot} alt="img" />
                        <div>
                        Место для жизни после окончания учебы.
                        </div>
                    </div>
                    <div className={classes.infoBlock__rowEl__item + ' ' +classes.infoBlock__smalltext}>
                        <img src={say} alt="img" />
                        <div>
                        Свяжитесь с нами, чтобы получить индивидуальную смету аренды для вашего региона
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default InfoBlock