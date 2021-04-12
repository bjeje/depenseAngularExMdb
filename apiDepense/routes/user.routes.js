const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const userController = require('../controllers/user.controller')

router.get('/', auth.checkTokenMiddleware, userController.getUser);
router.get('/:id', auth.checkTokenMiddleware, userController.getUserById);
router.post('/signup', userController.createUser);
router.post('/signin', userController.login);
router.put('/:id', auth.checkTokenMiddleware, userController.updateUser);
router.delete('/:id', auth.checkTokenMiddleware, userController.deleteUser);

module.exports = router;
