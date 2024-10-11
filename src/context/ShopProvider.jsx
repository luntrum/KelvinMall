import React, { useState, useEffect } from 'react';
import { ShopContext } from './ShopContext';
import useFecthProducts from './useFetchProducts';

export const ShopProvider = ({ children }) => {
  const { products, loading, error, categorizedProducts } = useFecthProducts();
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const handleCategory = (value) => {
    setIsOpenCategory(value);
  };
  
  return (
    <ShopContext.Provider
      value={{
        isOpenCategory,
        handleCategory,
        products,
        loading,
        error,
        categorizedProducts,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
