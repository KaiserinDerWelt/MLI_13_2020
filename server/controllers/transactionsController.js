const transactionsService = require("../services/transactionsService");

module.exports.getAll = async (req, res) => {
	let response = {};

	try {
		const responseFromService = await transactionsService.getAll(req);
		response.status = 200;
		response.message = "success";
		response.body = responseFromService;
	} catch (error) {
		console.error(
			"Something went wrong in transactionsController.js",
			error
		);
		response.status = 400;
		response.message = error.message;
	}

	return res.status(response.status).send(response);
};

module.exports.getOne = async (req, res) => {
	let response = {};

	try {
		const responseFromService = await transactionsService.getOne(req);
		response.status = 200;
		response.message = "success";
		response.body = responseFromService;
	} catch (error) {
		console.error(
			"Something went wrong in transactionsController.js",
			error
		);
		response.status = 400;
		response.message = error.message;
	}

	return res.status(response.status).send(response);
};

module.exports.createOne = async (req, res) => {
	let response = {};

	try {
		const responseFromService = await transactionsService.createOne(req);
		response.status = 200;
		response.message = "success";
		response.body = responseFromService;
	} catch (error) {
		console.error(
			"Something went wrong in transactionsController.js",
			error
		);
		response.status = 400;
		response.message = error.message;
	}

	return res.status(response.status).send(response);
};

module.exports.updateOne = async (req, res) => {
	let response = {};

	try {
		const responseFromService = await transactionsService.updateOne(req);
		response.status = 200;
		response.message = "success";
		response.body = responseFromService;
	} catch (error) {
		console.error(
			"Something went wrong in transactionsController.js",
			error
		);
		response.status = 400;
		response.message = error.message;
	}

	return res.status(response.status).send(response);
};

module.exports.deleteOne = async (req, res) => {
	let response = {};

	try {
		const responseFromService = await transactionsService.deleteOne(req);
		response.status = 200;
		response.message = "success";
		response.body = responseFromService;
	} catch (error) {
		console.error(
			"Something went wrong in transactionsController.js",
			error
		);
		response.status = 400;
		response.message = error.message;
	}

	return res.status(response.status).send(response);
};

// module.exports.createUser = async (req, res) => {
// 	let response = {};

// 	try {
// 		const responseFromService = await userService.createUser(req.body);
// 		response.status = 200;
// 		response.message = "User successfully created";
// 		response.body = responseFromService;
// 	} catch (error) {
// 		console.error("Something went wrong in userController.js", error);
// 		response.status = 400;
// 		response.message = error.message;
// 	}

// 	return res.status(response.status).send(response);
// };
