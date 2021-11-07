// Dependencies
const router = require('express').Router();
const { db } = require('../../data/db.json');

// Retrieve existing notes from server and display on client
router.get('/notes', (req, res) => {
    return res.json(notes);

});

// Listens for new notes on client and then sends those notes to the server
router.post('/notes', (req, res) => {
    req.body.id = notes
}); 





module.exports = router;