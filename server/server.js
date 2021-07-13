const express = require("express");
const path = require("path");
const fs = require("fs"); // Currently unused
let app = express();

app.use(express.urlencoded({ extended: false })); // parses form data

// This console logs the request original Url & request url when serving client
// app.use((req, res, next) => {
//   console.log(`The requested Original URL was ${req.originalUrl}`);
//   console.log(`The requested URL was ${req.url}`);
//   console.log(); // blank for readability
//   next();
// });

app.post("/contact-form", (req, res) => {
  const newMessage = {
    email: req.body.email,
    message: req.body.message,
  };

  fs.appendFileSync("contact.json", JSON.stringify(newMessage), (err) => {
    if (err) console.log(err);
  });
  
  console.log(req.body.text);
  res.send(`Thank you for submitting your form! \n
  Email: ${newMessage.email}
  Message: ${newMessage.message}`);
});

app.use(express.static("public"));

app.listen(3000);
