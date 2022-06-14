import React from 'react';
import tw from 'twin.macro';
import { Routes, Route } from 'react-router-dom';
import { Calculator, Contacts, Gallery, HomePage } from './pages';
import { Footer, Header } from './components';
import axios from 'axios';

const App = () => {

  const [contacts, setContacts] = React.useState();
  React.useEffect(() => {
    (async () => {
      try{
        const response = await axios.get( 'http://admin.mebel-178.ru/api/contacts');
        const data = await response.data;
        setContacts(data)
      } catch (e) {
        console.log(e);
      }
    })()
  }, []);

  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='calculate' element={<Calculator />} />
        <Route path='contacts' element={<Contacts contacts={contacts}/>} />
        <Route path='*' element={<HomePage />} />
      </Routes>
      <Footer contacts={contacts}/>
    </AppContainer>
  );
};

const AppContainer = tw.div`relative flex flex-col items-center w-full`;

export default App;
