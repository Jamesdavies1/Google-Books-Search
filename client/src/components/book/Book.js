import React from "react";
import axios from "axios";

import "./book.css";

const Book = ({
  book: { title, authors, description, imageLinks, infoLink, googleID }
}) => (
  <div className="card">
    <div className="card-header">{title}</div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Author(s):{authors}</li>
      <li className="list-group-item description">
        {description}
        <img src={imageLinks.thumbnail} className="thumbnail"></img>
      </li>
      {/* <img src={imageLinks.smallThumbnail} className="thumbnail"></img> */}
      <li className="list-group-item href">
        <a href={infoLink}>{infoLink}</a>
      </li>
      <button
        className="save"
        onClick={() => {
          axios.post("http://localhost:3001/api/books", {
            googleID,
            title,
            authors,
            description
          });
        }}
      >
        Save For Later
      </button>
    </ul>
  </div>
);

export default Book;
