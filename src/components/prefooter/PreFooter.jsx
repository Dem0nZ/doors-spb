import React from 'react'
import classes from './PreFooter.module.css'
import inst from '../../assets/inst_1.png'
import fcb from '../../assets/fcb_1.png'

const PreFooter = (props) => {
    return (
        <div className={classes.prefooter__wrapper}>
            <div className={classes.prefooter__body}>
                <div className={classes.prefooter__text}>
                    КАК ЕЩЕ МОЖНО РАЗГРАНИЧИТ МОЕ ПРОСТРАНСТВО?
                </div>
                <div className={classes.prefooter__icons}>
                    <img src={inst} alt="img" />
                    <img src={fcb} alt="img" />
                    <img src={inst} alt="img" />
                    <img src={fcb} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default PreFooter
