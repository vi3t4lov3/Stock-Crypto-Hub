import express from 'express';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import requireAuth from '../Middleware/requireAuth.js';
import User from '../Models/UserModel.js';

import {
	createCalendar,
	deleteCalendar,
	getAllCalendars,
	getCalendar,
	bearCountTicker,
	bullCountTicker,
	updateCalendar,
	neutralCountTicker,
} from '../Controllers/ErController.js';

const router = express.Router();

// require auth for all workout routes
// router.use(requireAuth)

router.post('/', createCalendar);
router.get('/:id', getCalendar);
router.get('/', getAllCalendars);
router.put('/:id', updateCalendar);
router.delete('/:id', deleteCalendar);
router.put('/:id/bearcount', bearCountTicker);
router.put('/:id/bullcount', bullCountTicker);
router.put('/:id/neutralcount', neutralCountTicker);
export default router;
