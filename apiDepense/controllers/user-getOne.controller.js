const userGetOneService = require('../services/user-getOne.service');
const constants = require('../constants');

module.exports.getUserById = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await userGetOneService.getUserById(req.params);
        response.status = 200;
        response.message = constants.userMessage.USER_FETCHED;
        response.body = responseFromService;
    } catch (error) {
        console.log('Something went wrong: Controller: getOneUser', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}
