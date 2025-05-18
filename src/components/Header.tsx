
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="divine-gradient text-white shadow-md">
      <div className="container mx-auto py-4 px-4 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold text-divine-gold text-center">
          देव आरती संग्रह
        </h1>
        <nav className="mt-4">
          <ul className="flex space-x-4">
            <li>
              <Link 
                to="/" 
                className="px-3 py-2 rounded-md hover:bg-divine-light/20 transition-colors"
              >
                मुख्यपृष्ठ
              </Link>
            </li>
            <li>
              <Link 
                to="/favorites" 
                className="px-3 py-2 rounded-md hover:bg-divine-light/20 transition-colors"
              >
                आवडते
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
