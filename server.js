import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/connectDB.js";
import userRoute from "./routes/userRoute.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import path from "path";
//* config
dotenv.config();
connectDB();
const app = express();

//* middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: "*" }));

//* routes
app.use("/api/v1/users", userRoute);
app.use("/api/v1/transaction", transactionRoutes);

//* stativ files
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html")); 
});

//* port
const PORT = process.env.PORT || 8080;

//* listen server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.bgYellow.bold.black);
});
