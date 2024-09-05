const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const { upload, convertImage } = require('../middlewares/multer-config');

const stuffCtrl = require('../controllers/stuff');


// Authentification non requise
router.get('/bestrating', stuffCtrl.getBestRatingBooks);
router.get('/', stuffCtrl.getAllBooks);
router.get('/:id', stuffCtrl.getOneBook);

// Authentification requise
router.post('/', auth, upload, convertImage, stuffCtrl.createBook);
router.put('/:id', auth, upload, convertImage, stuffCtrl.modifyBook);
router.delete('/:id', auth, stuffCtrl.deleteBook);
router.post('/:id/rating', auth, stuffCtrl.ratingNotation);

module.exports = router;