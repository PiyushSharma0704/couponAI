import { Router } from "express";

import { upload } from "../middleware/upload.middleware.js";

import { uploadCouponController } from "../controllers/coupon.controller.js";

const router = Router();

router.post(
  "/upload",
  upload.single("image"),
  uploadCouponController
);

export default router;