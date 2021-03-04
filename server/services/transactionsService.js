const User = require("../database/models/userModel");
const Transactions = require("../database/models/transactionsModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// module.exports.createUser = async (serviceData) => {
// 	try {
// 		const user = await User.findOne({ email: serviceData.email });
// 		if (user) {
// 			throw new Error("Email already exists");
// 		}

// 		const hashPassword = await bcrypt.hash(serviceData.password, 12);

// 		const newUser = new User({
// 			email: serviceData.email,
// 			password: hashPassword,
// 			firstName: serviceData.firstName,
// 			lastName: serviceData.lastName,
// 		});

// 		let result = await newUser.save();

// 		return result;
// 	} catch (error) {
// 		console.error("Error in userService.js", error);
// 		throw new Error(error);
// 	}
// };

module.exports.getAll = async (serviceData) => {
	try {
		const jwtToken = serviceData.headers.authorization
			.split("Bearer")[1]
			.trim();
		const decodedJwtToken = jwt.decode(jwtToken);
		const transactions = await Transactions.find({
			user_id: decodedJwtToken.id,
		});

		return transactions;
	} catch (error) {
		console.error("Error in transactionsService.js", error);
		throw new Error(error);
	}
};

module.exports.getOne = async (serviceData) => {
	try {
		const transactions = await Transactions.findOne({
			_id: serviceData.params.id,
		});

		if (transactions === null) {
			throw new Error("Transaction not found!");
		}

		return transactions.toObject();
	} catch (error) {
		console.error("Error in transactionsService.js", error);
		throw new Error(error);
	}
};

module.exports.createOne = async (serviceData) => {
	try {
		// const transactions = await Transactions.findOne({
		// 	_id: serviceData.params.id,
		// });

		const jwtToken = serviceData.headers.authorization
			.split("Bearer")[1]
			.trim();
		const decodedJwtToken = jwt.decode(jwtToken);

		const newTransaction = new Transactions({
			user_id: decodedJwtToken.id,
			receiver: serviceData.body.receiver,
			title: serviceData.body.title,
			description: serviceData.body.description,
			amount: serviceData.body.amount,
			date: new Date(),
		});
		let result = await newTransaction.save();
		return result;
	} catch (error) {
		console.error("Error in transactionsService.js", error);
		throw new Error(error);
	}
};

module.exports.updateOne = async (serviceData) => {
	try {
		const transactions = await Transactions.findOneAndUpdate(
			{
				_id: serviceData.params.id,
			},
			{
				receiver: serviceData.body.receiver,
				title: serviceData.body.title,
				description: serviceData.body.description,
				amount: serviceData.body.amount,
			}
		);

		return serviceData.body;
	} catch (error) {
		console.error("Error in transactionsService.js", error);
		throw new Error(error);
	}
};

module.exports.deleteOne = async (serviceData) => {
	try {
		const transactions = await Transactions.findOneAndDelete({
			_id: serviceData.params.id,
		});

		return transactions;
	} catch (error) {
		console.error("Error in transactionsService.js", error);
		throw new Error(error);
	}
};

// module.exports.loginUser = async (serviceData) => {
// 	try {
// 		const user = await User.findOne({ email: serviceData.email });

// 		if (!user) {
// 			throw new Error("User not found!");
// 		}

// 		const isValid = await bcrypt.compare(
// 			serviceData.password,
// 			user.password
// 		);

// 		if (!isValid) {
// 			throw new Error("Password is invalid");
// 		}

// 		const token = jwt.sign(
// 			{ id: user._id },
// 			process.env.SECRET_KEY || "default-secret-key",
// 			{ expiresIn: "1d" }
// 		);

// 		return { token };
// 	} catch (error) {
// 		console.error("Error in userService.js", error);
// 		throw new Error(error);
// 	}
// };

// module.exports.updateUserProfile = async (serviceData) => {
// 	try {
// 		const jwtToken = serviceData.headers.authorization
// 			.split("Bearer")[1]
// 			.trim();
// 		const decodedJwtToken = jwt.decode(jwtToken);
// 		const user = await User.findOneAndUpdate(
// 			{ _id: decodedJwtToken.id },
// 			{
// 				firstName: serviceData.body.firstName,
// 				lastName: serviceData.body.lastName,
// 			},
// 			{ new: true }
// 		);

// 		if (!user) {
// 			throw new Error("User not found!");
// 		}

// 		return user.toObject();
// 	} catch (error) {
// 		console.error("Error in userService.js", error);
// 		throw new Error(error);
// 	}
// };
