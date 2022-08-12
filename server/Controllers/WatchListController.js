import WatchListModel from '../Models/WlModel.js';
import mongoose from 'mongoose';
import UserModel from '../Models/UserModel.js';

// Creat new Post
export const createWatchList = async (req, res) => {
	const watchList = new WatchListModel(req.body);
	try {
		await watchList.save();
		res.status(200).json(watchList);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// get all Posts
export const getAllWatchLists = async (req, res) => {
	try {
		const watchList = await WatchListModel.find({}).sort({ createdAt: -1 });
		if (watchList) {
			res.status(200).json(watchList);
		} else {
			res.status(404).json('No such watchList found');
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
// Get a post
export const getWatchList = async (req, res) => {
	const id = req.params.id;
	try {
		const watchList = await WatchListModel.findById(id);
		res.status(200).json(watchList);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Update a post
export const updateWatchList = async (req, res) => {
	const watchListId = req.params.id;
	const { userId } = req.body;
	try {
		const post = await WatchListModel.findById(postId);
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
export const deleteWatchList = async (req, res) => {
	const watchListId = req.params.id;
	const { userId } = req.body;

	try {
		const watchList = await WatchListModel.findById(watchListId);
		if (watchList.userId === userId) {
			await watchList.deleteOne();
			res.status(200).json('watchList deleted successfully');
		} else {
			res
				.status(403)
				.json('Action forbidden! You are not the author of this post');
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
// //bullcount
// export const bullCountTicker = async (req, res) => {
// 	const { id } = req.params;

// 	// console.log(`ID ${id}`);

// 	if (!mongoose.Types.ObjectId.isValid(id))
// 		return res.status(404).send(`No post with id: ${id}`);

// 	const post = await WatchListModel.findById(id);

// 	await WatchListModel.findByIdAndUpdate(
// 		id,
// 		{ bullCount: post.bullCount + 1 },
// 		{ new: true }
// 	)
// 		.then((_) => {
// 			console.log('Data updated successfully');
// 			res.json('Data updated successfully');
// 		})
// 		.catch((err) => {
// 			console.error(err);
// 		});
// };
// //bearcount
// export const bearCountTicker = async (req, res) => {
// 	const { id } = req.params;

// 	// console.log(`ID ${id}`);

// 	if (!mongoose.Types.ObjectId.isValid(id))
// 		return res.status(404).send(`No post with id: ${id}`);

// 	const post = await WatchListModel.findById(id);

// 	await WatchListModel.findByIdAndUpdate(
// 		id,
// 		{ bearCount: post.bearCount + 1 },
// 		{ new: true }
// 	)
// 		.then((_) => {
// 			console.log('Data updated successfully');
// 			res.json('Data updated successfully');
// 		})
// 		.catch((err) => {
// 			console.error(err);
// 		});
// };

// voted and unvote a bull
export const bullCountTicker = async (req, res) => {
	const postId = req.params.id;
	const { userId } = req.body;

	try {
		const post = await WatchListModel.findById(postId);
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
	console.log(req.params.id);

	const postId = req.params.id;
	const { userId } = req.body;

	try {
		const post = await WatchListModel.findById(postId);
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
	console.log(req.params.id);

	const postId = req.params.id;
	const { userId } = req.body;

	try {
		const post = await WatchListModel.findById(postId);
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
