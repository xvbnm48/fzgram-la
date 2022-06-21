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

router.get("/allpost", requireLogin, (req, res) => {
  // try {
  //   await Post.find()
  //     .populate("postedBy", "_id name")
  //     .then((posts) => {
  //       res.json({ posts });
  //     });
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).send(error);
  // }
  Post.find()
    .populate("postedBy", "_id name")
    .populate("comments.postedBy", "_id name")
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/myPost", requireLogin, (req, res) => {
  // try {
  //   await post
  //     .find({ postedBy: req.user._id })
  //     .populate("postedBy", "_id name")
  //     .then((posts) => {
  //       return res.json({ myposts });
  //     });
  // } catch (error) {
  //   return res.status(500).send(error);
  // }

  post
    .find({ postedBy: req.user._id })
    .populate("postedBy", "_id name")
    .then((posts) => {
      res.json({ myposts: posts });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/like", requireLogin, (req, res) => {
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { likes: req.user._id },
    },
    {
      new: true,
    }
  )
    .populate("postedBy", "_id name")
    .exec({}, (err, result) => {
      if (err) {
        return res.status(400).json({ error: err });
      } else {
        res.json(result);
      }
    });
});

router.put("/unlike", requireLogin, (req, res) => {
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $pull: { likes: req.user._id },
    },
    {
      new: true,
    }
  )
    // .populate("postedBy", "_id name")
    .exec({}, (err, result) => {
      if (err) {
        return res.status(400).json({ error: err });
      } else {
        res.json(result);
      }
    });
});

router.put("/comment", requireLogin, (req, res) => {
  const comment = {
    text: req.body.text,
    postedBy: req.user._id,
  };
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { comments: comment },
    },
    {
      new: true,
    }
  )
    .populate("comments.postedBy", "_id name")
    .populate("postedBy", "_id name")
    .exec({}, (err, result) => {
      if (err) {
        return res.status(400).json({ error: err });
      } else {
        res.json(result);
      }
    });
});

router.delete("/deletepost/:postId", requireLogin, (req, res) => {
  post
    .findOne({ _id: req.params.postId })
    .populate("postedBy", "_id")
    .exec((err, post) => {
      if (err || !post) {
        return res.status(400).json({ error: err });
      }
      if (post.postedBy._id.toString() === req.user._id.toString()) {
        post
          .remove()
          .then((result) => {
            res.json(result);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
});

module.exports = router;
