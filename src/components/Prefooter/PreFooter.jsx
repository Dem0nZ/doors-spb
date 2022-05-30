import React from 'react'
import inst from '../../assets/inst_1.svg'
import fcb from '../../assets/fcb_1.svg'
import tw from 'twin.macro'
import { Link } from 'react-router-dom'

const PreFooter = (props) => {
    return (
        <PrefooterWrapper>
            <div>
                <PrefooterText>
                    КАК ЕЩЕ МОЖНО РАЗГРАНИЧИТ МОЕ ПРОСТРАНСТВО?
                </PrefooterText>
                <PrefooterIcons>
                    <Link to='#'><PrefooterImg src={inst} alt="img" /></Link>
                    <Link to='#'><PrefooterImg src={fcb} alt="img" /></Link>
                </PrefooterIcons>
            </div>
        </PrefooterWrapper>
    )
}

const PrefooterWrapper = tw.div`flex justify-end w-full h-[360px] mt-[150px]`
const PrefooterText = tw.div`flex  w-[600px] text-5xl leading-tight`
const PrefooterIcons = tw.div`flex justify-center gap-10`
const PrefooterImg = tw.img`inline-block w-[48px] h-[48px] mt-[130px]`

export default PreFooter