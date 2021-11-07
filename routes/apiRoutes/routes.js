// Dependencies
const router = require('express').Router();
const fs = require('fs');
const { db } = require('../../data/db.json');
const xyz = require('../../data/db.json')
const util = require('util');
console.log(db);
const readFile = util.promisify(fs.readFile);

// Retrieve existing notes from server and display on client
router.get('/notes', (req, res) => {
    // function readNote(){
    //     return readFile(xyz, "utf8")
    // }
    // readNote().then(notes => {
    //     let note = [];
    //     note.concat(JSON.parse(notes)
    //     )
        res.json(xyz);
    // })
});


// Listens for new notes on client and then sends those notes to the server
router.post('/notes', (req, res) => {
    // req.body.id = notes
    // const newNote = {
    //     title:
    //     id:
    //     text:
    // }
    console.log(req.body);
}); 





module.exports = router;