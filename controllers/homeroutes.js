const router = require('express').Router();
const { Post } = require('../models'); // Import the Post model

router.get('/', async (req, res) => {
  const loggedIn = req.session.logged_in || false;
  res.render('homepage', { loggedIn });
});

router.get('/profile', async (req, res) => {
  try {
    // If the user is not logged in, redirect to the login page
    if (!req.session.logged_in) {
      res.redirect('/login');
      return;
    }

    // Fetch posts associated with the logged-in user from the database
    // const userId = req.session.user_id;
    // const userPosts = await Post.findAll({ where: { userId } });

    // Render the profile page and pass the user's posts to the template
    res.render('profile', { });
  } catch (error) {
    console.error('Error fetching user posts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;



module.exports = router;