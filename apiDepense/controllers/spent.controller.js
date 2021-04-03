const SpentService = require('../services/spent.service');

exports.getSpent = async function (req, res) {
  try {
    let spent = await SpentService.getSpent()
    res.status(200)
    res.send(spent);
  } catch (e) {
    res.status(400)
    res.send();
  }
}
