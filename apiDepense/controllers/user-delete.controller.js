const userDeleteService = require('../services/user-delete.service');
const constants = require('../constants');

module.exports.deleteUser = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await userDeleteService.deleteUser(req.params);
        response.status = 200;
        response.message = constants.userMessage.USER_DELETED;
        response.body = responseFromService;
    } catch(error) {
        console.log('Something went wrong: Controller: deleteUser', error);
        response.status = 400;
        response.message = error.message;
        response.body = {};
    }
    return res.status(response.status).send(response);
}
