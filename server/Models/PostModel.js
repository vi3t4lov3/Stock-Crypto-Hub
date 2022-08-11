import mongoose from "mongoose";
import User from "./UserModel.js"
const postSchema = mongoose.Schema(
  {
    userId: { 
        type: String, 
        required: true,
        ref:"User"
     },
     username: { 
      type: String, 
      required: true
   },
     title: { 
        type: String,
        required: true
     },
     body: { 
        type: String, 
        required: true
     },
    likes: [],
    comment: [{
      body:String,
  }],
    image: String,
    url: String,

  },
  {
    timestamps: true,
  }
);
var PostModel = mongoose.model("Posts", postSchema);
export default PostModel;
