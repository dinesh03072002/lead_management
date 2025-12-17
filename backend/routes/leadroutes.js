const express = require("express");
const router = express.Router();
const leadController = require("../controller/leadcontroller"); 

router.post("/add", leadController.addLead);
router.get("/", leadController.getLeads);

module.exports = router;
