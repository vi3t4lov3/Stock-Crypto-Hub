import User from "../Models/UserModel.js";
// Supper Admin role
export const authAdmin = async (req, res, next) => {
    try {
        const user = await User.findOne({_id: req.user.id})

        if(user.isAdmin !== true) 
            return res.status(500).json({msg: "Access denied. Only Admin can use"})

        next()
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}
// Moderator Auth only
export const authMod = async (req, res, next) => {
    try {
        const user = await User.findOne({_id: req.user.id})

        if(user.role !== 2) 
            return res.status(500).json({msg: "Access denied. Only Mode can use this option"})

        next()
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}
// Alert Auth only
export const authAlert = async (req, res, next) => {
    try {
        const user = await User.findOne({_id: req.user.id})

        if(user.role !== 3) 
            return res.status(500).json({msg: "Access denied. Only Alert can use this option"})

        next()
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}
