import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  getFindById,
  updateNote,
} from "../controllers/notes.controller.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getFindById);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;
