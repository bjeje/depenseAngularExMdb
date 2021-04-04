const express = require('express');
const router = express.Router();

const spentController = require('../controllers/spent.controller')
const spentCreateController = require('../controllers/spent-create.controller')


router.get('/spent', spentController.getSpent);
/*router.get('/spents/:spentId', spentOneController.getSpent);*/
//router.post('/spent', spentCreateController.createSpent);
router.post('/spent', spentCreateController.createSpent);
/*router.post('/login', spentController.getSpent);*/
module.exports = router;
