import express from 'express';
import requireAuth from '../Middleware/requireAuth.js';
import User from '../Models/UserModel.js';

import {
	createAlert,
	deleteAlert,
	getAllAlerts,
	getAlert,
	bearCountTicker,
	bullCountTicker,
	updateAlert,
	iBuy,
	neutralCountTicker,
} from '../Controllers/AlertController.js';

const router = express.Router();

// require auth for all workout routes
// router.use(requireAuth)

router.post('/', createAlert);
router.get('/:id', getAlert);
router.get('/', getAllAlerts);
router.put('/:id', updateAlert);
router.delete('/:id', deleteAlert);
router.put('/:id/ibuy', iBuy);
router.put('/:id/bearcount', bearCountTicker);
router.put('/:id/bullcount', bullCountTicker);
router.put('/:id/neutralcount', neutralCountTicker);
export default router;
