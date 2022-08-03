import mongoose from "mongoose";
import validator from 'validator';

const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true, 
            unique: true,
            match: /.+\@.+\..+/,
        },
        password : {
            type: String,
            required: true,
            // minlength: 8
        },
        firstname: {
            type: String,
            required: true,
            trim: true
        },
        lastname : {
            type: String,
            required: true,
            trim: true
        },
        isAdmin : {
            type: Boolean,
            default: false,
        },
        profilePicture: String,
        coverPicture: String,
        about: String,
        livesin: String,
        worksAt: String,
        level: Number,
        followers: [] ,
        following: []
    },
    {timestamps: true,
    }
)
// function formatDate(date) {
//     const stringDate = date.toLocaleString(undefined, {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     });
//     return stringDate;
//   }

const UserModel= mongoose.model("Users", UserSchema);
export default UserModel