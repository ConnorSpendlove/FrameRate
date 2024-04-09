// profileRoutes.js

const express = require('express');
const router = express.Router();
const { Post } = require('/models/post.js');

// GET all posts for a user
router.get('/:userId/posts', async (req, res) => {
    try {
        const userId = req.params.userId;
        const userPosts = await Post.findAll({ where: { user_id: userId } });
        res.json(userPosts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// POST a new post for a user
router.post('/:userId/posts', async (req, res) => {
    try {
        const userId = req.params.userId;
        const { rating, user_review } = req.body;
        const newPost = await Post.create({ rating, user_review, user_id: userId });
        res.json(newPost);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// PUT update a user's post
router.put('/:userId/posts/:postId', async (req, res) => {
    try {
        const { userId, postId } = req.params;
        const { rating, user_review } = req.body;
        const updatedPost = await Post.update(
            { rating, user_review },
            { where: { id: postId, user_id: userId } }
        );
        res.json(updatedPost);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// DELETE a user's post
router.delete('/:userId/posts/:postId', async (req, res) => {
    try {
        const { userId, postId } = req.params;
        await Post.destroy({ where: { id: postId, user_id: userId } });
        res.json({ message: 'Post deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
