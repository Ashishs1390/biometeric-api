const router = require('express').Router();
import {post,slotBook,getSlot} from './slotsController'
router.route('/').post(post);
router.route('/bookslot').post(slotBook);
router.route('/').get(getSlot);


module.exports = router;