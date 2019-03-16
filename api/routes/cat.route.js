const express = require('express');
const router = express.Router();

const cat_controller = require('../controllers/cat.controller');


router.post('/ranking', cat_controller.cat_add);

module.exports = router;