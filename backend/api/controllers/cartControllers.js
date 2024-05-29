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

module.exports = {
  getCartByEmail,
};
