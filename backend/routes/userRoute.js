import express from "express";
import {
  forgotPassword,
  googleLogin,
  loginUser,
  registerUser,
  resetPassword,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register/user", registerUser);
router.post("/login/user", loginUser);
router.post("/google", googleLogin);
router.post("/forgot/password", forgotPassword);
router.post("/reset/password/:token", resetPassword);

export default router;
