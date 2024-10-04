// BookCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Rating: {book.rating}</p>
      <div className="button-container">
        <Link to={`/book/${book.id}`} className="view-button">
          View
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
