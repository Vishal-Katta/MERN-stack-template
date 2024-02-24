import express from "express";
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";

const router = express.Router();

router.use("/auth", authRoute);
router.use("/users", userRoute);

export default router;
