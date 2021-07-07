import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import morgan from "morgan";
import path from "path";
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

dotenv.config();

connectDB();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("server running");
});
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/upload", uploadRoutes);

const __dirname = path.resolve();
app.use("/uploads",express.static(path.join(__dirname,"/uploads")))

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port${PORT} on ${process.env.NODE_ENV} mode`);
});
