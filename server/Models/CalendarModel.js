import mongoose from "mongoose";
const postSchema = mongoose.Schema(
  {
    userId: { 
        type: String, 
        required: true
     },
     title: { 
        type: String
     },
     note: { 
      type: String
      },
     ticker: { 
        type: String, 
        required: true
     },
    earningDate: String,
    importantDate: String,
    estimatedMove: Number,
    lastMove: Number,
    url: String,
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
var CalendarModel = mongoose.model("Calendars", postSchema);
export default CalendarModel;
