const router = require('express').Router();
import {get} from './dummyController';
console.log("dummy")
router.route('/').get(get);

module.exports = router;