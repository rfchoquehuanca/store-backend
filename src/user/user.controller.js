'user strict';
const userModel = require('./user.model');

async function save(req, res) {
  const newUser = req.body;
  const userSaved = await userModel.save(newUser);
  return res.status(200).json(userSaved);
}

async function get(req, res) {
  const users = await userModel.getAll();
  return res.status(200).json(users);
}

async function getById(req, res) {
  const id = req.params.id;
  const user = await userModel.getById(id);
  return res.status(200).json(user);
}

function update() {

}

function remove() {

}



module.exports = {
  save,
  get,
  getById,
  update,
  remove
}