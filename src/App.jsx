import React, { useEffect, useState } from 'react';
import './App.css';
import ShopPayment from './components/ShopPayment';
import ShopHeader from './components/ShopHeader/ShopHeader';
import ScrollToTopBtn from './components/ScrollToTopBtn';
import { ShopProvider } from './context/ShopProvider';
import ShopCategory from './components/ShopHeader/ShopCategory';

function App() {
  return (
    <ShopProvider>
      <ShopHeader />
      <ShopPayment />
      <ScrollToTopBtn />
    </ShopProvider>
  );
}

export default App;
