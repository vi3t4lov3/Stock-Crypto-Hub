import PostModel from "../Models/PostModel.js";
import mongoose from "mongoose";
import UserModel from "../Models/UserModel.js";



// Creat new Post
export const createPost = async (req, res) => {

    const post = new PostModel(req.body);
    try {
        await post.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    };

    // get all Posts
export const getAllPosts = async (req, res) => {
  try {
    const post = await PostModel.find({}).sort({createdAt: -1})
    if (post) {
      res.status(200).json(post)
    } else {
      res.status(404).json("No such post found");
    }
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};
// Get a post
export const getPost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await PostModel.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

// Update a post
export const updatePost = async (req, res) => {
  const postId = req.params.id;
  const { userId } = req.body;
  try {
    const post = await PostModel.findById(postId);
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
export const deletePost = async (req, res) => {
  const postId = req.params.id;
  const { userId } = req.body;
  if (!mongoose.Types.ObjectId.isValid(postId)) {
    return res.status(404).json({error: 'No post found'})
  }
  try {
    const post = await PostModel.findById(postId);
    if (post.userId === userId) {
      await post.deleteOne();
      res.status(200).json("Post deleted successfully");
    } else {
      res.status(403).json("Action forbidden! You are not the author of this post");
    }
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};
// upload imge


// like and dislike a post
export const likePost = async (req, res) => {
  const postId = req.params.id;
  const { userId } = req.body;

  try {
    const post = await PostModel.findById(postId);
    if (!post.likes.includes(userId)) {
      await post.updateOne({ $push: { likes: userId } });
      res.status(200).json("Liked");
    } else {
      await post.updateOne({ $pull: { likes: userId } });
      res.status(200).json("Unliked");
    }
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};
// getGroupPostByUserId
export const getGroupPostByUserId = async (req, res) => {
  const userId = req.params.id;
  try {
    const currentUserPosts = await PostModel.find({ userId });
    const followingPosts = await UserModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: "posts",
          localField: "following",
          foreignField: "userId",
          as: "followingPosts",
        },
      },
      {
        $project: {
          followingPosts: 1,
          _id: 0,
        },
      },
    ]);

    res.status(200).json(currentUserPosts.concat(...followingPosts[0].followingPosts)
    .sort((a,b)=>{
        return b.createdAt - a.createdAt;
      })
      );
  } 
  catch (error) { res.status(500).json({error: error.message});
  }
};


// add Add Comment to the post
export const addComment = async (req, res)  => {
  const postId = req.params.id;
  try {
    const post = await PostModel.findById(postId);
    if (post) {
      await post.updateOne({ $push: { comment: req.body } });
      res.status(200).json(post);
    }
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}
// add deleteComment to the post
export const deleteComment = async (req, res)  => {
  const postId = req.params.id;

  const { userId } = req.body;

  try {
    const post = await PostModel.findById(postId);
    // const id = new mongoose.Types.ObjectId(_id)
    console.log(post);
    console.log(`${post.comment}`);
    if (comment.userId === userId) {
      await post.updateOne({ $pull: { comment: req.body } });
      res.status(200).json("Comment deleted successfully");
    } else {
      res.status(403).json("Action forbidden! You are not the author of this comment");
    }
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

// const postId = req.params.id;
//   const { userId } = req.body;

//   try {
//     const post = await PostModel.findById(postId);
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