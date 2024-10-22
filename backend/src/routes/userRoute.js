import userController from "../controllers/userController.js";
import catchAsync from "../utils/catchAsync.js";

import { Router } from "express";

const router = Router();

router.route("/register").post(catchAsync(userController.register));
router.route("/login").post(catchAsync(userController.login));

export default router;
