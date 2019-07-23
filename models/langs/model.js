const mongoose = require("mongoose");

const langSchema = new mongoose.Schema({
  docs: {
    type: String,
    required: true,
    unique: true
  },
  groups: {
    type: [String],
    required: true,
    unique: false
  },
  logo: {
    type: String,
    required: false,
    unique: true
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
  },
  year: {
    type: Number,
    required: true,
    unique: false
  }
});

mongoose.model("Languages", langSchema, "Languages");
