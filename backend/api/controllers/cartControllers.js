const Carts = require("../models/Carts");

// get carts using email
const getCartByEmail = async (req, res) => {
  //when not found and when found
  //https://mongoosejs.com/docs/api/model.html#Model.find()
  try {
    const email = require.query.email;
    const query = { email: email };
    const result = await Carts.find(query).exec();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//post a cart when add-to-cart button is clicked
const addToCart = async (req, res) => {
  const { menuItemId, name, recipe, image, price, quantity, email } = req.body;
  try {
    // check existing menu item
    const existingCartItem = await Carts.findOne({ menuItemId });
    if (existingCartItem) {
      return res
        .status(400)
        .json({ message: "Product already exists in the cart!" });
    }
    const cartItem = await Carts.create({
      menuItemId,
      name,
      recipe,
      image,
      price,
      quantity,
      email,
    });

    res.status(200).json(cartItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCartByEmail,
  addToCart,
};
