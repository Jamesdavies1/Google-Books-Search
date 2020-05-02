import React, { useEffect, useState } from "react";
import axios from "axios";
import { render } from "react-dom";

import Books from "../components/books";
import Navigation from "../components/nav";

function SavedBooks() {
  const [books, updateBooks] = useState([]);

  useEffect(
    () =>
      axios
        .get("http://localhost:3001/api/books")
        .then(savedBooks => updateBooks(savedBooks)),
    []
  );

  return (
    <div>
      <Navigation />
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">google books!</h1>
          <p className="lead">Here are your saved books</p>
        </div>
      </div>
    </div>
  );
}

export default SavedBooks;
