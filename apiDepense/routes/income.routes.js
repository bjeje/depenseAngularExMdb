const express = require('express');
const router = express.Router();

const incomeController = require('../controllers/income.controller')
//const incomeOneController = require('../controllers/income-getOne.controller')
const incomeCreateController = require('../controllers/income-create.controller')
//const incomeUpdateController = require('../controllers/income-update.controller')
const incomeDeleteController = require('../controllers/income-delete.controller')

router.get('/income', incomeController.getIncome);
//router.get('/income/:id', incomeOneController.getIncomeById);
router.post('/income', incomeCreateController.createIncome);
//router.put('/income/:id', incomeUpdateController.updateIncome);
router.delete('/income/:id', incomeDeleteController.deleteIncome);

module.exports = router;
