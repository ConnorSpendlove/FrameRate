const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('searchresult', { title: 'Game Browser' });
});

module.exports = router;