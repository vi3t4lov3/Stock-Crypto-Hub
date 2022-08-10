import express from "express";
import multer from 'multer'
import { v4 as uuidv4 } from 'uuid';
import requireAuth from '../Middleware/requireAuth.js'
import User from "../Models/UserModel.js";
import moment from 'moment';
moment().format();
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, "../client/public/uploads")
    }, 
    filename: (req, file, callback) => {
      const imagesAddedDate= moment().format('MMMM-Do-YYYY-MM-HH-MM-DD-YY-h-a-ss')
        const fileName = imagesAddedDate+file.originalname
        // const [_, extension] = file.originalname.split('.')
      callback(null, `${fileName}`)
    }
  })
  const upload = multer({storage: storage})
//   console.log(upload);
import { createPost,
    deletePost,
    getAllPosts,
    getPost,
    getGroupPostByUserId,
    likePost,
    updatePost,
    deleteComment,
    addComment,
    // uploadImg
        } from "../Controllers/PostController.js";

const router = express.Router()

// require auth for all workout routes
// router.use(requireAuth)


router.post('/', upload.single("image"), createPost)
// router.post('/', createPost)
router.get('/:id', getPost) 
router.get('/', getAllPosts)
router.put('/:id', updatePost)
router.delete("/:id", deletePost)
router.put("/:id/like", likePost)
router.get("/:id/search", getGroupPostByUserId)
router.delete('/:postID/comment/:id', deleteComment);
router.post("/:id/comment", addComment)
// router.post('/upload',uploadImg)
export default router;