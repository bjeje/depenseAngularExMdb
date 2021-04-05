const Income = require("../models/incomeModel");

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
