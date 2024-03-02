const DrugOptions = require("../models/drugOptionModel");

const mongoose = require("mongoose");

const getDrugOptions = async (req, res) => {
  try {
    const options = await drugOptions.find();
    res.json({ options });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const addDrugOption = async (req, res) => {
  try {
    const newOption = req.body;
    const option = new drugOptions(newOption);
    await option.save();
    res.status(201).json({ message: "Option created successfully", option });
  } catch (error) {
    res.status(400).json({ error: "Bad request" });
  }
};

module.exports = { getDrugOptions, addDrugOption };
