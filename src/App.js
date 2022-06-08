import React, { Component } from 'react';
import tw from 'twin.macro';
import { Routes, Route } from 'react-router-dom';
import { Calculator, Contacts, Gallery, HomePage } from './pages';
import { Footer, Header } from './components';


const App = () => {
    return (
      <AppContainer>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='calculate' element={<Calculator />} />
          <Route path='contacts' element={<Contacts />} />
        </Routes>
        <Footer />
      </AppContainer>
    );
}

const AppContainer = tw.div`flex flex-col items-center w-full`;

export default App;
