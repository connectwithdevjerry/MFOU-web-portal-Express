const express = require("express");
const router = express.Router();

const {
  getPlotsData,
  getBlocksData,
  getBuildingsData,
  getPlotSearchResults,
} = require("../controller/spatial.controller");

router.get("/plots", getPlotsData);
router.get("/seachplots", getPlotSearchResults);
router.get("/blocks", getBlocksData);
router.get("/buildings", getBuildingsData);

module.exports = router;
