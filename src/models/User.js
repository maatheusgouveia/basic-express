class User {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	name() {
		return this.name;
	}

	age() {
		return this.age;
	}
}

module.exports = User;
