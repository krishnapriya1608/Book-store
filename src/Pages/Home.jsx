import React from 'react';
import { Link } from 'react-router-dom';
import BookList from '../Pages/BookList';

const Home = () => {
  return (
    <div className='book'>
      <h1>Book Management</h1>
      <Link to="/add">Add New Book</Link>
      <BookList />
    </div>
  );
};

export default Home;



