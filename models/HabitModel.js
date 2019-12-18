const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const habitSchema = new Schema({
    img: {type: String, default:''},
    title: String,
    description: String,
    days: [String]
  });

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;