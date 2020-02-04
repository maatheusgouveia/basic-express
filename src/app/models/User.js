const Sequelize = require("sequelize");
const { Model } = require("sequelize");
const bcrypt = require("bcryptjs");

class User extends Model {
	static init(sequelize) {
		super.init(
			{
				username: Sequelize.STRING,
				email: Sequelize.STRING,
				password: Sequelize.STRING
			},
			{
				sequelize
			}
		);

		this.addHook("beforeSave", async user => {
			if (user.password) {
				user.password = await bcrypt.hash(user.password, 8);
			}
		});

		return this;
	}

	checkPassword(password) {
		return bcrypt.compare(password, this.password);
	}
}

module.exports = User;
