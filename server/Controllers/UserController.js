import UserModel from "../Models/UserModel.js";
import bcrypt from "bcrypt";
import validator from "validator"
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '1h' })
}
// Registering a Add new User
export const registerUser = async (req, res) => {
  const { username, email, password, firstname, lastname } = req.body;
  const emailExists = await UserModel.findOne({email})
  const usernameExists = await UserModel.findOne({username})
  
  if (usernameExists ) {
    res.status(500).json({ message: "Username already in use" });
    return;
  }
  if (emailExists) {
    res.status(500).json({ message: "Email already in use" });
    return;
  }
  //validation
  if(!email) {
    res.status(500).json({ message: "Please enter your email" });
    return;
  }
  if(!username) {
    res.status(500).json({ message: "Please enter your username" });
    return;
  }
  if(!password) {
    res.status(500).json({ message: "Please enter your password" });
    return;
  }
  // if (!validator.isEmail(email)){
  //   res.status(500).json({ message: "Email is not valid" });
  //   return;
  // }
  // if (!validator.isStrongPassword(password)) {
  //   res.status(500).json({ message: "Password not strong enough" });
  //   return;
  // }
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  const newUser = new UserModel({
    username,
    email,
    password: hashedPass,
    firstname,
    lastname,
  });
  try {
    const user = await newUser.save();
    //create token
    const token = createToken(user._id)
    // console.log(token);
    res.status(200).json({newUser, token});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// login User
export const loginUser = async (req, res) => {
  const {username, password} = req.body
  if(!username) {
    res.status(500).json({ message: "Please enter your username" });
    return;
  }
  if(!password) {
    res.status(500).json({ message: "Please enter your password" });
    return;
  }
  try {
      const user = await UserModel.findOne({username})

      if(user)
      {
          const checkPassword = await bcrypt.compare(password, user.password)
          if (checkPassword) {
            const token = createToken(user._id)
            res.status(200).json({user, token})
          }
          else 
          res.status(400).json("Wrong Password")
      }
      else{
          res.status(404).json("Incorrect username")
      }
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
}

// get all Users
export const getAllUser = async (req, res) => {
  try {
    const user = await UserModel.find({}).sort({createdAt: -1})
    if (user) {
      res.status(200).json(user)
    } else {
      res.status(404).json("No such user exists with this id");
    }
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};
// get a User
export const getUser = async (req, res) => {
  const id = req.params.id;
  //this will check if you enter id not same with MongoDB id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({message: `no id found, id you enter is not mogoDB ID`})
}
  try {
    const user = await UserModel.findById(id);
    if (user) {
      const { password, ...hidenpass } = user._doc;
      res.status(200).json(hidenpass);
    } else {
      res.status(404).json("No such user exists");
    }
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

// update a user
export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus, password } = req.body;

  if (id === currentUserId || currentUserAdminStatus) {
    try {
      if (password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
      }
      const user = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  } else {
    res.status(403).json("Access Denied! you can only update your own profile");
  }
};

// update a role
export const updateRole = async (req, res) => {
  try {
      const {role} = req.body

      await Users.findOneAndUpdate({_id: req.params.id}, {
          role
      })

      res.json({msg: "Update Success!"})
  } catch (err) {
      return res.status(500).json({msg: err.message})
  }
}


// Delete user
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus } = req.body;

  if (currentUserId === id || currentUserAdminStatus) {
    try {
      await UserModel.findByIdAndDelete(id);
      res.status(200).json("User deleted successfully");
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  } else {
    res.status(403).json("Access Denied! you can only delete your own profile");
  }
};

// Follow a User
export const followUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId } = req.body;
  if (currentUserId === id) {
    res.status(403).json("Action forbidden, you can't follow your own");
  } else {
    try {
      const followUser = await UserModel.findById(id);
      const followingUser = await UserModel.findById(currentUserId);

      if (!followUser.followers.includes(currentUserId)) {
        await followUser.updateOne({ $push: { followers: currentUserId } });
        await followingUser.updateOne({ $push: { following: id } });
        res.status(200).json("User followed!");
      } else {
        res.status(403).json(`You already followed this user` );
      }
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  }
};

// UnFollow a User
export const unFollowUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId } = req.body;

  if (currentUserId === id) {
    res.status(403).json("Action forbidden, you can't unfollow your own");
  } else {
    try {
      const followUser = await UserModel.findById(id);
      const followingUser = await UserModel.findById(currentUserId);

      if (followUser.followers.includes(currentUserId)) {
        await followUser.updateOne({ $pull: { followers: currentUserId } });
        await followingUser.updateOne({ $pull: { following: id } });
        res.status(200).json("User Unfollowed!");
      } else {
        res.status(403).json("User is not followed by you");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
};
