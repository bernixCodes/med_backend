const express = require("express");

const router = express.Router();



const {
  getDrugs,
  createDrug,
  getDrug,
  updateDrug,
  deleteDrug,
} = require("../controllers/drugController");

let drugUnitPricing = [
  { label: "Tablet", value: "Tablet" },
  { label: "Capsule", value: "Capsule" },
  { label: "Vials", value: "Vials" },
  { label: "Ampule", value: "Ampule" },
];

router.get("/", getDrugs);

router.get("/options", (req, res) => {
  res.json({ options });
});

router.post("/options", (req, res) => {
  const newOption = req.body;
  options.push(newOption);
  res
    .status(201)
    .json({ message: "Option created successfully", option: newOption });
});

router.get("/:id", getDrug);

router.post("/", createDrug);

router.put("/:id", updateDrug);

router.delete("/:id", deleteDrug);


module.exports = router;
