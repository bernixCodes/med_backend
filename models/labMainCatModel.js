const mongoose = require("mongoose");

const labMainCatSchema = new mongoose.Schema({
  value: { type: String, required: true, unique: true },
  label: { type: String, required: true },
});

module.exports = mongoose.model("LabMainCategory", labMainCatSchema);
