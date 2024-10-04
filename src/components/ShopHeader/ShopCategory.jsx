import React, { useContext, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { faL } from '@fortawesome/free-solid-svg-icons';
import ShopItemCategory from './ShopItemCategory';

function ShopCategory() {
  const { isOpenCategory, categoryData } = useContext(ShopContext);
  const [isOpenItemCategory, setIsOpenItemCategory] = useState(false);
  const [itemOpenId, setItemOpenId] = useState(null);
  const handleItemOpen = (id) => {
    setIsOpenItemCategory(true);
    setItemOpenId(id);
  };
  return (
    <div
      className={`${
        isOpenCategory ? 'block' : 'hidden'
      } w-full bg-cyan-400 relative`}
    >
      {categoryData.map((element) => (
        <div
          key={element.id}
          onMouseEnter={() => handleItemOpen(element.id)}
          onMouseLeave={() => setIsOpenItemCategory(false)}
        >
          <div className="text-white text-xl p-2 hover:bg-cyan-600 cursor-pointer">
            {element.name.toUpperCase()}
          </div>
          <div>
            {isOpenItemCategory &&
              element.itemCategory &&
              element.id === itemOpenId && <ShopItemCategory item={element} />}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShopCategory;
