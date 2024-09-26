import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Email:", email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-4">

        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Support Group</h2>
          <p className="text-gray-200">Together we are stronger.</p>
        </div>

        {/* Navigation Section */}
        <nav className="flex flex-col md:flex-row mb-4">
          <a href="#about" className="mx-2 text-gray-200 hover:text-white transition duration-300">About Us</a>
          <a href="#resources" className="mx-2 text-gray-200 hover:text-white transition duration-300">Resources</a>
          <a href="#contact" className="mx-2 text-gray-200 hover:text-white transition duration-300">Contact</a>
          <a href="#faq" className="mx-2 text-gray-200 hover:text-white transition duration-300">FAQ</a>
        </nav>

        {/* Email Subscription Section */}
        <div className="mb-4">
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="p-2 rounded-md border border-gray-200 mr-2"
              required
            />
            <button type="submit" className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500 transition duration-300">
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media Section */}
        <div className="flex space-x-4 mb-4">
          <a href="#" className="text-gray-200 hover:text-white transition duration-300">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-200 hover:text-white transition duration-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-200 hover:text-white transition duration-300">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-200 hover:text-white transition duration-300">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        <div className="text-sm">
          <p>&copy; {new Date().getFullYear()} Support Group. All rights reserved.</p>
          <p className="text-gray-200">Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
