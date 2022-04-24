import React from 'react'
import classes from './Catalogue.module.css'

const Catalogue = (props) => {
    return (
        <div className={classes.catalogue__wrapper}>
            <div className={classes.catalogue__title}>
                КАТАЛОГ
            </div>
            <div className={classes.catalogue__body}>
                <div className={classes.catalogue__body__row}>
                    <a href="">
                        ДВЕРИ ТАКИЕ
                    </a>
                    <a href="">
                        ДВЕРИ СЯКИЕ
                    </a>
                    <a href="">
                        ПЕРЕГОРОДКИ ТАКИЕ
                    </a>
                    <a href="">
                        ПЕРЕГОРОДКИ СЯКИЕ
                    </a>
                    <a href="">
                        ПЕРЕГОРОДКИ СЯКИЕ
                    </a>
                </div>
                <div className={classes.catalogue__body__row}>
                    <a href="">
                        ДВЕРИ ТАКИЕ
                    </a>
                    <a href="">
                        ДВЕРИ СЯКИЕ
                    </a>
                    <a href="">
                        ПЕРЕГОРОДКИ ТАКИЕ
                    </a>
                    <a href="">
                        ПЕРЕГОРОДКИ СЯКИЕ
                    </a>                    
                </div>                
            </div>
            <button className={classes.catalogue__btnCalc}>
                РАСЧИТАТЬ СТОИМОСТЬ
            </button>

        </div>
    )
}

export default Catalogue