import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, editBook } from '../Redux/bookSlice';
import { useNavigate } from 'react-router-dom'; 

const BookForm = ({ bookId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bookToEdit = useSelector(state => state.books.books.find(book => book.id === bookId));

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    if (bookId && bookToEdit) {
      setTitle(bookToEdit.title);
      setAuthor(bookToEdit.author);
    }
  }, [bookId, bookToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { id: bookId || Date.now(), title, author };
    if (bookId) {
      dispatch(editBook(newBook));
    } else {
      dispatch(addBook(newBook));
    }
    navigate('/');
  };

  const handleClose = () => {
    navigate('/'); 
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-btn" onClick={handleClose}>
          <i className="fas fa-times"></i> 
        </button>
        <h2>{bookId ? 'Edit Book' : 'Add New Book'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Book Title"
            required
          />
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
            required
          />
          <button type="submit">{bookId ? 'Update Book' : 'Add Book'}</button>
        </form>
      </div>
    </div>
  );
};

export default BookForm;


