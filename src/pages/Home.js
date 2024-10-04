import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { books } from '../services/bookData';
import SearchBar from '../components/SearchBar';

const Home = ({ addToLibrary }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleViewBook = (id) => {
    navigate(`/book/${id}`);
  };

  const filteredBooks = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="home-container">
      <h1>Book List</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div className="book-card" key={book.id}>
              <h2>{book.title}</h2>
              <p>Author: {book.author}</p>
              <button onClick={() => handleViewBook(book.id)}>View</button>
            </div>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
