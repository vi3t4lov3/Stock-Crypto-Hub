// import mongoose from 'mongoose';

// const commentSchema = mongoose.Schema(
// 	{
// 		body: {
// 			type: String,
// 			required: true,
// 			max_length: 280,
// 		},
// 		postId: {
//         type: String,
//         required: true
//     },
// 		userId: {
// 			type: String,
// 			required: true,
// 		},
// 		username: {
// 			type: String,
// 			required: true,
// 		},
// 		likes: [],
// 	},
// 	{
// 		timestamps: true,
// 	},
// 	// this will add an "id" same with "_id"
// 	{
// 		toJSON: {
// 			getters: true,
// 		},
// 	}
// );

// function formatDate(date) {
// 	const stringDate = date.toLocaleString(undefined, {
// 		year: 'numeric',
// 		month: 'long',
// 		day: 'numeric',
// 	});
// 	return stringDate;
// }

// var CommentModel = mongoose.model('Comments', commentSchema);
// export default commentSchema;
