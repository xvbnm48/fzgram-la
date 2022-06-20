const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../keys");
const requiredLogin = require("../middleware/requireLogin");

router.get("/protected", requiredLogin, (req, res) => {
  res.status(200).json({ message: "you are logged in" });
});

router.post("/signup", async (req, res) => {
  //   console.log(req.body);
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: "Please enter all fields" });
  }
  await User.findOne({ email: email }).then((savedUser) => {
    if (savedUser) {
      return res.status(400).json({ error: "User already exists" });
    }
    bcrypt
      .hash(password, 12)
      .then((hashedPassword) => {
        const user = new User({
          name,
          email,
          password: hashedPassword,
        });

        user
          .save()
          .then((user) => {
            res.json({ message: "User created successfully" });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Please enter email and password" });
  }
  User.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(400).json({ error: "invalid email or password" });
    }
    bcrypt
      .compare(password, savedUser.password)
      .then((doMatch) => {
        if (doMatch) {
          //return res.json({ error: "Success Signed In" });
          const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
          const { _id, name, email } = savedUser;
          res.json({ token, user: { _id, name, email } });
        } else {
          return res.status(400).json({ error: "invalid email or password" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

module.exports = router;
