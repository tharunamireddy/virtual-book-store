import React from 'react';
import BookCard from '../components/BookCard';
import './MyLibrary.css'; // Ensure you have this CSS file for styling

const MyLibrary = ({ library }) => {
  if (library.length === 0) {
    return (
      <div className="my-library-container">
        <h2>Your library is empty.</h2>
      </div>
    );
  }

  return (
    <div className="my-library-container">
      <h2>My Library</h2>
      <div className="books-grid">
        {library.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default MyLibrary;
