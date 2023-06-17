import React, { useState } from "react";

import "./Bookshelf.css";
import { books } from "../../db/Books";

const Bookshelf = () => {
  const [products, setProducts] = useState(books);
//   console.log(products)

//   const handleChange = (event) => {
//     console.log(event.target.value)
//     // setProducts()
//   };
  const handleChange = (id, newStatus) => {
    console.log(id,newStatus)
    setProducts(prevBooks =>
        
      prevBooks.map(book =>{
        console.log(book)
        return book._id === id ? { ...book, category: newStatus } : book
      }
      )
    );
  };

  const options = [
    { label: "Currently Reading", value: "Currently Reading" },
    { label: "Want to Read", value: "Want to Read" },
    { label: "Read", value: "Read" },
    { label: "None", value: "None" },
  ];
  return (
    <div>
      <h1>Currently Reading</h1>
      <div className="bookshelf-container">
        {products.map((book) => {
          return (
            book.category === "Currently Reading" && (
              <div className="book-container">
                <img className="book-image" src={book.img} alt={book.name} />
                <h2>{book.name}</h2>

                <select value={book.category} onChange={event => handleChange(book._id, event.target.value)}>
                  {/* <option>Currently Reading</option>
                    <option>Want to Read</option>
                    <option>Read</option>
                    <option>None</option> */}
                  {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            )
          );
        })}
      </div>

      <h1>Want to Read</h1>
      <div className="bookshelf-container">
        {products.map((book) => {
          return (
            book.category === "Want to Read" && (
              <div className="book-container">
                <img className="book-image" src={book.img} alt={book.name} />
                <h2>{book.name}</h2>

                <select value={book.category} onChange={event => handleChange(book._id, event.target.value)}>
                  {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            )
          );
        })}
      </div>

      <h1>Read</h1>
      <div className="bookshelf-container">
        {products.map((book) => {
          return (
            book.category === "Read" && (
              <div className="book-container">
                <img className="book-image" src={book.img} alt={book.name} />
                <h2>{book.name}</h2>

                <select value={book.category} onChange={event => handleChange(book._id, event.target.value)}>
                  {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            )
          );
        })}
      </div>

      <h1>None</h1>
      <div className="bookshelf-container">
        {products.map((book) => {
          return (
            book.category === "None" && (
              <div className="book-container">
                <img className="book-image" src={book.img} alt={book.name} />
                <h2>{book.name}</h2>

                <select value={book.category} onChange={event => handleChange(book._id, event.target.value)}>
                  {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Bookshelf;
