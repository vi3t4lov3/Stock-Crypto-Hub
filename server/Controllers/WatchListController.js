import WatchListModel from "../Models/ErModel.js";
import mongoose from "mongoose";
import UserModel from "../Models/UserModel.js";



// Creat new Post
export const createWatchList = async (req, res) => {
    const watchList = new WatchListModel(req.body);
    try {
        await watchList.save();
        res.status(200).json(watchList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    };

    // get all Posts
export const getAllWatchLists = async (req, res) => {
  try {
    const watchList = await WatchListModel.find({}).sort({createdAt: -1})
    if (watchList) {
      res.status(200).json(watchList)
    } else {
      res.status(404).json("No such watchList found");
    }
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};
// Get a post
export const getWatchList = async (req, res) => {
  const id = req.params.id;
  try {
    const watchList = await WatchListModel.findById(id);
    res.status(200).json(watchList);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

// Update a post
export const updateWatchList = async (req, res) => {
  const watchListId = req.params.id;
  const { userId } = req.body;
  try {
    const post = await WatchListModel.findById(postId);
    if (post.userId === userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("Post Updated");
    } else {
      res.status(403).json("Action forbidden! You are not the author of this post");
    }
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

// Delete a post
export const deleteWatchList = async (req, res) => {
  const watchListId = req.params.id;
  const { userId } = req.body;

  try {
    const watchList = await WatchListModel.findById(watchListId);
    if (watchList.userId === userId) {
      await watchList.deleteOne();
      res.status(200).json("watchList deleted successfully");
    } else {
      res.status(403).json("Action forbidden! You are not the author of this post");
    }
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};
// upload imge


// // like and dislike a post
// export const likePost = async (req, res) => {
//   const postId = req.params.id;
//   const { userId } = req.body;

//   try {
//     const post = await watchListModel.findById(postId);
//     if (!post.likes.includes(userId)) {
//       await post.updateOne({ $push: { likes: userId } });
//       res.status(200).json("Liked");
//     } else {
//       await post.updateOne({ $pull: { likes: userId } });
//       res.status(200).json("Unliked");
//     }
//   } catch (error) {
//     res.status(500).json({error: error.message});
//   }
// };
// // getGroupPostByUserId
// export const getGroupPostByUserId = async (req, res) => {
//   const userId = req.params.id;
//   try {
//     const currentUserPosts = await watchListModel.find({ userId });
//     const followingPosts = await UserModel.aggregate([
//       {
//         $match: {
//           _id: new mongoose.Types.ObjectId(userId),
//         },
//       },
//       {
//         $lookup: {
//           from: "posts",
//           localField: "following",
//           foreignField: "userId",
//           as: "followingPosts",
//         },
//       },
//       {
//         $project: {
//           followingPosts: 1,
//           _id: 0,
//         },
//       },
//     ]);

//     res.status(200).json(currentUserPosts.concat(...followingPosts[0].followingPosts)
//     .sort((a,b)=>{
//         return b.createdAt - a.createdAt;
//       })
//       );
//   } 
//   catch (error) { res.status(500).json({error: error.message});
//   }
// };


// // add Add Comment to the post
// export const addComment = async (req, res)  => {
//   const postId = req.params.id;
//   try {
//     const post = await watchListModel.findById(postId);
//     if (post) {
//       await post.updateOne({ $push: { comment: req.body } });
//       res.status(200).json(post);
//     }
//   } catch (error) {
//     res.status(500).json({error: error.message});
//   }
// }
// // add deleteComment to the post
// export const deleteComment = async (req, res)  => {
//   const postId = req.params.id;

//   const { userId } = req.body;

//   try {
//     const post = await watchListModel.findById(postId);
//     // const id = new mongoose.Types.ObjectId(_id)
//     console.log(post);
//     console.log(`${post.comment}`);
//     if (comment.userId === userId) {
//       await post.updateOne({ $pull: { comment: req.body } });
//       res.status(200).json("Comment deleted successfully");
//     } else {
//       res.status(403).json("Action forbidden! You are not the author of this comment");
//     }
//   } catch (error) {
//     res.status(500).json({error: error.message});
//   }
// }

// const postId = req.params.id;
//   const { userId } = req.body;

//   try {
//     const post = await watchListModel.findById(postId);
//     if (!post.likes.includes(userId)) {
//       await post.updateOne({ $push: { likes: userId } });
//       res.status(200).json("Liked");
//     } else {
//       await post.updateOne({ $pull: { likes: userId } });
//       res.status(200).json("Unliked");
//     }
//   } catch (error) {
//     res.status(500).json({error: error.message});
//   }