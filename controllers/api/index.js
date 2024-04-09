const router = require('express').Router();
const loginRoutes = require('./loginroutes');
const profileRoutes = require('./profileroutes');
const signupRoutes = require('./signuproute')
router.use('/login', loginRoutes);
router.use('/profile', profileRoutes);
router.use('/signup', signupRoutes);

module.exports = router;