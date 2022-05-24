import React, { Component } from 'react'
import tw from 'twin.macro';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery'
import Body from './components/Calculator/Body'
import Calculate from './components/Calculator/Calculate';


class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header />
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='calculate' element={<Calculate />} />
        </Routes>
          <Footer />
      </AppContainer>
    );
  }
}


const AppContainer = tw.div`flex flex-col justify-between items-center w-full h-screen`

export default App;
