const spentDeleteService = require('../services/spent-delete.service');
const constants = require('../constants');

module.exports.deleteSpent = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await spentDeleteService.deleteSpent(req.params);
        response.status = 200;
        response.message = constants.spentMessage.SPENT_DELETED;
        response.body = responseFromService;
    } catch(error) {
        console.log('Something went wrong: Controller: deleteSpent', error);
        response.status = 400;
        response.message = error.message;
        response.body = {};
    }
    return res.status(response.status).send(response);
}
