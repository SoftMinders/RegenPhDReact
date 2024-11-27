import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
    window.scrollTo(0, 0);
    document.getElementById('root').querySelector('.header-nav').classList.remove('is-active');
    document.querySelector('body').classList.remove('off-nav-is-active');
  }, [pathname]);
}

export default ScrollToTop;