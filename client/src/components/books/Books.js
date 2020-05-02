import React from "react";
import Book from "../book";
import "../books/books.css";

const Books = ({ books }) => (
  <div className="">
    <h1 className="books-text">Books</h1>
    {books.map((book, i) => (
      <Book book={book} key={i} />
    ))}
  </div>
);

export default Books;
