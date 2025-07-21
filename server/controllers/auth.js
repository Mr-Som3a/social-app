import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import User from "../model/user.js";

// Register User
export const register = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      passwordHash,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 10000),
      imporession: Math.floor(Math.random() * 10000),
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login

export const login = async (req, res, next) => {
  try {
    const {email,password} =req.body
    const user = await User.findOne({email:email})
    if(!user) {return res.status(400).json({error:'email or password is not correct'})}
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){return res.status(400).json({error:'Invalid Credential'})}

    const token = Jwt.sign({id:user._id},process.env.JWT_KEY)
    delete user.password
    res.status(200).json({token,user})
  } catch (err) {
    res.status(400).json({error:err.message})
  }
};
