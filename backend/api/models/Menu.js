//menupage schema
const mongoose = require("mongoose");

const { Schema } = mongoose;

//create schema object for menu items in frontend/public/menu.json -> menu items

const menuSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    minlength: 3,
  },
  recipe: String,
  image: String,
  category: String,
  price: Number,
});

// define menu model
const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
