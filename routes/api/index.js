const router = require('express').Router();

//importing modules
const userRoutes = require('./user-routes.js');
const thoughtRoutes = require('./thought-routes');

//instructing router to use modules
router.use('/Users', userRoutes);
router.use('/Thoughts', thoughtRoutes);

module.exports = router;