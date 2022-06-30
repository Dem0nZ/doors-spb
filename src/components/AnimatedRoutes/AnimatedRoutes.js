import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Calculator, Contacts, Gallery, HomePage, Materials } from '../../pages';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = ({ contacts }) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<HomePage />} />
        <Route path='materials' element={<Materials />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='calculate' element={<Calculator />} />
        <Route path='contacts' element={<Contacts contacts={contacts} />} />
        <Route path='*' element={<HomePage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
