import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			trim: true,
			minlength: 5,
			maxlength: 24,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			match: /.+\@.+\..+/,
			trim: true,
		},
		password: {
			type: String,
			required: true,
			// minlength: 8
		},
		firstname: {
			type: String,
			required: true,
			trim: true,
		},
		lastname: {
			type: String,
			required: true,
			trim: true,
		},
		phone: {
			type: String,
			trim: true,
		},
		address: {
			type: String,
			trim: true,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
		role: {
			type: Number,
			default: 0, //0 for member ,1 for Admin, 2 for mod, 3 for alert
		},
		avatarPicture: {
			type: String,
			default:
				'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png',
		},
		profileImage: {
			type: String,
			default:
				'https://res.cloudinary.com/duoer49sc/image/upload/v1660360223/TUNGUYEN/cover_thwnn7.jpg',
		},
		about: String,
		livesin: String,
		worksAt: String,
		level: Number,
		followers: [],
		following: [],
	},
	{ timestamps: true }
);
// function formatDate(date) {
//     const stringDate = date.toLocaleString(undefined, {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     });
//     return stringDate;
//   }

const UserModel = mongoose.model('Users', UserSchema);
export default UserModel;
