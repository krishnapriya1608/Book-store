import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../Redux/bookSlice'; // Ensure you import deleteBook

const BookItem = ({ book }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteBook(book.id));
  };

  const handleEdit = () => {
    navigate(`/edit/${book.id}`);
  };

  return (
    <li className="book-item">
      <strong>{book.title}</strong> by {book.author}
      <button className="edit-btn" onClick={handleEdit}>
        <i className="fas fa-edit"></i> {/* Edit Icon */}
      </button>
      <button className="delete-btn" onClick={handleDelete}>
        <i className="fas fa-trash-alt"></i> {/* Delete Icon */}
      </button>
    </li>
  );
};

export default BookItem;


