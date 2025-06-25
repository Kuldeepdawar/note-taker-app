import express from "express";
import dotenv from "dotenv";
import noteRoutes from "./router/routeNotes.js"; // ✅ Confirm the path
import { connectDB } from "./config/db.js";
import cors from "cors";

const app = express();

// Load environment variables
dotenv.config();

// Connect to MongoDB before starting the server

// Middleware to parse JSON bodies
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
app.use("/api/notes", noteRoutes);

// Port
const PORT = process.env.PORT || 5001;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
// Start server
