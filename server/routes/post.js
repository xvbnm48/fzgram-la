const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Post = require("../models/post");
const requireLogin = require("../middleware/requireLogin");
const post = require("../models/post");

router.post("/createpost", requireLogin, (req, res) => {
  const { title, body, pic } = req.body;
  if (!title || !body || !pic) {
    return res.status(400).json({ error: "Please enter all fields" });
  }
  console.log(req.user);
  //   res.send("ok");
  req.user.password = undefined;
  const post = new Post({
    title,
    body,
    photo: pic,
    postedBy: req.user,
  });
  post
    .save()
    .then((result) => {
      res.json({ post: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/createPost", requireLogin, async (req, res) => {
  const { title, body, pic } = req.body;
  // console.log(title, body, pic);
  if (!title || !body || !pic) {
    return res.status(400).json({ error: "Please enter all fields" });
  }
  // const newPost = new post(req.body);
  req.user.password = undefined;
  const post = new Post({
    title,
    body,
    photo: pic,
    postedBy: req.user,
  });
  try {
    await post.save();
    res.json({ post: post });
  } catch (error) {
    return res.status(400).send(error);
  }
});

router.get("/allpost", async (req, res) => {
  try {
    await Post.find()
      .populate("postedBy", "_id name")
      .then((posts) => {
        res.json(posts);
      });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get("/myPost", requireLogin, async (req, res) => {
  try {
    await post
      .find({ postedBy: req.user._id })
      .populate("postedBy", "_id name")
      .then((posts) => {
        return res.json({ myposts });
      });
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
