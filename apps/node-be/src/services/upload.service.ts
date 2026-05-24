import { v4 as uuidv4 } from "uuid";

import { supabase } from "../lib/supabase.js";

export const uploadImageToSupabase = async (
  file: Express.Multer.File
) => {
 
  const sanitizedFileName =
    file.originalname
      .replace(/\s+/g, "-")
      .replace(/[^\w.-]/g, "");

  const fileName = `${uuidv4()}-${sanitizedFileName}`;

  const { error } = await supabase.storage
    .from("coupon-images")
    .upload(fileName, file.buffer, {
      contentType: file.mimetype,
    });

  if (error) {
    throw new Error(error.message);
  }

  const { data } = supabase.storage
    .from("coupon-images")
    .getPublicUrl(fileName);

  return data.publicUrl;
};