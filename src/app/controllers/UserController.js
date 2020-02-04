const User = require("../models/User");

class UserController {
	async index(request, response) {
		const users = await User.findAll();
		return response.json(users);
	}

	async show(request, response) {
		const user = await User.findByPk(request.params.id);
		return response.json(user);
	}

	async store(request, response) {
		const data = request.body;
		const user = await User.create({ ...data });
		return response.json(user);
	}

	async update(request, response) {
		const user = await User.findByPk();
		await user.update();
		return response.json(user);
	}

	async destroy(request, response) {
		const user = await User.findByPk(request.params.id);
		await user.destroy();
	}
}

module.exports = new UserController();
