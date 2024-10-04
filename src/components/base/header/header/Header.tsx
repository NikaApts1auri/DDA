import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [language, setLanguage] = useState('EN');
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };

  const BackToHome = () => {
    navigate('/');
  };

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight, // Scroll down to the height of the viewport
      behavior: 'smooth', // Smooth scroll
    });
  };

  return (
    <header className="bg-gray-900 sticky top-0 z-50 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-10">
        {/* Logo */}
        <div onClick={BackToHome} className="text-2xl cursor-pointer font-bold flex items-center space-x-2 mr-[4px]">
          <img
            className="w-14 h-14 cursor-pointer rounded-full border-2 border-white shadow-md hover:scale-105 transition-transform duration-300"
            src="./DDA.JPG"
            alt="Website Logo"
          />
          {/* Show site name only when menu is closed on mobile */}
          <span className={`cursor-pointer ${menuOpen ? 'hidden' : 'block'} lg:block`}>
            DialDeutschAssociation
          </span>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className={`lg:flex space-x-6 ${menuOpen ? 'block' : 'hidden'} lg:block`}>
          <Link to="/" className="hover:text-gray-400 transition duration-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-400 transition duration-300">
            About Us
          </Link>
          <Link to="/services" className="hover:text-gray-400 transition duration-300">
            Services
          </Link>
          <Link onClick={handleScrollDown} to="#contact" className="hover:text-gray-400 transition duration-300">
            Contact
          </Link>
        </nav>

        {/* Language Switcher */}
        <div className="hidden lg:flex space-x-4 items-center">
          {['EN', 'DE'].map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={`px-3 py-1 rounded-md transition duration-300 ${
                language === lang
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-700 text-white hover:bg-green-500'
              }`}
            >
              {lang === 'EN' ? 'English' : 'Deutsch'}
            </button>
          ))}
        </div>

        {/* Support Button */}
        <div className="hidden lg:block">
          <a
            href="/support"
            className="bg-green-600 px-5 py-2 rounded-md text-white hover:bg-green-700 transition duration-300"
          >
            Get Support
          </a>
        </div>
      </div>

      {/* Mobile Language and Support Button */}
      <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} py-4 px-6 space-y-4`}>
        <div className="flex flex-col space-y-4 items-center">
          {['EN', 'DE'].map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={`px-4 py-2 w-full max-w-xs rounded-md text-center transition duration-300 ${
                language === lang
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-700 text-white hover:bg-green-500'
              }`}
            >
              {lang === 'EN' ? 'English' : 'Deutsch'}
            </button>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link
            to="/support"
            className="bg-green-600 px-4 py-2 rounded-md text-white w-full max-w-xs hover:bg-green-700 transition duration-300"
          >
            Get Support
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
