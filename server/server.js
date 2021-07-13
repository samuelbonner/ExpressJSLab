const express = require("express");
const path = require("path");
const fs = require("fs");
let app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(`The requested URL was ${req.originalUrl}`);
  next();
});

app.post("/contact-form", (req, res) => {
  console.log(req.body.text);
  res.send(`Thank you for submitting your form! ${"\n"} ${req.body.text}`);
});

app.use(express.static(path.join(__dirname, "../public")));

app.listen(3000);
