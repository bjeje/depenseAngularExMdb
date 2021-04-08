const incomeService = require('../services/income.service');
const constants = require('../constants');

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

module.exports.createIncome = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await incomeService.createIncome(req.body);
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

module.exports.deleteIncome = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await incomeService.deleteIncome(req.params);
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

module.exports.getIncomeById = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await incomeService.getIncomeById(req.params);
        response.status = 200;
        response.message = constants.incomeMessage.INCOME_FETCHED;
        response.body = responseFromService;
    } catch (error) {
        console.log('Something went wrong: Controller: getOneIncome', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

module.exports.updateIncome = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await incomeService.updateIncome({
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

module.exports.getNineIncome = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await incomeService.getNineIncome(req.params);
        response.status = 200;
        response.message = constants.incomeMessage.INCOME_FETCHED;
        response.body = responseFromService;
    } catch (error) {
        console.log('Something went wrong: Controller: getNineIncome', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

module.exports.getIncomeByDateAndSubCategory = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await incomeService.getIncomeByDateAndSubCategory(req.params);
        response.status = 200;
        response.message = constants.spentMessage.SPENT_FETCHED;
        response.body = responseFromService;
    } catch (error) {
        console.log('Something went wrong: Controller: getIncomeByDateAndSubCategory', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}
