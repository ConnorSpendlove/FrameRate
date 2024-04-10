const express = require('express');
const router = express.Router();
const { User } = require('../../models');


// Route to handle user sign-up
router.post('/signup', async (req, res) => {
  try {
      const { username, password } = req.body;

      // Check if username already exists
      const existingUser = await User.findOne({ where: { username } });
      if (existingUser) {
          return res.status(400).json({ message: 'Username already exists' });
      }

      // Check password length
      if (password.length < 8) {
          return res.status(400).json({ message: 'Password must be at least 8 characters long' });
      }

      // Create new user
      const userData = await User.create({ username, password });

      req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.logged_in = true;
          res.status(200).json(userData);
      });
  } catch (error) {
      res.status(400).json(error);
  }
});

router.post('/signin', async (req, res) => {
  try {
    // Extract username and password from the request body
    const { username, password } = req.body;

  

    // Find the user in the database based on the username
    const userData = await User.findOne({ where: { username } });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: 'You are now logged in!' });
    });

    // If user data not found, return error message
    if (!userData) {
      return res.status(400).json({ message: 'Incorrect username or password' });
    }

    // Check if the password provided matches the hashed password in the database
    const validPassword = await userData.checkPassword(password);

    // If password is invalid, return error message
    if (!validPassword) {
      return res.status(400).json({ message: 'Incorrect username or password' });
    }

    // Save user session and return success message with user data
  

  } catch (error) {
    // If any error occurs, return a 400 status with the error message
    res.status(400).json(error);
  }
});

// Route to handle user logout
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

router.get('/users', async (req, res) => {
  try {
      // Fetch all users from the database
      const users = await User.findAll();

      // Return the users as JSON
      res.json(users);
  } catch (error) {
      // Handle any errors that occur
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;
