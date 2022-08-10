import mongoose from "mongoose";
const watchListSchema = mongoose.Schema(
  {
    userId: { 
        type: String, 
        required: true
     },
     username: { 
      type: String, 
      required: true
   },
     note: { 
      type: String
      },
     ticker: { 
      type: String,
      required: true
   },
    support:[],
    resitant:[],
    bearish: [],
    bullish: [],
    analysts: { 
      type: String,
   },
   call: { 
    type: String,
    },
    put: { 
      type: String,
    },
    call: { 
      type: String,
   },

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
var WatchListModel = mongoose.model("WatchList", watchListSchema);
export default WatchListModel;
