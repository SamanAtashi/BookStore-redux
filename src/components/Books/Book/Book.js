import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, addBook } from '../../../redux/books/books';
import { StoreApiReceive, StoreApiRemove } from '../../../API/API_connect';

const Book = () => {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.booksReducer);

  const removeBookHandler = (book, id) => {
    StoreApiRemove(id);
    dispatch(removeBook(book));
  };

  const retrieveFromApi = async () => {
    const myObj = await StoreApiReceive();

    // transform obj
    const keys = Object.keys(myObj);
    const vals = Object.values(myObj);
    const book = keys.map((_, idx) => ({
      id: keys[idx],
      author: vals[idx][0].category,
      title: vals[idx][0].title,
    }));

    book.forEach((book) => {
      dispatch(addBook(book));
    });
  };

  useEffect(() => {
    retrieveFromApi();
  }, []);

  return books.map((bookObj) => (
    <li key={bookObj.id}>
      {`${bookObj.title} -- ${bookObj.author} `}
      <button
        type="button"
        onClick={() => removeBookHandler(bookObj, bookObj.id)}
      >
        remove
      </button>
    </li>
  ));
};
export default Book;
