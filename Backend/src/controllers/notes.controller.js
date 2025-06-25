import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
  try {
    // this .sort({createdAt: -1}) new added data on first place by -1
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes Controller", error);
    res.status(500).json({ message: "Internal server errror" });
  }
}

export async function getFindById(req, res) {
  try {
    const notefound = await Note.findById(req.params.id);

    if (!notefound) {
      return res.status(404).json({ messahe: "Not found" });
    }

    res.json(notefound);
  } catch (error) {
    console.error("Error in getFindById controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;

    // Simple validation
    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "Title and content are required." });
    }

    // Create new note using the model
    const newNote = new Note({ title, content });

    // Save to MongoDB
    await newNote.save();

    // Return success response
    res.status(201).json({
      message: "Note created successfully",
      note: newNote,
    });
  } catch (error) {
    console.error("Error in createNote controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;

    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
      },
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(200).json({ message: "Updated document" });
  } catch (error) {
    console.error("Error in updateNote controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteNote(req, res) {
  try {
    const { title, content } = req.params.id;

    const deletedNote = await Note.findByIdAndDelete();

    if (!deleteNote) {
      return res.status(404).json({ message: "Not found any id" });
    }

    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    console.error("Error in deleteNote controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
