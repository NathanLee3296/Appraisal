const express = require("express");
const { Lot, Item } = require("../models/lot.model");
const router = express.Router();

// Getting all
router.get("/", async (req, res) => {
	try {
		const lots = await Lot.find();
		res.json(lots);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

// Creating one
router.post("/", async (req, res) => {
	console.log(req.body.items);
	let items = [];
	req.body.items.forEach((item) => {
		let newItem = new Item({
			itemName: item.itemName,
			description: item.description,
			condition: item.condition,
			category: item.category,
		});
		items.push(newItem);
	});
	const lot = new Lot({
		username: req.body.username,
		numOfItems: req.body.numOfItems,
		items: items,
	});
	try {
		const newLot = await lot.save();
		res.status(201).json(newLot);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

module.exports = router;
