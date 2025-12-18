const express = require("express");
const router = express.Router();
const leadController = require("../controller/leadcontroller"); 

router.post("/add", leadController.addLead);
router.get("/", leadController.getLeads);
router.get("/:id", leadController.getLeadById);
router.put("/:id", leadController.updateLead);
module.exports = router;