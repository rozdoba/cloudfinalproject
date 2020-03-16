let express = require('express');
let router = express.Router();
let artistsController = require('../controllers/artistsController')

router.get('/artists', artistsController.getAllArtists);

router.post('/artists/add', artistsController.addArtist);

router.post('/artists/delete', artistsController.deleteArtist);

router.post('/artists/search', artistsController.searchArtists);

module.exports = router;