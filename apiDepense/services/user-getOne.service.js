const User = require("../models/userModel");
const { checkObjectId } = require('../helper/dbHelper');
const constants = require('../constants');

module.exports.getUserById = async ({ id }) => {
    try {
        checkObjectId(id);
        let user = await User.findById(id);
        if (!user) {
            throw new Error(constants.userMessage.USER_NOT_FOUND);
        }
        return user;
    } catch (error) {
        console.log('Something went wrong: Service: getOneUser', error);
        throw new Error(error);
    }
}
