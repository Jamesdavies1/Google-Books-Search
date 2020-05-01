import React from "react";

function Home() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">google books!</h1>
          <p className="lead">
            Find your favourite books using the google book API
          </p>
        </div>
      </div>
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Search book here</label>
          <input
            type="input"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            Lets find your favourite book!
          </small>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Home;
