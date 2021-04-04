const User = require("../models/userModel");
const { checkObjectId } = require('../helper/dbHelper');
const constants = require('../constants');

module.exports.updateUser = async ({ id, updateInfo }) => {
    try {
        checkObjectId(id);
        let user = await User.findOneAndUpdate(
            { _id: id },
            updateInfo,
            { new: true }
        )
        if (!user) {
            throw new Error(constants.userMessage.USER_NOT_FOUND);
        }
        return user;

    } catch (error) {
        console.log('Something went wrong: Service: updateUser', error);
        throw new Error(error);
    }
}
