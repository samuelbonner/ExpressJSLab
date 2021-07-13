const express = require('express');
const path = require('path');
let app = express();

app.use((req, res, next) => {
    console.log(`The requested URL was ${req.originalUrl}`);
    next();
});

app.use(express.static(path.join(__dirname, '../public')));


app.listen(3000);