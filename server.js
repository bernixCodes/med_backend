const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectedDB = require("./config/db");
require("dotenv").config();
const cors = require("cors");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const options = require("./config/swagger");
connectedDB();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors({ allowedHeaders: ["Content-Type", "Authorization"] }));
app.use(express.json());
app.use("/api/drugs", require("./routes/drugRoutes"));
app.use("/api/labs", require("./routes/labRoutes"));
app.use(errorHandler);

const specs = swaggerJSDoc(options);

// Configure Swagger UI to include headers
const swaggerUiOptions = {
  swaggerOptions: {
    requestInterceptor: (request) => {
      request.headers["Content-Type"] = "application/json";
      request.headers["Authorization"] = "authorized";
      return request;
    },
  },
};
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs, swaggerUiOptions));

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
 