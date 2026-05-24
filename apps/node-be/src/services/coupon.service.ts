import { supabase } from "../lib/supabase.js";

interface CouponPayload {
  company_name: string | null;
  coupon_code: string | null;
  expiry_date: string | null;
  discount: string | null;
  terms: string | null;

  image_url: string;

  raw_ai_response: any;
}

export const saveCoupon = async (
  payload: CouponPayload
) => {
  const { data, error } = await supabase
    .from("coupons")
    .insert(payload)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};