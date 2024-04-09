const express = require('express');
const bcrypt = require('bcrypt');
const pool = require('../db');

const router = express.Router();

// Route to handle user login
router.post('/login', (req, res) => {
    // Check credentials and log in user
    
    const { username, password } = req.body;
    if (username === 'user' && password === 'password') {
      req.session.loggedIn = true;
      res.redirect('/');
    } else {
      // Invalid credentials, render login page with error message
      res.render('login', { error: 'Invalid username or password' });
    }
  });
  

module.exports = router;

