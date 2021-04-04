const Spents = require("../models/spentModel");

module.exports.getSpent = async function () {
  try {
    return Spents.find();
  } catch (e) {
    throw Error(e)
  }
}
