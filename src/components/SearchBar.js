// src/components/SearchBar.js
import React from 'react';
import styled from 'styled-components';

const SearchBarStyled = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <SearchBarStyled>
      <Input
        type="text"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </SearchBarStyled>
  );
};

export default SearchBar;
