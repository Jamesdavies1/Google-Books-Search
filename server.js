const express = require("express");
const mongoose = require("mongoose");
// const routes = require("./routes");
const { findAll } = require("./controllers/googleAPI");

const app = express();
const PORT = process.env.PORT || 3001;

// Create the connection to our mongo server
require("./database")();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/test", findAll);

// app.use(routes);

app.listen(PORT, () =>
  console.log(`API Server now listening on PORT ${PORT}!`)
);
