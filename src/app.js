require("dotenv/config");
require("./database");

const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

// habilitar o servidor para receber requisições fora do localhost
app.use(cors());

// habilitar o servidor para receber corpo em formato JSON
app.use(express.json());

app.use(routes);

module.exports = app;
