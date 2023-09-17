const User = require('../models/user-model');
const mongoose = require('mongoose');

// create a new user
const createUser = async (req, res, next) => {
    try {
        const { name, bio } = req.body;

        if (!name || !bio) {
            return res.status(400).json({error: 'Please provide information for both fields: name, bio'});
        };

        const user = await User.create({name, bio});

        res.status(201).json(user);
    } catch (error) {
        next(error);
    };
};

// get all users
const getUsers = async (req, res, next) => {
    try {
        const users = await User.find({}).sort({createdAt: -1});

        res.status(200).json(users);
    } catch (error) {
        next(error);
    };
};

// get a single user
const getUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({error: 'No user with specified ID'});
        };

        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({error: 'No user with specified ID'});
        };

        res.status(200).json(user);
    } catch (error) {
        next(error);
    };
};

// delete a user
const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({error: 'No user with specified ID'});
        };

        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({error: 'No user with specified ID'});
        };

        res.status(200).json(deletedUser);
    } catch (error) {
        next(error);
    };
};

// update user using PATCH 
const patchUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, bio } = req.body;
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({error: 'No user with specified ID'});
        };

        if (!name && !bio) {
            return res.status(400).json({error: 'Please provide information for at least one field: name, bio'});
        };

        const patchedUser = await User.findByIdAndUpdate(id, {...req.body}, {
            new: true
        });

        if (!patchedUser) {
            return res.status(404).json({error: 'No user with specified ID'});
        };

        res.json(patchedUser);
    } catch (error) {
        next(error);
    };
};

// update user using PUT 
const putUser = async (req, res, next) => {
    try {
    const { id } = req.params;
    const { name, bio } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No user with specified ID'});
    };

    if (!name || !bio) {
        return res.status(400).json({error: 'Please provide information for both fields: name, bio'});
    };

    const replacedUser = await User.findByIdAndUpdate(id, req.body, {
        new: true,
        overwrite: true
    });

    if (!replacedUser) {
        return res.status(404).json({error: 'No user with specified ID'});
    };

    res.status(200).json(replacedUser);
    } catch (error) {
        next(error);
    };
};


module.exports = {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  putUser,
  patchUser
};