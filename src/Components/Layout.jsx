import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useState, useEffect } from "react";
import Footer from "./Footer";

const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);
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
      behavior: "smooth",
    });
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      {/* Pass dark mode state and toggle function to Navbar */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
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
