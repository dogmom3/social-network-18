const { User } = require("../models");

const userController = {
  // CREATE A USER
  createUser({ body }, res) {
    console.log(body);
    User.create(body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(400).json(err));
  },

  // GET USERS
  getAllUsers(req, res) {
    User.find({})
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // getAllUsers(req, res) {
  //   User.find({})
  //     .populate({
  //       path: "friends",
  //       select: "-_v",
  //     })
  //     .select("-_v")
  //     .sort({ _id: -1 })
  //     .then((dbUserData) => res.json(dbUserData))
  //     .catch((err) => {
  //       console.log(err);
  //       res.sendStatus(400);
  //     });
  // },

  // GET A SINGLE USER
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // getUserId({ params }, res) {
  //   User.findOne({ _id: params.id })
  //     .populate({
  //       path: "friends",
  //       select: "-_v",
  //     })
  //     .select("-_v")
  //     .then(dbUserData => res.json(dbUserData))
  //     .catch((err) => {
  //       console.log(err);
  //       res.sendStatus(400);
  //     });
  // },

  // UPDATE A USER
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      {
        new: true,
        runValidators: true,
      }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No User found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },

  // DELETE A USER
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No User found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = userController;
