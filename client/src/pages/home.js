import React, { useState } from "react";
import axios from "axios";

import "../../src/style.css";
import Books from "../components/books";
import Navigation from "../components/nav";

const formatBooks = books =>
  books.map(
    ({
      id,
      volumeInfo: {
        imageLinks: { thumbnail }
      },
      volumeInfo
    }) => {
      return {
        googleID: id,
        thumbnail,
        ...volumeInfo
      };
    }
  );

function Home() {
  const [books, updateBooks] = useState([]);
  const [searchCriteria, updateCriteria] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .get("http://localhost:3001/api/search", {
        params: {
          q: searchCriteria
        }
      })
      .then(({ data }) => {
        const formattedBooks = formatBooks(data);
        updateBooks(formattedBooks);
      });
  };

  return (
    <div>
      <Navigation />

      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">google books!</h1>
          <p className="lead">
            Find your favourite books using the google book API
          </p>
        </div>
      </div>
      <form onSubmit={e => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="input">Search book here</label>
          <input
            type="input"
            className="form-control"
            id="input"
            aria-describedby="emailHelp"
            value={searchCriteria}
            onChange={e => updateCriteria(e.target.value)}
          />
          <small id="input-help" className="form-text text-muted">
            Lets find your favourite book!
          </small>
        </div>
        <button type="submit" className="btn btn-primary" role="submit">
          Submit
        </button>
      </form>
      {books && <Books books={books} location="home" />}
    </div>
  );
}

export default Home;
