import express from "express";
import {
  creteNote,
  deleteNote,
  getAllNotes,
  updateNote,
} from "../controllers/notes.controller.js";

const router = express.Router();

router.get("/", getAllNotes);

router.post("/", creteNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;
