import React, { useState } from "react";

import "./SearchBook.css";
import { books } from "../../db/Books";

const SearchBook = () => {
  // const [products, setProducts] = useState(books);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredBooks = books.filter((book) =>
      book?.name?.toLowerCase().includes(searchTerm)
    );
    setSearchResults(filteredBooks);
  };

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="bookshelf-container">
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((book) => (
              <div className="book-container" key={book._id}>
                <img className="book-image" src={book.img} alt={book.name} />
                <h2>{book.name}</h2>
              </div>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchBook;
