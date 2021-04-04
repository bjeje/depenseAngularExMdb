const spentUpdateService = require('../services/spent-update.service');
const constants = require('../constants');

module.exports.updateSpent = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await spentUpdateService.updateSpent({
            id: req.params.id,
            updateInfo: req.body
        });
        response.status = 200;
        response.message = constants.spentMessage.SPENT_UPDATED;
        response.body = responseFromService;
    } catch(error) {
        console.log('Something went wrong: Controller: createSpent', error);
        response.status = 400;
        response.message = error.message;
        response.body = {};
    }
    return res.status(response.status).send(response);
}
