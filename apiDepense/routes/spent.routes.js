const express = require('express');
const router = express.Router();

const spentController = require('../controllers/spent.controller')

router.get('/:owner', spentController.getSpent);
router.get('/Fixed/:owner', spentController.getSpentFixed);
router.get('/FixedByDate/:dateBegin/:dateEnd/:owner', spentController.getSpentFixedByDate);
router.get('/VariableByDate/:dateBegin/:dateEnd/:owner', spentController.getSpentVariableByDate);
router.get('/allByDateCat/:dateBegin/:dateEnd/:owner', spentController.getSpentByDateAndSubCategory);
router.get('/nineFixed/:owner', spentController.getNineSpentFixed);
router.get('/nineVariable/:owner', spentController.getNineSpentVariable);
router.get('/:id', spentController.getSpentById);
router.post('/', spentController.createSpent);
router.put('/:id', spentController.updateSpent);
router.delete('/:id', spentController.deleteSpent);

module.exports = router;
