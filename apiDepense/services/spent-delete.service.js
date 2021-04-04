const Spent = require("../models/spentModel");
const { checkObjectId } = require('../helper/dbHelper');
const constants = require('../constants');

module.exports.deleteSpent = async ({ id }) => {
    try {
        checkObjectId(id);
        let spent = await Spent.findByIdAndDelete(id);
        if (!spent) {
            throw new Error(constants.spentMessage.SPENT_NOT_FOUND);
        }
        return spent;

    } catch (error) {
        console.log('Something went wrong: Service: deleteSpent', error);
        throw new Error(error);
    }
}
