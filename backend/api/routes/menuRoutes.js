const express = require("express");
const Menu = require("../models/Menu");
const router = express.Router();

//get all menu items from the dtabaase
router.get("/", async (req, res) => {
  try {
    const menuSchema = await Menu.find({});
    res.status(200).json(menuSchema);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
