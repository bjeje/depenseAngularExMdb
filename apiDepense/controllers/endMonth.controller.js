const endMonthService = require('../services/endMonth.service');
const constants = require('../constants');

module.exports.getEndMonth = async function (req, res) {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await endMonthService.getEndMonth(req.params);
        response.status = 200;
        response.message = constants.endMonthMessage.END_MONTH_FETCHED;
        response.body = responseFromService;
    } catch (error) {
        console.log('Something went wrong: Controller: getEndMonth', error);
        response.status = 400;
        response.message = error.message;
        response.body = {};
    }
    return res.status(response.status).send(response);
}

module.exports.createEndMonth = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await endMonthService.createEndMonth(req.body);
        response.status = 200;
        response.message = constants.endMonthMessage.END_MONTH_CREATED;
        response.body = responseFromService;
    } catch(error) {
        console.log('Something went wrong: Controller: createEndMonth', error);
        response.status = 400;
        response.message = error.message;
        response.body = {};
    }
    return res.status(response.status).send(response);
}

module.exports.deleteEndMonth = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await endMonthService.deleteEndMonth(req.params);
        response.status = 200;
        response.message = constants.endMonthMessage.END_MONTH_DELETED;
        response.body = responseFromService;
    } catch(error) {
        console.log('Something went wrong: Controller: deleteEndMonth', error);
        response.status = 400;
        response.message = error.message;
        response.body = {};
    }
    return res.status(response.status).send(response);
}

module.exports.getEndMonthById = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await endMonthService.getEndMonthById(req.params);
        response.status = 200;
        response.message = constants.endMonthMessage.END_MONTH_FETCHED;
        response.body = responseFromService;
    } catch (error) {
        console.log('Something went wrong: Controller: getOneEndMonth', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

module.exports.updateEndMonth = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await endMonthService.updateEndMonth({
            id: req.params.id,
            updateInfo: req.body
        });
        response.status = 200;
        response.message = constants.endMonthMessage.END_MONTH_UPDATED;
        response.body = responseFromService;
    } catch(error) {
        console.log('Something went wrong: Controller: updateEndMonth', error);
        response.status = 400;
        response.message = error.message;
        response.body = {};
    }
    return res.status(response.status).send(response);
}

module.exports.getLastEndMonth = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await endMonthService.getLastEndMonth(req.params);
        response.status = 200;
        response.message = constants.endMonthMessage.END_MONTH_FETCHED;
        response.body = responseFromService;
    } catch (error) {
        console.log('Something went wrong: Controller: getLastEndMonth', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

module.exports.getTwelveEndMonth = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await endMonthService.getTwelveEndMonth(req.params);
        response.status = 200;
        response.message = constants.endMonthMessage.END_MONTH_FETCHED;
        response.body = responseFromService;
    } catch (error) {
        console.log('Something went wrong: Controller: getTwelveEndMonth', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

module.exports.getEndMonthByDate = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await endMonthService.getEndMonthByDate(req.params);
        response.status = 200;
        response.message = constants.endMonthMessage.END_MONTH_FETCHED;
        response.body = responseFromService;
    } catch (error) {
        console.log('Something went wrong: Controller: getEndMonthByDate', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}
