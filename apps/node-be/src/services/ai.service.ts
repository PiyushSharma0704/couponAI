// export const extractCouponData = async (
//   imageUrl: string
// ) => {
//   console.log("Image URL:", imageUrl);

//   /**
//    * MOCK AI RESPONSE
//    */
//   return {
//     company_name: "Domino's",

//     coupon_code: "SAVE50",

//     expiry_date: "2026-06-20",

//     discount: "50% OFF",

//     terms: "Applicable above ₹499",
//   };
// };

import axios from "axios";

export const extractCouponData = async (
  imageUrl: string
) => {
  try {
    console.log("Sending image to AI service:");

    console.log(imageUrl);

    const response = await axios.post(
      `${process.env.AI_SERVICE_URL}/extract-coupon`,
      {
        image_url: imageUrl,
      }
    );

    console.log("AI RESPONSE:");

    console.log(response.data);

    /**
     * FastAPI returns:
     *
     * {
     *   success: true,
     *   data: {}
     * }
     */

    return response.data.data;

  } catch (error: any) {

    console.error(
      "AI SERVICE ERROR:",
      error?.response?.data || error.message
    );

    throw new Error(
      error?.response?.data?.message ||
      "Failed to extract coupon data"
    );
  }
};