import React from 'react';
import '../styles/header.css'; // Import the CSS file for any additional styling

function Header() {
  return (
    <header className="bg-black text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <button 
          onClick={() => window.location.href = '/'} 
          className="text-2xl font-bold hover:text-orange-500"
        >
          H2M
        </button>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-orange-500">Home</a></li>
            <li><a href="/search" className="hover:text-orange-500">Search</a></li>
            <li><a href="/browse" className="hover:text-orange-500">Browse</a></li>
            <li><a href="/download" className="hover:text-orange-500">Download</a></li>
            <li><a href="/help" className="hover:text-orange-500">Help</a></li>
            <li><a href="/about" className="hover:text-orange-500">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;