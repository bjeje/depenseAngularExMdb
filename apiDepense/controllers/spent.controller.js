const spentService = require('../services/spent.service');
const constants = require('../constants');

module.exports.getSpent = async function (req, res) {
  try {
    let spent = await spentService.getSpent()
    res.status(200)
    res.send(spent);
  } catch (e) {
    res.status(400)
    res.send();
  }
}

module.exports.createSpent = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const responseFromService = await spentService.createSpent(req.body);
    response.status = 200;
    response.message = constants.spentMessage.SPENT_CREATED;
    response.body = responseFromService;
  } catch(error) {
    console.log('Something went wrong: Controller: createSpent', error);
    response.status = 400;
    response.message = error.message;
    response.body = {};
  }
  return res.status(response.status).send(response);
}

module.exports.deleteSpent = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const responseFromService = await spentService.deleteSpent(req.params);
    response.status = 200;
    response.message = constants.spentMessage.SPENT_DELETED;
    response.body = responseFromService;
  } catch(error) {
    console.log('Something went wrong: Controller: deleteSpent', error);
    response.status = 400;
    response.message = error.message;
    response.body = {};
  }
  return res.status(response.status).send(response);
}

module.exports.getSpentById = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const responseFromService = await spentService.getSpentById(req.params);
    response.status = 200;
    response.message = constants.spentMessage.SPENT_FETCHED;
    response.body = responseFromService;
  } catch (error) {
    console.log('Something went wrong: Controller: getOneSpent', error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
}

module.exports.updateSpent = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const responseFromService = await spentService.updateSpent({
      id: req.params.id,
      updateInfo: req.body
    });
    response.status = 200;
    response.message = constants.spentMessage.SPENT_UPDATED;
    response.body = responseFromService;
  } catch(error) {
    console.log('Something went wrong: Controller: updateSpent', error);
    response.status = 400;
    response.message = error.message;
    response.body = {};
  }
  return res.status(response.status).send(response);
}
