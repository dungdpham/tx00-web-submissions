const express = require('express');
const router = express.Router();

const {
    getPosts,
    getPostById,
    postPost,
    putPostById,
    deletePostById
} = require('../controllers/posts-controller');

router.get('/api/posts', getPosts);

router.get('/api/posts/:id', getPostById);

router.post('/api/posts', postPost);

router.put('/api/posts/:id', putPostById);

router.delete('/api/posts/:id', deletePostById);

module.exports = router;