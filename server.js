const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectedDB = require("./config/db");
require("dotenv").config();
connectedDB();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/drugs", require("./routes/drugRoutes"));
app.use("/api/labs", require("./routes/labRoutes"));
app.use(errorHandler);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
