const express = require("express");
const { getAllMenuItems } = require("../controllers/menuControllers");
const Menu = require("../models/Menu");
const router = express.Router();

//get all menu items from the dtabaase
router.get("/", getAllMenuItems);

module.exports = router;
