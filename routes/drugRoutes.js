const express = require("express");

const router = express.Router();



const {
  getDrugs,
  createDrug,
  getDrug,
  updateDrug,
  deleteDrug,
} = require("../controllers/drugController");

const {
  getDrugOptions,
  addDrugOption,
} = require("../controllers/drugOptionsController");


router.get("/", getDrugs);

router.get("/options", getDrugOptions);

router.post("/options", addDrugOption);

router.get("/:id", getDrug);

router.post("/", createDrug);

router.put("/:id", updateDrug);

router.delete("/:id", deleteDrug);


module.exports = router;
