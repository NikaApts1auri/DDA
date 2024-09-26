import React, { useState } from 'react';

// Define interface for navigation items
interface NavItem {
  label: string;
  href: string;
}

// Navigation items array
const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

// Header component
const Header: React.FC = () => {
  const [language, setLanguage] = useState('EN');

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    // Add your logic for language change here (e.g., update context, API call)
  };

  return (
    <header className="bg-gray-800 sticky top-0 z-index-[1000] text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl cursor-pointer font-bold">
          <img
            className="w-12 h-15 rounded-full border-2 border-white shadow-lg transition-transform duration-300 hover:scale-105"
            src="./majorLogo.webp"
            alt="Website Logo"
          />
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:text-gray-300 transition duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Language Switcher */}
        <div className="flex space-x-4">
          {['EN', 'GE', 'DE'].map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={`px-3 py-1 rounded transition duration-300 ${
                language === lang
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-500 text-white hover:bg-green-400'
              }`}
            >
              {lang === 'EN' ? 'English' : lang === 'GE' ? 'ქართული' : 'Deutsch'}
            </button>
          ))}
        </div>


        <div>
          <a
            href="/support"
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
          >
            Get Support
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
