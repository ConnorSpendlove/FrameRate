const router = require('express').Router();
const loginRoutes = require('./loginroutes');
const profileRoutes = require('./profileroutes');
router.use('/login', loginRoutes);
router.use('/profile', profileRoutes);
module.exports = router;