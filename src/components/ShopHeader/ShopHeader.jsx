import React, { useState, useEffect, useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import ShopCategory from './ShopCategory';

function ShopHeader() {
  const { handleCategory } = useContext(ShopContext);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isToggleBurger, setIsToggleBurger] = useState(false);
  const [isHiddenMenu, setIsHiddenMenu] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpenMenu(false);
        setIsToggleBurger(false);
        setTimeout(() => {
          setIsHiddenMenu(false);
        }, 1500);
      } else {
        setIsHiddenMenu(true);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const handleMobileMenu = () => {
    setIsToggleBurger(!isToggleBurger);
    setIsOpenMenu(!isOpenMenu);
    setIsHiddenMenu(false);
  };

  return (
    <header className="sticky top-0 z-20 h-28 lg:h-20 bg-cyan-400 grid grid-cols-8 grid-rows-2 lg:grid-cols-3 lg:gap-10 ">
      <section className=" col-span-7 row-span-1 mx-auto w-3/4 py-4 text-2xl text-blue-700  lg:col-span-1 ">
        {/* name and logo */}
        <div className="flex m-auto align-middle justify-center lg:justify-between text-nowrap">
          <h1 className="text-3xl flex justify-center align-middle   sm:text-3xl md:text-4xl ">
            <a href="#home">
              <img
                src="./favicon/apple-touch-icon.png"
                className="w-10 min-w-10 lg:w-12 flex-nowrap  mr-2"
                alt=" favicon"
              />
            </a>
            Kelvin mall
          </h1>
          <div
            className="relative top-1 cursor-pointer  hidden xl:block"
            onMouseEnter={() => handleCategory(true)}
            onMouseLeave={() => handleCategory(false)}
          >
            <div className="  m-auto pl-2 text-black text-3xl ">
              <span className="text-nowrap ml-2 ">
                <i className="fa-solid fa-bars"></i> DANH MỤC
              </span>
            </div>
            <div className="w-96 mt-6">
              <ShopCategory />
            </div>
          </div>
        </div>
      </section>

      <section className="col-span-1 row-span-2  align-middle m-auto  lg:hidden">
        {/* hamburger button */}
        <button
          id="hamburger-button"
          className="relative h-8 w-8 cursor-pointer text-3xl  "
          onClick={handleMobileMenu}
        >
          <div
            className={`absolute top-4 -mt-0.5 h-1 w-8 rounded bg-black transition-all duration-500  ${
              isToggleBurger
                ? `bg-transparent before:absolute before:h-1 before:w-8 before:-translate-x-4  before:rounded before:bg-black 
                before:transition-all before:duration-500 before:rotate-45 before:content-[''] after:absolute after:h-1 after:w-8 
                after:transition-all after:duration-500 after:-translate-x-4  after:rounded after:bg-black after:-rotate-45 after:content-[''] rotate-[1800deg]  `
                : `before:absolute before:h-1 before:w-8 before:-translate-x-4 before:translate-y-3 before:rounded before:bg-black before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:-translate-y-3 after:rounded after:bg-black after:content-['']`
            } `}
          ></div>
        </button>
      </section>

      {/* Find section */}
      <section className=" col-span-7 align-middle justify-center m-auto  lg:col-span-1 lg:row-span-2  ">
        <form className="relative">
          <input
            type="text"
            placeholder="Nhập vào sản phẩm bạn cần tìm"
            className=" w-96  xl:w-[450px] lg:w-[400]  px-5 py-2 pr-12 text-wrap text-left rounded-3xl"
          />
          <button className="absolute inset-y-0 right-4 flex items-center text-gray-500">
            🔍
          </button>
        </form>
      </section>
      <section className="hidden lg:flex col-span-1 row-span-2 align-middle justify-between m-auto ">
        <button className="flex flex-col  items-center m-auto w-1/4 h-full text-nowrap">
          <i className="fa-solid fa-cart-shopping fa-2x"></i>
          <p className="">Giỏ hàng</p>
        </button>
        <button className="flex flex-col  items-center m-auto w-1/4 h-full text-nowrap">
          <i className="fa-solid fa-heart fa-2x"></i>
          <p className="">Yêu thích </p>
        </button>
        <button className="flex flex-col  items-center m-auto w-1/4 h-full text-nowrap px-4">
          <i className="fa-solid fa-user fa-2x"></i>
          <p className="">Đăng nhập</p>
        </button>
      </section>
    </header>
  );
}

export default ShopHeader;
