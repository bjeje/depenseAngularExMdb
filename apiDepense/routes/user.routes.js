const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller')
const userOneController = require('../controllers/user-getOne.controller')
const userCreateController = require('../controllers/user-create.controller')
const userUpdateController = require('../controllers/user-update.controller')
const userDeleteController = require('../controllers/user-delete.controller')

router.get('/', userController.getUser);
router.get('/user/:id', userOneController.getUserById);
router.post('/signup', userCreateController.createUser);
router.put('/user/:id', userUpdateController.updateUser);
router.delete('/user/:id', userDeleteController.deleteUser);

module.exports = router;
