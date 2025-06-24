import express from "express";
import dotenv from "dotenv";

import noteRoutes from "./router/routeNotes.js";
import { connectDB } from "./config/db.js";

const app = express();

dotenv.config();

connectDB();

// this will use router
app.use("/api/notes", noteRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log("listen server on ", +PORT);
});
