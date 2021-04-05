const Income = require("../models/incomeModel");
const { checkObjectId } = require('../helper/dbHelper');
const constants = require('../constants');

module.exports.updateIncome = async ({ id, updateInfo }) => {
    try {
        checkObjectId(id);
        let income = await Income.findOneAndUpdate(
            { _id: id },
            updateInfo,
            { new: true }
        )
        if (!income) {
            throw new Error(constants.incomeMessage.INCOME_NOT_FOUND);
        }
        return income;

    } catch (error) {
        console.log('Something went wrong: Service: updateIncome', error);
        throw new Error(error);
    }
}
