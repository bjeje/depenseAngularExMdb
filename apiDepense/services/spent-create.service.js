const Spent = require("../models/spentModel");

module.exports.createSpent = async (req) => {
    try {
        let spent = new Spent({...req});
        let result = await spent.save();
        return result.toObject();

    } catch (error) {
        console.log('Something went wrong: Service: createSpent', error);
        throw new Error(error);
    }
}
