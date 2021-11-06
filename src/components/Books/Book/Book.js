/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook, addBook } from '../../../redux/books/books';
import { StoreApiReceive, StoreApiRemove } from '../../../API/API_connect';
import 'react-circular-progressbar/dist/styles.css';

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

  const percentage = 66;

  return books.map((bookObj) => (
    <li
      key={bookObj.id}
      className="py-8 pl-7 mb-4 bg-white border rounded-md flex  items-center"
    >
      <div className="border-r-2 h-full w-3/4 flex justify-between items-center">
        <div>
          <h3 className="font-bold text-2xl">
            {bookObj.title}
          </h3>
          <p className="text-blue-500 font-light">
            {bookObj.author}
          </p>
          <ul className="flex items-center space-x-5 mt-5">
            <li>
              <button
                className="text-blue-500 font-light"
                type="button"
              >
                Comments
              </button>
            </li>
            <li>
              <button
                className="text-blue-500 font-light border-l border-r px-5"
                type="button"
                onClick={() => removeBookHandler(
								    bookObj,
								    bookObj.id,
								  )}
              >
                Remove
              </button>
            </li>
            <li>
              <button
                className="text-blue-500 font-light"
                type="button"
              >
                Edit
              </button>
            </li>
          </ul>
        </div>
        <div
          className="mx-9 lg:mx-24"
          style={{ width: 100, height: 100 }}
        >
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
          />
        </div>
      </div>
      <div className="h-full w-1/4 mx-9 lg:pl-24">
        <p className="text-gray-400 font-extralight text-sm">
          CURRENT CHAPTER
        </p>
        <p className="text-gray-600 text-sm mt-1 mb-4">
          CHAPTER 12
        </p>
        <button
          className="font-extralight min-w-max px-3 md:w-4/6 lg:w-3/6 h-8 border border-blue-600 rounded-md bg-blue-600 text-white text-sm cursor-pointer hover:bg-blue-500"
          type="button"
        >
          UPDATE PROGRESS
        </button>
      </div>
    </li>
  ));
};
export default Book;
