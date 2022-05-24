import React from 'react'
import inst from '../../assets/inst_1.png'
import fcb from '../../assets/fcb_1.png'
import tw from 'twin.macro';

const PreFooter = (props) => {
    return (
        <PrefooterWrapper>
            <div>
                <PrefooterText>
                    КАК ЕЩЕ МОЖНО РАЗГРАНИЧИТ МОЕ ПРОСТРАНСТВО?
                </PrefooterText>
                <PrefooterIcons>
                    <PrefooterImg src={inst} alt="img" />
                    <PrefooterImg src={fcb} alt="img" />
                    <PrefooterImg src={inst} alt="img" />
                    <PrefooterImg src={fcb} alt="img" />
                </PrefooterIcons>
            </div>
        </PrefooterWrapper>
    )
}

const PrefooterWrapper = tw.div`flex justify-end w-full h-[360px] mt-[150px]`
const PrefooterText = tw.div`flex  w-[600px] text-5xl leading-tight`
const PrefooterIcons = tw.div`flex justify-between w-[300px]`
const PrefooterImg = tw.img`inline-block w-[48px] h-[48px] mt-[130px]`

export default PreFooter