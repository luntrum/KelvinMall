import React, { useContext, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';

function ShopItemCategory({ item }) {
  const [hoveredProductId, setHoveredProductId] = useState(null); // Thêm state này vào để tránh lỗi.

  return (
    <div
      className={` absolute left-full w-[800px] top-0 min-h-[400px] max-h-[600px] block `}
    >
      {/* Hiển thị tên của item */}
      <h2 className="text-white text-center uppercase font-extrabold ">
        {item.name}
      </h2>{' '}
      {/* <div className="grid grid-cols-2 w-full">
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
      </div> */}
      <div className="grid grid-cols-2 w-full text-white ">
        {item.products &&
          item.products.map((product) => (
            <div
              key={product.id}
              className="relative p-2  text-center shadow-md bg-cyan-400 hover:bg-cyan-300"
              onMouseEnter={() => setHoveredProductId(product.id)}
              onMouseLeave={() => setHoveredProductId(null)}
            >
              <h3 className="text-sm text-wrap font-bold uppercase mb-2">
                {product.title}
              </h3>
              <img
                src={product.image}
                alt={product.title}
                className="w-20 h-20 object-contain mx-auto mb-2"
              />

              {/* Hiển thị thêm thông tin khi hover vào sản phẩm */}
            </div>
          ))}
      </div>
    </div>
  );
}

export default ShopItemCategory;
