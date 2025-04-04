//loads JSON file
const paintings = require('./paintings.json');
//functions
function getAllPaintings() {
    return paintings;
}

function getPaintingById(id) {
    return paintings.find(p => p.paintingID == id);
}

function getPaintingsByGallery(galleryID) {
    return paintings.filter(p => p.gallery.galleryID == galleryID);
}

function getPaintingsByArtist(artistID) {
    return paintings.filter(p => p.artist.artistID == artistID);
}

function getPaintingsByYearRange(min, max) {
    return paintings.filter(p => p.yearOfWork >= min && p.yearOfWork <= max);
}
//exports functions to be used in art.js
module.exports = {
    getAllPaintings,
    getPaintingById,
    getPaintingsByGallery,
    getPaintingsByArtist,
    getPaintingsByYearRange
};