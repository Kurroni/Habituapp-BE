const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const habitSchema = new Schema({
    img: String,
    title: String,
    description: String,
    days: [{date:Date, done: Boolean}]
  });

const Habit = mongoose.model('User', userSchema);

module.exports = Habit;