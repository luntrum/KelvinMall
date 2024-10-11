import React, { useContext, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';
import ShopItemCategory from './ShopItemCategory';

function ShopCategory() {
  const { isOpenCategory, categorizedProducts } = useContext(ShopContext);
  const [isOpenItemCategory, setIsOpenItemCategory] = useState(false);
  const [itemOpenId, setItemOpenId] = useState(null);
  const handleItemOpen = (id) => {
    setIsOpenItemCategory(true);
    setItemOpenId(id);
  };
  const handleItemClose = () => {
    setIsOpenItemCategory(false);
    setItemOpenId(null);
  };

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div
      className={`${
        isOpenCategory ? 'block' : 'hidden'
      } w-full bg-cyan-400 relative`}
    >
      {Object.entries(categorizedProducts).map(([categoryId, products]) => (
        <div
          key={categoryId}
          onMouseEnter={() => handleItemOpen(categoryId)}
          onMouseLeave={() => handleItemClose}
          onClick={() => {
            handleClick(categoryId);
          }}
        >
          <div className="text-white text-xl p-2 hover:bg-cyan-600 cursor-pointer">
            {categoryId.toUpperCase()}
          </div>
          <div>
            {isOpenItemCategory && categoryId && categoryId === itemOpenId && (
              <ShopItemCategory item={{ products }} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShopCategory;
