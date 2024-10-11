import React, { useEffect, useState } from 'react';
import './App.css';
import ShopPayment from './components/ShopPayment';
import ShopHeader from './components/ShopHeader/ShopHeader';
import ScrollToTopBtn from './components/ScrollToTopBtn';
import { ShopProvider } from './context/ShopProvider';
import ShopMainDisplay from './components/ShopMainDisplay/ShopMainDisplay';

function App() {
  return (
    <ShopProvider>
      <ShopHeader />
      <ShopMainDisplay />
      <ShopPayment />
      <ScrollToTopBtn />
    </ShopProvider>
  );
}

export default App;
