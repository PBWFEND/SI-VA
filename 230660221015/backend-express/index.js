// LOAD ENV (WAJIB PALING ATAS)
require('dotenv').config();

// import express
const express = require('express');

// import CORS
const cors = require('cors');

// import bodyParser
const bodyParser = require('body-parser');

// import router
const router = require('./routes');

// init app
const app = express();

// use cors
app.use(cors());

// use body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// define port
const port = process.env.PORT || 3000;

// route test
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// define routes
app.use('/api', router);

// start server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
