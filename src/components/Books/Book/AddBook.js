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
    } else {
      alert('Please fill both inputs!!!');
    }

    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  };

  return (
    <form className="border-t-2 pt-10 border-gray-200">
      <p className="font-semibold text-xl text-gray-400 mb-5">
        ADD NEW BOOK
      </p>
      <div className="h-11 flex items-center justify-between">
        <input
          id="title"
          type="text"
          name="Book Title"
          placeholder="Title"
          className="h-full w-1/2 border border-gray-400 py-3 px-4 font-light text-gray-300 rounded-md"
        />
        <input
          id="author"
          type="text"
          name="Author"
          placeholder="Author"
          className="h-full w-1/4 border border-gray-400 py-3 px-4 font-light text-gray-300 rounded-md"
        />
        <input
          className="font-medium w-44 h-full border border-blue-600 rounded-md bg-blue-600 text-white text-sm"
          type="button"
          value="ADD BOOK"
          onClick={AddBookHandler}
        />
      </div>
    </form>
  );
};

export default AddBook;
