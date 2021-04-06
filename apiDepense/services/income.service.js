const Income = require("../models/incomeModel");
const { checkObjectId } = require('../helper/dbHelper');
const constants = require('../constants');

module.exports.getIncome = async function () {
    try {
        return Income.find();
    } catch (e) {
        throw Error(e)
    }
}

module.exports.createIncome = async (req) => {
    try {
        let income = new Income({...req});
        let result = await income.save();
        return result.toObject();

    } catch (error) {
        console.log('Something went wrong: Service: createIncome', error);
        throw new Error(error);
    }
}

module.exports.deleteIncome = async ({ id }) => {
    try {
        checkObjectId(id);
        let income = await Income.findByIdAndDelete(id);
        if (!income) {
            throw new Error(constants.incomeMessage.INCOME_NOT_FOUND);
        }
        return income;

    } catch (error) {
        console.log('Something went wrong: Service: deleteIncome', error);
        throw new Error(error);
    }
}

module.exports.getIncomeById = async ({ id }) => {
    try {
        checkObjectId(id);
        let income = await Income.findById(id);
        if (!income) {
            throw new Error(constants.incomeMessage.INCOME_NOT_FOUND);
        }
        return income;
    } catch (error) {
        console.log('Something went wrong: Service: getOneIncome', error);
        throw new Error(error);
    }
}

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

module.exports.getNineIncome = async () => {
    try {
        let spent = await Income.find().sort({_id: -1}).limit(9);
        if (!spent) {
            throw new Error(constants.spentMessage.SPENT_NOT_FOUND);
        }
        return spent;
    } catch (error) {
        console.log('Something went wrong: Service: getNineIncome', error);
        throw new Error(error);
    }
}
