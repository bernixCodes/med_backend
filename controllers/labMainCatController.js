const LabMainCategory = require("../models/labMainCatModel");

const mongoose = require("mongoose");

const getLabMainCategory = async (req, res) => {
  try {
    const mainCategory = await LabMainCategory.find();
    res.json(mainCategory);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const addLabMainCategory = async (req, res) => {
  try {
    const newMainCategory = req.body;
    const mainCategory = new LabMainCategory(newMainCategory);
    await mainCategory.save();
    res
      .status(201)
      .json({ message: "Main Category created successfully", mainCategory });
  } catch (error) {
    res.status(400).json({ error: "Bad request" });
  }
};

module.exports = { getLabMainCategory, addLabMainCategory };
