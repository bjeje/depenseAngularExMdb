const Users = require("../models/depenseModel");

exports.getDepense = async function () {
  try {
    return Users.find();
  } catch (e) {
    throw Error(e)
  }
}
