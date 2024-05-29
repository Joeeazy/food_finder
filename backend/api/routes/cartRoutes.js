const express = require("express");
const { getCartByEmail } = require("../controllers/cartControllers");
const carts = require("../models/Carts");

const router = express.Router();

//get
router.get("/", getCartByEmail);

module.exports = router;
