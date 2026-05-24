import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import couponRoutes from "./routes/coupon.routes.js";


const app = express();

app.use(cors());

app.use(helmet());

app.use(morgan("dev"));

app.use(express.json());

app.get("/", (_, res) => {
  res.status(200).json({
    success: true,
    message: "Node Backend Running 🚀",
  });
});

app.use("/api/coupons", couponRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});