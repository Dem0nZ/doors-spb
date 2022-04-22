import React, { Component } from 'react'
import classes from './App.module.css'
import Header from './components/header/Header'
import Intro from './components/intro/Intro'
import InfoBlock from './components/infoblock/InfoBlock'
import Catalogue from './components/catalogue/Catalogue'
import Gallery from './components/gallery/Gallery'
import Footer from './components/footer/Footer'

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <div className={classes.wrapperApp}>
          <Header />
          <Intro />
          <InfoBlock />
          <Catalogue />
          <Gallery />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
