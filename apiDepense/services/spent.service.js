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

module.exports.getNineSpentVariable = async () => {
  try {
    let spent = await Spent.find({"category": "spendVariable" }).sort({_id: -1}).limit(9);
    if (!spent) {
      throw new Error(constants.spentMessage.SPENT_NOT_FOUND);
    }
    return spent;
  } catch (error) {
    console.log('Something went wrong: Service: getNineSpent', error);
    throw new Error(error);
  }
}

module.exports.getNineSpentFixed = async () => {
  try {
    let spent = await Spent.find({"category": "spentFixed" }).sort({_id: -1}).limit(9);
    if (!spent) {
      throw new Error(constants.spentMessage.SPENT_NOT_FOUND);
    }
    return spent;
  } catch (error) {
    console.log('Something went wrong: Service: getNineSpent', error);
    throw new Error(error);
  }
}

module.exports.getSpentFixedByDate = async ({ dateBegin, dateEnd }) => {
  try {
    let spent = await Spent.find({category: "spentFixed",createdAt : {
      $gte: new Date(dateBegin),
      $lt: new Date(dateEnd)
    } });
    if (!spent) {
      throw new Error(constants.spentMessage.SPENT_NOT_FOUND);
    }
    return spent;
  } catch (error) {
    console.log('Something went wrong: Service: getSpentFixedByDate', error);
    throw new Error(error);
  }
}

module.exports.getSpentVariableByDate = async ({ dateBegin, dateEnd }) => {
  try {

    let spent = await Spent.find({category: "spentVariable",createdAt : {
        $gte: new Date(dateBegin),
        $lt: new Date(dateEnd)
      } });
    if (!spent) {
      throw new Error(constants.spentMessage.SPENT_NOT_FOUND);
    }
    return spent;
  } catch (error) {
    console.log('Something went wrong: Service: getSpentVariableByDate', error);
    throw new Error(error);
  }
}
