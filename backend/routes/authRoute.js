import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/test", requireSignIn, isAdmin, testController);

export default router;
