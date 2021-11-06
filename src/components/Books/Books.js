import React from 'react';

import Book from './Book/Book';
import AddBook from './Book/AddBook';

const Books = () => (
  <div className="w-full pt-40 px-28 h-full">
    <ul className="mb-10 overflow-y-scroll h-4/6 scrollbar-hide">
      <Book />
    </ul>
    <AddBook />
  </div>
);
export default Books;
