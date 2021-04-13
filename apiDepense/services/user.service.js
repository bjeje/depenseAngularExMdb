const Users = require("../models/userModel");
const { checkObjectId } = require('../helper/dbHelper');
const constants = require('../constants');
const env = require('../constants/env');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
        console.log(user.password)
        user.password = await bcrypt.hash(user.password, 15)
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
        updateInfo.password = await bcrypt.hash(updateInfo.password, 15);
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

module.exports.login = async (req, res) => {
    try {
        let users = new Users({...req});

        if (!users.login || !users.password) {
            return res.status(400).json({ message: 'Error. Please enter the correct username and password' })
        }

        let login = users.login;

        const user = await Users.findOne({ login }).lean();

        if (!user) {
            return res.status(400).json({ message: 'Error. Wrong login or password' })
        }

        if(await bcrypt.compare(users.password, user.password)) {
            const token = generateAccessToken(user.login, false)
            /*console.log(token);*/
            return token;
        } else {
            throw new Error(constants.forbiddenResponse.message);
        }

    } catch (error) {
        console.log('Something went wrong: Service: login', error);
        throw new Error(error);
    }
}

function generateAccessToken(login, admin) {
    return jwt.sign({login, admin}, env.TOKEN_SECRET, { expiresIn: '1800s' });
}
