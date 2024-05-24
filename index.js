const express = require("express");
const env = require("dotenv");
env.config();
const bodyParser = require('body-parser');
const database = require("./config/database");
database.connect();
const app = express();
const port = process.env.PORT;

// parse application/json
app.use(bodyParser.json());

const routesApiV1 = require("./v1/routes/index.route");

routesApiV1(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});