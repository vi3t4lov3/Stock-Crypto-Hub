import express from 'express';
import requireAuth from '../Middleware/requireAuth.js';
import User from '../Models/UserModel.js';

import {
	createWatchList,
	getAllWatchLists,
	getWatchList,
	deleteWatchList,
	// likeWatchList,
	updateWatchList,
	bullCountTicker,
	bearCountTicker,
} from '../Controllers/WatchListController.js';

const router = express.Router();

// require auth for all workout routes
// router.use(requireAuth)

router.post('/', createWatchList);
router.get('/:id', getWatchList);
router.get('/', getAllWatchLists);
router.put('/:id', updateWatchList);
router.delete('/:id', deleteWatchList);
router.get('/:id/bullcount', bullCountTicker);
router.get('/:id/bearcount', bearCountTicker);
// router.put("/:id/like", likeWatchList)
export default router;
