const BACKEND = "backend";
const FRONTEND = "frontend";
const MOBILE = "mobile";
const { getLangsFromDb, addLangInDb } = require("../../models/langs");

const get = async (req, res) => {
  const { group = "" } = req.query;

  try {
    let langList = await getLangsFromDb();

    if (group === BACKEND && langList.length) {
      langList = langList.filter(language =>
        language.groups.includes("backend")
      );
    }

    if (group === FRONTEND && langList.length) {
      langList = langList.filter(language =>
        language.groups.includes(FRONTEND)
      );
    }

    if (group === MOBILE && langList.length) {
      langList = langList.filter(language => language.groups.includes(MOBILE));
    }

    res.status(200).send({ data: langList });
  } catch (error) {
    console.log("error", error);

    res.status(500).send(error.errmsg);
  }
};

module.exports = { get };
