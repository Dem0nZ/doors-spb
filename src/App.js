import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatedRoutes, Footer, Header, SocialBlock } from './components';

const App = () => {
  const [contacts, setContacts] = React.useState();
  React.useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('https://mebel-178.ru/admin/api/contacts');
        const data = await response.data;
        setContacts(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <div
      className='relative flex flex-col items-center w-full min-h-screen bg-gradient-to-r from-[#f7f7f7] to-[#d5d5d8]'>
      <Router>
        <SocialBlock />
        <Header />
        <AnimatedRoutes contacts={contacts}/>
        <Footer contacts={contacts} />
      </Router>
    </div>
  );
};

export default App;
