// Import express
const express = require('express');

// Init app
const app = express();

// Define port
const port = 3000;

// Route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
