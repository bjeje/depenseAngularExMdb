const incomeCreateService = require('../services/income-create.service');
const constants = require('../constants');

module.exports.createIncome = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await incomeCreateService.createIncome(req.body);
        response.status = 200;
        response.message = constants.incomeMessage.INCOME_CREATED;
        response.body = responseFromService;
    } catch(error) {
        console.log('Something went wrong: Controller: createIncome', error);
        response.status = 400;
        response.message = error.message;
        response.body = {};
    }
    return res.status(response.status).send(response);
}
