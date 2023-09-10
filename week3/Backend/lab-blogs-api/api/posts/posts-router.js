const express = require('express');
const router = express.Router();

const posts = require('../../post-data').posts;
const comments = require('../../post-data').comments;

router.get('/', (req, res) => {
    res.json(posts);
    //throw new Error('The posts information could not be retrieved')
})

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({message: 'The post with the specified ID does not exist'});
    }
    //throw new Error('The post information could not be retrieved')
})

router.post('/', (req, res) => {
    const {title, contents} = req.body;
    if (title && contents) {
        const newPost = {
            id: posts.length + 1,
            title,
            contents,
            created_at: new Date(),
            updated_at: new Date()
        };
        posts.push(newPost);
        res.status(201).json(newPost)
    } else {
        res.status(400).json({message: 'Please provide title and contents for the post'});
    }
    //throw new Error('There was an error while saving the post')
})

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const {title, contents} = req.body;
    const index = posts.findIndex(post => post.id === id);
    if (index === -1) {
        res.status(404).json({message: 'The post with the specified ID does not exist'});
    } else if (!title || !contents) {
        res.status(400).json({message: 'Please provide title and contents for the post'});
    } else {
        posts[index] = {...posts[index], title, contents, updated_at: new Date()};
        res.status(200).json(posts[index])
    }
    //throw new Error('The post information could not be modified')
})

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = posts.findIndex(post => post.id === id);
    if (index === -1) {
        res.status(404).json({message: 'The post with the specified ID does not exist'});
    } else {
        const deletedPost = posts.splice(index, 1)[0];
        res.json(deletedPost)
    }
    //throw new Error('The post could not be removed')
})

router.get('/:id/comments', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    if (post) {
        const comment = comments.filter(comment => comment.post_id === id);
        res.json(comment)
    } else {
        res.status(404).json({message: 'The post with the specified ID does not exist'});
    }
    //throw new Error('The comments information could not be retrieved')
})

module.exports = router;