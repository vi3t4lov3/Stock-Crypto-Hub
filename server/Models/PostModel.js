import mongoose from "mongoose";
import Comment from "./CommentModel.js"
const postSchema = mongoose.Schema(
  {
    userId: { 
        type: String, 
        required: true
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
    comment: [Comment],
    image: String,
    url: String,
    // createdAt: {
    //   type: Date,
    //   required: true,
    //   default: Date.now(),
    //   get: formatDate,
    // }
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
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return stringDate;
}
var PostModel = mongoose.model("Posts", postSchema);
export default PostModel;
