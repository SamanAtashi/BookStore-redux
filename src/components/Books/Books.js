import React from 'react';

import Book from './Book/Book';
import AddBook from './Book/AddBook';

const Books = () => (
  <div className="w-full my-20 px-28">
    <ul className="mb-10">
      <Book />
    </ul>
    <AddBook />
  </div>
);
export default Books;
