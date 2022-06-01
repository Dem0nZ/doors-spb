import React, { Component } from 'react'
import tw from 'twin.macro';
import Catalogue from '../Catalogue/Catalogue'
import InfoBlock from '../Infoblock/InfoBlock'
import Intro from '../Intro/Intro'
import PreFooter from '../Prefooter/PreFooter'
import Calculator from '../Calculator/Calculator'

const Body = () => {
    return (
        <Wrapper>
            <Intro />
            <InfoBlock />
            <Calculator />
            <Catalogue />
            <PreFooter />
        </Wrapper>
    )
}

const Wrapper = tw.div`flex flex-col justify-center max-w-[1000px]`


export default Body