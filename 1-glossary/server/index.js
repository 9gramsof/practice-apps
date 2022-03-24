require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const { Term } = require('./db')
const cors = require('cors');

app.use(cors());
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

  term.save((err, term)=>{
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });

})
//handle GET requests for all docs
app.get('/terms', (req, res) => {

  Term.find({}).exec((err, result) => {
    if (err) {
      res.send(err);
      return;
    }
    res.json(result);
  })
});

//handle an EDIT request

//handle a DELETE request
app.delete('/terms', (req, res) => {
  let name = req.body.name;
  console.log(name);
  Term.deleteOne({name: name}, (err, result) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(200);
    }
  });

})

//handle a search GET request
app.get('/terms/search', (req, res) => {
  console.log(req.body.name)
  let term = ".*" + req.body.name + ".*";
  console.log(term);

  Term.find({name: {$regex: term}}, (err, result) => {
    if (err) {
      res.send(err);
      return;
    }
    console.log(result);
    res.json(result);

  })

})


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
