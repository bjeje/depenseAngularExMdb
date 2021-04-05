const express = require('express');
const router = express.Router();

const incomeController = require('../controllers/income.controller')

router.get('/income', incomeController.getIncome);
router.get('/income/:id', incomeController.getIncomeById);
router.post('/income', incomeController.createIncome);
router.put('/income/:id', incomeController.updateIncome);
router.delete('/income/:id', incomeController.deleteIncome);

module.exports = router;
