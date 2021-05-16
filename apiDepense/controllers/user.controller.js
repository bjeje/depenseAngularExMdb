const userService = require('../services/user.service');
const constants = require('../constants');
const { body } = require('express-validator');
const { validationResult } = require('express-validator');

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
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }
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

module.exports.login = async (req, res) => {
    let response = { ...constants.defaultServerResponse };
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }
        const responseFromService = await userService.login(req.body);
        response.status = 200;
        response.message = constants.userMessage.LOGIN_SUCCESS;
        response.body = responseFromService;
    } catch(error) {
        console.log('Something went wrong: Controller: login', error);
        response.status = 400;
        response.message = error.message;
        response.body = {};
    }
    return res.status(response.status).send(response);
}

/*------- Validate method user --------*/

exports.validate = (method) => {
    switch (method) {
        case 'createUser': {
            //const checkDate = verifyDateMinMax();
            return [
                body('login', "Login invalide !").exists().isString().isLength({min:6 , max: 30}),
                body('password', "Mot de passe invalide !").exists().isString().isLength({min:8 , max:30}),
                body('name').optional({checkFalsy: true, nullable: true}).isString()
                    .isLength({max: 60}).isAlpha().withMessage('Nom invalide !'),
                body('firstname').optional({checkFalsy: true, nullable: true}).isString()
                    .isLength({max: 60}).isAlpha().withMessage('Prénom invalide !'),
                body('email', 'Email invalide!').exists().isEmail(),
                body('city').optional({checkFalsy: true, nullable: true}).isString()
                    .isLength({max: 60}).matches(/^[A-Za-z ]+$/).withMessage('Ville invalide !'),
                body('postalCode').optional({checkFalsy: true, nullable: true})
                    .isPostalCode('FR').withMessage('Code postal invalide !'),
                body('birthdate').optional({checkFalsy: true, nullable: true})
                    .isISO8601().withMessage('Date de naissance invalide !')
            ]
        }

        case 'signIn': {
            return [
                body('login', "Login invalide !").exists().isString().isLength({min:6 , max: 30}),
                body('password', "Mot de passe invalide !").exists().isString().isLength({min:8 , max:30})
            ]
        }
    }
}

function verifyDateMinMax() {
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let day = d.getDate();
    let cA = new Date(year - 16, month, day).toDateString();
    let cB = new Date(year - 100, month, day).toDateString();
    return {cA, cB};
}
