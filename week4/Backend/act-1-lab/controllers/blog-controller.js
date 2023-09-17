const Blog = require('../models/blog-model');
const mongoose = require('mongoose');

// create a new blog
const createBlog = async (req, res, next) => {
    try {
        const { title, body, author} = req.body;
        //console.log(title, body, author);

        if (!title || !body || !author) {
            return res.status(400).json({error: 'Please provide information for all fields: title, body, author'});
        };

        const blog = await Blog.create({title, body, author});

        res.status(201).json(blog);
    } catch (error) {
        next(error);
    };
};

// get all blogs
const getBlogs = async (req, res, next) => {
    try {
        const blogs = await Blog.find({}).sort({createdAt: -1});

        res.status(200).json(blogs);
    } catch (error) {
        next(error);
    };
};

// get a single blog
const getBlog = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({error: 'No blog with specified ID'});
        };

        const blog = await Blog.findById(id);
        
        res.status(200).json(blog);
    } catch (error) {
        next(error);
    };
};

// delete a blog
const deleteBlog = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({error: 'No blog with specified ID'});
        };

        const deletedBlog = await Blog.findByIdAndDelete(id);

        if (!deleteBlog) {
            return res.status(404).json({error: 'No blog with specified ID'});
        };

        res.status(200).json(deletedBlog);
    } catch (error) {
        next(error);
    };
};

// Update blog using PATCH 
const patchBlog = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, body, author } = req.body;
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({error: 'No blog with specified ID'});
        };

        if (!title && !body && !author) {
            return res.status(400).json({error: 'Please provide information for at least one field: title, body, author'});
        };

        const patchedBlog = await Blog.findByIdAndUpdate(id, {...req.body}, {
            new: true
        });

        res.status(200).json(patchedBlog);
    } catch (error) {
        next(error);
    };
};

// Update blog using PUT 
const putBlog = async (req, res, next) => {
    try {
    const { id } = req.params;
    const { title, body, author } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No blog with specified ID'});
    };

    if (!title || !body || !author) {
        return res.status(400).json({error: 'Please provide information for all fields: title, body, author'});
    };

    const replacedBlog = await Blog.findByIdAndUpdate(id, req.body, {
        new: true,
        overwrite: true
    });

    res.status(200).json(replacedBlog);
    } catch (error) {
        next(error);
    };
};


module.exports = {
  getBlogs,
  getBlog,
  createBlog,
  deleteBlog,
  putBlog,
  patchBlog
};