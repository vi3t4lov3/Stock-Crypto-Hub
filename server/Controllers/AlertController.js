import AlertModel from '../Models/AlertModel.js';
import mongoose from 'mongoose';
import UserModel from '../Models/UserModel.js';

// Creat new Post
export const createAlert = async (req, res) => {
	const alert = new AlertModel(req.body);
	try {
		await alert.save();
		res.status(200).json(alert);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// get all Posts
export const getAllAlerts = async (req, res) => {
	try {
		const alert = await AlertModel.find({}).sort({ createdAt: -1 });
		if (alert) {
			res.status(200).json(alert);
		} else {
			res.status(404).json('No such Alert found');
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
// Get a post
export const getAlert = async (req, res) => {
	const id = req.params.id;
	try {
		const alert = await AlertModel.findById(id);
		res.status(200).json(alert);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Update a post
export const updateAlert = async (req, res) => {
	const alertId = req.params.id;
	const { userId } = req.body;
	try {
		const post = await AlertModel.findById(alertId);
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
export const deleteAlert = async (req, res) => {
	const alertId = req.params.id;
	const { userId } = req.body;

	try {
		const alert = await AlertModel.findById(alertId);
		if (Alert.userId === userId) {
			await alert.deleteOne();
			res.status(200).json('Alert deleted successfully');
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
		const post = await AlertModel.findById(postId);
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
		const post = await AlertModel.findById(postId);
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
		const post = await AlertModel.findById(postId);
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

// like and dislike a post
export const iBuy = async (req, res) => {
	const alertId = req.params.id;
	const { username } = req.body;
	// console.log(alertId);
	// console.log(username);
	try {
		const alert = await AlertModel.findById(alertId);
		if (!alert.iBuy.includes(username)) {
			await alert.updateOne({ $push: { iBuy: username } });
			res.status(200).json('I Bought');
			// console.log('like');
		} else {
			await alert.updateOne({ $pull: { iBuy: username } });
			res.status(200).json('I Canceled');
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
