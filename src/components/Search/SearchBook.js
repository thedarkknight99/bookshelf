import React, { useState } from "react";

import "./SearchBook.css";
import { books } from "../../db/Books";

const SearchBook = () => {
  const [products, setProducts] = useState(books);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredBooks = products.filter((book) =>
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

      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((book) => (
            <li key={book._id}>{book.name}</li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchBook;
