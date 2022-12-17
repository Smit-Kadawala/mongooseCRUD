const { response } = require("express");
const User = require("../models/UserModel");

// Show the list of User
const index = (req, res, next) => {
  User.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "An Error",
      });
    });
};

// Show Singal User
const show = (req, res, next) => {
  let userID = req.body.userID;
  User.findById(userID)
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "An Error",
      });
    });
};

// add User
const store = (req, res, next) => {
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    age: req.body.age,
  });
  user
    .save()
    .then((response) => {
      res.json({
        message: "User Added Successfully!",
      });
    })
    .catch((error) => {
      res.json({
        message: "An Error",
      });
    });
};

// Update User
const update = (req, res, next) => {
  let userID = req.body.userID;
  let updatedData = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    age: req.body.age,
  };

  User.findByIdAndUpdate(userID, { $set: updatedData })
    .then(() => {
      res.json({
        message: "User Update Successfully!",
      });
    })
    .catch((error) => {
      res.json({
        message: "An Error",
      });
    });
};

// delete User
const destroy = (req, res, next) => {
  let userID = req.body.userID;
  User.findByIdAndRemove(userID)
    .then(() => {
      res.json({
        message: "User Deleted Successfully!",
      });
    })
    .catch((error) => {
      res.json({
        message: "An Error",
      });
    });
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
