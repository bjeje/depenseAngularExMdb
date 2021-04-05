const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller')

router.get('/', userController.getUser);
router.get('/user/:id', userController.getUserById);
router.post('/signup', userController.createUser);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

module.exports = router;
