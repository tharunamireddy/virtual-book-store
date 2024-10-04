import React from 'react';
import { useParams } from 'react-router-dom';
import { books } from '../services/bookData'; // Make sure this is your book data source
import './BookDetails.css'; // Ensure you have this CSS file for styling

const BookDetails = ({ addToLibrary }) => {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id)); // Fetch the book by ID

  if (!book) return <div>Book not found!</div>;

  const handleAddToLibrary = () => {
    addToLibrary(book); // Call the function to add to library
  };

  return (
    <div className="book-details-container">
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Rating: {book.rating}</p>
      <p>Description: {book.description}</p>
      <p>Publication Year: {book.publication_year}</p>
      <button className="add-to-library-btn" onClick={handleAddToLibrary}>
        Add to Library
      </button>
    </div>
  );
};

export default BookDetails;




