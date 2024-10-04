import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookDetails from './pages/BookDeatils';
import Navbar from './components/Navbar';
import MyLibrary from './pages/MyLibrary'; // Import MyLibrary
import './App.css';

const App = () => {
  const [library, setLibrary] = useState([]);

  const addToLibrary = (book) => {
    setLibrary((prev) => [...prev, book]);
  };

  return (
    <Router>
      <div className="app">
        <Navbar libraryCount={library.length} />
        <Routes>
          <Route path="/" element={<Home addToLibrary={addToLibrary} />} />
          <Route path="/book/:id" element={<BookDetails addToLibrary={addToLibrary} />} />
          <Route path="/mylibrary" element={<MyLibrary library={library} />} /> {/* Add MyLibrary route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
