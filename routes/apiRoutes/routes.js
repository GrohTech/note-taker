const notes = require('./data/db.json');

// Come back to this part
app.get('/api/notes', (req, res) => {
    res.json(notes);
})