import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Header component
const Header: React.FC = () => {
  const [language, setLanguage] = useState('EN');

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    // Add your logic for language change here (e.g., update context, API call)
  };

  return (
    <header className="bg-gray-800 sticky top-0 z-50 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-10">
        {/* Logo */}
        <div className="text-2xl cursor-pointer font-bold">
          <img
            className="w-12 h-15 rounded-full border-2 border-white shadow-lg transition-transform duration-300 hover:scale-105"
            src="./DDA.JPG"
            alt="Website Logo"
          />
        </div>

        {/* Navigation (Hidden on mobile, visible on tablet and desktop) */}
        <nav className="hidden md:flex space-x-6">
          <div className="hover:text-gray-300 transition duration-300 cursor-pointer">
            <Link to={"/"} >Home</Link>
 
          </div>
          <div className="hover:text-gray-300 transition duration-300 cursor-pointer">
          <Link to={"/About"} >About</Link>
          </div>
          <div className="hover:text-gray-300 transition duration-300 cursor-pointer">
          <Link to={"/Services"} >Services</Link>
          </div>
          <div className="hover:text-gray-300 transition duration-300 cursor-pointer">
            Contact
          </div>
        </nav>

      
      <div className='flex items-center gap-[2rem] '>
      <div className="ml-4">
          <a
            href="/support"
            className="bg-gray-700 text-white px-3 py-1 md:px-4 md:py-2 rounded hover:bg-green-600 transition duration-300"
          >
            Get Support
          </a>
        </div>


          {/* Language Switcher (Smaller and differently styled on mobile) */}
          <div className="flex space-x-2 md:space-x-4">
          {['EN', 'DE'].map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={`px-2 py-1 rounded text-xs md:text-sm transition duration-300 ${
                language === lang
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-500 text-white hover:bg-green-400'
              } ${language === lang ? 'md:px-3 md:py-1' : ''}`}
            >
              {lang === 'EN' ? 'EN' : 'DE'}
            </button>
          ))}
        </div>
      </div>

     
      </div>
    </header>
  );
};

export default Header;
