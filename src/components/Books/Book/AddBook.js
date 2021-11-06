import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../../../redux/books/books';
import { StoreApiSend } from '../../../API/API_connect';

const AddBook = () => {
  const dispatch = useDispatch();

  const AddBookHandler = async () => {
    const newBook = {
      id: uuidv4(),
      title: document.getElementById('title').value,
      author: document.getElementById('author').value,
    };

    if (
      document.getElementById('title').value !== '' && document.getElementById('author').value !== ''
    ) {
      await StoreApiSend(newBook.title, newBook.author, newBook.id);
      dispatch(addBook(newBook));
    }

    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  };

  const alarm = (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold">Holy smokes!</strong>
      <span className="block sm:inline">
        Something seriously bad happened.
      </span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg
          className="fill-current h-6 w-6 text-red-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </span>
    </div>
  );

  return (
    <form className="border-t-2 pt-10 border-gray-200 relative">
      <p className="font-semibold text-xl text-gray-400 mb-5">
        ADD NEW BOOK
      </p>
      <div className="h-11 flex items-center justify-between">
        <input
          id="title"
          type="text"
          name="Book Title"
          placeholder="Title"
          className="h-full w-1/2 border border-gray-400 py-3 px-4 font-normal text-gray-600 rounded-md"
        />
        <input
          id="author"
          type="text"
          name="Author"
          placeholder="Author"
          className="h-full w-1/4 border border-gray-400 py-3 px-4 font-normal text-gray-600 rounded-md"
        />
        <input
          className="font-medium w-44 h-full border border-blue-600 rounded-md bg-blue-600 text-white text-sm cursor-pointer hover:bg-blue-500"
          type="button"
          value="ADD BOOK"
          onClick={AddBookHandler}
        />
      </div>
      <div id="danger" className="z-20  fixed top-0 left-0 w-full items-center justify-center hidden">{alarm}</div>
    </form>
  );
};

export default AddBook;
