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
		alert_command: {
			type: String,
			required: true,
			trim: true,
		},
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
		closed_price: {
			type: Number,
			trim: true,
		},
		note: {
			type: String,
		},
		strikes: {
			type: String,
			trim: true,
		},
		expiry_date: {
			type: String,
		},
		chart: {
			type: String,
		},
		analyst: {
			type: String,
		},
		buycall: {},
		buyput: {},
		iBuy: [],
		bearCount: [],
		bullCount: [],
		neutralCount: [],
		status: {
			type: String,
			trim: true,
			default: 'OPEN',
		},
	},
	{
		timestamps: true,
	}
);

var AlertModel = mongoose.model('Alert', alertSchema);
export default AlertModel;
