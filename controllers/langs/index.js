const BACKEND = "backend";
const FRONTEND = "frontend";
const MOBILE = "mobile";
const { getLangsFromDb } = require("../../models/langs");

const get = async (req, res) => {
  const { group = "" } = req.query;
  let langList = await getLangsFromDb();
  if (group === BACKEND && langList.length) {
    langList = langList.filter(language => language.group.includes(BACKEND));
  }

  if (group === FRONTEND && langList.length) {
    langList = langList.filter(language => language.group.includes(FRONTEND));
  }

  if (group === MOBILE && langList.length) {
    langList = langList.filter(language => language.group.includes(MOBILE));
  }

  res.status(200).send(langList);
};

const post = async (req, res) => {
  const { ...data } = req.body;
  console.log("data", data);
  res.status(200);
};

module.exports = { get, post };
