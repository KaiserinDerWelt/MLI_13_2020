const express = require("express");
const router = express.Router();
const transactionsController = require("../controllers/transactionsController");
const tokenValidation = require("../middleware/tokenValidation");

// Get All
router.get("/", tokenValidation.validateToken, transactionsController.getAll);

// Get One
router.get(
	"/:id",
	tokenValidation.validateToken,
	transactionsController.getOne
);

// Create new
router.post(
	"/",
	tokenValidation.validateToken,
	transactionsController.createOne
);

// Update one
router.put(
	"/:id",
	tokenValidation.validateToken,
	transactionsController.updateOne
);

// Update one
router.delete(
	"/:id",
	tokenValidation.validateToken,
	transactionsController.deleteOne
);

module.exports = router;
