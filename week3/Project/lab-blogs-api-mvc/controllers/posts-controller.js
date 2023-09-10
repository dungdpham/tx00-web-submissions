const posts = require('../models/blog-data').posts;

exports.getPosts = (req, res) => {
    res.json(posts);
};

exports.getPostById = (req, res) => {
    const id = req.params.id;
    const post = posts.find(p => p.id === id);
    
    if (!post) {
        return res.status(404).json({message: 'The post with the specified ID does not exist'});
    }

    res.json(post);
};

exports.postPost = (req, res) => {
    const {title, contents} = req.body;

    if (!title || !contents) {
        return res.status(400).json({message: 'Please provide title and content for the post'});
    }

    const newPost = {
        id: Date.now().toString(),
        title,
        contents,
        created_at: new Date(),
        updated_at: new Date()
    };
    posts.push(newPost);

    res.status(201).json(newPost);
};

exports.putPostById = (req, res) => {
    const id = req.params.id;
    const {title, contents} = req.body;
  
    const index = posts.findIndex(p => p.id === id);
  
    if (index === -1) {
      return res.status(404).json({ message: "The post with the specified ID does not exist" });
    }
  
    if (!title || !contents) {
      return res.status(400).json({ message: "Please provide title and contents for the post" });
    }
  
    posts[index].title = title;
    posts[index].contents = contents;
    posts[index].updated_at = new Date();
  
    res.status(200).json(posts[index]);
};

exports.deletePostById = (req, res) => {
    const id = req.params.id;

    const index = posts.findIndex(p => p.id === id);
  
    if (index === -1) {
      return res.status(404).json({ message: "The post with the specified ID does not exist" });
    }
  
    const deletedPost = posts.splice(index, 1)[0];
  
    res.json(deletedPost);
}