const userService = require('../services/user.service');
const constants = require('../constants');

module.exports.getUser = async function (req, res) {
    try {
        let user = await userService.getUser()
        res.status(200)
        res.send(user);
    } catch (e) {
        res.status(400)
        res.send();
    }
}

module.exports.createUser = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await userService.createUser(req.body);
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

module.exports.deleteUser = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await userService.deleteUser(req.params);
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

module.exports.getUserById = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await userService.getUserById(req.params);
        response.status = 200;
        response.message = constants.userMessage.USER_FETCHED;
        response.body = responseFromService;
    } catch (error) {
        console.log('Something went wrong: Controller: getOneUser', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

module.exports.updateUser = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const responseFromService = await userService.updateUser({
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
