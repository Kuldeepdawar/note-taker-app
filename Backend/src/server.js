import express from "express";
import dotenv from "dotenv";
import noteRoutes from "./router/routeNotes.js"; // ✅ Confirm the path
import { connectDB } from "./config/db.js";

const app = express();

// Load environment variables
dotenv.config();

// Connect to MongoDB before starting the server
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
app.use("/api/notes", noteRoutes);

// Port
const PORT = process.env.PORT || 5001;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
