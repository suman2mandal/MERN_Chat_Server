const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Suman:1qsc@merncluster.jeavhtz.mongodb.net/ClientSites?retryWrites=true&w=majority"
    );
    app.listen(3000, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
const {User} = require("./models");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const allUsers = await User.find();
  return res.status(200).json(allUsers);
});

app.post("/putUser", async (req, res) => {
  // const allDogs = await Dog.find();
  const name = req.body.name;
  const age = req.body.age;
  const email = req.body.email;
  const password = req.body.password;
  console.log(`${name} ${age} ${email} ${password}`); 

  const newUser = new User({
    name: name,
    age: age,
    email: email,
    password: password 
  })
  newUser.save();
  console.log("ok");
  return res.status(200).json("ok");//.json(allDogs);
});
