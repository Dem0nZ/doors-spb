import React, { Component } from 'react'
import Header from './components/header/Header'
import Intro from './components/intro/Intro'
import InfoBlock from './components/infoblock/InfoBlock'
import Catalogue from './components/catalogue/Catalogue'
import Footer from './components/footer/Footer'
import Calculator from './components/calculator/Calculator'
import PreFooter from './components/prefooter/PreFooter'
import tw from 'twin.macro';


class App extends Component {
  render() {
    return (
      <AppContainer>
         <Header />

        <Wrapper>
          <Intro />
          <InfoBlock />
            <Calculator />
          <Catalogue />
          <PreFooter /> 
        </Wrapper>
        <Footer />
      </AppContainer>
    );
  }
}
const Wrapper = tw.div`flex flex-col justify-center max-w-[1000px]`
const AppContainer = tw.div`flex flex-col items-center w-full h-full`

export default App;
