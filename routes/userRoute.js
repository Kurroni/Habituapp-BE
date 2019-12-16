const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const User = require("../models/UserModel");

//PUT 'user/:id'
router.put("/:id", (req, res, next) => {

  console.log('TEST', req.params.id)

  const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: "Specified id is not valid" });
      return;
    }
    
    User.findByIdAndUpdate(req.params.id, {$push: {habits: req.body.habitsId}})
      .then(() => {
        console.log('something');
        
        res.json({
          message: `Habit with ${req.params.id} is updated successfully.`
        });
      })
      .catch(err => {
        console.log('res.jason');
        
        res.json(err);
      });
  });

  // GET '/api/user/:id'		 => to get a specific user
router.get("/:id", (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res
      .status(400) //  Bad Request
      .json({ message: "Specified id is not valid" });
    return;
  }

  User.findById(id)
    .populate("days")
    .populate("habits")
    .then(foundUser => {
      res.status(200).json(foundUser);
    })
    .catch(err => {
      res.res.status(500).json(err);
    });
});
  module.exports = router;