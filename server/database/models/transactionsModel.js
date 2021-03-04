const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
	user_id: String,
	title: String,
	description: String,
	receiver: String,
	amount: Number,
	date: Date,
});

module.exports = mongoose.model("Transaction", transactionSchema);
