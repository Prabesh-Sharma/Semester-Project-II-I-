import issueController from "../controllers/issueController.js";
import catchAsync from "../utils/catchAsync.js";

import { Router } from "express";

const router = Router();

router.route("/create").post(catchAsync(issueController.createIssue));
router.route("/get").get(catchAsync(issueController.getIssues));
router.route("/delete/:id").delete(catchAsync(issueController.deleteIssue));
router.route("/get/:id").get(catchAsync(issueController.getOneIssue));

export default router;
