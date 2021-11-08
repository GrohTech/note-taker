// Dependencies
const router = require('express').Router();
const fs = require('fs');
const path = require('path');
// const util = require('util');
// const { db } = require('../../data/db.json');
const db = require('../../data/db.json');
// const readFile = util.promisify(fs.readFile);
const { v4: uuidv4 } = require('uuid');

// Retrieve existing notes from server 
// const savedNotes = fs.readFileSync(db, 'utf-8');
// if(savedNotes) {
//     let previousNotes = JSON.parse(savedNotes);
//     no
// }

// Display existing notes on client
router.get('/notes', (req, res) => {
    let notes = JSON.parse(fs.readFileSync('./data/db.json', 'utf-8'));
    console.log(notes);
    // function readNote(){
    //     return readFile(xyz, "utf8")
    // }
    // readNote().then(notes => {
    //     let note = [];
    //     note.concat(JSON.parse(notes)
    //     )
        res.json(notes);
});


// Listens for new notes on client and then sends those notes to the server
router.post('/notes', (req, res) => {
    // req.body.id = notes
    const newNote = req.body;
    newNote.id = uuidv4();
    let notes = JSON.parse(fs.readFileSync('./data/db.json', 'utf-8'));
    notes.push(newNote);
    fs.writeFileSync('./data/db.json', JSON.stringify(notes));
    // const newNote = {
    //     title:
    //     id:
    //     text:
    // }
    console.log(req.body);
}); 

module.exports = router;