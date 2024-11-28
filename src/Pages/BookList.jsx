import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from '../Redux/bookSlice';
import BookItem from '../Pages/BookItem';

const BookList = () => {
  const books = useSelector(state => state.books.books);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <BookItem key={book.id} book={book} dispatch={dispatch} />
        ))}
      </ul>
    </div>
  );
};

export default BookList;

