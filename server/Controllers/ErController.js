import CalendarModel from '../Models/ErModel.js';
import mongoose from 'mongoose';
import UserModel from '../Models/UserModel.js';

// Creat new Post
export const createCalendar = async (req, res) => {
	const calendar = new CalendarModel(req.body);
	try {
		await calendar.save();
		res.status(200).json(calendar);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// get all Posts
export const getAllCalendars = async (req, res) => {
	try {
		const calendar = await CalendarModel.find({}).sort({ createdAt: -1 });
		if (calendar) {
			res.status(200).json(calendar);
		} else {
			res.status(404).json('No such calendar found');
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
// Get a post
export const getCalendar = async (req, res) => {
	const id = req.params.id;
	try {
		const calendar = await CalendarModel.findById(id);
		res.status(200).json(calendar);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Update a post
export const updateCalendar = async (req, res) => {
	const calendarId = req.params.id;
	const { userId } = req.body;
	try {
		const post = await CalendarModel.findById(postId);
		if (post.userId === userId) {
			await post.updateOne({ $set: req.body });
			res.status(200).json('Post Updated');
		} else {
			res
				.status(403)
				.json('Action forbidden! You are not the author of this post');
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Delete a post
export const deleteCalendar = async (req, res) => {
	const calendarId = req.params.id;
	const { userId } = req.body;

	try {
		const calendar = await CalendarModel.findById(calendarId);
		if (calendar.userId === userId) {
			await calendar.deleteOne();
			res.status(200).json('calendar deleted successfully');
		} else {
			res
				.status(403)
				.json('Action forbidden! You are not the author of this post');
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// voted and unvote a bull
export const bullCountTicker = async (req, res) => {
	const postId = req.params.id;
	const { userId } = req.body;

	try {
		const post = await CalendarModel.findById(postId);
		if (!post.bullCount.includes(userId)) {
			await post.updateOne({ $push: { bullCount: userId } });
			res.status(200).json('Bull my voted');
			// console.log('like');
		} else {
			await post.updateOne({ $pull: { bullCount: userId } });
			res.status(200).json('Remove my vote');
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
// voted and unvote a bear
export const bearCountTicker = async (req, res) => {
	// console.log(req.params.id);

	const postId = req.params.id;
	const { userId } = req.body;

	try {
		const post = await CalendarModel.findById(postId);
		if (!post.bearCount.includes(userId)) {
			await post.updateOne({ $push: { bearCount: userId } });
			res.status(200).json('Bull my voted');
			// console.log('like');
		} else {
			await post.updateOne({ $pull: { bearCount: userId } });
			res.status(200).json('Remove my vote');
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
// voted and unvote a bear
export const neutralCountTicker = async (req, res) => {
	// console.log(req.params.id);

	const postId = req.params.id;
	const { userId } = req.body;

	try {
		const post = await CalendarModel.findById(postId);
		if (!post.neutralCount.includes(userId)) {
			await post.updateOne({ $push: { neutralCount: userId } });
			res.status(200).json('Bull my voted');
			// console.log('like');
		} else {
			await post.updateOne({ $pull: { neutralCount: userId } });
			res.status(200).json('Remove my vote');
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
