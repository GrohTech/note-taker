
// Dependencies
const express = require('express');
const notes = require("./data/db.json");

// Port
const PORT = process.env.PORT || 3001;

// Instantiate the server
const app = express();

// Lets Express app handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



// Come back to this part
app.get('/api/notes', (req, res) => {
    res.json(notes);
})


// Set up server listening
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });