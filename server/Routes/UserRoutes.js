import express from "express";
import { 
    registerUser,
    getAllUser,
    getUser,
    updateUser,
    deleteUser, 
    followUser,
    unFollowUser } from "../Controllers/UserController.js";

const router = express.Router();

router.post('/', registerUser)
router.get('/', getAllUser)
router.get('/:id', getUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.put('/:id/follow', followUser)
router.put('/:id/unfollow', unFollowUser)
export default router;