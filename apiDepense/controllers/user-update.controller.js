const userUpdateService = require('../services/user-update.service');
const constants = require('../constants');

module.exports.updateUser = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await userUpdateService.updateUser({
            id: req.params.id,
            updateInfo: req.body
        });
        response.status = 200;
        response.message = constants.userMessage.USER_UPDATED;
        response.body = responseFromService;
    } catch(error) {
        console.log('Something went wrong: Controller: updateUser', error);
        response.status = 400;
        response.message = error.message;
        response.body = {};
    }
    return res.status(response.status).send(response);
}
