const incomeDeleteService = require('../services/income-delete.service');
const constants = require('../constants');

module.exports.deleteIncome = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await incomeDeleteService.deleteIncome(req.params);
        response.status = 200;
        response.message = constants.incomeMessage.INCOME_DELETED;
        response.body = responseFromService;
    } catch(error) {
        console.log('Something went wrong: Controller: deleteIncome', error);
        response.status = 400;
        response.message = error.message;
        response.body = {};
    }
    return res.status(response.status).send(response);
}
