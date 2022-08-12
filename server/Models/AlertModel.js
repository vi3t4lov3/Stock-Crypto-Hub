import mongoose from 'mongoose';
const alertSchema = mongoose.Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
		},
		ticker: {
			type: String,
			required: true,
		},
		alert_command: { type: String, required: true, trim: true },
		entry: {
			type: Number,
			required: true,
			trim: true,
		},
		stoploss: {
			type: Number,
			required: true,
			trim: true,
		},
		target: {
			type: Number,
			required: true,
			trim: true,
		},
		note: {
			type: String,
		},
		buycall: {},
		buyput: {},
		bearCount: [],
		bullCount: [],
		neutralCount: [],
	},
	{
		timestamps: true,
	}
);

var AlertModel = mongoose.model('Alert', alertSchema);
export default AlertModel;
