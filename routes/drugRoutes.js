const express = require("express");

const router = express.Router();

const {
  getDrugs,
  createDrug,
  getDrug,
  updateDrug,
  deleteDrug,
  searchDrug,
} = require("../controllers/drugController");

router.get("/", getDrugs);
router.get("/search", searchDrug);


router.get("/:id", getDrug);

router.post("/", createDrug);

router.put("/:id", updateDrug);

router.delete("/:id", deleteDrug);


module.exports = router;
