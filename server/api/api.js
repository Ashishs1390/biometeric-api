var router = require('express').Router();
router.use('/users',require('./users/userRoutes'));
router.use('/slots',require('./slots/slotRoutes'));

router.use('/dummy',require('./dummyApi/dummyRoutes'));

module.exports = router;