const DepenseService = require('../services/depense.service');

exports.getDepense = async function (req, res) {
  try {
    let depenses = await DepenseService.getDepense()
    res.status(200)
    res.send(depenses);
  } catch (e) {
    res.status(400)
    res.send();
  }
}
