const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Lead routes (already working)
const leadRoutes = require("./routes/leadroutes");
app.use("/api/leads", leadRoutes);

//  Project Type routes
const projectTypeRoutes = require("./routes/projectTypeRoutes");
app.use("/api/project-types", projectTypeRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
