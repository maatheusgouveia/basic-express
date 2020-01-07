const User = require("../models/User");
const faker = require("faker");

class UserController {
	async index(req, res) {
		res.json(new User(faker.name.firstName(), faker.random.number(100)));
	}
}

module.exports = new UserController();
