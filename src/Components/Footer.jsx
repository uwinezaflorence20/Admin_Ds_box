import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="relative mx-auto max-w-screen-xl px-2 py-4 sm:px-6 lg:px-8 lg:py-12">
        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center text-teal-600 lg:justify-start">
              <a className="block text-teal-600" href="#">
                <span className="sr-only">Home</span>
                <img src="/Component 1.svg" alt="Logo" />
              </a>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-gray-500 lg:text-right dark:text-gray-400">
            Copyright &copy; 2024. All rights reserved.
          </p>
          <ul className="mt-6 flex flex-wrap justify-center gap-4 md:gap-6 lg:mt-0 lg:justify-end lg:gap-8">
            <li>
              <Link
                to="/"
                className="text-white bg-sky-800 rounded-full px-4 py-1 transition hover:text-cyan-300/75 dark:bg-sky-700 dark:hover:bg-sky-600 dark:hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/suggestion"
                className="text-sky-800 px-4 py-1 rounded-full transition hover:text-white hover:bg-sky-800 dark:text-sky-300 dark:hover:bg-sky-600 dark:hover:text-white"
              >
                Suggestion
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-sky-800 px-4 py-1 rounded-full transition hover:text-white hover:bg-sky-800 dark:text-sky-300 dark:hover:bg-sky-600 dark:hover:text-white"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
