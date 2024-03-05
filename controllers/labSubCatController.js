const LabSubCategory = require("../models/labSubCatModel");

const mongoose = require("mongoose");

const getLabSubCategory = async (req, res) => {
  try {
    const subCategory = await LabSubCategory.find();
    res.json(subCategory);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const addLabSubCategory = async (req, res) => {
  try {
    const newOption = req.body;
    const subCategory = new LabSubCategory(newOption);
    await subCategory.save();
    res
      .status(201)
      .json({ message: "Sub Category created successfully", subCategory });
  } catch (error) {
    res.status(400).json({ error: "Bad request" });
  }
};

module.exports = { getLabSubCategory, addLabSubCategory };
