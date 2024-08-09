import express from "express";
import {
  forgotPassword,
  googleLogin,
  loginUser,
  registerUser,
  resetPassword,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/register/user").post(registerUser);
router.route("/login/user").post(loginUser);
router.route("/google").post(googleLogin);
router.route("/forgot/password").post(forgotPassword);
router.route("/reset/password/:token").post(resetPassword);

export default router;
