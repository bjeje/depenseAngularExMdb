const express = require('express');
const router = express.Router();

const depenseController = require('../controllers/depense.controller')

router.get('/', depenseController.getDepense);
module.exports = router;
