const spentGetOneService = require('../services/spent-getOne.service');
const constants = require('../constants');

module.exports.getSpentById = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await spentGetOneService.getSpentById(req.params);
        response.status = 200;
        response.message = constants.spentMessage.SPENT_FETCHED;
        response.body = responseFromService;
    } catch (error) {
        console.log('Something went wrong: Controller: getOneSpent', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}
