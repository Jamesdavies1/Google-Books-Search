import React from "react";
import Book from "../book";
import "../books/books.css";

const Books = ({ books, location, refresh }) => (
  <div>
    <h1 className="books-text">Books</h1>
    {books.map((book, i) => (
      <Book book={book} location={location} key={i} refresh={refresh} />
    ))}
  </div>
);

export default Books;
