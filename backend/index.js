const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
require("dotenv").config();

// middlware implementation
app.use(cors());
app.use(express.json());

// connect with mongoose
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@foodie-cluster.3iohndh.mongodb.net/demo-foodi-client?retryWrites=true&w=majority&appName=foodie-cluster`
  )
  .then(console.log("MongoDB connected successfully"))
  .catch((error) => console.log("Error connecting to MongoDB", error));

// import routes

//menu routes
const menuRoutes = require("./api/routes/menuRoutes");
app.use("/menu", menuRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

// BACKEND RESETUP WITH MONGOOSE FROM MONGODB AND REFACTORING

// mongodb config code
// const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@foodie-cluster.3iohndh.mongodb.net/?retryWrites=true&w=majority&appName=foodie-cluster`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // connect to mongodb
//     await client.connect();
//     // create databases define database and collections
//     const menuCollections = client.db("demo-foodi-client").collection("menus");
//     const cartCollections = client
//       .db("demo-foodi-client")
//       .collection("cartItems");

//     // all menu items operations
//     app.get("/menu", async (req, res) => {
//       const result = await menuCollections.find().toArray();
//       res.send(result);
//     });

//     //cart post to db
//     app.post("/carts", async (req, res) => {
//       const cartItem = req.body;
//       const result = await cartCollections.insertOne(cartItem);
//       res.send(result);
//     });

//     // get carts using email
//     app.get("/carts", async (req, res) => {
//       const email = req.query.email;
//       const filter = { email: email };
//       const result = await cartCollections.find(filter).toArray();
//       res.send(result);
//     });

//     //get specific item
//     app.get("/carts/:id", async (req, res) => {
//       const id = req.params.id;
//       const filter = { _id: new ObjectId(id) };
//       const result = await cartCollections.findOne(filter);
//       res.send(result);
//     });

//     //delete route items from cart
//     app.delete("/carts/:id", async (req, res) => {
//       const id = req.params.id;
//       const filter = { _id: new ObjectId(id) };
//       const result = await cartCollections.deleteOne(filter);
//       res.send(result);
//     });

//     //update carts quantity
//     app.put("/carts/:id", async (req, res) => {
//       const id = req.params.id;
//       const { quantity } = req.body;
//       const filter = { _id: new ObjectId(id) };
//       const options = { upsert: true };

//       const updateDoc = {
//         $set: {
//           quantity: parseInt(quantity, 10),
//         },
//       };

//       const result = await cartCollections.updateOne(
//         filter,
//         updateDoc,
//         options
//       );
//     });

//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     //await client.close();
//   }
// }
// run().catch(console.dir);
