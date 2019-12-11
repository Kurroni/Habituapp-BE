const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  password: String,
  username: {
    type:String,
    required: true,
    unique: true
  },
  email: {
    type:String,
    required: true,
    unique: true
  },
  habits: [{type: Schema.Types.ObjectId, ref: 'Habit'}],
  });

const User = mongoose.model('User', userSchema);

module.exports = User;