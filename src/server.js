const express = require("express");
const app = express();
// app.use()
const UserController = require("./controllers/UserController");

app.get("/", UserController.index);

app.listen(3333, () => console.log("Example app listening on port 3333!"));
