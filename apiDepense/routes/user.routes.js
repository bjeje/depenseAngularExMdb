const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller')
//const userOneController = require('../controllers/user-getOne.controller')
//const userCreateController = require('../controllers/user-create.controller')
//const userUpdateController = require('../controllers/user-update.controller')
//const userDeleteController = require('../controllers/user-delete.controller')


//router.get('/signup', userController.getUser);
router.get('/', userController.getUser);
//router.get('/user/:id', userOneController.getSpentById);
//router.post('/signup', userCreateController.createSpent);
//router.put('/user/:id', userUpdateController.updateSpent);
//router.delete('/user/:id', userDeleteController.deleteSpent);

module.exports = router;
