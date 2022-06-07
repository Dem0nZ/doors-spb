import React  from 'react'
import tw from 'twin.macro';
import Catalog from '../Catalog/Catalog'
import InfoBlock from './local-components/InfoBlock'
import Intro from './local-components/Intro'
import PreFooter from './local-components/PreFooter'
import CalculatorBlock from './local-components/CalculatorBlock'

const HomePage = () => {
    return (
        <Wrapper>
            <Intro />
            <InfoBlock />
            <CalculatorBlock />
            <Catalog />
            <PreFooter />
        </Wrapper>
    )
}

const Wrapper = tw.div`flex flex-col max-w-[1000px]`


export default HomePage
