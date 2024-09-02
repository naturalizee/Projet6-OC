const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const { upload, convertImage } = require('../middleware/multer-config');

const stuffCtrl = require('../controllers/stuff');


// Authentification non requise
router.get('/bestrating', stuffCtrl.getBestRatingBooks);
router.get('/', stuffCtrl.getAllBooks); // array of books
router.get('/:id', stuffCtrl.getOneBook); // single book

// Authentification requise
router.post('/', auth, upload, convertImage, stuffCtrl.createBook);
router.put('/:id', auth, upload, convertImage, stuffCtrl.modifyBook);
router.delete('/:id', auth, stuffCtrl.deleteBook);
router.post('/:id/rating', auth, stuffCtrl.ratingNotation); // For rating notation books

module.exports = router;