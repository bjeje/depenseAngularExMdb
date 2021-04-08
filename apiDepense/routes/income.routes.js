const express = require('express');
const router = express.Router();

const Controller = require('../controllers/income.controller')

router.get('/', Controller.getIncome);
router.get('/nine', Controller.getNineIncome);
router.get('/allByDateCat/:dateBegin/:dateEnd', Controller.getIncomeByDateAndSubCategory);
router.get('/:id', Controller.getIncomeById);
router.post('/', Controller.createIncome);
router.put('/:id', Controller.updateIncome);
router.delete('/:id', Controller.deleteIncome);

module.exports = router;
