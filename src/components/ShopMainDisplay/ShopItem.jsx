import React, { useMemo, useState } from 'react';

function ShopItem({ item }) {
  const [serialItem, setSerialItem] = useState(0);
  const [isSlideIn, setIsSlideIn] = useState(false);
  const [isSlideBack, setIsSlideBack] = useState(false);
  const totalItem = item.products.length;

  const productsDisplay = useMemo(() => {
    return item.products.slice(serialItem, serialItem + 3);
  }, [item.products, serialItem]);
  const handleSerial = (value) => {
    if (value > 0 && serialItem < totalItem - 3) {
      setIsSlideIn(true);
    } else if (serialItem > 0) setIsSlideBack(true);
    setTimeout(() => {
      setSerialItem((prevSerialItem) => {
        if (prevSerialItem === 0 && value < 0) return totalItem - 4;
        if (prevSerialItem >= totalItem - 3 && value > 0) return 0;

        return prevSerialItem + value;
      });
      setIsSlideBack(false);
      setIsSlideIn(false);
    }, 500); // Thời gian trùng với thời gian animation
  };

  return (
    <div className="flex justify-center gap-2   ">
      <button
        className={`${
          totalItem < 3 || serialItem === 0 ? 'hidden' : 'flex'
        } border border-black m-auto  p-10 w-6 align-middle justify-center rounded-xl hover:bg-slate-200 `}
        onClick={() => handleSerial(-1)}
      >
        {' '}
        <i className="fa-solid fa-angle-left"></i>{' '}
      </button>
      <div
        className={` flex flex-nowrap overflow-x-hidden justify-between m-auto w-full ${
          isSlideIn ? 'animate-slide-in' : ''
        } ${isSlideBack ? 'animate-slide-back' : ''} `}
      >
        {productsDisplay.map((product) => (
          <div
            key={product.id}
            className="m-auto min-w-64 min-h-64  max-w-64  items-center text-center w-1/3 hover:bg-slate-100 "
          >
            <h3 className=" m-auto pb-6">{product.title}</h3>
            <div className="">
              <img
                src={product.image}
                alt={product.title}
                className=" m-auto  h-64
                  "
              />
            </div>
            <div className="m-auto pt-6">{product.price}</div>
          </div>
        ))}
      </div>
      <button
        className={`${
          totalItem < 3 ? 'hidden' : 'flex'
        } border border-black m-auto  p-10 w-6 hover:bg-slate-200 align-middle justify-center rounded-xl `}
        onClick={() => handleSerial(1)}
      >
        {' '}
        <i className="fa-solid fa-angle-right "></i>{' '}
      </button>
    </div>
  );
}

export default ShopItem;
