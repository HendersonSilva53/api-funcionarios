const express = require("express");
const routes = require("./routes/funcionarioRoutes");
const sequelize = require("./config/database");
const cors = require("cors");

const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);

module.exports = app;