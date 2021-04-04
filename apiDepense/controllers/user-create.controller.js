const userCreateService = require('../services/user-create.service');
const constants = require('../constants');

module.exports.createUser = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await userCreateService.createUser(req.body);
        response.status = 200;
        response.message = constants.userMessage.SIGNUP_SUCCESS;
        response.body = responseFromService;
    } catch(error) {
        console.log('Something went wrong: Controller: createUser', error);
        response.status = 400;
        response.message = error.message;
        response.body = {};
    }
    return res.status(response.status).send(response);
}
