const mongoose = require("mongoose");

const labSchema = mongoose.Schema({
  labName: {
    type: String,
    required: [true, "Lab name empty."],
  },
  labType: {
    type: String,
    required: [true, "Lab type empty."],
  },
  mainCategory: {
    type: String,
  },
  subCategory: {
    type: String,
  },
  labCode: {
    type: String,
    required: [true, "Lab code empty."],
  },
  labPrice: {
    type: Number,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Lab", labSchema);
