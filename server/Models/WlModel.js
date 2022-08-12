import mongoose from 'mongoose';
const watchListSchema = mongoose.Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
		},
		note: {
			type: String,
		},
		ticker: {
			type: String,
			required: true,
		},
		support: {
			type: String,
			required: true,
		},
		resistance: {
			type: String,
			required: true,
		},
		analysts: {
			type: String,
		},
		chart: {
			type: String,
		},
		call: {
			type: String,
		},
		put: {
			type: String,
		},
		likeCount: {
			type: Number,
			default: 0,
		},
		bullCount: [],
		bearCount: [],
		neutralCount: [],
	},
	{
		timestamps: true,
	}
);

var WlModel = mongoose.model('WatchList', watchListSchema);
export default WlModel;
