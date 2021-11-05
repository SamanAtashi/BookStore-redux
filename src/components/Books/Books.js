import React from 'react';

import Book from './Book/Book';
import AddBook from './Book/AddBook';

const Books = () => (
  <div className="w-full my-20">
    <ul>
      <Book />
    </ul>
    <AddBook />
  </div>
);
export default Books;
