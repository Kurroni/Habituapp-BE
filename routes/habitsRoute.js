//      routes/project-routes.js
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Habit = require("../models/HabitModel");

// POST '/habits'
router.post("/", (req, res) => {
  const { img, title, description } = req.body;

  Habit.create({ img, title, description, days: [] })
    .then(response => {
      res.status(201).json(response);
      // `res.json` is similar to ->  `res.send( JSON.stringify(response) )`
    })
    .catch(err => {
      res
        .status(500) // Internal Server Error
        .json(err);
    });
});



// GET '/api/habits/:id'		 => to get a specific habits
router.get("/:id", (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res
      .status(400) //  Bad Request
      .json({ message: "Specified id is not valid" });
    return;
  }

  Habit.findById(id)
    .then(foundHabit => {
      res.status(200).json(foundHabit);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// PUT '/api/habits/:id' 		=> to update a specific habit
router.put("/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }
  const {img, title, description} = req.body;
  Habit.findByIdAndUpdate(req.params.id, {$set:{img, title, description}})
    .then(() => {
      res.json({
        message: `Habit with ${req.params.id} is updated successfully.`
      });
    })
    .catch(err => {
      res.json(err);
    });
});


router.put("/days/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }
  const {days} = req.body;
  
  Habit.findByIdAndUpdate(req.params.id, {$set:{days:req.body.days}})
    .then((habit) => {
          
      res.json(habit);
    })
    .catch(err => {
      res.json(err);
    });
});

// DELETE '/api/habits/:id'   => to delete a specific habit
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Habit.findByIdAndDelete(id)
    .then(() => {
      res
        .status(202) //  Accepted
        .json({ message: `Habit with ${id} was removed successfully.` });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});


// GET '/habits'		 => to get all the habits
router.get("/", (req, res, next) => {
  Habit.find()
    .populate("days")
    .then(allTheHabits => {
      res.json(allTheHabits);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
