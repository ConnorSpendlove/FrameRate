const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage', { title: 'Game Browser' });
});

router.get('/profile', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }
  res.render('profile');
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});



module.exports = router;