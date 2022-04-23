import React from 'react'
import classes from './Intro.module.css'
import intro from '../../images/intro.png'

const Intro = (props) => {
    return (
        <div className={classes.intro__wrapper}>
            <div className={classes.intro__body}>
                <div className={classes.intro__header}>
                    <div className={classes.intro__title}>
                        <div className={classes.intro__title__up}>
                            КТО МЫ ТАКИЕ?
                        </div>
                        <div className={classes.intro__title__down}>
                            YOUR DOORS
                        </div>
                    </div>
                    <div className={classes.intro__title__note}>
                        Мы создаем в вашем доме комфорт, помогая разделить
                        на функциональные зоны пространства. Любые перегор
                        и самые разные двери от и до бескрайних полей. Все что
                        вам необходимо это позвонить нашему менеджеру илиы
                        сделать тот набор правил и техник что так или иначе...
                    </div>
                </div>
                <div className={classes.intro__image}>
                <img src={intro} alt="img" />

                </div>
                <div className={classes.intro__footer}>
                    В последнее время мир меняется
                    и совсем не понятно, что будет
                    дальше, поэтому мы объединяем
                    людей, которые хотят жить и
                    вести бизнес по своим правилам.
                </div>

            </div>
        </div>

    )
}

export default Intro