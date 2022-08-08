import {authAdmin} from "../Middleware/reqiureRole.js"
import uploadReq from '../Middleware/uploadImage.js'
import express from "express";
import { 
    registerUser,
    loginUser,
    getAllUser,
    getUser,
    updateUser,
    updateRole,
    deleteUser, 
    followUser,
    uploadAvatar,
    unFollowUser } from "../Controllers/UserController.js";

const router = express.Router();

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/', getAllUser)
router.get('/:id', getUser)
router.get('/role/:id',authAdmin, updateRole)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.put('/:id/follow', followUser)
router.put('/:id/unfollow', unFollowUser)
router.post('/avatar', uploadAvatar)
export default router;