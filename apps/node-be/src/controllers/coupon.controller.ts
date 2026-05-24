import { Request, Response } from "express";

import { uploadImageToSupabase } from "../services/upload.service.js";

import { extractCouponData } from "../services/ai.service.js";

import { saveCoupon } from "../services/coupon.service.js";

export const uploadCouponController = async (
  req: Request,
  res: Response
) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }

    const imageUrl =
      await uploadImageToSupabase(file);
   
    const aiResponse =
      await extractCouponData(imageUrl);

    const coupon = await saveCoupon({
      ...aiResponse,

      image_url: imageUrl,

      raw_ai_response: aiResponse,
    });

    return res.status(201).json({
      success: true,
      data: coupon,
    });
  } catch (error: any) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};