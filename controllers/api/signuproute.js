const express = require('express');
const router = express.Router();
const { User } = require('/models/user.js');
// POST route for user sign-up
router.post('/signup', async (req, res) => {
    try {
        // Extract username and password from the request body
        const { username, password } = req.body;

        // Check if the username already exists
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        // Create a new user record
        const newUser = await User.create({ username, password });

        // Redirect to the home page upon successful sign-up
        res.redirect('/'); // Adjust the URL as needed
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
