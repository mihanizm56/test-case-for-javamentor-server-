const mongoose = require("mongoose");

const langSchema = new mongoose.Schema({
  docs: {
    type: String,
    required: false,
    unique: true
  },
  year: {
    type: Number,
    required: false,
    unique: false
  },
  logo: {
    type: String,
    required: false,
    unique: true
  },
  groups: {
    type: [String],
    required: true,
    unique: false
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  projectsCount: {
    type: Number,
    required: true,
    unique: false
  }
});

mongoose.model("Languages", langSchema, "Languages");
