import React from 'react';
import { FaUserAlt } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="fixed top-0 left-0 z-10 bg-white w-full flex justify-between items-center px-14 py-6 shadow-md">
    <div className="flex items-center space-x-7">
      <h2 className="text-blue-600  font-bold text-3xl">
        BOOKSTORE CMS
      </h2>
      <Link className="font-light text-gray-800" to="/">
        Books
      </Link>
      <Link className="font-light text-gray-800" to="/categories">
        Categories
      </Link>
    </div>
    <div className="border rounded-full p-4">
      <FaUserAlt className="text-blue-600" />
    </div>
  </nav>
);

export default Navigation;
