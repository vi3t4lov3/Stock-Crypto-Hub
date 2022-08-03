import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";
import validator from "validator"

// Registering a Add new User
export const registerUser = async (req, res) => {
  const { username, email, password, firstname, lastname } = req.body;
  const emailExists = await UserModel.findOne({email})
  const usernameExists = await UserModel.findOne({username})
  if (emailExists || usernameExists ) {
    res.status(500).json({ message: "Email or Username already in use" });
    return;
  }
  //validation
  if(!email || !password) {
    res.status(500).json({ message: "All field must be filled" });
    return;
  }
  if (!validator.isEmail(email)){
    res.status(500).json({ message: "Email is not valid" });
    return;
  }
  if (!validator.isStrongPassword(password)) {
    res.status(500).json({ message: "Password not strong enough" });
    return;
  }
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
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// get all Users
export const getAllUser = async (req, res) => {
  try {
    const user = await UserModel.findAll()
    if (user) {
      res.status(200).json(user)
    } else {
      res.status(404).json("No such user exists");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
// get a User
export const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserModel.findById(id);

    if (user) {
      const { password, ...otherDetails } = user._doc;

      res.status(200).json(otherDetails);
    } else {
      res.status(404).json("No such user exists");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// update a user
export const updateUser = async (req, res) => {
  res.json({message: "getAllUser"})
};

// Delete user
export const deleteUser = async (req, res) => {
  res.json({message: "getAllUser"})
};

// Follow a User
export const followUser = async (req, res) => {
  res.json({message: "getAllUser"})
};

// UnFollow a User
export const unFollowUser = async (req, resß) => {
  res.json({message: "getAllUser"})
};
