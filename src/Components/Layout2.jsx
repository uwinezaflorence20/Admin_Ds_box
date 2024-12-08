import { Outlet } from 'react-router-dom';
import Student from './Student';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { useState, useEffect } from 'react';
import Footer from './Footer';
const Layout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div>
     <Student/> 
      <Outlet /> 
      <Footer />  
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-50 rounded-full bg-sky-800 p-3 text-white shadow-lg transition hover:bg-white hover:text-sky-800"
        >
          <span className="sr-only">Back to top</span>
          <MdKeyboardArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default Layout;
