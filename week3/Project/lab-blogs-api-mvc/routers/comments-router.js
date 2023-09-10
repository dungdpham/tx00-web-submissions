const express = require('express');
const router = express.Router();

const {
    createCommentByPostId,
    getCommentByPostId,
    getCommentByCommentId,
    updateCommentByCommentId,
    deleteCommentByCommentId,
} = require('../controllers/comments-controller');
  
router.post('/api/posts/:id/comments', createCommentByPostId);
  
router.get('/api/posts/:id/comments', getCommentByPostId);

router.get('/api/comments/:id', getCommentByCommentId);
  
router.put('/api/comments/:id', updateCommentByCommentId);
  
router.delete('/api/comments/:id', deleteCommentByCommentId);

module.exports = router;