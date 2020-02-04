const { Router } = require("express");

const UserController = require("./app/controllers/UserController");

const routes = new Router();

routes.get("/", (request, response) =>
	response.send("Estrutura básica do node com express e sequelize")
);

routes.get("/users", UserController.index);
routes.get("/users", UserController.show);
routes.post("/users", UserController.store);
routes.put("/users", UserController.update);
routes.delete("/users", UserController.destroy);

module.exports = routes;
