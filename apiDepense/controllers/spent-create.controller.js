const spentCreateService = require('../services/spent-create.service');
const constants = require('../constants');

module.exports.createSpent = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await spentCreateService.createSpent(req.body);
        response.status = 200;
        response.message = constants.spentMessage.SPENT_CREATED;
        response.body = responseFromService;
    } catch(error) {
        console.log('Something went wrong: Controller: createSpent', error);
        response.status = 400;
        response.message = error.message;
        response.body = {};
    }
    return res.status(response.status).send(response);
}
