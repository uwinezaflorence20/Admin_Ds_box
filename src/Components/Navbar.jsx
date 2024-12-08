import { CiMenuFries } from "react-icons/ci";
import { FaMoon, FaSun } from "react-icons/fa"; // Import the dark mode icons
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="bg-blue-50/100 fixed top-0 w-full z-50 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="block text-teal-600 dark:text-white">
            <img src="/Component 1.svg" alt="Logo" />
          </Link>

          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className="rounded-full p-2 transition hover:bg-gray-200 dark:hover:bg-gray-800"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <FaSun className="text-yellow-400" size={24} />
              ) : (
                <FaMoon className="text-gray-800 dark:text-gray-200" size={24} />
              )}
            </button>

            <button className="block md:hidden rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
              <CiMenuFries size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
