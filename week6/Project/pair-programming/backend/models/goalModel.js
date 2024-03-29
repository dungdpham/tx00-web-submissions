const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Goal', goalSchema);
