import React from 'react';
import { books } from '../services/bookData'; // Import books data
import BookCard from './BookCard';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const BookList = ({ addToLibrary }) => {
  return (
    <div>
      <h2>Explore Books</h2>
      <Grid>
        {books.map((book) => (
          <BookCard key={book.id} book={book} addToLibrary={addToLibrary} />
        ))}
      </Grid>
    </div>
  );
};

export default BookList;
