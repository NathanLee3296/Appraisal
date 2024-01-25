const mongoose = require("mongoose");

const lotSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	numOfItems: {
		type: Number,
		required: true,
	},
	DateRegistered: {
		type: Date,
		required: true,
		default: Date.now,
	},
	items: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Item",
		},
	],
});

const itemSchema = new mongoose.Schema({
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Lot",
	},
	itemName: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	condition: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	DateRegistered: {
		type: Date,
		required: true,
		default: Date.now,
	},
});

const Item = mongoose.model("Item", itemSchema, "items");
const Lot = mongoose.model("Lot", lotSchema, "lots");

module.exports = {
  Item, Lot,
}