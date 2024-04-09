const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('profile', { title: 'Game Browser' });
});

module.exports = router;
