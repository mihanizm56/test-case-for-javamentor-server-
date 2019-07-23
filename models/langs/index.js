const mongoose = require("mongoose");
const { Languages } = require("./model");

const LangsModel = mongoose.model("Languages");

addLangInDb = langData => {
  return (newUser = new LangsModel({
    ...langData
  })).save();
};

getLangsFromDb = username => {
  return LangsModel.find();
};

module.exports = {
  addLangInDb,
  getLangsFromDb
};
