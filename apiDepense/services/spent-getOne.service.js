const Spent = require("../models/spentModel");
const { checkObjectId } = require('../helper/dbHelper');
const constants = require('../constants');

module.exports.getSpentById = async ({ id }) => {
    try {
        checkObjectId(id);
        let spent = await Spent.findById(id);
        if (!spent) {
            throw new Error(constants.spentMessage.SPENT_NOT_FOUND);
        }
        return spent;
    } catch (error) {
        console.log('Something went wrong: Service: getOneSpent', error);
        throw new Error(error);
    }
}
