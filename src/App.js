import React, { Component } from 'react'
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import InfoBlock from './components/Infoblock/InfoBlock'
import Catalogue from './components/Catalogue/Catalogue'
import Footer from './components/Footer/Footer'
import Calculator from './components/Calculator/Calculator'
import PreFooter from './components/Prefooter/PreFooter'
import tw from 'twin.macro';
import Contacts from './components/Contacts/Contacts'
import { Routes, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header />
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='contacts' element={<Contacts />} />
        </Routes>
        <Footer />


      </AppContainer>
    );
  }
}

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
const AppContainer = tw.div`flex flex-col justify-between items-center w-full h-screen`

export default App;
