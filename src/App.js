import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Intro from './components/Intro'
import InfoBlock from './components/InfoBlock'
import Catalogue from './components/Catalogue'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
        <InfoBlock />
        <Catalogue />
        <Gallery/>
        <Footer/>
      </div>
    );
  }
}

export default App;
