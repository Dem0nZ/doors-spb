import React from 'react'
import inst from '../../../assets/icons/inst_1.svg'
import fcb from '../../../assets/icons/fb-icon.svg'
import tw from 'twin.macro'
import { Link } from 'react-router-dom'

const PreFooter = () => {
    return (
        <PrefooterWrapper>
            <div>
                <PrefooterText>
                    КАК ЕЩЕ МОЖНО РАЗГРАНИЧИТ МОЕ ПРОСТРАНСТВО?
                </PrefooterText>
                <PrefooterIcons>
                    <Link to='#'><PrefooterImg className='hover:pb-[2px]' src={inst} alt="img" /></Link>
                    <Link to='#'><PrefooterImg className='hover:pb-[2px]' src={fcb} alt="img" /></Link>
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
