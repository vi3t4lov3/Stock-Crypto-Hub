import express from "express";
import { createPost,
    deletePost,
    getAllPosts,
    getPost,
    getGroupPostByUserId,
    likePost,
    updatePost,
    deleteComment,
    addComment
        } from "../Controllers/PostController.js";
const router = express.Router()

router.post('/', createPost)
router.get('/:id', getPost)
router.get('/', getAllPosts)
router.put('/:id', updatePost)
router.delete("/:id", deletePost)
router.put("/:id/like", likePost)
router.get("/:id/search", getGroupPostByUserId)
router.delete('/:postID/comment/:id', deleteComment);
router.post("/:id/comment", addComment)
export default router;