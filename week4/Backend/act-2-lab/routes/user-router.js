const express = require('express');
const {
  getUsers, 
  getUser, 
  createUser, 
  deleteUser, 
  putUser,
  patchUser
} = require('../controllers/user-controller');

const router = express.Router()

// GET all users
router.get('/', getUsers)

// GET a single user
router.get('/:id', getUser)

// POST a new user
router.post('/', createUser)

// DELETE a user
router.delete('/:id', deleteUser)

// Update user using PATCH 
router.patch('/:id', patchUser)

// Update user using PUT 
router.put('/:id', putUser)

module.exports = router;