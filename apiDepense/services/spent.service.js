const Spent = require("../models/spentModel");
const { checkObjectId } = require('../helper/dbHelper');
const constants = require('../constants');

module.exports.getSpent = async function () {
  try {
    return Spent.find();
  } catch (e) {
    throw Error(e)
  }
}

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
