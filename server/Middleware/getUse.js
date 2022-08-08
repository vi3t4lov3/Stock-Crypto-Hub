import User from "../Models/UserModel.js";

export const getUser = async (req, res, next) => {
    try {
        const user = await User.findOne({_id: req.user.id})

        if(user.isAdmin !== true) 
            return res.status(500).json({msg: "Access denied. Only Admin can use"})

        next()
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}