const express = require('express');
const router = express.Router();

const spentController = require('../controllers/spent.controller')
const spentOneController = require('../controllers/spent-getOne.controller')
const spentCreateController = require('../controllers/spent-create.controller')
const spentUpdateController = require('../controllers/spent-update.controller')
const spentDeleteController = require('../controllers/spent-delete.controller')


router.get('/spent', spentController.getSpent);
router.get('/spent/:id', spentOneController.getSpentById);
router.post('/spent', spentCreateController.createSpent);
router.put('/spent/:id', spentUpdateController.updateSpent);
router.delete('/spent/:id', spentDeleteController.deleteSpent);



/*router.post('/login', spentController.getSpent);*/
module.exports = router;
