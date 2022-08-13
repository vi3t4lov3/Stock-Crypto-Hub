import express from 'express';
import requireAuth from '../Middleware/requireAuth.js';
import User from '../Models/UserModel.js';

import {
	createWatchList,
	getAllWatchLists,
	getWatchList,
	deleteWatchList,
	neutralCountTicker,
	updateWatchList,
	bullCountTicker,
	bearCountTicker,
} from '../Controllers/WatchListController.js';

const router = express.Router();

// require auth for all workout routes
router.use(requireAuth);

router.post('/', createWatchList);
router.get('/:id', getWatchList);
router.get('/', getAllWatchLists);
router.put('/:id', updateWatchList);
router.delete('/:id', deleteWatchList);
router.put('/:id/bullcount', bullCountTicker);
router.put('/:id/bearcount', bearCountTicker);
router.put('/:id/neutralcount', neutralCountTicker);

// router.put("/:id/like", likeWatchList)
export default router;
