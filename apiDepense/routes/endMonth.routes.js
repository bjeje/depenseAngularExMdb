const express = require('express');
const router = express.Router();

const Controller = require('../controllers/endMonth.controller')

router.get('/:owner', Controller.getEndMonth);
router.get('/last/:owner', Controller.getLastEndMonth);
router.get('/twelve/:owner', Controller.getTwelveEndMonth);
router.get('/allByDate/:dateBegin/:dateEnd/:owner', Controller.getEndMonthByDate);
router.get('/:id', Controller.getEndMonthById);
router.post('/', Controller.createEndMonth);
router.put('/:id', Controller.updateEndMonth);
router.delete('/:id', Controller.deleteEndMonth);

module.exports = router;
