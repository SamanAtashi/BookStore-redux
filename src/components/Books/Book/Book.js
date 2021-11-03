import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../../../redux/books/books';

const Book = () => {
  const books = useSelector((state) => state.booksReducer);

  const dispatch = useDispatch();

  const removeBookHandler = (book) => {
    dispatch(removeBook(book));
  };

  return books.map((bookObj) => (
    <li key={bookObj.id}>
      {`${bookObj.title} -- ${bookObj.author} `}
      <button
        type="button"
        onClick={() => removeBookHandler(bookObj)}
      >
        remove
      </button>
    </li>
  ));
};
export default Book;
