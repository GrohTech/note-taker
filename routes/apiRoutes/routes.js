// Dependencies
const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const db = require('../../data/db.json');

// Retrieves and displays previous/existing notes on client
router.get('/notes', (req, res) => {
    let notes = JSON.parse(fs.readFileSync('./data/db.json', 'utf-8'));
    console.log(notes);
        res.json(notes);
});

// Listens for new notes on client and then sends those notes to the server
router.post('/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = uuidv4();
    
    let notes = JSON.parse(fs.readFileSync('./data/db.json', 'utf-8'));
    notes.push(newNote);
    
    fs.writeFileSync('./data/db.json', JSON.stringify(notes));
    res.json(notes);
}); 

module.exports = router;