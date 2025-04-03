import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollTo(0, 0);
    };

    // Use a timeout to ensure the content is loaded before scrolling
    const scrollTimeout = setTimeout(handleScroll, 10); // Adjust timeout as needed

    return () => clearTimeout(scrollTimeout); // Cleanup
  }, [pathname]);

  return null;
};

export default ScrollToTop;
