const incomeGetOneService = require('../services/income-getOne.service');
const constants = require('../constants');

module.exports.getIncomeById = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await incomeGetOneService.getIncomeById(req.params);
        response.status = 200;
        response.message = constants.incomeMessage.INCOME_FETCHED;
        response.body = responseFromService;
    } catch (error) {
        console.log('Something went wrong: Controller: getOneIncome', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}
