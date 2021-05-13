const express = require('express');
const router = express.Router();

const spentController = require('../controllers/spent.controller')

router.get('/', spentController.getSpent);
router.get('/Fixed', spentController.getSpentFixed);
router.get('/FixedByDate/:dateBegin/:dateEnd', spentController.getSpentFixedByDate);
router.get('/VariableByDate/:dateBegin/:dateEnd', spentController.getSpentVariableByDate);
router.get('/allByDateCat/:dateBegin/:dateEnd', spentController.getSpentByDateAndSubCategory);
router.get('/nineFixed', spentController.getNineSpentFixed);
router.get('/nineVariable', spentController.getNineSpentVariable);
router.get('/:id', spentController.getSpentById);
router.post('/', spentController.createSpent);
router.put('/:id', spentController.updateSpent);
router.delete('/:id', spentController.deleteSpent);

module.exports = router;
