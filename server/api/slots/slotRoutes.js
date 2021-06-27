const router = require('express').Router();
import {post,slotBook} from './slotsController'
router.route('/').post(post);
router.route('/bookslot').post(slotBook);


module.exports = router;