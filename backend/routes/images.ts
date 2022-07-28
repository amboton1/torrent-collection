import express from 'express';

const { uploadImage } = require('../controllers/imageController');
const router = express.Router();

router.post('/upload', uploadImage)

module.exports = router;