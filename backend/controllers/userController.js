import bcrypt from "bcryptjs";
import { User } from "../models/userSchema.js";
import sendToken from "../utils/tokenResponse.js";

//------------------------ New User Registration -----------------

export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    let isEmail = /^[a-z]+@[a-z]+\.[a-z]+$/;

    if (!isEmail.test(email)) {
      res.staus(400).json({ message: "Please enter valid email" });
    }

    let isPassword = /^.{8,}$/;

    if (!isPassword.test(password)) {
      res
        .status(400)
        .json({ message: "Password characters should be atleast 8" });
    }

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    sendToken(user, 201, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//------------------------ Login User ----------------------

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide email and password" });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(500).json({ message: "Invalid password" });
    }

    sendToken(user, 201, res);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};
