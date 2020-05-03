import React from "react";
import axios from "axios";

import "./book.css";

const Book = ({
  book: { title, authors, description, thumbnail, infoLink, googleID, _id },
  location,
  refresh
}) => (
  <div className="card">
    <div className="card-header">{title}</div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Author(s):{authors}</li>
      <li className="list-group-item description">
        {description}
        <img src={thumbnail} className="thumbnail"></img>
      </li>
      {/* <img src={imageLinks.smallThumbnail} className="thumbnail"></img> */}
      <li className="list-group-item href">
        <a href={infoLink}>{infoLink}</a>
      </li>
      {location === "home" ? (
        <button
          className="save"
          onClick={() => {
            axios.post("http://localhost:3001/api/books", {
              googleID,
              title,
              authors,
              description,
              thumbnail,
              link: infoLink
            });
          }}
        >
          Save For Later
        </button>
      ) : (
        <button
          className="save"
          onClick={() => {
            axios
              .delete("http://localhost:3001/api/books", {
                params: {
                  id: _id
                }
              })
              .then(() => refresh());
          }}
        >
          Delete
        </button>
      )}
    </ul>
  </div>
);

export default Book;
