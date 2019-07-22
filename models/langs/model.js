const mongoose = require("mongoose");

const langSchema = new mongoose.Schema({
  docs: {
    type: String,
    required: false,
    unique: false
  },
  year: {
    type: String,
    required: false,
    unique: false
  },
  logo: {
    type: String,
    required: false,
    unique: false
  },
  groups: {
    type: [String],
    required: true,
    unique: false
  },
  name: {
    type: String,
    required: true,
    unique: false
  },
  projectsCount: {
    type: String,
    required: true,
    unique: false
  }
});

mongoose.model("Languages", langSchema, "Languages");
