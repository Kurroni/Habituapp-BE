const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const User = require("../models/userModel");

//PUT 'user/:id'
router.put("/:id", (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: "Specified id is not valid" });
      return;
    }
  
    User.findByIdAndUpdate(req.params.id, {$set: req.body})
      .then(() => {
        res.json({
          message: `Habit with ${req.params.id} is updated successfully.`
        });
      })
      .catch(err => {
        res.json(err);
      });
  });
  module.exports = router;