const Users = require("../models/userModel");

module.exports.getUser = async function () {
    try {
        return Users.find();
    } catch (e) {
        throw Error(e)
    }
}
