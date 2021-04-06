const express = require('express');
const router = express.Router();

const spentController = require('../controllers/spent.controller')

router.get('/spent', spentController.getSpent);
router.get('/spent/FixedByDate/:dateBegin/:dateEnd', spentController.getSpentFixedByDate);
router.get('/spent/VariableByDate/:dateBegin/:dateEnd', spentController.getSpentVariableByDate);
router.get('/spent/nineFixed', spentController.getNineSpentFixed);
router.get('/spent/nineVariable', spentController.getNineSpentVariable);
router.get('/spent/:id', spentController.getSpentById);
router.post('/spent', spentController.createSpent);
router.put('/spent/:id', spentController.updateSpent);
router.delete('/spent/:id', spentController.deleteSpent);

/*router.post('/login', spentController.getSpent);*/
module.exports = router;
