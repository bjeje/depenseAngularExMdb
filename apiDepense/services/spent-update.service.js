const Spent = require("../models/spentModel");
const { formatMongoData, checkObjectId } = require('../helper/dbHelper');
const constants = require('../constants');

module.exports.updateSpent = async ({ id, updateInfo }) => {
    try {
        checkObjectId(id);
        let spent = await Spent.findOneAndUpdate(
            { _id: id },
            updateInfo,
            { new: true }
        )
        if (!spent) {
            throw new Error(constants.spentMessage.SPENT_NOT_FOUND);
        }
        return spent;

    } catch (error) {
        console.log('Something went wrong: Service: updateSpent', error);
        throw new Error(error);
    }
}
