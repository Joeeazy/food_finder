const express = require("express");
const { getCartByEmail, addToCart } = require("../controllers/cartControllers");
const carts = require("../models/Carts");

const router = express.Router();

//get
router.get("/", getCartByEmail);

//post
router.post("/", addToCart);

module.exports = router;
