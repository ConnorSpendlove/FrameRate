// routes/loginRoutes.js

const express = require('express');
const router = express.Router();
const { User } = require('/models/user.js');

// POST route for user login
router.post('/login', async (req, res) => {
    try {
        // Extract username and password from the request body
        const { username, password } = req.body;

        // Find the user with the provided username
        const user = await User.findOne({ where: { username } });

        // If user not found or password does not match, return error
        if (!user || !user.checkPassword(password)) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        // Redirect to the home page upon successful login
        res.redirect('/'); // Adjust the URL as needed
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});



module.exports = router;

