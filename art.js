//Loads express framework
const express = require('express');
//imports dataProvider.js
const dataProvider = require('./dataProvider');
//Creates an instance of an express application
const app = express();
//needed process.env.PORT for Render
const PORT = process.env.PORT || 3000;
//Serves HTML file directly
app.use(express.static('static'));

//GET route handlers
app.get('/', (req, res)=> {
    res.json(dataProvider.getAllPaintings());
});

app.get('/gallery/:id', (req, res) => {
    const paintings = dataProvider.getPaintingsByGallery(req.params.id);
    res.json(paintings);
});

app.get('/artist/:id', (req, res) => {
    const paintings = dataProvider.getPaintingsByArtist(req.params.id);
    res.json(paintings);
});

app.get('/year/:min/:max', (req, res) => {
    const min = Number(req.params.min);
    const max = Number(req.params.max);
    const paintings = dataProvider.getPaintingsByYearRange(min, max);
    res.json(paintings);
});

app.get('/:id', (req, res) => {
    const painting = dataProvider.getPaintingById(req.params.id);
    painting ? res.json(painting) : res.status(404).send('Painting not found');
});

//Starts my server
app.listen(PORT, () =>{
    console.log(`Server running on http://localhost:${PORT}`);
});

