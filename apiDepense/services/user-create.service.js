const User = require("../models/userModel");

module.exports.createUser = async (req) => {
    try {
        let user = new User({...req});
        let result = await user.save();
        return result.toObject();

    } catch (error) {
        console.log('Something went wrong: Service: createUser', error);
        throw new Error(error);
    }
}
