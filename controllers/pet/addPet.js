const { Pet } = require('../../models/pet');

const addPet = async (req, res) => {
  const { _id: owner } = req.user;

  const { AVATAR_PET_DEFAULT } = process.env;

  const pet = await Pet.create({
    avatarURL: AVATAR_PET_DEFAULT,
    ...req.body,
    owner,
  });

  res.status(201).json({
    pet,
  });
};

module.exports = addPet;
