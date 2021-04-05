const incomeService = require('../services/income.service');

module.exports.getIncome = async function (req, res) {
    try {
        let income = await incomeService.getIncome()
        res.status(200)
        res.send(income);
    } catch (e) {
        res.status(400)
        res.send();
    }
}
