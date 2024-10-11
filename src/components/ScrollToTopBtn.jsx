import React, { useEffect, useState } from 'react';

function ScrollToTopBtn() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const currentScrollY = window.scrollY;

    const isScrolled = () => {
      if (currentScrollY < lastScrollY && currentScrollY > 150) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY || currentScrollY < 10)
        setIsVisible(false);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', isScrolled);
    return () => {
      window.removeEventListener('scroll', isScrolled);
    };
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <button
      onClick={scrollToTop}
      className={` ${
        isVisible ? 'animate-scroll-btn-show' : 'animate-scroll-btn-hide'
      } w-8 h-8 right-0 bottom-20 fixed bg-slate-200 border border-gray-900 rounded-lg transition duration-300 `}
    >
      <i className="fa-solid fa-angle-up"></i>
    </button>
  );
}

export default ScrollToTopBtn;
