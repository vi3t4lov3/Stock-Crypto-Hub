import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
  {
    body: {
      type: String,
      required: true,
      max_length: 280,
    },
    userId: {
      type: String,
      required: true,
    },
    likes: [],
    // createdAt: {
    //   type: Date,
    //   required: true,
    //   default: Date.now(),
    //   get: formatDate,
    // }
  },
  {
    timestamps: true,
  },
  // this will add "id" same with "_id"
  // {
  //   toJSON: {
  //     getters: true,
  //   },
  // }
);

function formatDate(date) {
  const stringDate = date.toLocaleString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return stringDate;
}

var CommentModel = mongoose.model("Comments", commentSchema);
export default commentSchema;