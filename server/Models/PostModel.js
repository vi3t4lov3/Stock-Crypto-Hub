import mongoose from 'mongoose';
import User from './UserModel.js';
const { ObjectId } = mongoose.Schema.Types;
const postSchema = mongoose.Schema(
	{
		userId: {
			type: String,
			required: true,
			ref: 'User',
		},
		username: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
			minlength: 1,
		},
		body: {
			type: String,
			required: true,
			minlength: 1,
		},
		likes: [],
		comment: [
			{
				comment_body: {
					type: String,
					minlength: 1,
					maxlength: 280,
				},
				userId: { type: ObjectId, ref: 'User', required: true },
				username: {type: String,required: true},
				postId: { type: ObjectId },
			},
		],
		image: String,
		url: String,
	},
	{
		timestamps: true,
	}
);
var PostModel = mongoose.model('Posts', postSchema);
export default PostModel;
