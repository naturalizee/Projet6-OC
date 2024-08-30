const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const stuffCtrl = require('../controllers/stuff');

// Authentification non requise
router.get('/books', stuffCtrl.getAllBooks); // array of books
router.get('/:id', stuffCtrl.getOneBook); // single book
// router.get('/bestrating', stuffCtrl.getBestRatingBooks); // array of books best rating /* CREER LE getBestRatingBooks */

// Authentification requise
router.post('/books', auth, multer, stuffCtrl.createBook);
// router.put('/:id', auth, multer, stuffCtrl.modifyBook);
// router.delete('/:id', auth, stuffCtrl.deleteBook);
// router.post('/:id/rating', auth, stuffCtrl.ratingNotation); // For rating notation books /* CREER LE ratingNotation */ 

module.exports = router;