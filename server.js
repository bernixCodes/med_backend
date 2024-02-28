const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectedDB = require("./config/db");
require("dotenv").config();
const cors = require("cors");
connectedDB();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors({ allowedHeaders: ["Content-Type", "Authorization"] }));
app.use(express.json());
app.use("/api/drugs", require("./routes/drugRoutes"));
app.use("/api/labs", require("./routes/labRoutes"));
app.use(errorHandler);



app.listen(port, () => {
  console.log(`server running on ${port}`);
});
 