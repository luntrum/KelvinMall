import React, { useContext, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';

function ShopItemCategory({ item }) {
  return (
    <div
      className={` absolute left-full w-[800px] top-0 min-h-[400px] max-h-[600px]  bg-cyan-400 block `}
    >
      {/* Hiển thị tên của item */}
      <h2 className="text-white text-center uppercase font-extrabold ">
        {item.name}
      </h2>{' '}
      <div className="grid grid-cols-2 w-full">
        {item.itemCategory &&
          item.itemCategory.map((subItem) => (
            <div key={subItem.id} className="text-white col-span-1">
              <div>
                <p className="uppercase font-bold ">{subItem.itemName}</p>
                <div className="flex flex-col">
                  {subItem.category &&
                    subItem.category.map((cat) => (
                      <span
                        key={cat.id}
                        className="text-gray-800 hover:text-yellow-400"
                      >
                        {cat.name}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ShopItemCategory;
