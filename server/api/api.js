var router = require('express').Router();
router.use('/users',require('./users/userRoutes'));

module.exports = router;