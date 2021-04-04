const User = require("../models/userModel");
const { checkObjectId } = require('../helper/dbHelper');
const constants = require('../constants');

module.exports.deleteUser = async ({ id }) => {
    try {
        checkObjectId(id);
        let user = await User.findByIdAndDelete(id);
        if (!user) {
            throw new Error(constants.userMessage.USER_NOT_FOUND);
        }
        return user;

    } catch (error) {
        console.log('Something went wrong: Service: deleteUser', error);
        throw new Error(error);
    }
}
