const {posts, comments} = require('../models/blog-data');

exports.createCommentByPostId = (req, res) => {
    const id = req.params.id;
    const {text} = req.body;
  
    const post = posts.find(p => p.id === id);
  
    if (!post) {
      return res.status(404).json({ message: "The post with the specified ID does not exist" });
    }
  
    if (!text) {
      return res.status(400).json({ message: "Please provide text for the comment" });
    }
  
    const newComment = {
        comment_id: Date.now().toString(),        
        text,
        post_id: id,
        created_at: new Date(),
        updated_at: new Date(),
    };
  
    comments.push(newComment);
  
    res.status(201).json(newComment);
};
  
exports.getCommentByPostId = (req, res) => {
    const id = req.params.id;
  
    const post = posts.find(p => p.id === id);
  
    if (!post) {
      return res.status(404).json({ message: "The post with the specified ID does not exist" });
    }
    
    const comment = comments.filter(c => c.post_id === id);
    
    res.json(comment);
};

exports.getCommentByCommentId = (req, res) => {
    const id = req.params.id;

    const index = comments.findIndex(c => c.comment_id === id);
  
    if (index === -1) {
      return res.status(404).json({ message: "The comment with the specified ID does not exist" });
    }

    res.json(comments[index]);
};

exports.updateCommentByCommentId = (req, res) => {
    const id = req.params.id;
    const {text} = req.body;
  
    const index = comments.findIndex(c => c.comment_id === id);
  
    if (index === -1) {
      return res.status(404).json({ message: "The comment with the specified ID does not exist" });
    }
  
    if (!text) {
      return res.status(400).json({ message: "Please provide text for the comment" });
    }
  
    comments[index].text = text;
    comments[index].updated_at = new Date();
  
    res.status(200).json(comments[index]);
};
  
exports.deleteCommentByCommentId = (req, res) => {
    const id = req.params.id;
  
    const index = comments.findIndex(c => c.comment_id === id);
  
    if (index === -1) {
      return res.status(404).json({ message: "The comment with the specified ID does not exist" });
    }

    const deletedComment = comments.splice(index, 1)[0];
  
    res.json(deletedComment);
};