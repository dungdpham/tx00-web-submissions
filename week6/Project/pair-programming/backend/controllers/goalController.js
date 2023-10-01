const Goal = require('../models/goalModel');
const User = require('../models/userModel');

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = async (req, res, next) => {
  const goals = await Goal.find({ user: req.user._id });

  res.status(200).json(goals);
};

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setGoal = async (req, res, next) => {
  try {
    const { text } = req.body;

    if (!text) {
      throw new Error('Please provide some text');
    }

    const goal = await Goal.create({ text, user: req.user._id });

    res.status(201).json(goal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { text } = req.body;

    if (!text) {
      throw new Error('Please provide some text');
    }

    const updatedGoal = await Goal.findByIdAndUpdate(id, { text });

    if (!updateGoal) {
      throw new Error('No goal with provided ID');
    }

    res.status(200).json(updatedGoal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid goal id' });
  }

  const goal = await Goal.findOneAndDelete({ _id: id });

  if (!goal) {
    return res.status(400).json({ error: 'Goal not found' });
  }

  res.status(200).json(goal);
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
