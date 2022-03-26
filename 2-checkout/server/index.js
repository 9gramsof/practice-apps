require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));


/*

session_id = req.sessio_id
data = {

  login: {
    name: String,
    email: String,
    password: String
  },

  shipping: {
    line1: String,
    line2: String,
    city: String,
    state: String,
    zip: String,
    phone: Number
  },

  billing: {
    creditcard: String,
    expiration: String,
    CVV: String,
    billingZipCode: String
  }

}
*/

app.get('url', (req, res)=>{

  console.log(req.session_id);
})


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
