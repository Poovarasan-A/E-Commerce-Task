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

//------------------------ google Login ------------------------------------------

export const googleLogin = async (req, res, next) => {
  const { name, email, images } = req.body;
  const generatePassword =
    Math.random().toString(36).slice(-4) + Math.random().toString(36).slice(-4);

  console.log(generatePassword);

  try {
    const user = await Auth.create({
      name,
      email,
      password: generatePassword,
      images: images.map((image) => ({
        url: image.url,
        filename: image.filename,
      })),
    });
    sendToken(user, 201, res);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//------------------------ forgot password ----------------------

export const forgotPassword = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(404).json({ message: "User email not found" });
  }

  const resetToken = user.getResetToken();
  await user.save({ validateBeforeSave: false });

  let BASE_URL = process.env.FRONTEND_URL;
  if (process.env.NODE_ENV === "production") {
    BASE_URL = `${req.protocol}://${req.get("host")}`;
  }
  const resetUrl = `${BASE_URL}/password/reset/${resetToken}`;

  const message = `Your password reset link as follows \n\n ${resetUrl} \n\n If you have not requested this, then ignore this email`;

  try {
    sendEmail({
      email: user.email,
      subject: "E com password recovery",
      message,
    });
    res
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

export const resetPassword = async (req, res, next) => {
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
    res
      .status(401)
      .json({ message: "Password reset token is invalid or expired" });
  }

  if (req.body.password !== req.body.confirmPassword) {
    res.status(401).json({ message: "Password does not match " });
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordTokenExpire = undefined;
  await user.save({ validateBeforeSave: false });
  sendToken(user, 201, res);
};
