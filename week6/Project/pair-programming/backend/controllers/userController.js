const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const User = require('../models/userModel');

async function hashPassword(password) {
  try {
    // Generate a salt with 10 rounds (you can adjust this number)
    const salt = await bcrypt.genSalt(10);

    // Hash the password using the generated salt
    const hashedPassword = await bcrypt.hash(password, salt);

    // console.log('Password:', password);
    // console.log('Salt:', salt);
    // console.log('Hashed Password:', hashedPassword);
    return hashedPassword;
  } catch (error) {
    console.error('Error:', error);
  }
}

function createJWT(payload) {
  const secretKey = process.env.JWT_SECRET;

  // Sign the JWT with the payload and secret key
  const token = jwt.sign(payload, secretKey, { expiresIn: '1d' });

  return token;
}

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      throw new Error('User must have name, email and password!');
    }

    if (!validator.isEmail(email)) {
      throw new Error('Email not valid');
    }

    if (!validator.isStrongPassword(password)) {
      throw new Error('Password not strong enough');
    }

    const exist = await User.findOne({ email });

    if (exist) {
      throw new Error('Email already registered');
    }

    const hashedPassword = await hashPassword(password);

    const data = { name, email, password: hashedPassword };
    const user = await User.create(data);

    const token = createJWT({ id: user.id, name: user.name });

    res.status(201).json({ ...user.toObject(), token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error('Provide both email and password to login');
    }

    const user = await User.findOne({ email });

    if (!user) {
      throw new Error('No user with email provided');
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw new Error('Invalid password');
    }

    const token = createJWT({ id: user.id, name: user.name });

    res.status(200).json({ ...user.toObject(), token });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];

    const decoded = jwt.decode(token);

    const user = await User.findOne({ _id: decoded.id });

    if (!user) {
      throw new Error('User not found');
    }

    res.status(200).json(user.toObject());
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
