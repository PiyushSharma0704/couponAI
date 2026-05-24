export const extractCouponData = async (
  imageUrl: string
) => {
  console.log("Image URL:", imageUrl);

  /**
   * MOCK AI RESPONSE
   */
  return {
    company_name: "Domino's",

    coupon_code: "SAVE50",

    expiry_date: "2026-06-20",

    discount: "50% OFF",

    terms: "Applicable above ₹499",
  };
};