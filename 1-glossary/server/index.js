require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const { Term } = require('./db')
// const bodyParser = require('body-parser');

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

//handle POST requests
app.post('/terms', (req, res) => {
  let name = req.body.name;
  let description = req.body.description;

  let term = new Term({
    name: name,
    description: description
  });

  term.save();
  res.end();
})
//handle GET requests

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
