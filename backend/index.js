import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// file imports
import { connectDB } from "./config/connectDB.js";
import userRoute from "./routes/userRoute.js";
import postRoute from "./routes/postRoute.js";

//config and env variables
const app = express();
dotenv.config();
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL;
connectDB(MONGO_URI);

//middleware
app.use(express.json());
app.use(cors());

//API routes
app.use("/api/v1/users", userRoute);
app.use("/api/v1/posts", postRoute);

//Default route
app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      `<h1>Welcome to Blog App Server🚀. Click <a href=${FRONTEND_URL}>here</a> to visit frontend </h1>`
    );
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
