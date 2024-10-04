import React, { useState, useEffect } from 'react';
import { ShopContext } from './ShopContext';

const categoryData = [
  { id: 0, name: 'khuyến mãi' },
  {
    id: 1,
    name: 'bánh và thực phẩm chế biến sẵn',
    itemCategory: [
      {
        id: 0,
        itemName: 'bánh',
        category: [
          { id: 0, name: 'bánh ngọt' },
          { id: 1, name: 'bánh mặn' },
        ],
      },
      {
        id: 1,
        itemName: 'thực phẩm chế biến sẵn',
        category: [
          { id: 0, name: 'Món ăn Hàn Quốc' },
          { id: 1, name: 'Món ăn Việt Nam' },
          { id: 2, name: 'Món ăn Nhật Bản' },
          { id: 3, name: 'Nước giải khát các loại' },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'thực phẩm sạch',
    itemCategory: [
      {
        id: 0,
        itemName: 'trái cây',
        category: [
          { id: 0, name: 'Trong nước' },
          { id: 1, name: 'Nhập khẩu' },
        ],
      },
      {
        id: 1,
        itemName: 'Rau củ',
        category: [
          { id: 0, name: 'Rau ăn lá Hàn Quốc' },
          { id: 1, name: 'Rau ăn lá Việt Nam' },
          { id: 2, name: 'Rau ăn lá Nhật Bản' },
          { id: 3, name: 'Củ các loại' },
        ],
      },
      {
        id: 2,
        itemName: 'Trứng, thịt, cá',
        category: [
          { id: 0, name: 'Trứng' },
          { id: 1, name: 'Thịt' },
          { id: 2, name: 'Cá' },
        ],
      },
      {
        id: 3,
        itemName: 'thực phẩm chế biến sẵn',
        category: [
          { id: 0, name: 'Món ăn Hàn Quốc' },
          { id: 1, name: 'Món ăn Việt Nam' },
          { id: 2, name: 'Món ăn Nhật Bản' },
          { id: 3, name: 'Nước giải khát các loại' },
        ],
      },
    ],
  },
  { id: 3, name: 'thương hiệu độc quyền' },
  { id: 4, name: 'bách hóa' },
  { id: 5, name: 'nhà cửa và đời sống' },
];
export const ShopProvider = ({ children }) => {
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const handleCategory = (value) => {
    setIsOpenCategory(value);
  };
  return (
    <ShopContext.Provider
      value={{ isOpenCategory, handleCategory, categoryData }}
    >
      {children}
    </ShopContext.Provider>
  );
};
