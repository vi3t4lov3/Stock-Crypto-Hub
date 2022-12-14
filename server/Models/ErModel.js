import mongoose from 'mongoose';
const earningSchema = mongoose.Schema(
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
		earningDate: {
			type: String,
			required: true,
		},
		estimatedMove: {
			type: Number,
			default: 0,
			required: true,
		},
		lastMove: {
			type: Number,
			default: 0,
			required: true,
		},
		bearCount: [],
		bullCount: [],
		neutralCount: [],
	},
	{
		timestamps: true,
	}
);
// postSchema
//   .virtual("reactCount")
//   // Getter
//   .get(function () {
//     return this.react.length;
//   });
function formatDate(date) {
	const stringDate = date.toLocaleString(undefined, {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
	return stringDate;
}
var CalendarModel = mongoose.model('Earning', earningSchema);
export default CalendarModel;
