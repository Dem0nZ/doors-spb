import React from 'react'
import classes from './Calculator.module.css'

const Calculator = (props) => {
    return (
        <div className={classes.calculator__wrapper}>
            <div className={classes.calculator__title}>
                РАСЧИТАТЬ СТОИМОСТЬ
            </div>
            <div className={classes.calculator__descriprion}>
                Тут разный текст Тут разный текст Тут
                разный текст Тут разный текст Тут
                разный текст Тут разный текст Тут
                разный текст Тут разный текст Тут
                разный текст Тут разный текст Тут ра
            </div>
            <button className={classes.calculator__btnCalc}>
            РАСЧИТАТЬ СТОИМОСТЬ
            </button>

        </div>
    )
}

export default Calculator