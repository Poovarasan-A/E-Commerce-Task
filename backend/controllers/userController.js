import bcrypt from "bcryptjs";
import { User } from "../models/userSchema.js";
import crypto from "crypto";
import { sendEmail } from "../config/email.js";
import { jwtDecode } from "jwt-decode";

//token
const sendToken = (user, statusCode, res) => {
  const token = user.getJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

//------------------------ New User Registration -----------------

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let isEmail = /^[a-z]+@[a-z]+\.[a-z]+$/;

    if (!isEmail.test(email)) {
      return res.status(400).json({ message: "Please enter valid email" });
    }

    let isPassword = /^.{8,}$/;

    if (!isPassword.test(password)) {
      return res
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

export const loginUser = async (req, res) => {
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

//------------------------ google Login ------------------------------------------

export const googleLogin = async (req, res) => {
  const { name, email } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return sendToken(user, 200, res);
    }

    user = await User.create({
      name,
      email,
    });

    sendToken(user, 201, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//------------------------ forgot password ----------------------

export const forgotPassword = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(404).json({ message: "User email not found" });
  }

  const resetToken = user.getResetToken();
  await user.save({ validateBeforeSave: false });

  const resetUrl = `http://localhost:5173/reset/password/${resetToken}`;

  const message = `Your password reset link as follows \n\n ${resetUrl} \n\n If you have not requested this, then ignore this email`;

  console.log(message);

  try {
    sendEmail({
      email: user.email,
      subject: "E com password recovery",
      message,
    });
    return res
      .status(200)
      .json({ message: `Email sent to ${user.email} successfully` });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordTokenExpire = undefined;
    await user.save({ validateBeforeSave: false });
    return res.status(500).json({ message: error });
  }
};

//------------------------ reset password ----------------------

export const resetPassword = async (req, res) => {
  const { newPassword, confirmPassword } = req.body;
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordTokenExpire: {
      $gt: Date.now(),
    },
  });

  if (!user) {
    return res
      .status(401)
      .json({ message: "Password reset token is invalid or expired" });
  }

  if (newPassword !== confirmPassword) {
    return res.status(401).json({ message: "Password does not match " });
  }

  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(newPassword, salt);

  user.password = hashedPassword;
  user.resetPasswordToken = undefined;
  user.resetPasswordTokenExpire = undefined;
  await user.save({ validateBeforeSave: false });
  sendToken(user, 201, res);
};
