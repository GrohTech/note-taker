
// Dependencies
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Port
const PORT = process.env.PORT || 3001;

// Instantiate the server
const app = express();

// Lets Express app handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// Set up server listening
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });