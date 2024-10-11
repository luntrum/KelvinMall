import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import ShopItem from './ShopItem';

function ShopMainDisplay() {
  const { categorizedProducts } = useContext(ShopContext);

  return (
    <div className=" m-auto flex flex-col justify-center items-start  w-full h-full ">
      {Object.entries(categorizedProducts).map(([categoryId, products]) => (
        <div
          key={categoryId}
          className=" w-full h-full pt-24 mb-40  "
          id={`${categoryId}`}
        >
          <div className=" text-3xl text-left ml-10 font-bold">
            {categoryId.toUpperCase()}
          </div>
          <div className=" h-full  py-20 ">
            <ShopItem item={{ products }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShopMainDisplay;
