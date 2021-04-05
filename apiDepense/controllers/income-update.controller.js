const incomeUpdateService = require('../services/income-update.service');
const constants = require('../constants');

module.exports.updateIncome = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await incomeUpdateService.updateIncome({
            id: req.params.id,
            updateInfo: req.body
        });
        response.status = 200;
        response.message = constants.incomeMessage.INCOME_UPDATED;
        response.body = responseFromService;
    } catch(error) {
        console.log('Something went wrong: Controller: updateIncome', error);
        response.status = 400;
        response.message = error.message;
        response.body = {};
    }
    return res.status(response.status).send(response);
}
