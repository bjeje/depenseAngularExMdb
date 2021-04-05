const Users = require("../models/userModel");
const { checkObjectId } = require('../helper/dbHelper');
const constants = require('../constants');

module.exports.getUser = async function () {
    try {
        return Users.find();
    } catch (e) {
        throw Error(e)
    }
}

module.exports.createUser = async (req) => {
    try {
        let user = new Users({...req});
        let result = await user.save();
        return result.toObject();

    } catch (error) {
        console.log('Something went wrong: Service: createUser', error);
        throw new Error(error);
    }
}

module.exports.deleteUser = async ({ id }) => {
    try {
        checkObjectId(id);
        let user = await Users.findByIdAndDelete(id);
        if (!user) {
            throw new Error(constants.userMessage.USER_NOT_FOUND);
        }
        return user;

    } catch (error) {
        console.log('Something went wrong: Service: deleteUser', error);
        throw new Error(error);
    }
}

module.exports.getUserById = async ({ id }) => {
    try {
        checkObjectId(id);
        let user = await Users.findById(id);
        if (!user) {
            throw new Error(constants.userMessage.USER_NOT_FOUND);
        }
        return user;
    } catch (error) {
        console.log('Something went wrong: Service: getOneUser', error);
        throw new Error(error);
    }
}

module.exports.updateUser = async ({ id, updateInfo }) => {
    try {
        checkObjectId(id);
        let user = await Users.findOneAndUpdate(
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
