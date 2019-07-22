const BACKEND = "backend";
const FRONTEND = "frontend";
const MOBILE = "mobile";
const { getLangsFromDb, addLangInDb } = require("../../models/langs");

const get = async (req, res) => {
  const { group = "" } = req.query;
  let langList = await getLangsFromDb();
  if (group === BACKEND && langList.length) {
    langList = langList.filter(
      language =>
        console.log("language", language.groups) ||
        language.groups.includes("backend")
    );
  }

  if (group === FRONTEND && langList.length) {
    langList = langList.filter(
      language =>
        console.log("language", language) || language.groups.includes(FRONTEND)
    );
  }

  if (group === MOBILE && langList.length) {
    langList = langList.filter(
      language =>
        console.log("language", language) || language.groups.includes(MOBILE)
    );
  }

  console.log("langList", langList);

  res.status(200).send(langList);
};

const post = async (req, res) => {
  const body = req.body;
  try {
    const result = await addLangInDb(body);
    res.status(200).send(result);
  } catch (error) {
    console.log("error", error);

    res.status(400).send(error.errmsg);
  }
};

module.exports = { get, post };
