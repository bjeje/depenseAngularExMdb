const express = require('express');
const router = express.Router();

const depenseController = require('../controllers/depense.controller')

router.get('/', depenseController.getDepense);
router.post('/register', depenseController.getDepense);
router.post('/login', depenseController.getDepense);
module.exports = router;
