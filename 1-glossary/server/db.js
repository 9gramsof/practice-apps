const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost/glossary', {useNewUrlParser: true, useUnifiedTopology: true});

// 2. Set up any schema and models needed by the app

let termSchema = mongoose.Schema({
  name: String,
  description: String
});

let Term = mongoose.model('term', termSchema);

// let example = new Term({term: 'school', description: 'an establishment where students go to learn' })
// example.save();

// 3. Export the models
module.exports.Term = Term;

// 4. Import the models into any modules that need them
// import to index.js (server)