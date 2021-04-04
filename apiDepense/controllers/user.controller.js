const UserService = require('../services/user.service');

module.exports.getUser = async function (req, res) {
    try {
        let user = await UserService.getUser()
        res.status(200)
        res.send(user);
    } catch (e) {
        res.status(400)
        res.send();
    }
}
