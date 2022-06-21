const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const Post = require("../models/post");
const User = require("../models/user");

router.get("/user/:id", requireLogin, (req, res) => {
  User.findById(req.params.id)
    .select("-password")
    .then((user) => {
      Post.find({ postedBy: req.params.id })
        .populate("postedBy", "_id name")
        .exec((err, posts) => {
          if (err) {
            return res.status(400).json({ error: err });
          }
          res.json({ user, posts });
        });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ error: err });
    });
});

module.exports = router;
