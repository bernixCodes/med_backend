const express = require("express");
const {
  getLabs,
  getLab,
  addLab,
  updateLab,
  deleteLab,
} = require("../controllers/labController");

const {
  getLabMainCategory,
  addLabMainCategory,
} = require("../controllers/labMainCatController");

const {
  getLabSubCategory,
  addLabSubCategory,
} = require("../controllers/labSubCatController");

const router = express.Router();

router.get("/", getLabs);

router.get("/mainCategory", getLabMainCategory);
router.get("/subCategory", getLabSubCategory);

router.get("/:id", getLab);

router.post("/", addLab);

router.post("/mainCategory", addLabMainCategory);
router.post("/subCategory", addLabSubCategory);

router.put("/:id", updateLab);

router.delete("/:id", deleteLab);

module.exports = router;
