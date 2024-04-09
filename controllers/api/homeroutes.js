const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage', { title: 'Game Browser' });
});

module.exports = router;