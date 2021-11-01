import React from 'react';

import PropTypes from 'prop-types';

const books = [
  { id: 'a1', name: 'book1' },
  { id: 2, name: 'book2' },
];

const Book = () => books.map((book) => (
  <li key={book.id}>
    {book.name}
    <button type="button">remove</button>
  </li>
));

books.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Book;
