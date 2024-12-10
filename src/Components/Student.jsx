import { useState } from "react";
import { NavLink } from "react-router-dom";

const Student = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Retrieve the role from localStorage
  const userRole = localStorage.getItem("userRole");
  
  // Get the first letter of the userRole to display inside the circle
  const roleInitial = userRole ? userRole.charAt(0).toUpperCase() : 'R'; // Default to 'R' if no role is found

  // Function to trigger speech
  const speakText = (text) => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.lang = "en-US"; // You can change the language to your preference
    window.speechSynthesis.speak(speech);
  };

  // Function to stop speech
  const stopSpeech = () => {
    window.speechSynthesis.cancel();
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const handleProfileClick = () => {
    setIsMenuOpen(false); // Close dropdown menu when profile is clicked
  };

  return (
    <header className="bg-white  fixed top-0 w-full z-30 shadow-sm dark:bg-gray-900">
      <div className="w-full bg-sky-100 dark:bg-gray-800">
        <div className="flex h-16 items-center justify-between px-4 md:px-12">
          {/* Logo Section */}
          <div className="flex-1 flex items-center gap-4">
            <NavLink to="/">
              <img src="/Component 1.svg" alt="Logo" className="w-24 h-10" />
            </NavLink>
          </div>

          {/* Desktop Navigation and Profile Button */}
          <div className="hidden md:flex items-center gap-4 relative">
            <button
              type="button"
              className="overflow-hidden rounded-full border border-gray-300 shadow-inner w-10 h-10 bg-sky-800 flex items-center justify-center text-white font-bold dark:bg-sky-600 dark:border-gray-600"
              onClick={toggleMenu}
              onMouseEnter={() => speakText("Click to open menu")}
              onMouseLeave={stopSpeech}
            >
              {roleInitial}
            </button>

            {isMenuOpen && (
              <div
                className="absolute right-0 mt-20 w-56 divide-y divide-gray-100 rounded-md border bg-white shadow-lg z-20 dark:bg-gray-700 dark:border-gray-600"
                role="menu"
              >
                <div className="p-2">
                  <NavLink to="myreply">
                    <span
                      className="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-600"
                      role="menuitem"
                      onClick={handleProfileClick}
                      onMouseEnter={() => speakText("My Profile")}
                      onMouseLeave={stopSpeech}
                    >
                      My Profile ({userRole}) {/* Display the role here */}
                    </span>
                  </NavLink>
                </div>

                <div className="p-2">
                  <NavLink to="/">
                    <button
                      type="button"
                      className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-600"
                      role="menuitem"
                      onMouseEnter={() => speakText("Logout")}
                      onMouseLeave={stopSpeech}
                    >
                      Logout
                    </button>
                  </NavLink>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button
              className="text-gray-600 focus:outline-none"
              onClick={toggleMobileMenu}
              onMouseEnter={() => speakText("Open mobile menu")}
              onMouseLeave={stopSpeech}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4">
              <NavLink to="/myreply">
                <span
                  className="block py-2 text-gray-700 hover:bg-gray-100 rounded-lg dark:text-white dark:hover:bg-gray-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                  onMouseEnter={() => speakText("My Profile")}
                  onMouseLeave={stopSpeech}
                >
                  My Profile ({userRole}) {/* Display the role here */}
                </span>
              </NavLink>
              <NavLink to="/">
                <span
                  className="block py-2 text-red-700 hover:bg-red-50 rounded-lg dark:text-red-400 dark:hover:bg-red-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                  onMouseEnter={() => speakText("Logout")}
                  onMouseLeave={stopSpeech}
                >
                  Logout
                </span>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Student;
