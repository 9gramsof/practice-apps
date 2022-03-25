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
app.put('/terms', (req, res) => {
  let name = req.body.name;
  let nameUpdate = req.body.nameUpdate;
  let descriptionUpdate = req.body.descriptionUpdate;
  Term.findOneAndUpdate({name: name}, { name: nameUpdate, description: descriptionUpdate}).exec((err, result) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(200);
    }
  })
})


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
app.get('/terms/search/:term', (req, res) => {
  // console.log(res.body.toString());
  console.log(req.params.term);
  let term = ".*" + req.params.term + ".*";
  // console.log(term);

  Term.find({name: {$regex: term}}, (err, result) => {
    if (err) {
      res.send(err);
      return;
    }
    // console.log(result);
    res.json(result);

  })

})


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
