
var artistsModel = require('../models/artistsModel');

exports.getAllArtists = (req, res, next) => {
    let artists = artistsModel.getAll();
    artists.then(([rows, fieldData]) => {
        res.render('artists', {
            pageTitle: 'Artists Directory Page',
            heading: 'Artists Directory',
            requiresJS: true,
            css: 'artists',
            js: 'artists',
            artists: rows
        });
    })
    .catch(error => console.log(error));
}

exports.addArtist = (req, res, next) => {
    let artist = {name, description, url} = req.body;
    artistsModel.add(artist);
    res.redirect(301, '/artists');
}

exports.deleteArtist = (req, res, next) => {
    let artistID = req.body.id;
    artistsModel.delete(artistID);
    res.redirect(301, '/artists')
}

exports.searchArtists = (req, res, next) => {
    let { searchKey } = req.body;
    let artists = artistsModel.search(searchKey);
    artists.then(([rows, fieldData]) => {
        res.render('artists', {
            pageTitle: 'Artists Directory Page',
            heading: 'Artists Directory',
            requiresJS: true,
            css: 'artists',
            js: 'artists',
            artists: rows
        });
    })
    .catch(error => console.log(error));
}