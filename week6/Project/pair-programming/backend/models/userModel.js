const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String, // min. 8 characters, must have: lowercase, uppercase, digit, special character
    required: true,
  },
});

module.exports = mongoose.model('User', userSchema);
