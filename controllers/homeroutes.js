const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('profile', { title: 'Game Browser' });
});

// router.get('/profile', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (!req.session.logged_in) {
//     res.redirect('/login');
//     return;
//   }
//   res.render('profile');
// });

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

router.get('/game/:id', (req, res) => {
  const gameId = req.params.id;
  // Fetch game details from OpenCritic API using gameId
  // Render game page with fetched data
  res.render('game', { gameId });
});

module.exports = router;