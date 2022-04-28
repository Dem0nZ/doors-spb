import React, { Component } from 'react'
import classes from './App.module.css'
import Header from './components/header/Header'
import Intro from './components/intro/Intro'
import InfoBlock from './components/infoblock/InfoBlock'
import Catalogue from './components/catalogue/Catalogue'
import Footer from './components/footer/Footer'
import Calculator from './components/calculator/Calculator'
import PreFooter from './components/prefooter/PreFooter'


class App extends Component {
  render() {
    return (
      <div className={classes.App}>
          <Header />
          <Intro />
          <InfoBlock />
          <Calculator />
          <Catalogue />
          <PreFooter/>
          <Footer />
      </div>
    );
  }
}

export default App;
