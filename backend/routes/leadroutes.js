const express = require("express");
const router = express.Router();
const controller = require("../controller/leadcontroller");

router.post("/leads", controller.addLead);        // Add
router.get("/leads", controller.getLeads);        // List


module.exports = router;
