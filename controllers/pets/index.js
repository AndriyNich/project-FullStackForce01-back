const { ctrlWrapper } = require('../../helpers');

const addPet = require('./addPet');
const deletePetById = require('./deletePetById');
const getPets = require('./getPets');

module.exports = {
  addPet: ctrlWrapper(addPet),
  deletePetById: ctrlWrapper(deletePetById),
  getPets: ctrlWrapper(getPets),
};
